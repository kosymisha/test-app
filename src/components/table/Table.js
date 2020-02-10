import React, { Component } from 'react';
import { connect } from "react-redux";

import { pickValue, sortById, sortByName, sortByPrice } from "../../actions";
import { getTableSelector, getPickedValueSelector } from '../../selectors';
import './Table.css';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th id={'id'}>
                                <button onClick={this.props.sortById}>ID</button>
                            </th>
                            <th id={'name'}>
                                <button onClick={this.props.sortByName}>Name</button>
                            </th>
                            <th id={'price'}>
                                <button onClick={this.props.sortByPrice}>Price</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.table.map((row, index) => {
                            return <tr key={index}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.price}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    pickedValue: getPickedValueSelector(state),
    table: getTableSelector(state)
});

const mapDispatchToProps = dispatch => ({
    pickValue: (value) => dispatch(pickValue(value)),
    sortById: () => dispatch(sortById()),
    sortByName: () => dispatch(sortByName()),
    sortByPrice: () => dispatch(sortByPrice())
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table)