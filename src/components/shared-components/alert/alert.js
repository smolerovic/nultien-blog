import React from 'react';

import { Alert } from 'antd';

import './alert.scss';

const AlertCmpt = props => {
  const {
    className,
    type,
    closable,
    onClose,
    ...rest
  } = props;

  const closeFunction = () => {
    if (onClose && typeof onClose === 'function') onClose();
    return <div />;
  };

  return <Alert type={type} className={`alert_cmpt ${className}`} {...rest} closable onClose={closeFunction} />;
};

AlertCmpt.defaultProps = {
  className: '',
  type: 'success',
  onClose: () => {}
};

export default AlertCmpt;
