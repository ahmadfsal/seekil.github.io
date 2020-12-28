import { Card, Columns, Column, Section } from 'library'

const Location = () => {
    return (
        <Section id='location' title='LOCATION' subtitle='Come Visit Us'>
            <Columns>
                <Column className='is-2'></Column>
                <Column>
                    <Card className='has-background-black py-6 px-6'>
                        <p className='is-size-5 has-text-white has-text-weight-bold'>
                            Cirebon
                        </p>
                        <p className='is-uppercase has-text-white ls-2 is-size-7 mt-5 mb-4'>
                            Contact Details
                        </p>
                        <div className='content'>
                            <ul className='has-text-white is-size-7'>
                                <li>
                                    Blok Kavling Karang Anyar, Desa Jamblang{' '}
                                    <br />
                                    Kab Cirebon
                                </li>
                                <li>
                                    <a
                                        href='https://api.whatsapp.com/send?phone=6282127051607'
                                        target='_blank'
                                    >
                                        (+62) 821 2705 1607
                                    </a>
                                </li>
                                <li>10.00 - 21.00 WIB</li>
                            </ul>
                        </div>
                    </Card>
                </Column>
                <Column className='is-1'></Column>
                <Column>
                    <Card className='has-background-white py-6 px-6'>
                        <p className='is-size-5 has-text-black has-text-weight-bold'>
                            Jakarta
                        </p>
                        <p className='is-uppercase has-text-black ls-2 is-size-7 mt-5 mb-4'>
                            Contact Details
                        </p>
                        <div className='content'>
                            <ul className='has-text-black is-size-7'>
                                <li>
                                    Jl. Dr Susilo IIB No.28, Grogol Petamburan
                                    <br />
                                    Kota Jakarta barat
                                </li>
                                <li>
                                    <a
                                        href='https://api.whatsapp.com/send?phone=6282127051607'
                                        target='_blank'
                                    >
                                        (+62) 821 2705 1607
                                    </a>
                                </li>
                                <li>10.00 - 21.00 WIB</li>
                            </ul>
                        </div>
                    </Card>
                </Column>
                <Column className='is-2'></Column>
            </Columns>
        </Section>
    )
}

export default Location
