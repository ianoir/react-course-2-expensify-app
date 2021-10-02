import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// Should set up default filter values
test('should set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

// Should sort by amount
test('should set SortBy to Amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });

    expect(state.sortBy).toBe('amount');
});

// Should sort by date
test('should set SortBy to Date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };

    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');
});

// Should set Start Date
test('should set StartDate value', () => {
    const startDate = moment();
    const action = { type: 'SET_START_DATE', startDate };
    const state = filtersReducer(undefined, action);

    expect(state.startDate).toEqual(startDate);
});

// Should set End Date
test('should set EndDate value', () => {
    const endDate = moment();
    const action = { type: 'SET_END_DATE', endDate };
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual(endDate);
});

// Should set Text Filter
test('should set filter text value to E', () => {
    const filterText = 'This is my text filter';
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', filterText });

    expect(state.text).toBe(filterText);
});