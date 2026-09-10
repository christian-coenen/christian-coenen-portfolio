import './Badge.css'

const Badge = ({ children, variant = "gray", as: Element = "span" }) => {
  return (
    <Element className={`badge badge-${variant}`}>
      {children}
    </Element>
  )
}

export default Badge
