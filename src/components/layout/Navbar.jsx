import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import BrandLogo from '../../assets/icons/BrandLogo'
import HamburgerButton from '../features/navigation/HamburgerButton'
import DrawerNavigation from '../features/navigation/DrawerNavigation'
import './Navbar.css'

const Navbar = () => {
    const [isDrawerNavigationOpen, setIsDrawerNavigationOpen] = useState(false)

    const toggleDrawerNavigation = () => {
        setIsDrawerNavigationOpen(prev => !prev)
    }

    const closeDrawerNavigation = () => {
        setIsDrawerNavigationOpen(false)
    }

    return (
        <nav className='navbar'>
            <div className='navbar-inner'>
                <div className='navbar-brand'>
                    <Link to='/home' className='navbar-navigation-item-brand'>
                        <BrandLogo />
                        <span className='navbar-logo-text'>Christian Coenen</span>
                    </Link>
                </div>

                {/* TODO: rename className below */}
                <div className='navbar-right'>
                    <div className='navbar-navigation'>
                        <ul className='navbar-navigation-list'>
                            <li className='navbar-navigation-link'>
                                <NavLink
                                    to='/home'
                                    className={({ isActive }) =>
                                        isActive
                                            ? "navbar-navigation-link is-active"
                                            : "navbar-navigation-link"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className='navbar-navigation-link'>
                                <NavLink to='/art'>Art</NavLink>
                            </li>

                            <li className='navbar-navigation-link'>
                                <NavLink to='/collections'>Collections</NavLink>
                            </li>
                            
                            <li className='navbar-navigation-link'>
                                <NavLink to='/about'>About</NavLink>
                            </li>
                        </ul>

                        <div className='navbar-hamburger-button'>
                            <HamburgerButton
                                isOpen={isDrawerNavigationOpen}
                                onToggle={toggleDrawerNavigation}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <DrawerNavigation
                isOpen={isDrawerNavigationOpen}
                onClose={closeDrawerNavigation}
            />
        </nav>
    )
}

export default Navbar
