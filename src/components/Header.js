import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
const Navigation = ({ location: { pathname } }) => (
  <Header className='nav'>
    <UL>
      <LI current={pathname === '/'}>
        <NewLink to='/'>Home</NewLink>
      </LI>
      <LI current={pathname === '/tv'}>
        <NewLink to='/tv'>TV</NewLink>
      </LI>
      <LI current={pathname === '/search'}>
        <NewLink to='/search'>Search</NewLink>
      </LI>
    </UL>
  </Header>
);

export default withRouter(Navigation);

//styled-componet 만들기
const Header = styled.header`
  margin: 0;
  padding: 0;
  padding-left: 20px;
  background-color: #212121;
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;
const UL = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
const LI = styled.li`
  list-style: none;
  width: 60px;
  height: 100%;
  text-align: center;
  border-bottom: 2px solid
    ${(props) => (props.current ? '#c23616' : 'transparent')};
  transition: border-bottom 0.7s ease-in-out;
`;
const NewLink = styled(Link)`
  color: #fff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &:hover {
    color: #e17055;
  }
`;
