import NavLink from './NavLink'

const Navigation = () => (
    <div>
        <span className="nav">
            <NavLink href="/" children={<a>Home</a>} />
            <NavLink href="/prophecy" children={<a>Prophecy</a>} />
            <NavLink href="/voting" children={<a>Voting</a>} />
            <NavLink href="/holders" children={<a>Tokens</a>} />
            <NavLink href="/finances" children={<a>Finances</a>} />
        </span>
        <style jsx>{`
            h1,
            a {
                font-family: 'Tenor Sans';
                font-size: 25px;
                line-height: 40px;
                color: #fffafa;
            }
            a {
                text-decoration: none;
            }
            a:hover {
                opacity: 0.6;
            }
            .selected {
                color: #ff00d6;
            }
            .selected::before {
                background: #ff00d6;
                transform: rotate(-45deg);
                width: 14px;
                height: 14px;
                content: '';
                position: absolute;
                left: 79px;
                margin-top: 13px;
            }
            .nav {
                margin-left: 100px;
                flex: 1;
                display: flex;
                flex-direction: column;
            }
        `}</style>
    </div>
)

export default Navigation
