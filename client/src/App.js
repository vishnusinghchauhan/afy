import React, { Component } from 'react';
import './App.css';

import history from "./history"
import { Router , BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/configureStore';

import Header from './common/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Routes from './routes';

class App extends Component {

     render() {
        return (
          <div className="App">
          <div id="wrapper">  
              <Provider store={store}>
                  <BrowserRouter history={history}>
                       <Header />
                       <Sidebar />
                       <Routes />
                  </BrowserRouter>
              </Provider>
            </div>
        </div>
       )
   }

}




export default App;
