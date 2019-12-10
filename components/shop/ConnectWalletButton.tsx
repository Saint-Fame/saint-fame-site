import styled from 'styled-components'

type ConnectWalletButtonProps = {
    account?: string
    handleClick?: () => {}
}

const ConnectWalletButton = (props: ConnectWalletButtonProps) => {
    const buttonText = props.account ? props.account : 'Connect Wallet'

    return (
        <div>
            <WalletButton as="a" onClick={props.handleClick}>
                {buttonText}
            </WalletButton>
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
