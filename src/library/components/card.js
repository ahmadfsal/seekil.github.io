import classnames from 'classnames';

const Card = (props) => {
    const { children, className, ...attr } = props;

    const classes = classnames('card', className);

    return (
        <div className={classes} {...attr}>
            <div className='card-content'>{children}</div>
        </div>
    );
};

export default Card;
