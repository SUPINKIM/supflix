import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.span`
  font-weight: 600;
  color: #8395a7;
  font-size: 20px;
`;

const ImgContainer = styled.div`
  width: 800px;
`;

const Img = styled.img`
  width: 100%;
`;

const Button = styled.button`
  width: 180px;
  height: 60px;
  border: none;
  border-radius: 60px;
  color: #fff;
  background-color: #341f97;
  cursor: pointer;
  &:hover,
  :active {
    transform: scale(0.98);
    outline: none;
  }
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

const BtnText = styled.span`
  font-weight: 400;
  color: #e17055;
`;

const Error = ({ text }) => (
  <Container>
    <Text>{text}</Text>
    <ImgContainer>
      <Img src='./404NotFound.png'></Img>
    </ImgContainer>
    <Button>
      <BtnText>
        <NewLink to='/'>🏠 &nbsp;&nbsp;Go back Home</NewLink>
      </BtnText>
    </Button>
  </Container>
);

Error.PropType = {
  text: PropTypes.string.isRequired,
};

export default Error;
