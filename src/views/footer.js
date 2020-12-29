import { Columns, Column } from 'library'
import { scrollToView } from 'utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { navbarMenus } from 'constant'
import Logo from 'assets/images/seekil-logo 2.png'

const Footer = () => {
    return (
        <footer className='footer has-background-black py-6 px-6'>
            <Columns>
                <Column className='is-2'></Column>
                <Column>
                    <a onClick={() => scrollToView('banner')}>
                        <img
                            src={Logo}
                            alt='logo'
                            style={{
                                objectFit: 'contain',
                                width: 150
                            }}
                        />
                    </a>
                    <p className='mt-3 has-text-white is-size-6'>
                        &copy; 2020 Seekil Shoes Clean & Care <br />
                        All Right Reserved
                    </p>
                </Column>

                <Column className='is-2'>
                    <ul>
                        {navbarMenus.map((item, index) => (
                            <li key={index}>
                                <a
                                    className='has-text-white'
                                    onClick={() => scrollToView(item.elementId)}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Column>

                <Column>
                    <p className='has-text-white is-size-5 has-text-weight-bold'>Follow us:</p>
                    <Columns className='mt-3'>
                        <Column>
                            <a
                                className='footer-icon-social'
                                href='https://www.instagram.com/seekil.id/'
                                target='_blank'
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    color='white'
                                    // style={{
                                    //     height: 24,
                                    //     width: 24
                                    // }}
                                />
                            </a>
                        </Column>
                    </Columns>
                </Column>
            </Columns>
        </footer>
    )
}

export default Footer
