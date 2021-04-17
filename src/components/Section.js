import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 80px;
  }
`;
const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
const Grid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(auto-fill, 100px);
  }
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>
      <span>{title}</span>
    </Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.PropType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]), //children은 일반 prop으로 전달하는 것이 아니라, 렌더링 가능한 노드들을 가리킴..
};

export default Section;
