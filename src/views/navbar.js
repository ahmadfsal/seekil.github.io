import { useEffect, useState } from 'react'
import { navbarMenus } from 'constant'
import { scrollToView } from 'utils'
import classnames from 'classnames'
import Logo2 from 'assets/images/seekil-logo 2.png'

const Navbar = () => {
    const [isInTop, setIsInTop] = useState(true)
    const navbarClasses = classnames(
        'navbar is-spaced is-fixed-top',
        isInTop && 'has-border-bottom',
        !isInTop && 'has-background-black',
    )

    const handleScroll = () => {
        let scrolled = document.scrollingElement.scrollTop

        if (scrolled >= 120) {
            if (isInTop) setIsInTop(false)
        } else {
            if (!isInTop) setIsInTop(true)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [isInTop])

    return (
        <nav
            className={navbarClasses}
            style={{
                transition: 'ease-in',
                transitionDuration: 1
            }}
            role='navigation'
            aria-label='main navigation'
        >
            <div className='navbar-brand'>
                <a className='navbar-item' onClick={() => scrollToView('banner')}>
                    <img src={Logo2} className='logo' alt='logo' />
                </a>
                <a
                    role='button'
                    className='navbar-burger'
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'
                >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>

            <div id='navbarBasicExample' className='navbar-menu'>
                <div className='navbar-start'>
                    {navbarMenus.map((item, index) => (
                        <a
                            key={index}
                            className='navbar-item has-text-white'
                            onClick={() => scrollToView(item.elementId)}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
