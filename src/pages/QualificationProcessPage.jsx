import { useParams } from 'react-router-dom'
import { qualificationProcesses } from '../data/qualificationProcesses'
import PortfolioLayout from '../components/layout/PortfolioLayout'
import QualificationProcessIntroSection from '../components/page-sections/qualification-process/QualificationProcessIntroSection'
import QualificationProcessEvidenceSection from '../components/page-sections/qualification-process/QualificationProcessEvidenceSection'
import NotFoundPage from './NotFoundPage'

const QualificationProcessPage = () => {
    const { processId } = useParams()

    const process = qualificationProcesses[processId]

    if (!process) {
        return (
            <NotFoundPage />
        )
    }

    return (
        <PortfolioLayout>
            <QualificationProcessIntroSection title={process.title} description={process.description} />
            <QualificationProcessEvidenceSection evidence={process.evidence} />
        </PortfolioLayout>
    )
}

export default QualificationProcessPage
