import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'components/Section';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Poster from 'components/Poster';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ title, category, loading, error }) => (
  <>
    <Helmet>
      <title>TV Show | Supflix</title>
    </Helmet>
    {loading ? (
      <Loader></Loader>
    ) : (
      <Container>
        <>
          {category && category.length > 0 && (
            <Section title={title}>
              {category.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imgUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                  isMovie={false}
                ></Poster>
              ))}
            </Section>
          )}

          {error && <Error text={error}></Error>}
        </>
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  title: PropTypes.string,
  category: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVPresenter;
