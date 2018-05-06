import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MessageListItem from './MessageListItem';

export default class MessageList extends Component {
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.object),
        selectedMessage: PropTypes.object,
        onSelectMessage: PropTypes.func.isRequired
    };
    static defaultProps = {
        messages: [],
        selectedMessage: null,
        selectedRow: 0
    };
    
    _renderItems() {
        if(this.props.messages.length > 0 && this.props.messages[0].data.length === 0) {
            return null;
        }
        return this.props.messages.map((message, key) => <MessageListItem key={`message_${key}`} selected={this.props.selectedMessage === message} onSelectMessage={this.props.onSelectMessage} message={message} />);
    }

    render() {
        return (
            <table className="uk-table uk-table-small uk-table-divider uk-table-hover uk-table-middle uk-background-muted uk-padding">
                <thead>
                <tr>
                    <td colSpan="6">
                        <h3>Timeline</h3>
                        Click on a list item below to see FIX message details.
                    </td>
                </tr>
                </thead>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Sender</th>
                        <th>Target</th>
                        <th>Order Id</th>
                        <th>Type</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {this._renderItems()}
                </tbody>
            </table>
        );
    }
}
