import React, { Component }  from 'react'

class Header extends Component {
    static propTypes = {
        title: PropTypes.string,
        actionText: PropTypes.string,
        onAction: PropTypes.string,
    };


    render() {
        return (
            <header>
                <h2>{this.props.title}</h2>
                {this.props.actionText && this.props.onAction && (
                    <Button onClick={this.props.onAction}>{this.props.actionText}</Button>
                )}
            </header>
        )
    }
} 

export default Header;