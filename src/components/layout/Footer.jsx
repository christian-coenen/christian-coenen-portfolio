import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-navigation">

                    <section className="footer-section">
                        <span className="footer-section-title">Contact</span>

                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <a
                                    className="footer-link"
                                    href="https://www.linkedin.com/in/christian-coenen-cc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </li>

                            <li className="footer-list-item">
                                <a
                                    className="footer-link"
                                    href="mailto:christian300507@yahoo.com"
                                >
                                    christian300507@yahoo.com
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section className="footer-section">
                        <span className="footer-section-title">Links</span>

                        <ul className="footer-list">
                            <li className="footer-list-item">
                                <a
                                    className="footer-link"
                                    href="https://www.github.com/christian-coenen"
                                >
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </section>

                </div>

                <div className="footer-copyright">
                    <span className="footer-copyright-text">Christian Coenen | Copyright © 2026</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
