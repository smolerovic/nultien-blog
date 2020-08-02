import React from 'react';

import { Modal } from 'antd';

import './modal.scss';

const ModalCmpt = props => {
  const {
    children,
    className,
    ...rest
  } =
     props;
  return <Modal className={`modal_cmpt ${className}`} {...rest}>{children}</Modal>;
};

ModalCmpt.defaultProps = {
  className: ''
};

export default ModalCmpt;
