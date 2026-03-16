import PortfolioLayout from '../components/layout/PortfolioLayout'
import HeroSection from '../components/page-sections/home/HeroSection'
import AboutSection from '../components/page-sections/home/AboutSection'
import SkillsSection from '../components/page-sections/home/SkillsSection'

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
