import CoverBanner from 'assets/images/cover-banner.jpg'
import Navbar from './navbar'

const Banner = () => {
    return (
        <section
            className='hero is-fullheight-with-navbar is-primary is-medium is-fullheight-with-navbar has-background'
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
                        <h3 className='subtitle'>
                            Earn rewards like a free wash, money off your drop
                            off orders and more <br />
                            every time you visit Seekil location.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
