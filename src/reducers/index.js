import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import tableReducer from './tableReducer';
import hintsReducer from './hintsReducer';

const rootReducer = combineReducers({
    searchInput: searchReducer,
    table: tableReducer,
    hints: hintsReducer
});

export default rootReducer;
