import classnames from 'classnames';

const Button = (props) => {
    const { children, className, onClick, ...attr } = props;
    const classes = classnames('button is-dark has-text-white', className);

    return (
        <button className={classes} onClick={onClick} {...attr}>
            {children}
        </button>
    );
};

export default Button;
