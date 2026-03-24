import { Link } from 'lucide-react'
import './ProjectDetailSection.css'

const ProjectDetailSection = ({ title, description, image, link, technologies = [] }) => {
    return (
        <section className="project-detail-section">
            <div className="project-detail-inner">
                <div className="project-detail-content">
                    <h2 className="project-detail-header">{title}</h2>

                    <p className="project-detail-paragraph">{description}</p>
                </div>

                <div className="project-detail-aside">
                    <div className="project-detail-aside-image">
                        <img src={image} alt={title} draggable={false} />
                    </div>

                    {link && (
                        <a className="project-detail-aside-link" href={link}>
                            <Link className="project-detail-aside-link-icon" />
                            <span className="project-detail-aside-link-text" >Live demo</span>
                        </a>
                    )}

                    < h3 className="project-detail-aside-list-title">
                        Technologieën
                    </h3>

                    <ul className="project-detail-aside-list">
                        {technologies?.map((tech) => (
                            <li key={tech} className="project-detail-aside-list-item">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default ProjectDetailSection
