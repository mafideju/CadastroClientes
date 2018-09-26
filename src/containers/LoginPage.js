import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">**Boilerplate**</h1>
      <p>Faça as Edições Necessárias</p>
      <button
        className="button button--animated button--login"
        onClick={startLogin}
      >
        Google Login
      </button>
      <button className="button button--animated button--login">
        E-mail Login
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
