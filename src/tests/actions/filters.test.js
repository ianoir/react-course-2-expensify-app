import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from "../../actions/filters";
import moment from 'moment';

// Set default SetTextFilter
test('should generate set text filter action object with a default empty string', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        filterText: ''
    });
});

// Set SetTextFilter with input
test('should generate set text filter action object with a given string', () => {
    const action = setTextFilter('rent');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        filterText: 'rent'
    });
});

// Set sort by amount
test('should generate set sortby Amount action object', () => {
    const action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

// Set sort by date
test('should generate set sortby date action object', () => {
    const action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});

// Set StartDate
test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

// Set EndDate
test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});