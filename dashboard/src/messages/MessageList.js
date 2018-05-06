import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MessageListItem from './MessageListItem';

export default class MessageList extends Component {
    static propTypes = {
        messages: PropTypes.arrayOf(PropTypes.object),
        onSelectMessage: PropTypes.func.isRequired
    };
    static defaultProps = {
        messages: [],
        selectedRow: 0
    };
    
    onSelectRow(rowIndex) {
        console.log('selected row', rowIndex);
        this.setState({ selectedRow: rowIndex });
    }
    
    _renderItems() {
        if(this.props.messages.length > 0 && this.props.messages[0].data.length === 0) {
            return null;
        }
        return this.props.messages.map((message, key) => {
            const onSelectRow = this.onSelectRow.bind(this, key);
            return <MessageListItem key={`message_${key}`} onClick={onSelectRow} onSelectMessage={this.props.onSelectMessage} message={message} />;
        });
    }

    render() {
        return (
            <table className="uk-table uk-table-small uk-table-divider uk-table-hover uk-table-middle uk-background-muted uk-padding">
                <thead>
                <tr>
                    <td colSpan="6">
                        <h3>Timeline</h3>
                        Single or multiple individual FIX messages are shown in the below list.
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
