import { Columns, Column, Section } from 'library';
import { galleryList } from 'constant';

const Gallery = () => {
    return (
        <Section
            id='gallery'
            title='GALLERY'
            subtitle='Our Work Excellent'
            className='has-background-white-ter'
        >
            <Columns className='is-multiline is-centered'>
                {galleryList.map((item, index) => (
                    <Column key={index} className='is-narrow'>
                        <img
                            src={item.image}
                            alt={`gallery-${index}`}
                            className='is-border-radius-1 has-box-shadow image is-300-200'
                        />
                    </Column>
                ))}
            </Columns>
        </Section>
    );
};

export default Gallery;
