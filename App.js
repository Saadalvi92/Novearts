import React from 'react';
import Splash from './App/Navigation/Splash';
import {Provider} from 'react-redux';
import store from './Store/store';
function App(props) {
  return (
    <Provider store={store}>
      <Splash />
    </Provider>
  );
}

export default App;
