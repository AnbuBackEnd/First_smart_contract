// my_script.ts
import { ThirdwebSDK } from "@thirdweb-dev/sdk";

// The RPC url determines which blockchain you want to connect to
const rpcUrl = "https://polygon-rpc.com/";
// instantiate the SDK as read only on a given blockchain
const sdk = new ThirdwebSDK(rpcUrl);

// access your deployed contracts
const nftDrop = sdk.getNFTDrop("0x5aB0AfF97b3A7922DfC169Fc9C4304529823c82A");
const marketplace = sdk.getMarketplace("0x5aB0AfF97b3A7922DfC169Fc9C4304529823c82A");

// Read from your contracts
const claimedNFTs = await nftDrop.getAllClaimed();
const listings = await marketplace.getActiveListings();
console.log('success');