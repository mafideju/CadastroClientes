import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is {props.info}</p>
    </div>
  );
};

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don´t share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Você não está logada, baby</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  // <AdminInfo isAdmin={true} info="these are the details" />,
  // document.getElementById('root')
  <AuthInfo isAuthenticated={false} info="these are the details" />,
  document.getElementById('root')
);
