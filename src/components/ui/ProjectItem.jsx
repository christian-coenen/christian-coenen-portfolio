import { NavLink } from 'react-router-dom'
import './ProjectItem.css'

const ProjectItem = ({ title, description, image, link }) => {
    return (
        <li className="project-item">
            <NavLink
                to={link}
            >
                <div className="project-content">
                    <div className="project-image">
                        <img src={image} alt={title} draggable={false} />
                    </div>

                    <div className="project-text">
                        <h3 className="project-title">{title}</h3>
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default ProjectItem
