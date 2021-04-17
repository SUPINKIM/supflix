import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'components/Loader';
import Section from 'components/Section';
import Error from 'components/Error';
import Poster from 'components/Poster';

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
  @media screen and (max-width: 620px) {
    font-size: 20px;
    width: 90%;
    border-bottom: 1px solid #999;
  }
`;

const SearchPresenter = ({
  searchMovies,
  searchTV,
  searchKeyword,
  loading,
  updateKeyword,
  handleSubmit,
  error,
}) => (
  <>
    <Helmet>
      <title>Search | Supflix</title>
    </Helmet>
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder='보고 싶은 컨텐츠를 검색해보세요.'
          value={searchKeyword}
          onChange={updateKeyword}
        ></Input>
      </Form>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          {searchMovies && searchMovies.length > 0 && (
            <Section title='영화 - Movies'>
              {searchMovies.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imgUrl={movie.poster_path}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                  isMovie={true}
                ></Poster>
              ))}
            </Section>
          )}
          {searchTV && searchTV.length > 0 && (
            <Section title='TV 프로그램 - TV shows'>
              {searchTV.map((show) => (
                <Poster
                  key={show.id}
                  id={show.id}
                  imgUrl={show.poster_path}
                  title={show.original_name}
                  rating={show.vote_average}
                  year={
                    show.first_air_date && show.first_air_date.substring(0, 4)
                  }
                ></Poster>
              ))}
            </Section>
          )}
          {error && <Error text={error}></Error>}
          {searchMovies &&
            !searchMovies.length &&
            searchTV &&
            !searchTV.length && (
              <Error
                text={
                  (error =
                    '찾으시는 컨텐츠가 없어요! 다른 키워드로 검색해주세요. 🙊')
                }
              ></Error>
            )}
        </>
      )}
    </Container>
  </>
);

SearchPresenter.propTypes = {
  searchMovies: PropTypes.array,
  searchTV: PropTypes.array,
  searchKeyword: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateKeyword: PropTypes.func.isRequired,
};

export default SearchPresenter;
