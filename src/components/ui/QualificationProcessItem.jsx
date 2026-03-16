import { NavLink } from 'react-router-dom'
import { File } from 'lucide-react'
import './QualificationProcessItem.css'

const QualificationProcessItem = ({ title, link, evidenceCount }) => {
    return (
        <li className="qualification-process-item">
            <NavLink
                to={link}
            >
                <div className="qualification-process-item-content">
                    <span className="qualification-process-item-title">{title}</span>

                    <div className="qualification-process-item-evidence-count">
                        <File 
                        
                        />
                        <span>{evidenceCount}</span>
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default QualificationProcessItem
