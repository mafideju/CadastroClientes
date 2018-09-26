import authReducer from '../../reducers/auth';

test('LOGANDO CORRETAMENTE / UID', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abc123'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('DESLOGANDO CORRETAMENTE', () => {
  const action = {
    type: 'LOGIN'
  };
  const state = authReducer({ uid: 'anything' }, action);
  expect(state).toEqual({});
});
