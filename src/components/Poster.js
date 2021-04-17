import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  font-size: 12px;
`;

const Img = styled.div`
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.2s linear;
  background-image: url(${(props) => props.bgUrl});
`;

const Rating = styled.span`
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
`;

const ImgContainer = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Img} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-size: 12px;
  color: #fff;
  opacity: 0.8;
  margin-bottom: 3px;
`;
const Year = styled.span`
  font-size: 10px;
  color: rgba(253, 253, 253, 0.7);
`;

const Poster = ({ id, imgUrl, title, rating, year, isMovie }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImgContainer>
        <Img
          bgUrl={
            imgUrl
              ? `https://image.tmdb.org/t/p/w500${imgUrl}`
              : 'http://cdn3.crystalcommerce.com/themes/clients/elsewherecomics/assets/img/ui/no-image-available.png?1412807702'
          }
        ></Img>
        <Rating>
          <span role='img' aria-label='rating'>
            ⭐️
          </span>
          {rating} / 10
        </Rating>
      </ImgContainer>
      <Title>
        {title.length > 17 ? `${title.substring(0, 17)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool.isRequired,
};

export default Poster;
