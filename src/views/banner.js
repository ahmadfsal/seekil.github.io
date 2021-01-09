import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { scrollToView } from 'utils';
import CoverBanner from 'assets/images/cover-banner.jpg';
import Navbar from './navbar';

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
                        <h1 className='title'>
                            Premium Shoes Laundry and Treatment
                        </h1>
                        <h3 className='subtitle mb-5 mt-1 has-text-weight-semibold'>
                            Dengan alat dan bahan yang khusus untuk sepatu
                            sehingga <br /> tidak merusak material sepatu dan
                            shoe technician <br />
                            yang terlatih dan bersertifikat.
                        </h3>
                        <a
                            onClick={() => scrollToView('services')}
                            className='is-circle'
                        >
                            <FontAwesomeIcon
                                icon={faAngleDoubleDown}
                                size='lg'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
