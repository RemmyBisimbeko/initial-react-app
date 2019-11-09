import React from 'react';

class HelloWorld extends React.Component{
    render(){
        return( 
            <div>Hello, {this.props.country} </div>
        );    
    }
}

export default HelloWorld;