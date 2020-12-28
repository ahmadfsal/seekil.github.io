import { Column, Columns, Section } from 'library'

const Servies = () => {
    return (
        <Section id='services' title='SERVICE' subtitle='Find Your Service'>
            <Columns>
                <Column className='is-2'></Column>
                <Column>Service list</Column>
                <Column className='is-2'></Column>
                <Column>Service description</Column>
                <Column className='is-2'></Column>
            </Columns>
        </Section>
    )
}

export default Servies
