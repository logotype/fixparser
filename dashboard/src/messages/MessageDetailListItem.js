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

    renderAdditionalData() {
        const data = [];
        if(getValue(this.props.field.category, 'categoryID')) {
            data.push(<tr className="table-border">
                <td><strong>Category</strong></td>
                <td>{getValue(this.props.field.category, 'categoryID')}. {getValue(this.props.field.category, 'description')}</td>
            </tr>);
        }
        if(getValue(this.props.field.section, 'sectionID')) {
            data.push(<tr className="table-border">
                <td><strong>Section</strong></td>
                <td>{getValue(this.props.field.section, 'sectionID')}. {getValue(this.props.field.section, 'description')}</td>
            </tr>);
        }
        if(getValue(this.props.field.enumeration, 'elaboration')) {
            data.push(<tr className="table-border">
                <td><strong>Enumeration</strong></td>
                <td>{getValue(this.props.field.enumeration, 'elaboration')}. {getValue(this.props.field.enumeration, 'description')}</td>
            </tr>);
        }

        return data.length > 0 ? (<table className="uk-table uk-table-small uk-table-divider uk-table-middle table-less-margin">
            {data}
        </table>) : null;
    }

    render() {
        if(!this.props.message) {
            return null;
        }

        const description = getValue(this.props.field.enumeration, 'description') ? <span><strong>{getValue(this.props.field.enumeration, 'description')}</strong></span> : null;

        return [
            <tr>
                <td>{this.props.field.tag}</td>
                <td><span className="uk-badge">{this.props.field.name}</span></td>
                <td>{this.props.field.value}</td>
                <td>{description}</td>
            </tr>,
            <tr className="uk-table-divider-remove">
                <td colSpan={5} className="uk-text-muted">
                    {this.props.field.description}
                    {this.renderAdditionalData()}
                </td>
            </tr>
        ];
    }
}
