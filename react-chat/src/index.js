import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  {Chat} from './chat/Chat';
// import {injected} from "./Components/wallet/connector";
// import { useWeb3React } from '@web3-react/core';

// const { active, account, activate } = useWeb3React()


// async function connect() {
//   try {
//     await activate(injected)
//   } catch (error) {
//     console.log(error)
//   }
// }
// async function connect(){
  
//   document.getElementById('connect-button').addEventListener('click', event => {
//     let account;
//     let button = event.target;
//     window.ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
//       account = accounts[0];
//       console.log(account);
//       button.textContent = account;

//       window.ethereum.request({method: 'eth_getBalance' , params: [account, 'latest']}).then(result => {
//         console.log(result);
//         let wei = parseInt(result,16);
//         let balance = wei / (10**18);
//         console.log(balance + " ETH");
//       });
//     });
//   });

// }


ReactDOM.render(

  <React.StrictMode>
    
    <Chat />
    {/* <button onClick={connect} id="connect-button"> Connect to metamask</button> */}
    {/* {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>} */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
