import { Card, Columns, Column, Section } from 'library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { testimonialList } from 'constant';

const Testimonial = () => {
    return (
        <Section
            id='testimonial'
            title='TESTIMONIAL'
            subtitle='What People Say'
        >
            <Columns className='is-centered'>
                {testimonialList.map((item, index) => (
                    <Column key={index} className='is-one-quarter'>
                        <Card>
                            <div className='media'>
                                <div className='media-left'>
                                    <figure className='image is-48x48'>
                                        <img
                                            className='image is-rounded is-50-50'
                                            src={item.picture}
                                            alt='Placeholder image'
                                        />
                                    </figure>
                                </div>
                                <div className='media-content'>
                                    <p className='title is-5'>{item.name}</p>
                                    <p className='subtitle is-6'>
                                        <a
                                            href={`https://instagram.com/${item.instagram}`}
                                            target='_blank'
                                        >
                                            {`@${item.instagram}`}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className='content'>{item.message}</div>
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
    );
};

export default Testimonial;
