import React from 'react';
import './App.css';
import styled from 'styled-components';
import { HashRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

const CenterAlignDiv = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Nav = styled.nav`
  a {
    color: whitesmoke;
    font-size: 75%;
  }
`

const AppContainer = styled.div`
  background-color: #282c34;
  height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App() {
  return (
    <Router>
      <AppContainer>
        <Nav>
          <Link to='/home'>Home</Link>
          &nbsp;&nbsp;
          <Link to='/other'>Other</Link>
        </Nav>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path="/home">
            <CenterAlignDiv>
              <AppHeader>
                <p>
                  Cool Home Page
                </p>
              </AppHeader>
            </CenterAlignDiv>
          </Route>
          <Route path="/other">
            <AppHeader>
              The Other Page
          </AppHeader>
          </Route>
          <Route>
            <AppHeader>
              Not found
          </AppHeader>
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
