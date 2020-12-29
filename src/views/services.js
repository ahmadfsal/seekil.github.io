import { Fragment, useState } from 'react'
import { Card, Column, Columns, Section } from 'library'
import { servicesList } from 'constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTshirt } from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'

const Servies = () => {
    const [serviceIndexOnHover, setServiceIndexOnHover] = useState(0)

    return (
        <Section id='services' title='SERVICE' subtitle='Find Your Service'>
            <Columns>
                <Column className='is-1'></Column>
                <Column>
                    <Columns className='is-gapless is-multiline is-marginless'>
                        {servicesList.map((item, index) => {
                            const classes = classnames(
                                'services-card',
                                index % 2 == 0 ? 'even-index' : 'odd-index',
                                serviceIndexOnHover == index ? 'has-background-white' : ''
                            )

                            return (
                                <Column key={index} className='is-6'>
                                    <Card
                                        className={classes}
                                        onMouseOver={() => {
                                            setServiceIndexOnHover(index)
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faTshirt}
                                            size='3x'
                                            color='orangered'
                                        />
                                        <p className='mt-4 has-text-black has-text-weight-bold'>
                                            {item.title}
                                        </p>
                                    </Card>
                                </Column>
                            )
                        })}
                    </Columns>
                </Column>
                <Column className='is-1'></Column>
                <Column>
                    {servicesList.map((item, index) => {
                        if (serviceIndexOnHover == index) {
                            return (
                                <Fragment key={index}>
                                    <figure className='image is-16by9'>
                                        <img
                                            src='https://unsplash.it/300/200/?random&pic=1'
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
                            )
                        }
                    })}
                </Column>
                <Column className='is-1'></Column>
            </Columns>
        </Section>
    )
}

export default Servies
