import { NavLink } from 'react-router-dom'
import PortfolioLayout from '../components/layout/PortfolioLayout.jsx'
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <PortfolioLayout>
            <section className="not-found-section">
                <div className="not-found-inner">
                    <h1 className="not-found-title">
                        404
                    </h1>

                    <h2 className="not-found-header">
                        Pagina niet gevonden
                    </h2>

                    <p className="not-found-paragraph">
                        De pagina die u zoekt bestaat niet of is verplaatst.
                    </p>


                    <NavLink to="/" className="not-found-link">
                        Terug naar home
                    </NavLink>
                </div>
            </section>
        </PortfolioLayout>
    )
}

export default NotFoundPage
