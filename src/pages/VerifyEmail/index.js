// @flow

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { graphql, createFragmentContainer } from 'react-relay';
import { Environment } from 'relay-runtime';
import { withRouter, routerShape } from 'found';
import { pathOr } from 'ramda';
import uuidv4 from 'uuid/v4';

import { ContextDecorator } from 'components/App';
import Logo from 'components/Icon/svg/logo.svg';
import { VerifyEmailMutation } from 'relay/mutations';
import { withErrorBoundary } from 'components/common/ErrorBoundaries';
import { Spinner } from 'components/common/Spinner';
import { log, jwt as JWT } from 'utils';
import { withShowAlert } from 'components/Alerts/AlertContext';
import { setEmailTracker } from 'rrHalper';

import type { AddAlertInputType } from 'components/Alerts/AlertContext';
import type { VerifyEmailMutationParamsType } from 'relay/mutations/VerifyEmailMutation';
import type { VerifyEmailMutationResponse } from 'relay/mutations/__generated__/VerifyEmailMutation.graphql';

import './VerifyEmail.scss';

import t from './i18n';

type StateType = {
  isTokenResponseAlreadyHandled: boolean, // prevent double verify
};

type PropsType = {
  showAlert: (input: AddAlertInputType) => void,
  params: { token: string },
  router: routerShape,
  environment: Environment,
  handleLogin: () => void,
};

class VerifyEmail extends Component<PropsType, StateType> {
  state: StateType = {
    isTokenResponseAlreadyHandled: false,
  };

  componentDidMount() {
    if (this.state.isTokenResponseAlreadyHandled) {
      return;
    }

    const params: VerifyEmailMutationParamsType = {
      variables: {
        input: {
          clientMutationId: uuidv4(),
          token: this.props.params.token,
        },
      },
      environment: this.props.environment,
      onCompleted: (
        response: ?VerifyEmailMutationResponse,
        errors: ?Array<Error>,
      ) => {
        log.debug({ response, errors });
        this.setState({ isTokenResponseAlreadyHandled: true });
        if (response && response.verifyEmail && response.verifyEmail.success) {
          this.props.showAlert({
            type: 'success',
            text: t.verifiedSuccessfully,
            link: { text: '' },
          });
          const { email } = response.verifyEmail;
          if (
            process.env.BROWSER &&
            process.env.REACT_APP_RRPARTNERID &&
            email
          ) {
            setEmailTracker(email);
          }
          const jwtStr = response.verifyEmail.token;
          if (jwtStr) {
            JWT.setJWT(jwtStr);
            this.props.router.replace('/');
            this.props.handleLogin();
          }
        } else if (errors && errors.length > 0) {
          // $FlowIgnoreMe
          const errorMessage = pathOr(
            null,
            [0, 'data', 'details', 'message'],
            errors,
          );
          log.debug({ errorMessage });
          this.props.showAlert({
            type: 'danger',
            text: errorMessage || t.somethingGoingWrong,
            link: { text: t.close },
          });
          this.props.router.replace('/');
        }
      },
      onError: (error: Error) => {
        log.debug({ error });
        this.setState({ isTokenResponseAlreadyHandled: true });
        if (error) {
          this.props.showAlert({
            type: 'danger',
            text: t.somethingGoingWrong,
            link: { text: t.close },
          });
          this.props.router.replace('/');
        }
      },
    };
    VerifyEmailMutation.commit(params);
  }

  render() {
    return (
      <div>
        <div styleName="container">
          <div styleName="logo">
            <Logo />
          </div>
          <span styleName="text">
            {t.loading}
            <br />
            {t.pleaseWait}
          </span>
          <span styleName="description">- {t.storiqaTeam}</span>
          <Spinner />
        </div>
      </div>
    );
  }
}

export default withShowAlert(
  withErrorBoundary(withRouter(ContextDecorator(VerifyEmail))),
);
