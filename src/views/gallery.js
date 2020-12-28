import { Card, Columns, Column, Section } from 'library'
import { galleryList } from 'constant'

const Gallery = () => {
    return (
        <Section
            id='gallery'
            title='GALLERY'
            subtitle='Our Work Excellent'
            className='has-background-white-ter'
        >
            <Columns className='is-multiline'>
                {galleryList.map((item, index) => (
                    <Column
                        key={index}
                        className='is-one-quarter-desktop is-half-tablet'
                    >
                        <Card>
                            <div className='card-image'>
                                <figure className='image is-3by2'>
                                    <img
                                        src={item.image}
                                        alt={`gallery-${index}`}
                                    />
                                </figure>
                                <div className='card-content is-overlay is-clipped'>
                                    <span className='tag is-info'>
                                        {item.title}
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </Column>
                ))}
            </Columns>
        </Section>
    )
}

export default Gallery
