import Layout from '../components/Layout'
import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import ConnectWalletButton from '../components/shop/ConnectWalletButton'
import { Alert } from 'react-native'
import { Web3ReactProvider, useWeb3React } from '@web3-react/core'

import { Web3Provider } from '@ethersproject/providers'

function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider)
    library.pollingInterval = 8000
    return library
}

const ShopComponent: React.FunctionComponent = () => {
    const context = useWeb3React<Web3Provider>()

    const { connector, library, account } = context

    return <>Shop</>
}

const Index: React.FunctionComponent = () => {
    return (
        <Layout>
            <Web3ReactProvider getLibrary={getLibrary}>
                <ConnectWalletButton />
                <ShopComponent />
            </Web3ReactProvider>
        </Layout>
    )
}
export default Index
