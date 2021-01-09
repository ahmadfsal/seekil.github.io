import classnames from 'classnames';

const Section = (props) => {
    const { children, className, id, title = '', subtitle = '' } = props;
    const classes = classnames('section', className);

    return (
        <section className={classes} id={id}>
            <div className='mb-6'>
                <p className='is-size-7 has-text-weight-bold has-text-warning-dark has-text-centered is-uppercase ls-3'>
                    {title}
                </p>
                <p className='is-size-4 has-text-weight-bold has-text-black has-text-centered is-capitalized'>
                    {subtitle}
                </p>
            </div>

            {children}
        </section>
    );
};

export default Section;
