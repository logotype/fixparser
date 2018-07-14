import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import moment from 'moment';

import { getValue } from './../Dashboard';
import { Fields } from './../../../src/FIXParserBrowser';
import { Side, MsgType } from './../../../src/constants/ConstantsField';

export default class MessageListItem extends Component {
    static propTypes = {
        message: PropTypes.object,
        onSelectMessage: PropTypes.func.isRequired,
        selected: PropTypes.bool.isRequired
    };
    static defaultProps = {
        selected: false,
        message: null
    };

    constructor(props) {
        super(props);
        this.onClickListItem = this.onClickListItem.bind(this);
    }

    onClickListItem() {
        this.props.onSelectMessage(this.props.message);
    }

    renderDetail() {
        let side = ((this.props.message.getField(Side) || {}).enumeration || {}).symbolicName;
        side = side ? side.replace('Sell', 'SL').toUpperCase() : null;
        return (
            <td>
                {this.props.message.getBriefDescription()}
                <br />
                {side ? <span className={classNames({ 'uk-badge': true, buy: side.toLowerCase().indexOf('buy') > -1, sell: side.toLowerCase().indexOf('sl') > -1 })}>{side}</span> : null}
            </td>
        );
    }

    render() {
        if(!this.props.message) {
            return null;
        }

        let messageDescription = null;
        const messageType = this.props.message.getField(MsgType);
        if(messageType && messageType.tag && messageType.value) {
            messageDescription = getValue(this.props.message.getEnum(messageType.tag, messageType.value), 'Description');
        }
        const styleObject = {
            cursor: 'pointer'
        };
        return (
            <tr onClick={this.onClickListItem} style={styleObject} className={classNames({ 'selected-row': this.props.selected })}>
                <td>{moment(getValue(this.props.message.getField(Fields.SendingTime)), 'YYYYMMDD-HH:mm:ss').format('HH:mm:ss')}</td>
                <td className="uk-text-truncate">{getValue(this.props.message.getField(Fields.SenderCompID))}</td>
                <td className="uk-text-truncate">{getValue(this.props.message.getField(Fields.TargetCompID))}</td>
                <td className="uk-text-truncate">{getValue(this.props.message.getField(Fields.ClOrdID))}</td>
                <td>{messageDescription}</td>
                {this.renderDetail()}
            </tr>
        );
    }
}
