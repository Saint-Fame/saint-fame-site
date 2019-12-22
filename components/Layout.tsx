import * as React from 'react'
import Navigation from './Navigation'
import Head from 'next/head'
// @ts-ignore
import RetinaImage from 'react-retina-image'
import styled from "styled-components";

type LayoutProps = {
    title?: string
}

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  padding-top: 50px;
  width: 80%;
`;

const SiteContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentHeader = styled.div`
  height: 40px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
    <div>
        <Head>
            <link
                rel="stylesheet"
                type="text/css"
                href="//fonts.googleapis.com/css?family=Tenor+Sans"
            />
            <title>SAINT FAME</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <ContentHeader>
            <RetinaImage
                src={require('../public/assets/logo/logo.png')}
                style={{ marginTop: 24 }}
            />
        </ContentHeader>
        <Site>
            <Navigation />
            <SiteContent>
                {children}
            </SiteContent>
        </Site>
        <style global jsx>{`
            body {
                background: black;
                color: #fff;
                font-family: Tenor Sans;
            }
        `}</style>
    </div>
)
export default Layout
