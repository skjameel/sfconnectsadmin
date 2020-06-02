import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Redirect } from 'react-router-dom';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};

const ScrollToTop = (props) => {
  if (props.history.location.pathname.indexOf('/create') < 0) {
    window.scrollTo(0, 0);
  }
  return props.children;
};

const AuthenticatedPropsRoute = (props) => {
  return (
    <PropsRoute {...props} />
  );
};

AuthenticatedPropsRoute.propTypes = {
};

const PropsRoute = ({ component, path, exact, modal, ...rest }) =>
  (<Route
    exact={exact}
    path={path}
    render={routeProps => renderMergedProps(component, routeProps, rest)}
  />);

PropsRoute.defaultProps = {
  modal: false,
  exact: false,
  path: null,
};

PropsRoute.propTypes = {
  component: PropTypes.any.isRequired,
  modal: PropTypes.bool,
  exact: PropTypes.bool,
  path: PropTypes.string,
};

const RouterScrollToTop = withRouter(ScrollToTop);

export {
  PropsRoute,
  AuthenticatedPropsRoute,
  RouterScrollToTop,
}; // eslint-disable-line import/prefer-default-export
