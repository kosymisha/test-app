export const PICK_VALUE = 'PICK_VALUE';
export const FILL_TABLE = 'FILL_TABLE';
export const LOAD_HINTS = 'LOAD_HINTS';
export const KEY_PRESS = 'KEY_PRESS';
export const CLEAR_HINTS = 'CLEAR_HINTS';
export const SORT_BY_ID = 'SORT_BY_ID';
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';

const sortById = () => {
    return {
        type: SORT_BY_ID
    };
};

const sortByName = () => {
    return {
        type: SORT_BY_NAME
    };
};

const sortByPrice = () => {
    return {
        type: SORT_BY_PRICE
    };
};

const clearHints = () => {
    return {
        type: CLEAR_HINTS
    };
};

const keyPress = (value) => {
    return {
        type: KEY_PRESS,
        payload: value
    };
};

const loadHints = (value) => {
    return {
        type: LOAD_HINTS,
        payload: value
    };
};

const pickValue = (value) => {
    return {
        type: PICK_VALUE,
        payload: value
    };
};

const fillTable = (table, type) => {
    return {
        type: FILL_TABLE,
        payload: {
            table: table,
            type: type
        }
    };
};

export {
    pickValue,
    fillTable,
    loadHints,
    keyPress,
    clearHints,
    sortById,
    sortByName,
    sortByPrice
};
