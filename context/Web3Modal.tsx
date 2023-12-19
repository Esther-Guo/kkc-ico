"use client"

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '65f7fc29fd1fb8ec5b4fe1686a70ebda'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}

const modal = createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId
})

export function Web3ModalProvider({ children }) {
  return children;
}
