import { FILL_TABLE, SORT_BY_ID, SORT_BY_NAME, SORT_BY_PRICE } from "../actions";

const initialState = [];

const tableReducer = (state = initialState, action) => {

    switch (action.type) {

        case FILL_TABLE: {
            return action.payload.table;
        }
        case SORT_BY_ID: {
            return state.concat().sort((a, b) => (a.id > b.id) ? 1 : -1);
        }
        case SORT_BY_NAME: {
            return state.concat().sort((a, b) => (a.name > b.name) ? 1 : -1);
        }
        case SORT_BY_PRICE: {
            return state.concat().sort((a, b) => (a.price > b.price) ? 1 : -1);
        }
        default: return state;
    }

};

export default tableReducer;