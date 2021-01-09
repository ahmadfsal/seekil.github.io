import { Button, Columns, Column } from 'library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Blank = () => {
    return (
        <section className='section has-background-warning-dark'>
            <Columns className='is-vcentered is-centered'>
                <Column className='is-two-fifths'>
                    <p className='is-size-3 has-text-white has-text-weight-bold'>
                        Masih penasaran?
                    </p>
                    <p className='is-size-5 has-text-white'>
                        Langsung aja kuy hubungi instagram atau whatsapp
                    </p>
                </Column>
                <Column className='is-two-fifths has-text-right buttons'>
                    <Button
                        className='has-background-white ls-2 has-text-warning-dark'
                        onClick={() => {
                            window.open(
                                'https://api.whatsapp.com/send?phone=6282127051607',
                                '_blank'
                            );
                        }}
                    >
                        <FontAwesomeIcon icon={faWhatsapp} />
                        &nbsp;Whatsapp
                    </Button>
                    <Button
                        className='has-background-white ls-2 has-text-warning-dark'
                        onClick={() => {
                            window.open(
                                'https://instagram.com/seekil.id',
                                '_blank'
                            );
                        }}
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                        &nbsp;Instagram
                    </Button>
                </Column>
            </Columns>
        </section>
    );
};

export default Blank;
