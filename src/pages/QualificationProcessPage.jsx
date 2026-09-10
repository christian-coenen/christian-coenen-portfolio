import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { qualificationProcesses } from '../data/qualificationProcesses'
import { MEDIA_API_URL } from '../config/media'
import PortfolioLayout from '../components/layout/PortfolioLayout'
import QualificationProcessIntroSection from '../components/page-sections/qualification-process/QualificationProcessIntroSection'
import QualificationProcessEvidenceSection from '../components/page-sections/qualification-process/QualificationProcessEvidenceSection'
import NotFoundPage from './NotFoundPage'

const normalizeFilename = (filename) =>
    filename
        .normalize('NFC')
        .replace(/\u00A0/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()

const QualificationProcessPage = () => {
    const { processId } = useParams()

    const [media, setMedia] = useState({
        videos: [],
        images: [],
        documents: [],
    })

    const process = qualificationProcesses[processId]

    useEffect(() => {
        const fetchMedia = async () => {
            try {
                const response = await fetch(MEDIA_API_URL)

                if (!response.ok) {
                    throw new Error('Failed to fetch media')
                }

                const data = await response.json()

                setMedia(data)
            } catch (error) {
                console.error('Media API error:', error)
            }
        }

        fetchMedia()
    }, [])

    if (!process) {
        return <NotFoundPage />
    }

    const evidence = process.evidence
        .map((item) => {
            const mediaFile = media[item.mediaType]?.find(
                (file) =>
                    normalizeFilename(file.name) ===
                    normalizeFilename(item.file)
            )

            if (!mediaFile) {
                return null
            }

            return {
                title: item.title,
                link: mediaFile.url,
                type: item.type,
            }
        })
        .filter(Boolean)

    return (
        <PortfolioLayout>
            <QualificationProcessIntroSection
                title={process.title}
                description={process.description}
            />

            <QualificationProcessEvidenceSection
                evidence={evidence}
            />
        </PortfolioLayout>
    )
}

export default QualificationProcessPage
