import React from 'react';
import { Form } from 'antd';

import './form.scss';

const FormCmpt = props => {
  const {
    className,
    children,
    ...rest
  } = props;

  return <Form className={`form_cmpt ${className}`} {...rest}>{children}</Form>;
};

FormCmpt.defaultProps = {
  className: ''
};

FormCmpt.Item = Form.Item;
FormCmpt.form = Form;

export default FormCmpt;
