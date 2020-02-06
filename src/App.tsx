import React, { Fragment } from 'react';
import { configure } from 'mobx';
import MainArea from './Components/MainArea/MainArea';
import Header from './Components/Header/Header';
import StoreProvider from './Stores/storeContext';
import LoginPage from './Components/LoginPage/LoginPage';
import Sidebar from './Components/Sidebar/Sidebar';
import Backdrop from './Components/Backdrop/Backdrop';

configure({ enforceActions: "observed" });

class App extends React.Component {

  render() {

    return (
      <Fragment>
        <div className="App">
          <StoreProvider>
            <Backdrop />
            <Header />
            <Sidebar />
            <MainArea />
          </StoreProvider>
        </div>
      </Fragment>
    );
  }
}

export default App;
