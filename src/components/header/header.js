/* eslint-disable react/jsx-fragments */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Subscribe } from 'unstated';
import { CloseOutlined } from '@ant-design/icons';

import { BlogContainer } from '../../container-services';
import { MY_PROFILE, ROOT_ROUTE } from '../../helper/routes';

import { FormCmpt, InputCmpt } from '../shared-components';

import Logo from '../images/logo.svg';

import './header.scss';

const HeaderComponent = props => {
  const {
    blogContainer = {}
  } = props;

  const { ResetSearchValue, SearchBlogPosts, InitialGetBlogPosts } = blogContainer;

  const [form] = FormCmpt.form.useForm();
  const [searchValue, setSearchValue] = useState('');

  const handleOnSearch = (value) => {
    if (value.length) {
      SearchBlogPosts(value);
    } else {
      InitialGetBlogPosts();
    }
  };

  const handleRemoveSearchValue = () => {
    form.resetFields();
    setSearchValue('');
    ResetSearchValue();
    InitialGetBlogPosts();
  };

  const [openHamburger, setOpenHamburger] = useState(false);

  const renderHamburgerMenu = () => {
    return (
      <div className='header_cmpt__hamburger' onClick={() => setOpenHamburger(!openHamburger)}>
        <span className='header_cmpt__hamburger_item' />
        <span className='header_cmpt__hamburger_item' />
        <span className='header_cmpt__hamburger_item' />
      </div>
    );
  };

  const renderNavigation = () => {
    return (
      <nav className={`${openHamburger ? '' : 'open'} header_cmpt__nav`}>
        <ul>
          <li><a href='#link1' onClick={() => setOpenHamburger(false)}>Link 1</a></li>
          <li><a href='#link2' onClick={() => setOpenHamburger(false)}>Link 2</a></li>
          <li><a href='#link3' onClick={() => setOpenHamburger(false)}>Link 3</a></li>
          <li><Link to={MY_PROFILE} onClick={() => setOpenHamburger(false)}>My Profile</Link></li>
          <li>Logout</li>
        </ul>
      </nav>
    );
  };

  const renderLogo = () => {
    return (
      <Link to={ROOT_ROUTE} className='header_cmpt__logo'>
        <img src={Logo} alt='Nultien Blog Logo' />
      </Link>
    );
  };

  const sufux = searchValue.length >= 1 ? <CloseOutlined onClick={() => handleRemoveSearchValue()} /> : null;

  const renderInputSearch = () => {
    return (
      <FormCmpt form={form} className='header_cmpt__search'>
        <FormCmpt.Item name='search'>
          <InputCmpt.Search
            placeholder='Search'
            onSearch={value => handleOnSearch(value)}
            onChange={e => setSearchValue(e.target.value)}
            suffix={sufux}
            className='header_cmpt__search_input'
            aria-label='Search here.'
          />
        </FormCmpt.Item>
      </FormCmpt>
    );
  };

  return (
    <header className='header_cmpt'>
      {renderLogo()}
      {renderInputSearch()}
      {renderHamburgerMenu()}
      {renderNavigation()}
    </header>
  );
};

const Header = props => {
  return (
    <Subscribe to={[BlogContainer]}>
      {(blogContainer) =>
        <HeaderComponent
          blogContainer={blogContainer}
          {...props}
        />}
    </Subscribe>
  );
};

export default Header;
