import { Button, Columns, Column } from 'library'

const Blank = () => {
    return (
        <section className='section has-background-warning-dark'>
            <Columns className='is-vcentered is-centered'>
                <Column className='is-two-fifths'>
                    <p className='is-size-3 has-text-white has-text-weight-bold'>
                        Ready to Get Started?
                    </p>
                    <p className='is-size-5 has-text-white'>
                        It was popularized in the 2020s with the release of
                        Letraset
                    </p>
                </Column>
                <Column className='is-two-fifths has-text-right'>
                    <Button className='has-background-white ls-2 has-text-warning-dark'>
                        GET STARTED
                    </Button>
                </Column>
            </Columns>
        </section>
    )
}

export default Blank