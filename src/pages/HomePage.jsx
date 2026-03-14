import PortfolioLayout from '../components/layout/PortfolioLayout'
import HeroSection from '../components/page-sections/HeroSection'
import AboutSection from '../components/page-sections/AboutSection'
import SkillsSection from '../components/page-sections/SkillsSection'

const HomePage = () => {
    return (
        <PortfolioLayout>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </PortfolioLayout>
    )
}

export default HomePage
