import styled from 'styled-components'
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
import { injected, walletconnect, walletlink } from '../../shop/connectors'
import { useEagerConnect, useInactiveListener } from '../../shop/hooks'
import { useState, useEffect } from 'react'
import { Spinner } from '../Spinner'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

const connectorsByName: { [name: string]: AbstractConnectorInterface } = {
    'Browser Wallet': injected,
    'Wallet Connect': walletconnect,
    'Wallet Link': walletlink
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

const ConnectWalletButton = () => {
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
        <div>
            {Object.keys(connectorsByName).map(name => {
                const currentConnector = connectorsByName[name]
                const activating = currentConnector === activatingConnector
                const connected = currentConnector === connector
                const disabled =
                    !triedEager || !!activatingConnector || connected || !!error

                return (
                    <WalletButton
                        style={{
                            borderColor: activating
                                ? 'orange'
                                : connected
                                ? 'green'
                                : 'unset',
                            cursor: disabled ? 'unset' : 'pointer',
                            position: 'relative'
                        }}
                        // disabled={disabled}
                        // key={name}
                        onClick={() => {
                            setActivatingConnector(currentConnector)
                            activate(connectorsByName[name])
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                color: 'black',
                                margin: '0 0 0 1rem'
                            }}
                        >
                            {activating && (
                                <Spinner
                                    color={'#FF00D6'}
                                    style={{
                                        height: '25%',
                                        marginLeft: '-1rem'
                                    }}
                                />
                            )}
                        </div>
                        {connected ? account : name}
                    </WalletButton>
                )
            })}
            {!!error && (
                <h4 style={{ marginTop: '1rem', marginBottom: '0' }}>
                    {getErrorMessage(error)}
                </h4>
            )}
        </div>
    )
}

const WalletButton = styled.a`
    background-color: black;
    border: 4px solid #24ff00;
    box-sizing: border-box;
    color: #24ff00;
    font-family: Tenor Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #24ff00;
    padding-left: 65px;
    padding-right: 65px;
    padding-top: 20px;
    padding-bottom: 20px;
    &:hover {
        background: #24ff00;
        color: #000000;
        text-decoration: none;
    }
`

export default ConnectWalletButton
