import { Section, Columns, Column } from 'library';
import CoverBanner from 'assets/images/cover-banner.jpg';

const AboutUs = () => {
    return (
        <Section id='about_us' className='has-background-grey-lighter'>
            <Columns className='is-multiline is-centered is-vcentered is-variable is-8'>
                <Column className='is-narrow'>
                    <img
                        src={CoverBanner}
                        alt='about us'
                        className='image is-300-200 is-border-radius-1'
                    />
                </Column>
                <Column className='is-narrow'>
                    <p className='is-size-7 has-text-weight-bold has-text-warning-dark is-uppercase ls-3'>
                        About Us
                    </p>
                    <p className='is-size-4 has-text-weight-bold has-text-black is-capitalized'>
                        Welcome to Seekil Shoes Clean & Care
                    </p>
                    <p className='my-5 has-text-justified'>
                        Seekil Shoes Clean & Care merupakan jasa pencucian dan
                        perawatan sepatu, menggunakan
                        <br />
                        alat dan bahan yang premium khusus sepatu sehingga tidak
                        akan merusak material sepatu. <br />
                        Seekil Shoes Clean & Care didirikan pada tanggal 27
                        November 2020.
                    </p>
                    {/* <Button>Learn More</Button> */}
                </Column>
            </Columns>
        </Section>
    );
};

export default AboutUs;
