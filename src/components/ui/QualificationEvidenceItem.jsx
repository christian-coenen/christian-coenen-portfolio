import { File, FileArchive, FileImage, FileVideoCamera, FileVolume, FileSpreadsheet, FileText } from 'lucide-react'
import './QualficationEvidenceitem.css'


const fileIcons = {
    document: <FileText className="qualification-evidence-item-icon" />,
    compressed: <FileArchive className="qualification-evidence-item-icon" />,
    spreadsheet: <FileSpreadsheet className="qualification-evidence-item-icon" />,
    image: <FileImage className="qualification-evidence-item-icon" />,
    video: <FileVideoCamera className="qualification-evidence-item-icon" />,
    audio: <FileVolume className="qualification-evidence-item-icon" />,
    default: <File className="qualification-evidence-item-icon" />
}

const QualficationEvidenceItem = ({ title, link, type }) => {
    const icon = fileIcons[type] || fileIcons.default

    return (
        <li className="qualification-evidence-item">
            <a
                href={link}
                download
            >
                <div className="qualification-evidence-content">
                    {icon}
                    <span className="qualification-evidence-title">{title}</span>
                </div>
            </a>
        </li>
    )
}

export default QualficationEvidenceItem
