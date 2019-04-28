import React from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from 'components/Home';
import BannerDetail from 'components/BannerDetail';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: .16rem;
  background: #B0B74B;
`;

const ConstrainedContainer = styled.div`
  width: 100%;
  max-width: 12rem;
  min-width: 12rem;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

class App extends React.PureComponent {
  componentDidMount() {
    const { history } = this.props;
    history.push("/");
  }

  render() {
    return (
      <Container>
        <ConstrainedContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/banner/detail" component={BannerDetail} />
          </Switch>
        </ConstrainedContainer>
      </Container>
    );
  }
}

export default withRouter(App);
