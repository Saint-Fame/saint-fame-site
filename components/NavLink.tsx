import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const NavLinkAnchor = styled.a<{selected: boolean}>`
    font-family: 'Tenor Sans';
    font-size: 25px;
    line-height: 40px;
    color: #fffafa;
    text-decoration: none;
    
    &:hover {
        opacity: 0.6;
        text-decoration: underline;
    }
    
    &:active {
        text-decoration: underline;
    }
    
    &:visited {
        text-decoration: none;
    }
    
    ${props => props.selected ? `
        color: #ff00d6;
        
        &::before {
            background: #ff00d6;
            transform: rotate(-45deg);
            width: 14px;
            height: 14px;
            content: '';
            position: absolute;
            left: 79px;
            margin-top: 13px;
            
            @media screen and (max-device-width: 480px) and (orientation: portrait) {
                left: 7px;
            }
        }
    ` : ''}
`

type NavLinkProps = {
    href: string
    children: string
}

const NavLink = ({ href, children }: NavLinkProps) => {
    const router = useRouter()
    const [selected, setSelected] = useState<boolean>(false)

    useEffect(() => {
        setSelected(router.pathname === href)
    }, [router.pathname])

    return (
        <Link href={href}>
            <NavLinkAnchor selected={selected}>
                {children}
            </NavLinkAnchor>
        </Link>
    )
}
export default NavLink
