import "./Footer.css";

const Footer = () => {
    return (
        <footer
            className="footer"
            style={{ backgroundImage: "url(/img/Footer.png)" }}
        >
            <div className="redes">
                <a href="https://www.instagram.com/stefanop23/" target="_blank">
                    <img src="/img/instagram.png" alt="instagram" />
                </a>
                <a href="https://twitter.com/Stefano13792703" target="_blank">
                    <img src="/img/twitter.png" alt="twitter" />
                </a>
                <a href="https://github.com/StefanoP21" target="_blank">
                    <img src="/img/github.png" alt="GitHub" />
                </a>
            </div>
            <img src="/img/Logo.png" alt="org" />
            <strong>Desarrollado por Stefano</strong>
        </footer>
    );
};

export default Footer;
