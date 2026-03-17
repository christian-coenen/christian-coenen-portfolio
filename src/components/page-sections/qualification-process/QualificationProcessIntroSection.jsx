import { useParams } from 'react-router-dom'
import { qualificationProcesses } from '../../../data/qualificationProcesses'
import './QualificationProcessIntroSection.css'

const QualificationProcessIntroSection = () => {
    const { processId } = useParams();

    const process = qualificationProcesses[processId]

    if (!process) {
        return <div>Werkproces niet gevonden.</div>
    }

    return (
        <section className="qualification-process-intro-section">
            <h2 className="qualification-process-intro-header">{process.title}</h2>

            <p className="qualification-process-intro-paragraph">{process.intro}</p>
        </section>
    )
}

export default QualificationProcessIntroSection
