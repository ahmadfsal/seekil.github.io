import { Fragment, useState } from 'react';
import { Card, Column, Columns, Section } from 'library';
import { servicesList } from 'constant';
import { scrollToView } from 'utils';
import classnames from 'classnames';
import CoverBanner from 'assets/images/cover-banner.jpg';

const Servies = () => {
    const [serviceIndexOnHover, setServiceIndexOnHover] = useState(0);

    return (
        <Section id='services' title='SERVICES' subtitle='Find Your Service'>
            <Columns>
                <Column className='is-1'></Column>
                <Column>
                    <Columns className='is-gapless is-multiline is-marginless'>
                        {servicesList.map((item, index) => {
                            const classes = classnames(
                                'services-card',
                                index % 2 == 0 ? 'even-index' : 'odd-index',
                                serviceIndexOnHover == index
                                    ? 'has-background-white'
                                    : ''
                            );

                            return (
                                <Column key={index} className='is-6'>
                                    <Card
                                        className={classes}
                                        onMouseOver={() =>
                                            setServiceIndexOnHover(index)
                                        }
                                        onClick={() =>
                                            scrollToView('service-detail')
                                        }
                                    >
                                        <img
                                            alt='service icon'
                                            src={item.icon}
                                            style={{
                                                height: 50,
                                                width: 50,
                                            }}
                                        />
                                        <p className='mt-4 has-text-black has-text-weight-bold'>
                                            {item.title}
                                        </p>
                                    </Card>
                                </Column>
                            );
                        })}
                    </Columns>
                </Column>
                <Column className='is-1'></Column>
                <Column id='service-detail'>
                    {servicesList.map((item, index) => {
                        if (serviceIndexOnHover == index) {
                            return (
                                <Fragment key={index}>
                                    <figure className='image is-16by9'>
                                        <img
                                            src={CoverBanner}
                                            alt='services'
                                            className='is-border-radius-1 has-box-shadow'
                                        />
                                    </figure>

                                    <p className='has-text-weight-bold has-text-black is-size-6 mt-5 mb-3'>
                                        {item.title}
                                    </p>
                                    <p className='is-size-7'>
                                        {item.description}
                                    </p>
                                </Fragment>
                            );
                        }
                    })}
                </Column>
                <Column className='is-1'></Column>
            </Columns>
        </Section>
    );
};

export default Servies;
