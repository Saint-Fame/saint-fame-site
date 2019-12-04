import { NextPage } from 'next'
import Layout from '../components/Layout'
import TotalSupply from '../components/holders/TotalSupply'
import HoldersList from '../components/holders/HoldersList'

const Holders: NextPage<{}> = () => {
    return (
        <div>
            <Layout>
                <TotalSupply />
                <div className="title topPadding">Ownership distribution</div>
                <span className="tableHeader">
                    <span className="title tableHeaderLeft">Holder</span>
                    <span className="title tableHeaderRight rightAlignText">
                        Balance
                    </span>
                </span>
                <HoldersList />
            </Layout>
            <style global jsx>{`
                .title {
                    font-family: Tenor Sans;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 40px;
                    color: ##fffafa;
                    opacity: 0.5;
                }

                .tableHeader {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                }
                .tableHeaderLeft,
                .tableHeaderRight {
                    flex-basis: 50%;
                }
                .rightAlignText {
                    text-align: right;
                }
                .topPadding {
                    padding-top: 50px;
                }
            `}</style>
        </div>
    )
}

export default Holders
