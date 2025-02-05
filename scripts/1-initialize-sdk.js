import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import ethers from "ethers";

// Importing and configuring .env file that we use to securely store our environment variables
import dotenv from "dotenv";
dotenv.config();

if (!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY === "") {
    console.log("🛑 Private key not found.");
  }
  
  if (!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL === "") {
    console.log("🛑 Alchemy API URL not found.");
  }
  
  if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS === "") {
    console.log("🛑 Wallet Address not found.");
  }

  // RPC URL, Alchemy API URL from our .env file.
const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_API_URL);
// wallet private key. ALWAYS KEEP THIS PRIVATE, DO NOT SHARE IT WITH ANYONE, add it to your .env file and do not commit that file to github!
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const sdk = new ThirdwebSDK(wallet);

(async () => {
  try {
    const address = await sdk.getSigner().getAddress();
    console.log("SDK initialized by address:", address)
  } catch (err) {
    console.error("Failed to get apps from the sdk", err);
    process.exit(1);
  }
})();

// We are exporting the initialized thirdweb SDK so that we can use it in our other scripts
export default sdk
