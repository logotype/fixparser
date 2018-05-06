import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getValue } from './../Dashboard';

export default class MessageDetailListItem extends Component {
    static propTypes = {
        message: PropTypes.object,
        field: PropTypes.object
    };
    static defaultProps = {
        message: null,
        field: {}
    };

    render() {
        if(!this.props.message) {
            return null;
        }

        return (
            <tr>
                <td>{this.props.field.tag}</td>
                <td><span className="uk-badge">{this.props.field.name}</span></td>
                <td>{this.props.field.value}</td>
                <td><strong>{getValue(this.props.field.enumeration, 'description')}</strong></td>
                <td>{this.props.field.description}</td>
            </tr>

        );
    }
}
