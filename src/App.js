import {
    Banner,
    Services,
    Gallery,
    Blank,
    // Testimonial,
    AboutUs,
    Location,
    Footer
} from './views'
import './App.scss'

const App = () => {
    return (
        <>
            <Banner />
            <AboutUs />
            <Services />
            <Gallery />
            <Blank />
            {/* <Testimonial /> */}
            <Location />
            <Footer />
        </>
    )
}

export default App