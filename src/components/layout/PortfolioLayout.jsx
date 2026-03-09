import Navbar from './Navbar'
import Footer from './Footer'

const PortfolioLayout = ({ children }) => {
    return (
        <div className='portfolio-layout'>
            <Navbar />
            <main className='portfolio-layout-content'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default PortfolioLayout
