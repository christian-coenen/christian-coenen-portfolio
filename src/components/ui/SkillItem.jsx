import './SkillItem.css'

const SkillItem = ({ iconClass, title, description }) => {
    return (
        <div className="skill-item">
            <div className="skill-icon">
                <i className={iconClass}></i>
            </div>

            <div className="skill-content">
                <h3 className="skill-title">{title}</h3>
                {description && <p className="skill-description">{description}</p>}
            </div>
        </div>
    )
}

export default SkillItem
