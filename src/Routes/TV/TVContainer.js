import { tvApi } from 'API';
import React from 'react';
import Selection from 'components/Selection';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    titles: ['Popluar', 'Top Rated', 'Airing Today'],
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();

      this.setState({ topRated, popular, airingToday });
    } catch {
      this.setState({
        error:
          'TV 프로그램 정보를 찾는 데 실패했습니다. 잠시 후 다시 접속해 주세요. 🙇 ',
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
      topRated,
      popular,
      airingToday,
      loading,
      error,
    } = this.state;
    return (
      <Selection
        titles={titles}
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
        isHome={false}
      />
    );
  }
}
