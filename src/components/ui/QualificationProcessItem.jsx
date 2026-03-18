import { NavLink } from 'react-router-dom'
import { ClipboardCheck } from 'lucide-react'
import './QualificationProcessitem.css'

const QualificationProcessItem = ({ title, link, evidenceCount }) => {
    return (
        <li className="qualification-process-item">
            <NavLink
                to={link}
            >
                <div className="qualification-process-item-content">
                    <span className="qualification-process-item-title">{title}</span>

                    <div className="qualification-process-item-evidence-count">
                        <ClipboardCheck className="qualification-process-item-evidence-count-icon" />
                        <span className="qualification-process-item-evidence-count-text">{evidenceCount}</span>
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default QualificationProcessItem
