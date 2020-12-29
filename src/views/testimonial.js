import { Card, Columns, Column, Section } from 'library'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Testimonial = () => {
    return (
        <Section
            id='testimonial'
            title='TESTIMONIAL'
            subtitle='What People Say'
        >
            <Columns className='is-centered'>
                {[0, 1, 2].map((item, index) => (
                    <Column key={index} className='is-one-quarter'>
                        <Card>
                            <div className='media'>
                                <div className='media-left'>
                                    <figure className='image is-48x48'>
                                        <img
                                            className='is-rounded'
                                            src='https://bulma.io/images/placeholders/96x96.png'
                                            alt='Placeholder image'
                                        />
                                    </figure>
                                </div>
                                <div className='media-content'>
                                    <p className='title is-4'>John Smith</p>
                                    <p className='subtitle is-6'>@johnsmith</p>
                                </div>
                            </div>

                            <div className='content'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Phasellus nec iaculis mauris.{' '}
                                <a>@bulmaio</a>.<a href='#'>#css</a>{' '}
                                <a href='#'>#responsive</a>
                                <br />
                                <time dateTime='2016-1-1'>
                                    11:09 PM - 1 Jan 2016
                                </time>
                            </div>
                            <div className='is-flex is-justify-content-flex-end'>
                                <FontAwesomeIcon
                                    icon={faQuoteLeft}
                                    size='lg'
                                    className='has-text-right'
                                    color='orangered'
                                />
                            </div>
                        </Card>
                    </Column>
                ))}
            </Columns>
        </Section>
    )
}

export default Testimonial
