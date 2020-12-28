import classnames from 'classnames'

const Card = (props) => {
    const { children, className } = props

    const classes = classnames('card', className)

    return <div className={classes}>{children}</div>
}

export default Card