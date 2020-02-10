import { createSelector } from 'reselect';

export const getTable = (state) => {
    return state.table;
};

export const getHints = (state) => {
    return state.hints;
};

export const getPickedValue = (state) => {
    return state.searchInput.pickedValue;
};

export const getTableSelector = createSelector(getTable, (table) => {
    return table;
});

export const getHintsSelector = createSelector(getHints, (hints) => {
    return hints;
});

export const getPickedValueSelector = createSelector(getPickedValue, (pickedValue) => {
    return pickedValue;
});