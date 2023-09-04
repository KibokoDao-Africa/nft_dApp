import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
 export const activeChain = {
  // === Required information for connecting to the network === \\
  chainId: 123456, // Chain ID of the network
  // Array of RPC URLs to use
  rpc: ["https://devnet.adilchain-rpc.io"],

  // === Information for adding the network to your wallet (how it will appear for first time users) === \\
  // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
  nativeCurrency: {
    decimals: 18,
    name: "ADIL",
    symbol: "ADIL",
  },
  // shortName: "czkevm", // Display value shown in the wallet UI
  // slug: "consensys", // Display value shown in the wallet UI
  testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
  chain: "ConsenSys", // Name of the network
  name: "ADIL Testnet", // Name of the network
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      // activeChain={activeChain}
      
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
