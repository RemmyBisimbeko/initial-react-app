import React from 'react';

class Clock extends React.Component{
    state={
        date: new Date(),
        count: 0
    }

    tick(){
        setInterval(()=>{
            this.setState({
                date: new Date()
            })
        },1000)
    }

    count(){
        setInterval(()=>{
            const count = this.state.count+1;
            this.setState({count})
        },2000)
    }
    
    render(){
        this.count();

        return( 
            <div>
                <div>The time is: {this.state.date.toString()} </div>
                    <br></br>
                <div>Count is at: {this.state.count} </div>
            </div>
        );    
    }
}

export default Clock;