import React from 'react';
import { Provider } from 'react-redux';

import Counter from './Counter';
import DemoDecompositionTreeGraph from './components/decom'
import store from './store';
import './App.css';

function App () {
    return (
      <Provider store={store}>
        {/* <Counter /> */}
        <DemoDecompositionTreeGraph/>
      </Provider>
    );
}

export default App;