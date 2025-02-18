import Layout from '../components/Layout'
import React, { useState, useEffect } from 'react'
import ConnectWalletButton from '../components/shop/ConnectWalletButton'
import Shop from '../components/shop/Shop'
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider)
    library.pollingInterval = 8000
    return library
}

const Index: React.FunctionComponent = () => {
    return (
        <Layout>
            <Web3ReactProvider getLibrary={getLibrary}>
                <ConnectWalletButton />
                <Shop />
            </Web3ReactProvider>
        </Layout>
    )
}
export default Index
