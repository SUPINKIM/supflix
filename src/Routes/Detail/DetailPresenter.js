import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'components/Loader';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 0;
  @media screen and (max-width: 620px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImg});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: -1;
`;

const Content = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  @media screen and (max-width: 620px) {
    width: 50%;
    height: 100%;
    margin-bottom: 10px;
  }
`;

const ContentImg = styled.div`
  width: 75%;
  height: 77%;
  background-image: url(${(props) => props.poster});
  background-position: center center;
  background-size: cover;
  z-index: 1;
  border-radius: 4px;
`;

const Data = styled.div`
  width: 70%;
  height: 77%;
  margin-left: 10px;
  @media screen and (max-width: 620px) {
    width: 90%;
    z-index: 1;
    margin-left: 40px;
  }
`;
const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 10px;
`;

const Item = styled.span``;
const ItemButton = styled.button`
  width: 130px;
  height: 30px;
  background-color: #eb4d4b;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  @media screen and (max-width: 620px) {
    display: block;
    width: 40%;
    margin: 5px;
  }
`;
const Anchor = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 0.7rem;
`;
const ItemContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  z-index: 1;
`;

const Divider = styled.div`
  display: inline;
  margin: 10px;
`;

const Overview = styled.p`
  width: 60%;
  line-height: 1.5;
  margin-top: 10px;
  @media screen and (max-width: 620px) {
    width: 90%;
    margin-top: 20px;
  }
`;

const Video = styled.iframe`
  margin-top: 10px;
  width: 620px;
  height: 330px;
  z-index: 5;
  @media screen and (max-width: 620px) {
    width: 320px;
    height: 200px;
  }
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading now... | Supflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{' '}
          | Supflix
        </title>
      </Helmet>
      <Container>
        <Backdrop
          bgImg={
            result.backdrop_path
              ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
              : result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : 'http://cdn3.crystalcommerce.com/themes/clients/elsewherecomics/assets/img/ui/no-image-available.png?1412807702'
          }
        ></Backdrop>
        <Content>
          <ContentImg
            poster={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : 'http://cdn3.crystalcommerce.com/themes/clients/elsewherecomics/assets/img/ui/no-image-available.png?1412807702'
            }
          ></ContentImg>
        </Content>
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime
                ? `${result.runtime} min`
                : `${result.episode_run_time[0]} min`}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, idx) =>
                  idx === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider>•</Divider>
            <ItemButton>
              <Anchor
                href={result.homepage ? result.homepage : '#'}
                target='_blank'
              >
                ▷ Watch content now!
              </Anchor>
            </ItemButton>
            <Overview>{result.overview}</Overview>
          </ItemContainer>
          {result.videos.results.length ? (
            <Video
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
              src={`https://www.youtube.com/embed/${
                result.videos.results[result.videos.results.length - 1].key
              }`}
            ></Video>
          ) : (
            <></>
          )}
        </Data>
      </Container>
    </>
  );
DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
