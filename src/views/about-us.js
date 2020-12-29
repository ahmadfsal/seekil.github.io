import { Section, Columns, Column, Button } from 'library'

const AboutUs = () => {
    return (
        <Section id='about_us' className='has-background-grey-lighter'>
            <Columns className='is-multiline is-centered is-variable is-8'>
                <Column className='is-narrow'>
                    <img
                        src='https://unsplash.it/300/200/?random&pic=2'
                        alt='about us'
                        className='image is-border-radius-1'
                    />
                </Column>
                <Column className='is-narrow'>
                    <p className='is-size-7 has-text-weight-bold has-text-warning-dark is-uppercase ls-3'>
                        About Us
                    </p>
                    <p className='is-size-4 has-text-weight-bold has-text-black is-capitalized'>
                        Welcome to Seekil Shoes Clean & Care
                    </p>
                    <p className='my-5'>
                        That's why you can trust that BeNew will take care of{' '}
                        <br />
                        every item for you. With over 30 years of laundry and{' '}
                        <br />
                        cleaning experience know exactly how to treat.
                    </p>
                    <Button>
                        Learn More
                    </Button>
                </Column>
            </Columns>
        </Section>
    )
}

export default AboutUs
