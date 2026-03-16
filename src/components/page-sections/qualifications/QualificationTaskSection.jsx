import QualificationProcessItem from '../../ui/QualificationProcessItem'
import './QualificationTaskSection.css'

const QualificationTaskSection = ({ title, items, evidenceCount }) => {
    return (
        <section className="qualification-task-section">
            <span className="qualification-task-section-title">{title}</span>

            <ul className="qualification-task-list">
                {items && items.map((item, index) => (
                    <QualificationProcessItem key={index} title={item.title} link={item.link} evidenceCount={item.evidenceCount} />
                ))}
            </ul>
        </section>
    )
}

export default QualificationTaskSection
