export interface NFT {
  metadata:{
    id: number;
    image:string;
    name: string;
    description: string;
    url: string;
    price: number;
    minted?: boolean;
  }
 
}
