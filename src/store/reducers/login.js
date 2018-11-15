// @flow

type LoginState = {
  email: string;
  password: string;
  token: string | boolean;
};

type LoginAction = {
  type: 'LOGIN_USER';
  payload: {
    email: string;
    password: string;
  };
} | {
  type: 'LOGOUT_USER';
};

const INIT_STATE: LoginState = {
  email: 'user@email.com',
  password: 'user',
  token: '',
  screen: 'Login',
};

function loginReducer(state: LoginState = INIT_STATE, action: LoginAction) {
  switch (action.type) {
    case 'LOGIN_USER':
      const {payload} = action;
      const token = ((payload && payload.email === 'admin@email.com') && (payload && payload.password === 'admin') ? true : false);
      console.log('token', token);
      return {
        ...state,
        email: payload && payload.email,
        password: payload && payload.password,
        token: token,
        screen: (token ? 'Dashboard' : 'Login'),
      };
    default:
      return state;
  }
}

export default loginReducer;
