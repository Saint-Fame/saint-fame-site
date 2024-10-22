import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { MAINNET_PROVIDER, RINKEBY_PROVIDER } from '../utils'

const POLLING_INTERVAL = 8000
export const RPC_URLS: { [chainId: number]: string } = {
    1: MAINNET_PROVIDER,
    4: RINKEBY_PROVIDER
}

export const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
})

export const walletconnect = new WalletConnectConnector({
    rpc: { 1: RPC_URLS[1] },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: POLLING_INTERVAL
})

export const walletlink = new WalletLinkConnector({
    url: MAINNET_PROVIDER,
    appName: 'Saint Fame'
})
