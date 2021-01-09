import { useEffect, useState } from 'react';
import { navbarMenus } from 'constant';
import { scrollToView } from 'utils';
import classnames from 'classnames';
import Logo from 'assets/images/seekil-logo-white.png';

const Navbar = () => {
    const [isInTop, setIsInTop] = useState(true);
    const [isActiveBurger, setIsActiveBurger] = useState(false);

    const navBurgerClasses = classnames(
        'navbar-burger has-text-white',
        isActiveBurger ? 'is-active' : ''
    );

    const navBurgerMenuClasses = classnames(
        'navbar-menu has-animation-transition',
        isActiveBurger ? 'is-active has-background-black' : ''
    );

    const navbarClasses = classnames(
        'navbar is-spaced is-fixed-top has-animation-transition',
        isInTop && 'has-border-bottom',
        !isInTop && 'has-background-black',
        isActiveBurger ? 'has-background-black' : ''
    );

    const handleScroll = () => {
        let scrolled = document.scrollingElement.scrollTop;

        if (scrolled >= 120) {
            if (isInTop) setIsInTop(false);
        } else {
            if (!isInTop) setIsInTop(true);
        }

        setIsActiveBurger(false);
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [isInTop]);

    return (
        <nav
            className={navbarClasses}
            role='navigation'
            aria-label='main navigation'
        >
            <div className='navbar-brand'>
                <a
                    className='navbar-item brand'
                    onClick={() => scrollToView('banner')}
                >
                    <img src={Logo} className='navbar-logo' alt='logo' />
                </a>
                <a
                    role='button'
                    className={navBurgerClasses}
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'
                    onClick={() => setIsActiveBurger(!isActiveBurger)}
                >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>

            <div id='navbarBasicExample' className={navBurgerMenuClasses}>
                <div className='navbar-end'>
                    {navbarMenus.map((item, index) => (
                        <a
                            key={index}
                            className='navbar-item has-text-white has-text-weight-semibold'
                            onClick={() => scrollToView(item.elementId)}
                        >
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
