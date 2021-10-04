import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

// should return 0 if no expenses found
test('should return a 0 if no expenses found', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

// should correctly add up a single expense
test('should correctly add up a single expense', () => {
    const result = selectExpensesTotal([expenses[1]]);
    expect(result).toBe(109500);
});

// should correctly add up multiple expenses
test('should correctly add up multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    // 195 + 109500 + 4500 = 114195
    expect(result).toBe(114195);
});