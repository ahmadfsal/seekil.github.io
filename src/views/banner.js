import CoverBanner from 'assets/images/cover-banner.jpg'
import Navbar from './navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { scrollToView } from 'utils'

const Banner = () => {
    return (
        <section
            className='hero is-fullheight-with-navbar is-dark is-medium has-background'
            id='banner'
        >
            <div className='hero-head'>
                <Navbar />
            </div>

            <img
                alt='Cover Banner'
                className='hero-background'
                src={CoverBanner}
            />

            <div className='hero-body'>
                <div className='container is-fullheight'>
                    <div className='is-flex is-flex-direction-column is-justify-content-center is-align-items-center is-fullheight has-text-centered'>
                        <h1 className='title'>Delivery Laundry Services</h1>
                        <h3 className='subtitle mb-5'>
                            Earn rewards like a free wash, money off your drop
                            off orders and more <br />
                            every time you visit Seekil location.
                        </h3>
                        <a onClick={() => scrollToView('services')} className='is-circle'>
                            <FontAwesomeIcon
                                icon={faAngleDoubleDown}
                                size='lg'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
