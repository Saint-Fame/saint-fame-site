const Loader = () => (
    <div>
        <span className="loader" key="loader">
            <h1>Loading...</h1>
        </span>
        <style jsx>{`
            h1 {
                font-family: 'Tenor Sans';
                font-size: 25px;
                line-height: 40px;
                color: #fff;
            }
            .loader {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
            }
        `}</style>
    </div>
)

export default Loader
