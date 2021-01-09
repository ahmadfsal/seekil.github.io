import classnames from 'classnames';

const Column = (props) => {
    const { children, className, ...attr } = props;
    const classes = classnames('column', className);

    return (
        <div className={classes} {...attr}>
            {children}
        </div>
    );
};

export default Column;
