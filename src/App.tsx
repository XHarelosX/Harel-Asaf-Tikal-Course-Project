import React, { Fragment } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { configure } from 'mobx';
import MainArea from './Components/MainArea/MainArea';
import Header from './Components/Header/Header';
import StoreProvider from './Stores/storeContext';
import Sidebar from './Components/Sidebar/Sidebar';
import Backdrop from './Components/Backdrop/Backdrop';

configure({ enforceActions: "observed" });

class App extends React.Component {

  render() {

    return (
      <Fragment>
        <Router>
          <StoreProvider>
            <Backdrop />
            <Header />
            <MainArea />
            <Sidebar />
          </StoreProvider>
        </Router>
      </Fragment>
    );
  }
}

export default App;
