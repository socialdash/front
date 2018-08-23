// @flow

import React, { PureComponent } from 'react';
import { propOr } from 'ramda';

import { Button } from 'components/common/Button';
import { Input } from 'components/Authorization';

import './Authorization.scss';

type PropsType = {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  errors: {
    [string]: ?Array<string>,
  },
  formValid: boolean,
  handleRegistrationClick: Function,
  handleChange: Function,
};

class SignUp extends PureComponent<PropsType> {
  render() {
    const {
      email,
      firstName,
      lastName,
      password,
      errors,
      formValid,
      handleRegistrationClick,
      handleChange,
    } = this.props;

    return (
      <div styleName="signUp">
        <div styleName="inputBlock">
          <Input
            label="First name"
            name="firstName"
            type="text"
            model={firstName}
            onChange={handleChange}
            errors={propOr(null, 'firstName', errors)}
          />
        </div>
        <div styleName="inputBlock">
          <Input
            label="Last name"
            name="lastName"
            type="text"
            model={lastName}
            onChange={handleChange}
            errors={propOr(null, 'lastName', errors)}
          />
        </div>
        <div styleName="inputBlock">
          <Input
            thisFocus
            label="Email"
            name="email"
            type="email"
            model={email}
            validate="email"
            onChange={handleChange}
            errors={propOr(null, 'email', errors)}
          />
        </div>
        <div styleName="inputBlock">
          <Input
            label="Password"
            name="password"
            type="password"
            model={password}
            validate="password"
            onChange={handleChange}
            errors={propOr(null, 'password', errors)}
          />
        </div>
        {formValid && (
          <div styleName="signUpGroup">
            <div styleName="signUpButton">
              <Button
                onClick={handleRegistrationClick}
                type="button"
                dataTest="signUpButton"
              >
                <span>Sign Up</span>
              </Button>
            </div>
            <div styleName="policy">
              By clicking this button, you agree to Storiqa’s{' '}
              <a href="/" styleName="link">
                Anti-spam Policy
              </a>{' '}
              &{' '}
              <a href="/" styleName="link">
                Terms of Use
              </a>.
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SignUp;
