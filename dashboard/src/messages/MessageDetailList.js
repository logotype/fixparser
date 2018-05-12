import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MsgType } from './../../../src/constants/ConstantsField';
import MessageDetailListItem from './MessageDetailListItem';
import { getValue } from './../Dashboard';

export default class MessageDetailList extends Component {
    static propTypes = {
        message: PropTypes.object
    };
    static defaultProps = {
        message: null
    };

    _renderItems() {
        return this.props.message.data.map((field, key) => {
            return <MessageDetailListItem key={`data_${key}`} field={field} message={this.props.message} />;
        });
    }

    render() {
        if(!this.props.message) {
            return null;
        }
        let messageDescription = 'FIX message details';
        let messageElaboration = 'Click on a FIX message in the left grid to see individual message components.';
        const messageType = this.props.message.getField(MsgType);
        if(messageType && messageType.tag) {
            messageDescription = getValue(this.props.message.getEnum(messageType.tag, messageType.value), 'Description');
        }
        if(messageType && messageType.value) {
            messageElaboration = getValue(this.props.message.getEnum(messageType.tag, messageType.value), 'Elaboration');
        }
        return (
            <table className="uk-table uk-table-small uk-table-divider uk-table-middle">
                <thead>
                <tr>
                    <td colSpan={4} className="no-padding">
                        <div className="uk-alert-primary" uk-alert="true">
                            <h3>{messageDescription}</h3>
                            <p>{messageElaboration}</p>
                        </div>
                    </td>
                </tr>
                </thead>
                <thead>
                <tr>
                    <th>Tag</th>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Enumeration</th>
                </tr>
                </thead>
                <tbody>
                {this._renderItems()}
                </tbody>
            </table>
        );
    }
}
