import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import './DrawerNavigation.css'

const DrawerNavigation = ({ isOpen, onClose }) => {
    return (
        <div className={`drawer-navigation ${isOpen ? 'is-open' : ''}`}>
            <div className='drawer-navigation-overlay' onClick={onClose} />

            <div className='drawer-navigation-panel'>
                <div>
                    {/* TODO: add close button for drawer navigation */}
                    <X className='close-' />

                </div>

                <ul className='drawer-navigation-list'>
                    <li className='drawer-navigation-link'>
                        <NavLink to='/home' onClick={onClose}>Home</NavLink>
                    </li>

                    <li className='drawer-navigation-link'>
                        <NavLink to='/art' onClick={onClose}>Art</NavLink>
                    </li>

                    <li className='drawer-navigation-link'>
                        <NavLink to='/collections' onClick={onClose}>Collections</NavLink>
                    </li>

                    <li className='drawer-navigation-link'>
                        <NavLink to='/about' onClick={onClose}>About</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DrawerNavigation
