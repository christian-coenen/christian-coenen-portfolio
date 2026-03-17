import PortfolioLayout from '../components/layout/PortfolioLayout'
import QualificationProcessIntroSection from '../components/page-sections/qualification-process/QualificationProcessIntroSection'
import QualificationProcessEvidenceSection from '../components/page-sections/qualification-process/QualificationProcessEvidenceSection'

const QualificationProcessPage = () => {
    return (
        <PortfolioLayout>
            <QualificationProcessIntroSection />
            <QualificationProcessEvidenceSection />
        </PortfolioLayout>
    )
}

export default QualificationProcessPage
