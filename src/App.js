import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
import InputSearch from './components/inputSearch/InputSearch';
import Table from './components/table/Table';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <InputSearch />
                    <Table />
                </Fragment>
            </Provider>
        );
    }
}

export default App;
