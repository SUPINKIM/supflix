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

const HomePresenter = ({ title, category, loading, error }) => (
  <>
    <Helmet>
      <title>Movies | Supflix</title>
    </Helmet>
    {loading ? (
      <Loader></Loader>
    ) : (
      <Container>
        {category && category.length > 0 && (
          <Section title={title}>
            {category.map((movie) => (
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
  title: PropTypes.string,
  category: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
