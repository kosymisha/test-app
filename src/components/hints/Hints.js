import React, { Component } from 'react';
import { connect } from 'react-redux';

import { pickValue, clearHints } from "../../actions";
import { getHintsSelector, getPickedValueSelector } from '../../selectors';
import './Hints.css';

class Hints extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onClickHint = this.onClickHint.bind(this);
    }

    onClickHint(event) {
        this.props.pickValue(event.target.value);
        this.props.clearHints();
        this.props.onClickHint();
    }

    render() {

        return (
            <div id={'container'}>
                {this.props.hints.map((hint, index) => {
                    return <button
                        key={index}
                        onClick={this.onClickHint}
                        value={hint}
                    >
                        {hint}
                    </button>
                })}
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    pickedValue: getPickedValueSelector(state),
    hints: getHintsSelector(state)
});

const mapDispatchToProps = dispatch => ({
    pickValue: (value) => dispatch(pickValue(value)),
    clearHints: () => dispatch(clearHints())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hints)