// @flow strict

import React, { Component } from 'react';
// $FlowIgnore
import axios from 'axios';

import { Input, Textarea, Button } from 'components/common';

import type { AddAlertInputType } from 'components/Alerts/AlertContext';

import './OpenTicketModal.scss';

import t from './i18n';

type StateType = {
  ticketTitleText: string,
  ticketProblemText: string,
  isLoading: boolean,
  success: boolean,
};

type PropsType = {
  email: string,
  showAlert: (input: AddAlertInputType) => void,
};

class OpenTicketModal extends Component<PropsType, StateType> {
  state = {
    ticketTitleText: '',
    ticketProblemText: '',
    isLoading: false,
    success: false,
  };

  handleTicketTitleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > 50) {
      return;
    }
    this.setState({ ticketTitleText: value });
  };

  handleTicketProblemChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ ticketProblemText: value });
  };

  handleCreateTicket = () => {
    this.setState({ isLoading: true });
    const { email, showAlert } = this.props;
    const { ticketTitleText, ticketProblemText } = this.state;
    const authEmail = process.env.REACT_APP_ZENDESK_EMAIL;
    const token = process.env.REACT_APP_ZENDESK_TOKEN;
    const api = axios.create({
      baseURL: 'https://storiqa.zendesk.com',
      headers: {
        'Content-Type': 'application/json',
      },
      auth: {
        username: `${authEmail || ''}/token`,
        password: token,
      },
    });
    api
      .post('/api/v2/tickets.json', {
        ticket: {
          subject: `[db-platform] ${ticketTitleText}`,
          comment: { body: `[${email}] ${ticketProblemText}` },
        },
      })
      .then(() => {
        this.setState({
          isLoading: false,
          success: true,
        });
        showAlert({
          type: 'success',
          text: t.newTicketWasSuccessfullySent,
          link: {
            text: t.ok,
          },
        });
        return true;
      })
      .catch(() => {
        this.setState({ isLoading: false });
        this.props.showAlert({
          type: 'danger',
          text: t.somethingIsGoingWrong,
          link: {
            text: t.ok,
          },
        });
      });
  };

  render() {
    const {
      ticketTitleText,
      ticketProblemText,
      isLoading,
      success,
    } = this.state;
    return (
      <div styleName="container">
        <div styleName="title">
          <thin>{t.support}</thin>
        </div>
        <div styleName="ticketTitle">
          <Input
            fullWidth
            value={ticketTitleText}
            label={t.labelTicketTitle}
            onChange={this.handleTicketTitleChange}
            limit={50}
          />
        </div>
        <div styleName="ticketText">
          <Textarea
            fullWidth
            value={ticketProblemText}
            label={t.labelYourProblem}
            onChange={this.handleTicketProblemChange}
          />
        </div>
        {success && (
          <div styleName="success">{t.newTicketWasSuccessfullySent}</div>
        )}
        <div styleName="createTicketButton">
          <Button
            big
            inline
            disabled={!ticketTitleText || !ticketProblemText || success}
            isLoading={isLoading}
            onClick={this.handleCreateTicket}
          >
            {t.createTicket}
          </Button>
        </div>
      </div>
    );
  }
}

export default OpenTicketModal;
