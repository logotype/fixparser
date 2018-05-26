import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Fields } from './../../../src/fields/Fields';
import { MsgType } from './../../../src/constants/ConstantsField';
import MessageDetailListItem from './MessageDetailListItem';
import { getValue } from './../Dashboard';
import Field from './../../../src/fields/Field';

export default class MessageDetailList extends Component {
    static propTypes = {
        message: PropTypes.object
    };
    static defaultProps = {
        message: null
    };

    constructor(props) {
        super(props);
        this.state = {
            requiredFieldsOnly: true
        };
        this.fields = new Fields();
        this._onChangeCheckbox = this._onChangeCheckbox.bind(this);
    }

    _renderItems() {
        const filteredItems = this.state.requiredFieldsOnly
            ? this.props.message.validate(true).filter((item) => {
                if(item.spec && item.spec.components && item.spec.components.length > 0) {
                    item.spec.components = item.spec.components.filter((subItem) => subItem.reqd === '1');
                }
                return item.hasValue || item.reqd === '1';
            })
            : this.props.message.validate(true);

        return filteredItems
            .map((item, key) => {
                let field = null;
                if(item.field) {
                    field = item.field
                } else {
                    field = new Field(item.tagText, '<MISSING VALUE>');
                    this.fields.getField(field);
                }
                return <MessageDetailListItem key={`data_${key}`} data={item} field={field} getField={this.fields.getField} message={this.props.message} />;
            });
    }

    _onChangeCheckbox(event) {
        this.setState({ requiredFieldsOnly: event.target.checked });
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
                            <input type="checkbox"
                                   defaultChecked={this.state.requiredFieldsOnly}
                                   onChange={this._onChangeCheckbox}
                            /> Validate required fields only
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
