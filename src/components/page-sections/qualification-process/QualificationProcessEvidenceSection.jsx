import QualficationEvidenceItem from '../../ui/QualificationEvidenceItem'
import './QualificationProcessEvidenceSection.css'

const QualificationProcessEvidenceSection = ({ evidence = [] }) => {
    return (
        <section className="qualification-process-evidence-section">
            <div className="qualification-process-evidence-inner">
                <h3 className="qualification-process-evidence-header">Bewijsstukken</h3>

                {evidence.length === 0 ? (
                    <p className="qualification-process-evidence-empty">
                        Geen bewijsstukken beschikbaar.
                    </p>
                ) : (
                    <ul className="qualifications-process-evidence-list">
                        {evidence.map((item, index) => (
                            <QualficationEvidenceItem
                                key={index}
                                title={item.title}
                                link={item.link}
                                type={item.type}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )
}

export default QualificationProcessEvidenceSection
