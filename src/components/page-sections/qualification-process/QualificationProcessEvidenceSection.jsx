import { useParams } from 'react-router-dom'
import { qualificationProcesses } from '../../../data/qualificationProcesses'
import './QualificationProcessEvidenceSection.css'

const QualificationProcessEvidenceSection = () => {
    const { processId } = useParams();

    const process = qualificationProcesses[processId]

    return (
        <section className="qualification-process-process-section">
            <h3 className="qualification-process-process-header">Bewijsstukken</h3>

        </section>
    )
}

export default QualificationProcessEvidenceSection
