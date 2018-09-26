import { login, logout } from '../../actions/auth';

test('ACTION OBJECT LOGIN', () => {
  const uid = 'abc123';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('ACTION OBJECT LOGOUT', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
