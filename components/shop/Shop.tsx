import * as React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from 'ethers/providers'
import styled from 'styled-components'

const Shop: React.FunctionComponent = () => {
    const context = useWeb3React<Web3Provider>()

    const { connector, library, account } = context

    return (
        <div>
            <ShopLayout>
                Account: {account}
                <ProductImage>LOVELY DANK TSHIRT IMAGE</ProductImage>
                SAINT FAME: GENESIS $100.00 $FAME 55/100 left
                <BuyButton>Buy</BuyButton>
                <BuyButton>Sell</BuyButton>
                <BuyButton>Redeem</BuyButton>
            </ShopLayout>
        </div>
    )
}

const ProductImage = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    background-color: red;
`

const ShopLayout = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: blue;
`

const BuyButton = styled.a`
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

export default Shop
