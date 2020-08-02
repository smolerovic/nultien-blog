import React from 'react';

import { Button } from 'antd';

import './button.scss';

const ButtonCmpt = props => {
  const {
    className,
    type,
    children,
    ...rest
  } = props;

  return <Button className={`button_cmpt ${className}`} type={type} {...rest}>{children}</Button>;
};

ButtonCmpt.defaultProps = {
  className: '',
  type: 'primary'
};

export default ButtonCmpt;
