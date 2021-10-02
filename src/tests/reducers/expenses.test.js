import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

// Should set default state
test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
});


// Should add new expense
test('should add new expense to state', () => {
    const newExpense = {
        id: '4',
        description: 'Phone Bill',
        note: '',
        amount: 2500,
        createdAt: moment() 
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([
        ...expenses, newExpense
    ]);
});

// Should edit existing expense
test('should edit existing expense', () => {
    const note = 'This note has been edited in'
    const editedExpense = {
        id: '1',
        description: 'Gum',
        note,
        amount: 195,
        createdAt: 0
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);

    expect(state[0].note).toBe(note);
});

// Should not edit expense if ID not found
test('should not edit existing expenses if ID not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        updates: {
            id: '-1'
        }
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

// Should remove existing expense
test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

// Should throw error when trying to remove invalid expense
test('should not remove expense if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});