import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HomePresenter from 'Routes/Home/HomePresenter';
import Loader from 'components/Loader';
import TVPresenter from 'Routes/TV/TVPresenter';

const Container = styled.div`
  width: 250px;
  height: 60px;
  margin-top: 10px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectBox = styled.div`
  width: 200px;
  height: 40px;
  border: 1px solid #fff;
  cursor: pointer;
  margin: 10px;
  text-align: center;
  line-height: 36px;
`;

const UL = styled.ul`
  max-height: 0px;
  background-color: #fff;
  color: #333;
  overflow: hidden;
  &.show {
    max-height: 280px;
    width: 200px;
    overflow: visible;
    z-index: 2;
  }
`;

const LI = styled.li`
  margin: 10px;
  text-align: center;
  cursor: pointer;
  overflow: visible;
`;

class Selection extends React.Component {
  state = {
    current: null,
    show: false,
    category: null,
    categoryName: null,
  };

  componentDidUpdate() {
    const { loading, isHome } = this.props;
    if (!loading && isHome) {
      const { nowPlaying } = this.props;
      if (!this.state.category) {
        this.setState({ category: nowPlaying, categoryName: '현재 상영 중인' });
      }
    } else if (!loading && !isHome) {
      const { popular } = this.props;
      if (!this.state.category) {
        this.setState({ category: popular, categoryName: '인기 있는' });
      }
    }
  }

  handleClick(e) {
    this.setState({ show: true });
  }

  handleMouseLeave(e) {
    this.setState({ show: false });
  }

  selectCategory(e) {
    const selected = e.target.innerText;
    const { isHome } = this.props;
    if (isHome) {
      const { titles, nowPlaying, upcoming, popular, topRated } = this.props;
      this.setState({ current: selected, show: false });

      if (selected === titles[0]) {
        this.setState({ category: nowPlaying, categoryName: '현재 상영 중인' });
      } else if (selected === titles[1]) {
        this.setState({ category: upcoming, categoryName: '상영 예정인' });
      } else if (selected === titles[2]) {
        this.setState({ category: popular, categoryName: '인기 있는' });
      } else if (selected === titles[3]) {
        this.setState({ category: topRated, categoryName: '평점이 높은' });
      }
    } else {
      const { titles, popular, topRated, airingToday } = this.props;
      this.setState({ current: selected, show: false });

      if (selected === titles[0]) {
        this.setState({ category: popular, categoryName: '인기 있는' });
      } else if (selected === titles[1]) {
        this.setState({ category: topRated, categoryName: '평점이 높은' });
      } else if (selected === titles[2]) {
        this.setState({ category: airingToday, categoryName: '오늘 방영하는' });
      }
    }
  }

  render() {
    const { category, categoryName } = this.state;
    const { titles, loading, error, isHome } = this.props;
    return loading ? (
      <Loader></Loader>
    ) : (
      <>
        <Container onMouseLeave={this.handleMouseLeave.bind(this)}>
          <SelectBox onClick={this.handleClick.bind(this)}>
            {this.state.current || titles[0]} ▾
          </SelectBox>
          <UL className={this.state.show ? 'show' : 'none'}>
            {titles.map((title, idx) => (
              <LI onClick={this.selectCategory.bind(this)} key={idx}>
                {title}
              </LI>
            ))}
          </UL>
        </Container>
        {isHome ? (
          <HomePresenter
            title={categoryName}
            category={category}
            loading={loading}
            error={error}
          />
        ) : (
          <TVPresenter
            title={categoryName}
            category={category}
            loading={loading}
            error={error}
          />
        )}
      </>
    );
  }
}

export default Selection;

Selection.PropType = {
  titles: PropTypes.array,
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  isHome: PropTypes.bool.isRequired,
};
