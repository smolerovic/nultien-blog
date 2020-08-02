
import React from 'react';
import { Input } from 'antd';

import './input.scss';

const InputCmpt = props => {
  const {
    className,
    children,
    ...rest
  } = props;

  return <Input className={`input_cmpt ${className}`} {...rest}>{children}</Input>;
};

InputCmpt.defaultProps = {
  className: ''
};

InputCmpt.Search = Input.Search;
InputCmpt.TextArea = Input.TextArea;

export default InputCmpt;
