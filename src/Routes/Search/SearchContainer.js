import { moviesApi, tvApi } from 'API';
import React from 'react';
import SearchPresenter from './SearchPresenter';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    searchMovies: null,
    searchTV: null,
    searchKeyword: '',
    loading: false, //데이터를 불러오는 게 아니라 사용자 입력 키워드를 기다리는 중
    error: null,
  };

  //Handle submit : 키워드 입력
  //이벤트 발생 callback func
  handleSubmit = (event) => {
    event.preventDefault();
    const { searchKeyword } = this.state; //searchKeyword만 따로 사용
    if (searchKeyword !== '') {
      this.searchByKeyword();
    }
  };
  //이벤트 발생 callback func
  updateKeyword = (event) => {
    this.setState({
      searchKeyword: event.target.value,
    });
  };

  searchByKeyword = async () => {
    const { searchKeyword } = this.state;
    try {
      this.setState({ loading: true });
      const {
        data: { results: searchMovies },
      } = await moviesApi.searchMovies(searchKeyword);
      const {
        data: { results: searchTV },
      } = await tvApi.searchShows(searchKeyword);
      this.setState({ searchMovies, searchTV });
    } catch {
      this.setState({
        error:
          '네트워크 연결이 불안정합니다. 잠시 후 다시 시도해주세요. Network Error...',
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const {
      searchMovies,
      searchTV,
      searchKeyword,
      loading,
      error,
    } = this.state;
    return (
      <SearchPresenter
        searchMovies={searchMovies}
        searchTV={searchTV}
        searchKeyword={searchKeyword}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit} //함수를 매개 변수로 넘겨 줌
        updateKeyword={this.updateKeyword}
      />
    );
  }
}
