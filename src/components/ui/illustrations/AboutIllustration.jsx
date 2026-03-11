import ImageTemplate from '../../../assets/images/illustration-template.jpg'

const AboutIllustration = ({ size = 320 }) => {
    return (
        <img
            src={ImageTemplate}
            alt='Illustration template'
            width={size}
            height={size}
        />
    )
}

export default AboutIllustration
