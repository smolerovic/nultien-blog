/* eslint-disable react/jsx-fragments */
/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';

import { ModalCmpt, ButtonCmpt, FormCmpt, InputCmpt } from '../../shared-components';

import './add-edit-blog-post-modal.scss';

const AddOrEditBlogPostModal = (props) => {
  const {
    blogContainer = {}
  } = props;

  const { AddNewBlogPost, EditBlogPost, OpenModal, RemoveSelectedCategoryId, state: { openModal, editData, selectedCategoryId } } = blogContainer;

  const [visible, setVisible] = useState(false);

  const [form] = FormCmpt.form.useForm();

  useEffect(() => {
    if (openModal) {
      setVisible(true);
    }
  }, [openModal]);

  useEffect(() => {
    if (editData) {
      form.setFieldsValue({
        title: editData.title,
        text: editData.text
      });
    }
  }, [editData, form]);

  const showModal = () => {
    setVisible(true);
    form.resetFields();
    if (selectedCategoryId !== null) {
      RemoveSelectedCategoryId();
    }
  };

  const handleCancel = () => {
    form.resetFields();
    if (openModal) {
      OpenModal(false, null);
    }
    setVisible(false);
  };

  const onFinish = async values => {
    AddNewBlogPost(values);
    if (openModal) {
      OpenModal(false, null);
    }
    setVisible(false);
  };

  const onEdit = async values => {
    EditBlogPost({ ...values, id: editData.id });
    if (openModal) {
      OpenModal(false, null);
    }
    setVisible(false);
  };

  const validateMessages = {
    required: '${label} is required!'
  };

  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 24 }
  };

  const handleOnClick = editData ? onEdit : onFinish;
  return (
    <React.Fragment>
      <ButtonCmpt type='primary' onClick={showModal} aria-label='Click here to Add post.'>Add post</ButtonCmpt>
      <ModalCmpt
        title={`${editData ? 'Edit' : 'Add'} blog post`}
        visible={visible}
        width={720}
        onCancel={handleCancel}
        footer={null}
      >
        <FormCmpt
          {...layout}
          form={form}
          onFinish={handleOnClick}
          validateMessages={validateMessages}
          className='add_edit_blog_post_form'
        >
          <FormCmpt.Item name='title' label='Title' rules={[{ required: true }]}>
            <InputCmpt
              aria-label='Please type your title here.'
              aria-required='true'
            />
          </FormCmpt.Item>
          <FormCmpt.Item name='text' label='Text' rules={[{ required: true }]}>
            <InputCmpt.TextArea
              className='add_edit_blog_post_form__textarea'
              aria-label='Please type your text here.'
              aria-required='true'
            />
          </FormCmpt.Item>
          <div className='add_edit_blog_post_form__buttons'>
            <ButtonCmpt type='primary' htmlType='submit' aria-label={`Click here to ${editData ? 'Edit' : 'Add'} post.`}>Post</ButtonCmpt>
            <ButtonCmpt type='default' htmlType='button' onClick={handleCancel} aria-label='Click here to cancel.'>Cancel</ButtonCmpt>
          </div>
        </FormCmpt>
      </ModalCmpt>
    </React.Fragment>
  );
};

export default AddOrEditBlogPostModal;
