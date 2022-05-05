
import { useState } from 'react';
import { ethers } from "ethers";
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';
import './App.css';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
const greeterAddress='0x5aB0AfF97b3A7922DfC169Fc9C4304529823c82A';
const rpcUrl = "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
const sdk = new ThirdwebSDK(rpcUrl);
const marketplace = sdk.getMarketplace(greeterAddress);
const private_key='3a9283656038550f452b22bab1da59a4db2bda4d01e59285617f5e1ef2be1a20';

// const getAllListings = async () => {
//   try {
//     await marketplace.getAllListings();
   
//   } catch (err) {
  
//     console.log(err);
//   }
// }
//getAllListings();
function App() 
{
  //console.log(marketplace.getActiveListings());
//   const provider = new ethers.providers.Web3Provider(window.ethereum)

//  MetaMask requires requesting permission to connect users accounts
// provider.send("eth_requestAccounts", [0x8a65AbE7267f86E2bccfED287cA23bD60799A3D5]);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
//const signer = provider.getSigner()finalSigner
const [accountaddress,accountAddress] = useState("");
const [setnamefinal,setNameFinal] = useState("");
const [setaddressfinal,setAddressFinal] = useState("");
const [setmobileno,setMobileNo] = useState("");
  const [signerfinal,finalSigner] = useState("");
  const [providerfinal,providerFinal] = useState("");
  const [contractfinal,contractFinal] = useState("");
  const [connectiontext,setConnectionText] = useState("");
  const [setdefaultaccount,setDefaultAccount] = useState("");
  const [seterrormessage,setErrorMessage] = useState("");
  const [message,setMessage] = useState("");
  const [setinvalue,setInt_value] = useState("");
  const [fromaddress,fromAddress] = useState("");
  const [toaddress,toAddress] = useState("");
  const [datafinal,dataFinal] = useState("");
  const [statusfinal,successMessage] = useState("");
  const [blocknumber,blockNumber] = useState("");
  const [instructions,Instructions] = useState("");
  async function requestAccount()
  {
    await window.ethereum.request({method:'eth_requestAccounts'});
  }
async function finaionfifjfklj()
{
  
  const provider=new ethers.providers.Web3Provider(window.ethereum);
 // console.log(provider.getTransactionReceipt('0xdaeffc352c0436b93047d97df0f889c110571a67870294f218fdc4d8720ceb01'));
 //console.log(provider.getNetwork());
  let privatekey='3a9283656038550f452b22bab1da59a4db2bda4d01e59285617f5e1ef2be1a20';
  let wallet=new ethers.Wallet(privatekey,provider);
 // console.log(wallet.getTransactionCount());
  let finaltrsansa=provider.getTransactionReceipt('0xbcae34e71bc3409b2e4f72378758b4a8151eea53049d49bad1baf153064c9877');
  console.log((await finaltrsansa).logs[0]['data']);
  const finalvalue=await finaltrsansa.logs[0]['data'];
  alert(ethers.utils.defaultAbiCoder.decode(finalvalue));
}
  async function finalvaluefinal()
  {
    
    console.log(ethers.utils.parseEther(send_token_amount,'ether'));
    let provider=ethers.getDefaultProvider();
    let privatekey='3a9283656038550f452b22bab1da59a4db2bda4d01e59285617f5e1ef2be1a20';
    let wallet=new ethers.Wallet(privatekey,provider);
    let signer=wallet.connect(provider);
    let gas_limit = "0x100000";
    let send_account='0xF4275c687982335409e2658113f4933ddE9dE582';
    let send_token_amount = "0.28";
    let to_address='0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199';
  //    const transaction = {
  //   from: send_account,
  //   to: to_address,
  //   value: ethers.utils.parseEther(send_token_amount,'ether'),
  //   nonce: provider.getTransactionCount((send_account, "latest")),
  //   gasLimit: ethers.utils.hexlify(gas_limit), // 100000
  //   gasPrice: provider.getGasPrice(),
  // }
   var transaction = {
    from: send_account,
    gasLimit:  ethers.utils.hexlify(gas_limit),
    gasPrice: provider.getGasPrice(),
    to: to_address,
    data: "0x",
    value: ethers.utils.parseEther(send_token_amount,'ether'),
  };
  let sendTransactionPromise = wallet.sendTransaction(transaction);
  sendTransactionPromise.then(function(transactionHash) {
    console.log(transactionHash);
  });
    // let amount=ethers.utils.parseEther('1.0');
    // let getbalancefinal=wallet.getBalance();
    // let countfinal=wallet.getTransactionCount();
    // let randomWallet = ethers.Wallet.createRandom();
  //   let transaction = {
  //     nonce: 0,
  //     gasLimit: 21000,
  //     gasPrice: ethers.utils.bigNumberify("20000000000"),
  //     to: "0x8a65AbE7267f86E2bccfED287cA23bD60799A3D5",
  //     value: ethers.utils.parseEther("1.0"),
  //     data: "0x",
  //     chainId: ethers.utils.getNetwork('homestead').chainId
  // }
  // const tx = {
  //   from: send_account,
  //   to: '0x8a65AbE7267f86E2bccfED287cA23bD60799A3D5',
  //   value: ethers.utils.parseEther(send_token_amount,'ether'),
  //   nonce: provider.getTransactionCount((send_account, "latest")),
  //   gasLimit: ethers.utils.hexlify(gas_limit), // 100000
  //   gasPrice: provider.getGasPrice(),
  // }
  // let transaction = {
  //   to: "0x8a65AbE7267f86E2bccfED287cA23bD60799A3D5",
  //   value: ethers.utils.parseEther("1.0")
  // }
  // signer.sendTransaction(transaction).then((tx) => {
  //           console.log(tx);
  // });



  
    // provider.getGasPrice().then((currentGasPrice) => {
    //   let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice))
    //   console.log(`gas_price: ${gas_price}`)
    //   const tx = {
    //     from: send_account,
    //     to: to_address,
    //     value: ethers.utils.parseEther(send_token_amount),
    //     nonce: provider.getTransactionCount(
    //       send_account,
    //       "latest"
    //     ),
    //     gasLimit: ethers.utils.hexlify(gas_limit), 
    //     gasPrice: gas_price,
    //   }
    //   console.dir(tx)
    //   try {
    //     signer.sendTransaction(tx).then((transaction) => {
    //       console.dir(transaction)
    //       alert("Send finished!")
    //     })
    //   } catch (error) {
    //     alert("failed to send!!")
    //   }
     
    // })
 
  
  // let signPromise = wallet.sign(transaction)
  // console.log(signPromise);
  // signPromise.then((signedTransaction) => {

  //     console.log(signedTransaction);
  //     let provider = ethers.getDefaultProvider()
  //     provider.sendTransaction(signedTransaction).then((tx) => {
  //         console.log(tx);
  //     });
  // })
    
    // countfinal.then((transactionCount)=>
    // {
    //   console.log(transactionCount);
    // });

    // getbalancefinal.then((balance)=>
    // {
    //   console.log(balance);
    // });

  }
  async function fetchGreeting()
  {
    if(typeof window.ethereum !== 'undefined')
    {
      const provider=new ethers.providers.Web3Provider(window.ethereum);
      // console.log(provider);
      //  const transrec=await provider.getTransaction('0xdd56398a50305def8c42e36feeb9c33da84939b50d5cd0e8fffce8e06d532272');
      //  console.log(transrec);
      const signer=provider.getSigner();
      const contract=new ethers.Contract(greeterAddress,Greeter.abi,signer); 
      
      try{
    
        const data=await contract.finalhost();
        
      // Instructions(data);
        console.log('data',data);
      }catch(error){
        console.log('one');
        console.log('error',error);
      }
    }
  }
  async function setfinalvalue()
  {
    if(typeof window.ethereum !== 'undefined')
    {
      const provider=new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/');
      // console.log(provider);
      //  const transrec=await provider.getTransaction('0xdd56398a50305def8c42e36feeb9c33da84939b50d5cd0e8fffce8e06d532272');
      //  console.log(transrec);
      const signer=provider.getSigner();
      const contract=new ethers.Contract(greeterAddress,Greeter.abi,signer); 
      
      try{
       
        const data=await contract.setfinalfunction(setinvalue);
        
      // Instructions(data);
        console.log('data',data);
      }catch(error){
        console.log('one');
        console.log('error',error);
      }
    }
  }
  async function getlogsfinal()
  {
    if(typeof window.ethereum !== 'undefined')
    {
      const provider=new ethers.providers.Web3Provider(window.ethereum);
      const signer=provider.getSigner();
      const contract=new ethers.Contract(greeterAddress,Greeter.abi,signer); 
      let filter=contract.filters.push_transaction_contract_event();
      const logs = await contract.queryFilter(filter);
      if(logs.length > 0)
      {
        for(var i=0;i<logs.length;i++)
        {
          let pendingTx = await provider.getTransaction(logs[i].transactionHash);
          const iface = new ethers.utils.Interface(Greeter.abi);
          let decodedData = iface.parseTransaction({ data: pendingTx.data, value: pendingTx.value });
          console.log(decodedData);
        }
      }
    }
  }
  async function push_transaction()
  {
    if(typeof window.ethereum !== 'undefined')
    {
      const provider=new ethers.providers.Web3Provider(window.ethereum);
      // console.log(provider);
      //  const transrec=await provider.getTransaction('0xdd56398a50305def8c42e36feeb9c33da84939b50d5cd0e8fffce8e06d532272');
      //  console.log(transrec);
      const signer=provider.getSigner();
      const contract=new ethers.Contract(greeterAddress,Greeter.abi,signer); 
     
      try{
      
      
        let filter=contract.filters.push_transaction_contract_event();
        const logs = await contract.queryFilter(filter);
        if(logs.length > 0)
        {
          for(var i=0;i<logs.length;i++)
          {
            let pendingTx = await provider.getTransaction(logs[i].transactionHash);
            const iface = new ethers.utils.Interface(Greeter.abi);
            let decodedData = iface.parseTransaction({ data: pendingTx.data, value: pendingTx.value });
            console.log(decodedData);
          }
        }
       
      //  const data=await contract.push_transaction_contract(setnamefinal,setaddressfinal,setmobileno);
        
      // Instructions(data);
        //console.log('data',data);
      }catch(error){
        console.log('one');
        console.log('error',error);
      }
    }
  }
  async function connect_wallet()
  {
    if(window.ethereum)
    {
      window.ethereum.request({method:'eth_requestAccounts'})
      .then(result=>{
        accountChangeHandler(result[0]);
        
        setConnectionText('Wallet Connected');
       
      })
    }
    else
    {
      setErrorMessage('Need to install Metamask');
    }
  }
  const accountChangeHandler = (newaccount) =>
  {
  
    console.log(newaccount);
    setDefaultAccount(newaccount);
   
    updateEthers();
  }
  const updateEthers=() =>
  {
    let provider=new ethers.providers.Web3Provider(window.ethereum);
    providerFinal(provider);
    let signer=provider.getSigner();
    finalSigner(signer);
    let contract=new ethers.Contract(greeterAddress,Greeter.abi,signer);
    contractFinal(contract);
    let usr_account;
    signer.getAddress().then(async(res)=>{
      usr_account = res;
    //  console.log(usr_account);
  });
    // let usdcBalance = contract.balanceOf(contract.address);
    // console.log(usdcBalance);
    // const tx = contract.transfer('0x8a65AbE7267f86E2bccfED287cA23bD60799A3D5', 500, { gasPrice: 20e9 });
    // console.log(tx);
    // let wallet = new ethers.Wallet('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9');
    // let walletSigner = wallet.connect(provider);
    // const tx = {
    //   from: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    //   to: '0x8a65AbE7267f86E2bccfED287cA23bD60799A3D5',
    //   value: ethers.utils.parseEther("1.0"),
    //   nonce: provider.getTransactionCount('0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9', "latest"),
    // }
    // walletSigner.sendTransaction(tx).then((transaction) => {
    //   console.dir(transaction)
    //   alert("Send finished!")
    // })
    // let gasprice=provider.getGasPrice();
    // let wallet = new ethers.Wallet('3a9283656038550f452b22bab1da59a4db2bda4d01e59285617f5e1ef2be1a20',signer,provider);
    // let walletSigner = wallet.connect(provider);
    //   const tx = {
    //   from:wallet.address,
    //   to: '0x8a65AbE7267f86E2bccfED287cA23bD60799A3D5',
    //   value: ethers.utils.parseEther("0.00001","ether"),
    //   gasPrice:gasprice,
    //   gasLimit:ethers.utils.hexlify(100000),
    //   nonce: provider.getTransactionCount(wallet.address, "latest"),
    // }
    
  }

  async function setGreeting()
  {
    if(typeof window.ethereum !== 'undefined')
    {
      await requestAccount();
      const provider=new ethers.providers.Web3Provider(window.ethereum);
      const signer=provider.getSigner();
      const contract=new ethers.Contract(greeterAddress,Greeter.abi,signer);
      let eventFilter = contract.filters.Contr;
      let events = await contract.queryFilter(eventFilter)
      console.log(events);
      const transaction=await contract.setGreeting(message);
      console.log(transaction);
      
      fromAddress(transaction.from);
      toAddress(transaction.to);
      dataFinal(transaction.data);
      blockNumber(transaction.blockNumber);
      await transaction.wait();
      successMessage('Successfully Finished');
      fetchGreeting();
    }
  }
  return (
    <div className="container forpadding">
       <div className="row">
       <div className="col-lg-5"></div>
       <div className="col-lg-5">
       <button className="btn btn-danger" onClick={connect_wallet}>Connect Wallet</button>
         </div>
         </div>
     <div className="row">
       <div className="col-lg-12">
       
     <input type="text" onChange={(e) => setNameFinal(e.target.value)} value={setnamefinal} className="form-control textmargin" placeholder='Enter Name...'/>
     <input type="text" onChange={(e) => setAddressFinal(e.target.value)} value={setaddressfinal} className="form-control textmargin" placeholder='Enter Address...'/>
  <input type="text" onChange={(e) => setMobileNo(e.target.value)} value={setmobileno} className="form-control textmargin" placeholder='Mobile...'/>
<center><button className="btn btn-primary forcenter" onClick={push_transaction}>Push Transaction</button></center><h6>Address : {setdefaultaccount}</h6> 
<h6>From Address : {fromaddress}</h6>
<h6>To Address : {toaddress}</h6>
<h6>Message As Encrypted: {datafinal}</h6>
<h6>User Message : {message}</h6>
<h6>Block Number : {blocknumber}</h6>
<h6>Status : {connectiontext}</h6>
<h5 className="forredcolor">Instructions : {instructions}</h5>
<table className='tableclass'>
           <tr>
            <td className='tdclass'>
              Name
            </td>
            <td className='tdclass'>
              Address
            </td>
            <td className='tdclass'>
              Mobile No
            </td>
            <td className='tdclass'>
              Action
            </td>
           </tr>
        
         </table>
</div></div></div>
  );
}
export default App;
