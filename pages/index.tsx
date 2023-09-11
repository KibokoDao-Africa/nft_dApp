import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Nft from "../components/Nft";
import styles from "../styles/Home.module.css";
import { NFT } from "../types/NFT";
//thirdweb imports fromsnippets
import { AdilTestnet } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";


// If used on the FRONTEND pass your 'clientId'
const sdk = new ThirdwebSDK(AdilTestnet, {
  clientId: process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID
});


const Home: NextPage = () => {
  const address = useAddress();
  const [nftMetadata, setNftMetadata] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false);
  

//const nfts = await contract.erc721.getAll();
  const fetchNfts = async () => {
    try {
      setLoading(true);
    
      // const response = await fetch("/api/get-nfts");
      const contract = await sdk.getContract("0xFdFA1491Ed4FE7C357aB47410FaF0694E2c5aeBC");
       
      const response = await contract.erc721.getAll();
      const data =  response;
      console.log(data) ;
       
      setNftMetadata(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNfts();
  }, []);

  return (
    <div className={styles.container}>
      {address ? (
        <>
          <h1>Select an NFT to Mint</h1>
          {loading && <p>Loading...</p>}
          <div className={styles.NFTs}>
            {nftMetadata &&
              nftMetadata.map((nft: NFT) => <Nft key={nft.id} nft={nft} />)}
          </div>
        </>
      ) : (
        <ConnectWallet />
      )}
    </div>
  );
};

export default Home;
