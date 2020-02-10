import { CLEAR_HINTS, LOAD_HINTS } from "../actions";

const initialState = [

];

const hintsReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOAD_HINTS: {
            return action.payload;
        }
        case CLEAR_HINTS: {
            return [];
        }

        default: return state;
    }

};

export default hintsReducer;