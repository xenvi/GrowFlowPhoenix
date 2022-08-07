import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Provider } from "react-redux";
import store from "./redux/store";

// components
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import Data from "./components/Data";

// axios.defaults.baseURL = "https://leviathan.challenge.growflow.com";
// axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const AppWrapper = styled.section`
  display: flex;
`;
const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Sidebar />
        <ContentWrapper>
          <TopNav />
          <Data />
        </ContentWrapper>
      </AppWrapper>
    </Provider>
  );
}

export default App;
