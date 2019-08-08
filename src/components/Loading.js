import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    content:{
        fontSize:'22px',
        color:'#101010',
    }
}

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text ,
            speed:props.speed 
        };
    }
    componentDidMount() {
       this.timerId =  setInterval(() => {
            this.state.text === this.state.text + '...' ? this.setState({
                text: 'Loading'
            }) : this.setState(({text}) => {
                return {text: text + '.'}
            })
        }, this.state.speed)
    }
    render() {
        return ( <p style={styles.content}> {
                this.state.text
            } </p>
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }

}

Loading.propTypes = {
    speed: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}
Loading.defaultProps = {
    speed: 300,
    text: 'Loading'
}