
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import {FirebaseContext} from './store/Context';
// import { firebaseApp }  from './firebase/config';
// import Context from './store/Context';

// ReactDOM.render(
//     <FirebaseContext.Provider value={{ firebaseApp }}>
//     <Context>
//         <App />
//     </Context>
//     </FirebaseContext.Provider>,
//     document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './store/Context';
// import ContextProvider from './store/Context';
import { FirebaseContext } from './store/Context';
import { firebaseApp } from './firebase/config';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebaseApp }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
