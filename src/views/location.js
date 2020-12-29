import { Card, Columns, Column, Section } from 'library'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
    faLocationArrow,
    faCalendarTimes
} from '@fortawesome/free-solid-svg-icons'

const Location = () => {
    return (
        <Section id='location' title='LOCATION' subtitle='Come Visit Us'>
            <Columns className='is-multiline is-centered is-variable is-8'>
                <Column className='is-narrow'>
                    <Card className='has-background-black'>
                        <p className='is-size-5 has-text-white has-text-weight-bold'>
                            Cirebon
                        </p>
                        <p className='is-uppercase has-text-white has-text-weight-semibold ls-1 is-size-7 mt-5 mb-4'>
                            Contact Details
                        </p>
                        <div className='content'>
                            <ul className='has-text-white is-size-7'>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faLocationArrow}
                                        size='sm'
                                        color='white'
                                    />
                                    <a
                                        href='https://goo.gl/maps/cjoA31Yuv3e2RYSm7'
                                        target='_blank'
                                        className='ml-1'
                                    >
                                        Blok Kavling Karang Anyar, Desa Jamblang{' '}
                                        <br />
                                        Kab Cirebon
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faWhatsapp}
                                        size='sm'
                                        color='white'
                                    />
                                    <a
                                        href='https://api.whatsapp.com/send?phone=6282127051607'
                                        target='_blank'
                                        className='ml-1'
                                    >
                                        (+62) 821 2705 1607
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faCalendarTimes}
                                        size='sm'
                                        color='white'
                                    />
                                    <span className='ml-1'>
                                        10.00 - 21.00 WIB
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Card>
                </Column>
                <Column className='is-narrow'>
                    <Card className='has-background-white'>
                        <p className='is-size-5 has-text-black has-text-weight-bold'>
                            Jakarta
                        </p>
                        <p className='is-uppercase has-text-black has-text-weight-semibold ls-1 is-size-7 mt-5 mb-4'>
                            Contact Details
                        </p>
                        <div className='content'>
                            <ul className='has-text-black is-size-7'>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faLocationArrow}
                                        size='sm'
                                        color='black'
                                    />
                                    <a
                                        href='https://goo.gl/maps/cjoA31Yuv3e2RYSm7'
                                        target='_blank'
                                        className='ml-1'
                                    >
                                        Jl. Dr Susilo IIB No.28, Grogol
                                        Petamburan
                                        <br />
                                        Kota Jakarta barat
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faWhatsapp}
                                        size='sm'
                                        color='black'
                                    />
                                    <a
                                        href='https://api.whatsapp.com/send?phone=6282127051607'
                                        target='_blank'
                                        className='ml-1'
                                    >
                                        (+62) 821 2705 1607
                                    </a>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faCalendarTimes}
                                        size='sm'
                                        color='black'
                                    />
                                    <span className='ml-1'>
                                        10.00 - 21.00 WIB
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Card>
                </Column>
            </Columns>
        </Section>
    )
}

export default Location
