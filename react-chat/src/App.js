import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav/Nav";
// import { Web3ReactProvider } from '@web3-react/core'
// import Web3 from 'web3'

// function getLibrary(provider){
//   return new Web3(provider)
// }

function App() {
  
  return (
    <div className="__main">
      <Nav />
      
    </div>
  );
}

export default App;

// import React from 'react';

// import './App.css';
// import { Web3ReactProvider } from '@web3-react/core'
// import Web3 from 'web3'

// function getLibrary(provider){
//   return new Web3(provider)
// }

// function App({Component,pageProps}) {
  
//   return (
//        <Web3ReactProvider getLibrary={getLibrary}>
//         <Component {...pageProps} />
//       </Web3ReactProvider>  
    
//   );
// }

// export default App;
