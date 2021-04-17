import { moviesApi, tvApi } from 'API';
import React from 'react';
import DetailPresenter from './DetailPresenter';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    result: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
      location: { pathname },
    } = this.props;
    //잘못된 파라미터(숫자가 아닌 값)가 들어온 경우, api 호출 방지
    const parseId = parseInt(id);

    if (isNaN(parseId)) {
      return push('/');
    }

    let result = null;
    try {
      if (pathname.includes('/movie/')) {
        //영화 상세 정보 로드
        ({ data: result } = await moviesApi.detailMovies(parseId));
      } else if (pathname.includes('/tv/')) {
        //tv 상세 정보 로드
        ({ data: result } = await tvApi.detailShows(parseId));
      }
    } catch {
      this.setState({
        error:
          '작품 상세 정보를 가져오지 못했습니다. 잠시 후 다시 시도해주세요.',
      });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, loading, error } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
