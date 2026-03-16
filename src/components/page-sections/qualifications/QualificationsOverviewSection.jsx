import QualificationTaskSection from './QualificationTaskSection'
import './QualificationsOverviewSection.css'

const CoreTask1Items = [
    { title: 'B1-K1-W1: Plant werkzaamheden en bewaakt de voortgang', link: '/qualifications/b1-k1-w1', evidenceCount: '0' },
    { title: 'B1-K1-W2: Ontwerpt software', link: '/qualifications/b1-k1-w2', evidenceCount: '0' },
    { title: 'B1-K1-W3: Realiseert (onderdelen van) software', link: '/qualifications/b1-k1-w3', evidenceCount: '0' },
    { title: 'B1-K1-W4: Test software', link: '/qualifications/b1-k1-w4', evidenceCount: '0' },
    { title: 'B1-K1-W5: Doet verbetervoorstellen voor de software', link: '/qualifications/b1-k1-w5', evidenceCount: '0' }
]

const CoreTask2Items = [
    { title: 'B1-K2-W1: Voert overleg', link: '/qualifications/b1-k2-w1', evidenceCount: '0' },
    { title: 'B1-K2-W2: Presenteert het opgeleverde werk', link: '/qualifications/b1-k2-w2', evidenceCount: '0' },
    { title: 'B1-K2-W3: Reflecteert op het werk', link: '/qualifications/b1-k2-w3', evidenceCount: '0' }
]

const QualificationsOverviewSection = () => {
    return (
        <section className="qualifications-overview-section">
            <div className="qualifications-overview-inner">
                <QualificationTaskSection title="B1-K1: Realiseert software" items={CoreTask1Items} />
                <QualificationTaskSection title="B1-K2: Werkt in een ontwikkelteam" items={CoreTask2Items} />
            </div>
        </section>
    )
}

export default QualificationsOverviewSection
