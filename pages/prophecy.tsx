import { NextPage } from 'next'
import Layout from '../components/Layout'
import React from 'react'
import Loader from '../components/Loader'
// @ts-ignore
import RetinaImage from 'react-retina-image'
import styled from 'styled-components'

const Prophecy: React.FunctionComponent = () => {
    return (
        <Layout>
            <Wrapper>
                <RetinaImage
                    src={require('../public/assets/hand/hand.png')}
                    style={{ marginTop: 24 }}
                />
                <Title>PROPHECY</Title>
                <Paragraph>
                    SAINT FAME is a fashion house that is owned by the internet.
                </Paragraph>
                <Paragraph>
                    It is the first of its kind. Nothing like this has existed
                    before.
                </Paragraph>
                <Paragraph>
                    Why has nothing like this existed before? Because its
                    technological foundations only emerged within the past year.
                </Paragraph>
                <Paragraph>
                    Ethereum smart contracts enable and enforce collective
                    decision making, allowing anyone in the world to
                    participate—both creatively and financially. The
                    organization is open to everyone, and SAINT FAME will hold
                    the pooled capital of its disciples. Disciples will vote on
                    what to do with that capital.
                </Paragraph>
                <Paragraph>
                    Like any community on the internet, SAINT FAME can scale to
                    billions of people. Unlike communities on the internet,
                    SAINT FAME can scale to billions in capital. It aligns
                    incentives for participants by giving them real ownership in
                    their creativity.
                </Paragraph>
                <Paragraph>
                    This collective creation and ownership is uniquely enabled
                    by Ethereum, a new stack for internet-native economic
                    collaboration that is independent of any legal entity or
                    jurisdiction, making it accessible to all.
                </Paragraph>
                <Paragraph>
                    Anyone in the world can view, and become a part of the inner
                    workings of SAINT FAME. Anyone can observe or potentially
                    become a DISCIPLE who hold <Purple>$AINT</Purple>. Anyone
                    can create or participate in a vote on what the organization
                    should create under its <Brand>brand</Brand>.
                </Paragraph>
                <Paragraph>Buy why do any of this?</Paragraph>
                <Paragraph>
                    To prove that it is possible. If it is possible, then we
                    have shown that it is possible for the internet to
                    collectively create—and crucially—own culture itself. It
                    stands to take back culture from corporations and platforms.
                    The world in which this is possible is in fact a new
                    paradigm for global, collective creation. That is what SAINT
                    FAME wants to build for.
                </Paragraph>
                <Paragraph>
                    To take part follow us on{' '}
                    <BigUnderline>
                        <a
                            target="_blank"
                            href="http://twitter.com/saintfamedao"
                        >
                            Twitter
                        </a>
                    </BigUnderline>
                    , join our{' '}
                    <BigUnderline>
                        <a target="_blank" href="https://discord.gg/rUe5bkg">
                            Discord
                        </a>
                    </BigUnderline>
                    , and spread the WORD of SAINT FAME.
                </Paragraph>
                <Block>
                    <Paragraph>SAINTFAME.eth</Paragraph>
                    <Paragraph>
                        0x08ac31Dd93c16F1f6c4A0FAE540bA1aD52f581d0
                    </Paragraph>
                </Block>
            </Wrapper>
        </Layout>
    )
}

const Purple = styled.span`
    font-weight: bold;
    color: #e500ff;
`

const Brand = styled.span`
    font-weight: bold;
    color: #00ff37;
`

const Title = styled.h1`
    font-size: 54px;
    font-weight: 400;
    font-style: normal;
    color: #ffffff;
    font-family: 'Tenor Sans';
`

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 200px;
`

const Paragraph = styled.section`
    font-size: 22px;
    padding-bottom: 34px;
    line-height: 35px;
    text-align: center;
`

const Block = styled.section`
    padding-top: 35px;
    padding-left: 135px;
    padding-right: 135px;
    background-color: #e500ff;
    font-weight: bold;
`

const BigUnderline = styled.a`
    text-decoration: none;
    color: rgb(229, 0, 255);
    padding-bottom: 6px;
    background: linear-gradient(
        to right,
        rgb(229, 0, 255) 0%,
        rgb(229, 0, 255) 100%
    );
    background-size: 1px 6px;
    background-position: 0 100%;
    background-repeat: repeat-x;

    &:hover {
        text-decoration: none;
    }
    &:active {
        text-decoration: none;
    }
`

export default Prophecy
