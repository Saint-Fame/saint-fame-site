import { useState, useEffect } from 'react'
import { FINANCES_ADDRESS, ETHERSCAN_API_KEY, truncate } from '../utils/helper'
import { ethers } from 'ethers'
import Loader from '../Loader'
import axios from 'axios'

let FINANCES_ENDPOINT = `https://api.etherscan.io/api?module=account&action=tokentx&address=${FINANCES_ADDRESS}&startblock=8972891&endblock=latest&sort=asc&apikey=${ETHERSCAN_API_KEY}`

const provider = new ethers.providers.EtherscanProvider('mainnet', ETHERSCAN_API_KEY)

interface Transfer {
    time: string
    amount: string
    reference: string
    address: string
}

interface ParsedTransfer {
    time: string
    amount: string
    hash: string
}

interface InputData {
    reference: string
    fromAddress: string
}

const getFinanceTransactions = async (
    transactionHash: string
): Promise<InputData> => {
    let tx = await provider.getTransaction(transactionHash)

    let abi = ['deposit(address _token, uint256 _amount, string _reference)']

    let iface = new ethers.utils.Interface(abi)

    const transaction = iface.parseTransaction(tx)

    const referenceString = transaction.args[2]

    const inputData: InputData = {
        reference: referenceString,
        fromAddress: tx.from
    }

    return inputData
}

const getFinances = async () => {
    let transfers: Transfer[] = []

    const result = await axios.get(FINANCES_ENDPOINT)

    const data = result.data.result

    // Don't show transfers from FINANCES_ADDRESS, only incomming
    const filtered = data.filter(function(log: any) {
        return log.from !== FINANCES_ADDRESS
    })

    const parsedTransfers: ParsedTransfer[] = filtered.map(function(log: any) {
        var date = new Date(log.timeStamp * 1000)
        var dateString = date.toLocaleDateString()

        let wei = ethers.utils.bigNumberify(log.value)
        const amount = ethers.utils.formatEther(wei) + ' ' + log.tokenSymbol

        const transactionHash = log.hash

        const parsed: ParsedTransfer = {
            time: dateString,
            amount: amount,
            hash: transactionHash
        }

        return parsed
    })

    for (let parsed of parsedTransfers) {
        let inputData = await getFinanceTransactions(parsed.hash)

        const transfer: Transfer = {
            time: parsed.time,
            amount: parsed.amount,
            reference: inputData.reference,
            address: inputData.fromAddress
        }

        transfers.push(transfer)
    }

    return transfers
}

const TransferList = () => {
    const [transfers, setTransfers] = useState([<Loader />])

    useEffect(() => {
        getFinances().then(finances => {
            const list = finances.map(finance => (
                <div className="transferRow" key={finance.address}>
                    <span className="col">{finance.time}</span>
                    <span className="col">
                        <a
                            className="transfer"
                            href={
                                'https://etherscan.io/address/' +
                                finance.address
                            }
                        >
                            {truncate(finance.address, 10)}
                        </a>
                    </span>
                    <span className="col">{finance.amount}</span>
                    <span className="col">{finance.reference}</span>
                </div>
            ))
            setTransfers(list)
        })
    })

    return (
        <div>
            {transfers}
            <style global jsx>{`
                a.transfer {
                    font-family: Tenor Sans;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    color: #fffafa;
                }
                .transferRow {
                    display: flex;
                    justify-content: space-between;
                }
                .col {
                    flex: 1;
                    font-size: 18px;
                    line-height: 40px;
                    font-family: Tenor Sans;
                    font-style: normal;
                    font-weight: normal;
                    color: #fffafa;
                }
                .address {
                    flex-shrink: 0;
                }
            `}</style>
        </div>
    )
}

export default TransferList
