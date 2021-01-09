import { Card, Columns, Column, Section } from 'library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import ImgMaps from 'assets/images/seekil-maps.png';

const Location = () => {
    return (
        <>
            <Section id='location' title='LOCATION' subtitle='Come Visit Us'>
                <Columns className='is-multiline is-centered'>
                    <Column className='is-4'>
                        <Card className='has-background-white'>
                            <p className='is-size-5 has-text-black has-text-weight-bold'>
                                Cirebon
                            </p>
                            <p className='is-uppercase has-text-black has-text-weight-semibold ls-1 is-size-7 mt-5 mb-4'>
                                Contact Details
                            </p>
                            <div className='content'>
                                <ul className='has-text-black is-size-7'>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faMapPin}
                                            size='lg'
                                            color='black'
                                        />
                                        <a
                                            href='https://goo.gl/maps/cjoA31Yuv3e2RYSm7'
                                            target='_blank'
                                            className='ml-1'
                                        >
                                            Jl. Karanganyar Blok Kavling, Desa
                                            Jamblang, Kab. Cirebon
                                        </a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faWhatsapp}
                                            size='lg'
                                            color='black'
                                        />
                                        <a
                                            href='https://api.whatsapp.com/send?phone=6282127051607'
                                            target='_blank'
                                            className='ml-1'
                                        >
                                            0821 2705 1607
                                        </a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faClock}
                                            size='lg'
                                            color='black'
                                        />
                                        <span className='ml-1'>
                                            09.00 - 21.00 WIB
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </Column>
                </Columns>
            </Section>
            <img alt='maps' src={ImgMaps} className='location-maps-image' />
        </>
    );
};

export default Location;
