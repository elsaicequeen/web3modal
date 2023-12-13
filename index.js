import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
// Initialize Web3Modal with WalletConnect as the provider
const web3Modal = new Web3Modal({
  network: "mainnet", // Change this to the network you want
  cacheProvider: true,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: "1513a7be1b7e42efab5fc8849953c12e" // Replace with your Infura ID
      }
    }
  }
});
async function connectWallet() {
  try {
    const provider = await web3Modal.connect();
    // Add more code here to interact with the provider
  } catch (error) {
    console.error("Failed to connect to wallet:", error);
  }
}

// Add event listener to your button
document.getElementById("connectWallet").addEventListener("click", connectWallet);
