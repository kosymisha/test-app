import React, { Component } from 'react';
import { connect } from "react-redux";

import { pickValue, keyPress, clearHints } from "../../actions";
import Hints from '../hints/Hints';
import { getHintsSelector, getPickedValueSelector } from '../../selectors';
import './inputSearch.css';

class InputSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
        this.onClickHint = this.onClickHint.bind(this);
        this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
        this.onChangeSearchValue = this.onChangeSearchValue.bind(this);
    }

    onClickHint() {
        this.setState({ searchValue: '' });
    }

    onChangeSearchValue(event) {
        this.setState({ searchValue: event.target.value });
        if (event.target.value !== '') {
            this.props.keyPress(event.target.value);
        } else {
            this.props.clearHints();
        }
    }

    onKeyPressHandler(event) {
        if (event.key === 'Enter' && this.state.searchValue !== '') {
            this.props.pickValue(this.state.searchValue);
            this.setState({ searchValue: '' });
            this.props.clearHints();
        }
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.searchValue}
                    onChange={this.onChangeSearchValue}
                    onKeyPress={this.onKeyPressHandler}
                />
                <Hints onClickHint={this.onClickHint} />
            </div>
        )
    };

}

const mapStateToProps = (state) => ({
    pickedValue: getPickedValueSelector(state),
    hints: getHintsSelector(state)
});

const mapDispatchToProps = dispatch => ({
    pickValue: (value) => dispatch(pickValue(value)),
    keyPress: (value) => dispatch(keyPress(value)),
    clearHints: () => dispatch(clearHints())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InputSearch)