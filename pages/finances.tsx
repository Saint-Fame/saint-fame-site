import { NextPage } from 'next'
import Layout from '../components/Layout'
import TransferList from '../components/finances/TransferList'

const Finances: NextPage<{}> = () => {
    return (
        <div>
            <Layout>
                <div className="title">Transfers</div>
                <TransferList />
            </Layout>
            <style jsx>{`
                .title {
                    font-family: Tenor Sans;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 40px;
                    color: ##fffafa;
                    opacity: 0.5;
                }
            `}</style>
        </div>
    )
}

export default Finances
