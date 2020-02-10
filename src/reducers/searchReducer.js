import { PICK_VALUE } from "../actions";

const initialState = {
    pickedValue: {}
};

const searchReducer = (state = initialState, action) => {

    switch (action.type) {

        case PICK_VALUE: {
            return {
                pickedValue: action.payload
            }
        }

        default: return state;
    }

};

export default searchReducer;