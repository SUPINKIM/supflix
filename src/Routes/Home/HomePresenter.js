import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from 'components/Section';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Poster from 'components/Poster';

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => (
  <>
    <Helmet>
      <title>Movies | Supflix</title>
    </Helmet>
    {loading ? (
      <Loader></Loader>
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title='현재 상영 중인'>
            {nowPlaying.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imgUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              ></Poster>
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title='곧 상영을 시작하는'>
            {upcoming.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imgUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              ></Poster>
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title='인기 있는'>
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imgUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
                isMovie={true}
              ></Poster>
            ))}
          </Section>
        )}
        {error && <Error text={error}></Error>}
      </Container>
    )}
  </>
);
HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
