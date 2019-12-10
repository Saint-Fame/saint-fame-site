import Layout from '../components/Layout'
import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import ConnectWalletButton from '../components/shop/ConnectWalletButton'
import { Alert } from 'react-native'
import {
    Web3ReactProvider,
    useWeb3React,
    UnsupportedChainIdError
} from '@web3-react/core'
import { AbstractConnectorInterface } from '@web3-react/types'
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected
} from '@web3-react/injected-connector'
import {
    URI_AVAILABLE,
    UserRejectedRequestError as UserRejectedRequestErrorWalletConnect
} from '@web3-react/walletconnect-connector'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'
import { injected, walletconnect, walletlink } from '../shop/connectors'
import { useEagerConnect, useInactiveListener } from '../shop/hooks'

const connectorsByName: { [name: string]: AbstractConnectorInterface } = {
    BrowserWallet: injected,
    WalletConnect: walletconnect,
    WalletLink: walletlink
}

function getErrorMessage(error: Error) {
    if (error instanceof NoEthereumProviderError) {
        return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.'
    } else if (error instanceof UnsupportedChainIdError) {
        return "You're connected to an unsupported network."
    } else if (
        error instanceof UserRejectedRequestErrorInjected ||
        error instanceof UserRejectedRequestErrorWalletConnect
    ) {
        return 'Please authorize this website to access your Ethereum account.'
    } else {
        console.error(error)
        return 'An unknown error occurred. Check the console for more details.'
    }
}

function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider)
    library.pollingInterval = 8000
    return library
}

const ShopComponent: React.FunctionComponent = () => {
    const context = useWeb3React<Web3Provider>()

    const {
        connector,
        library,
        chainId,
        account,
        activate,
        deactivate,
        active,
        error
    } = context

    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = useState()
    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined)
        }
    }, [activatingConnector, connector])

    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = useEagerConnect()

    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager || !!activatingConnector)

    // set up block listener
    const [blockNumber, setBlockNumber] = useState()

    useEffect((): any => {
        if (library) {
            let stale = false

            library
                .getBlockNumber()
                .then((blockNumber: number) => {
                    if (!stale) {
                        setBlockNumber(blockNumber)
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setBlockNumber(null)
                    }
                })

            const updateBlockNumber = (blockNumber: number) => {
                setBlockNumber(blockNumber)
            }
            library.on('block', updateBlockNumber)

            return () => {
                library.removeListener('block', updateBlockNumber)
                stale = true
                setBlockNumber(undefined)
            }
        }
    }, [library, chainId])

    // fetch eth balance of the connected account
    const [ethBalance, setEthBalance] = useState()
    useEffect((): any => {
        if (library && account) {
            let stale = false

            library
                .getBalance(account)
                .then((balance: any) => {
                    if (!stale) {
                        setEthBalance(balance)
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setEthBalance(null)
                    }
                })

            return () => {
                stale = true
                setEthBalance(undefined)
            }
        }
    }, [library, account, chainId])

    useEffect(() => {
        const logURI = (uri: any) => {
            console.log('WalletConnect URI', uri)
        }
        walletconnect.on(URI_AVAILABLE, logURI)

        return () => {
            walletconnect.off(URI_AVAILABLE, logURI)
        }
    }, [])

    return (
        <>
            <h1>{active ? '🟢' : error ? '🔴' : '🟠'}</h1>

            <span>{chainId === undefined ? '...' : chainId}</span>

            <span>Block Number</span>
            <span role="img" aria-label="numbers">
                🔢
            </span>
            <span>
                {blockNumber === undefined
                    ? '...'
                    : blockNumber === null
                    ? 'Error'
                    : blockNumber.toLocaleString()}
            </span>
        </>
    )
}

const Index: React.FunctionComponent = () => {
    return (
        <Layout>
            <ConnectWalletButton />
            {/* <Web3ReactProvider getLibrary={getLibrary}>
                <ShopComponent />
            </Web3ReactProvider> */}
        </Layout>
    )
}
export default Index
