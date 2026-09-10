import { Link } from 'lucide-react'
import Badge from './Badge'
import './ProjectItem.css'

const ProjectItem = ({
    category,
    title,
    year,
    link,
    technologies = [],
    description,
    index,
}) => {
    const number = String(index + 1).padStart(2, "0")

    return (
        <li className="project-item">
            <span className="project-number">{number}</span>

            <div className="project-content">
                <Badge as="span" variant="blue">{category}</Badge>

                <div className="project-heading">
                    <h3 className="project-title">{title}</h3>

                    <span className="project-year">{year}</span>
                </div>

                <ul className="project-technologies-list">
                    {technologies.map((tech) => (
                        <Badge key={tech} as="li" variant="gray">
                            {tech}
                        </Badge>
                    ))}
                </ul>

                {link && (
                    <a className="project-link" href={link}>
                        <Link className="project-link-icon" />
                        <span className="project-link-text">
                            Live demo
                        </span>
                    </a>
                )}

                <p className="project-description">{description}</p>
            </div>
        </li>
    )
}

export default ProjectItem
