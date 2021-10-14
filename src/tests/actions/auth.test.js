import { login, logout } from '../../actions/auth';

// Should setup login action object correctly
test('should setup login action object correctly', () => {
    const action = login('user');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'user'
    });
});

// Should setup logout action object correctly
test('should setup logout action object correctly', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});