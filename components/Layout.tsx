import * as React from 'react'
import Navigation from './Navigation'
import Head from 'next/head'
// @ts-ignore
import RetinaImage from 'react-retina-image'

type LayoutProps = {
    title?: string
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
    <div>
        <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Tenor+Sans"
        />
        <Head>
            <title>SAINT FAME</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <span className="content-header flex-center">
            <RetinaImage
                src={require('../public/assets/logo/logo.png')}
                style={{ marginTop: 24 }}
            />
        </span>
        <span className="site">
            <span className="site-nav">
                <Navigation />
            </span>
            <span className="site-content">
                <span className="site-topic">{children}</span>
            </span>
        </span>
        <style global jsx>{`
            body {
                background: black;
                color: #fff;
                font-family: Tenor Sans;
            }
            a {
                font-family: Tenor Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 40px;
                color: #fffafa;
            }
            a:link {
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }
            a:visited {
                text-decoration: none;
            }
            a:active {
                text-decoration: underline;
            }
            h1 {
                color: #fff;
            }

            // # PAGE STRUCTURE
            .site {
                display: flex;
                min-height: 100vh;
                padding-top: 50px;
                width: 80%;
            }

            .site-nav {
                width: 300px;
                margin-right: 100px;
            }

            .site-content {
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            .content-header {
                height: 40px;
                margin-top: 60px;
            }

            .content-topic {
                flex-grow: 1;
            }

            .flex-center {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>
    </div>
)
export default Layout
