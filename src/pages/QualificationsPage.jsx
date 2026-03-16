import PortfolioLayout from '../components/layout/PortfolioLayout'
import QualificationsIntroSection from '../components/page-sections/qualifications/QualificationsIntroSection'
import QualificationsOverviewSection from '../components/page-sections/qualifications/QualificationsOverviewSection'

const QualificationsPage = () => {
    return (
        <PortfolioLayout>
            <QualificationsIntroSection />
            <QualificationsOverviewSection />
        </PortfolioLayout>
    )
}

export default QualificationsPage
