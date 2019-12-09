import { NextPage } from 'next'
import Layout from '../components/Layout'
import React from 'react'
import Loader from '../components/Loader'
import ConnectWalletButton from '../components/shop/ConnectWalletButton'
import { Alert } from 'react-native'

const Index: React.FunctionComponent = () => {
    return (
        <Layout>
            <ConnectWalletButton />
        </Layout>
    )
}
export default Index
