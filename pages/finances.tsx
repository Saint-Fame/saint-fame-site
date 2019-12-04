import { NextPage } from 'next'
import Layout from '../components/Layout'
import TransferList from '../components/finances/TransferList'

const Finances: NextPage<{}> = () => {
    return (
        <div>
            <Layout>
                <div className="title topPadding">Transfers</div>
                <TransferList />
            </Layout>
            <style jsx>{`
                ul {
                    font-family: Tenor Sans;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 18px;
                    line-height: 40px;
                    color: #fffafa;
                    list-style-type: none;
                    padding: 0;
                }
                .title {
                    font-family: Tenor Sans;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 40px;
                    color: ##fffafa;
                    opacity: 0.5;
                }
                .topPadding {
                    padding-top: 50px;
                }
            `}</style>
        </div>
    )
}

export default Finances
