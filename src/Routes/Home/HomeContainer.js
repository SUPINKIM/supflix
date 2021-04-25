import { moviesApi } from 'API';
import React from 'react';
import Selection from 'components/Selection';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    titles: ['Playing Now', 'Upcoming soon', 'Popluar', 'Top Rated'],
    nowPlaying: null,
    upcoming: null,
    popular: null,
    topRated: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();
      const {
        data: { results: topRated },
      } = await moviesApi.topRated();

      this.setState({ nowPlaying, upcoming, popular, topRated });
    } catch {
      this.setState({
        error:
          '영화 정보를 찾는 데 실패했습니다. 잠시 후 다시 접속해 주세요. 🙇 ',
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const {
      titles,
      nowPlaying,
      upcoming,
      popular,
      topRated,
      loading,
      error,
    } = this.state;
    return (
      <Selection
        titles={titles}
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        topRated={topRated}
        error={error}
        loading={loading}
        isHome={true}
      />
    );
  }
}
