import { qualificationProcesses } from '../../../data/qualificationProcesses'
import QualificationTaskSection from './QualificationTaskSection'
import './QualificationsOverviewSection.css'

const buildItemsByCoreTask = (coreTask) => {
    return Object.entries(qualificationProcesses)
        .filter(([_, process]) => process.coreTask === coreTask)
        .map(([id, process]) => ({
            title: process.title,
            link: `/qualifications/${id}`,
            evidenceCount: process.evidence?.length || 0
        }))
}

const QualificationsOverviewSection = () => {
    const coreTask1Items = buildItemsByCoreTask('b1-k1')
    const coreTask2Items = buildItemsByCoreTask('b1-k2')

    return (
        <section className="qualifications-overview-section">
            <div className="qualifications-overview-inner">
                <QualificationTaskSection title="B1-K1: Realiseert software" items={coreTask1Items} />
                <QualificationTaskSection title="B1-K2: Werkt in een ontwikkelteam" items={coreTask2Items} />
            </div>
        </section>
    )
}

export default QualificationsOverviewSection
