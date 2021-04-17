import { React, Component } from 'react';
import Router from 'components/Router';
import Globalstyles from 'components/GlobalStyles';
//여기서 받은 라우터는 Router.js에서 export default로 내보낸 return값(routers)
//export default로 내보낸 모듈은 어떤 이름으로 사용해도 상관 없음

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <Globalstyles />
      </>
    );
  }
}

export default App;
