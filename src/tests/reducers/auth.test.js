import authReducer from '../../reducers/auth';

// Should set uid for login
test('Should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'user'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({
        uid: 'user'
    });
});

// Should clear uid for logout
test('Should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'user' }, action);
    expect(state).toEqual({});
});