import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getValue } from './../Dashboard';

export default class MessageDetailListItem extends Component {
    static propTypes = {
        message: PropTypes.object,
        data: PropTypes.object,
        field: PropTypes.object
    };
    static defaultProps = {
        message: null,
        data: {},
        field: {
            tag: null,
            enumeration: {}
        }
    };

    renderAdditionalData(field) {
        const data = [];
        if(!field) {
            return null;
        }
        if(getValue(field.category, 'categoryID')) {
            data.push(<tr key={'key_2'} className="table-border">
                <td><strong>Category</strong></td>
                <td>{getValue(field.category, 'categoryID')}. {getValue(field.category, 'description')}</td>
            </tr>);
        }
        if(getValue(field.section, 'sectionID')) {
            data.push(<tr key={'key_3'} className="table-border">
                <td><strong>Section</strong></td>
                <td>{getValue(field.section, 'sectionID')}. {getValue(field.section, 'description')}</td>
            </tr>);
        }
        if(getValue(field.enumeration, 'elaboration')) {
            data.push(<tr key={'key_4'} className="table-border">
                <td><strong>Enumeration</strong></td>
                <td>{getValue(field.enumeration, 'elaboration')}. {getValue(field.enumeration, 'description')}</td>
            </tr>);
        }

        return data.length > 0 ? (<table className="uk-table uk-table-small uk-table-divider uk-table-middle table-less-margin">
            <tbody>
            {data}
            </tbody>
        </table>) : null;
    }

    render() {
        if(!this.props.message) {
            return null;
        }

        const field = this.props.field;
        const description = getValue(field.enumeration, 'description') ? <span><strong>{getValue(field.enumeration, 'description')}</strong></span> : null;

        return [
            <tr key={'key_0'} className={classNames({
                'table-border': true,
                'validation-valid': this.props.data.valid,
                'validation-invalid': !this.props.data.valid,
                'validation-not-required': this.props.data.reqd === '0'
            })}>
                <td>{getValue(field, 'tag')}</td>
                <td><span className="uk-badge">{getValue(field, 'name')}</span></td>
                <td>{getValue(field, 'value')}</td>
                <td>{description}</td>
            </tr>,
            <tr key={'key_1'} className={classNames({
                'uk-table-divider-remove': true,
                'validation-valid': this.props.data.valid,
                'validation-invalid': !this.props.data.valid,
                'validation-not-required': this.props.data.reqd === '0'
            })}>
                <td colSpan={5} className="uk-text-muted">
                    {getValue(field, 'description')}
                    {this.renderAdditionalData(field)}
                </td>
            </tr>
        ];
    }
}
