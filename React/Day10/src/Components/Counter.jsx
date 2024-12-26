import { Component } from "react";

class Counter extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            count : 0
        }
    }

    incrementCount = () => {
        this.setState({count : this.state.count + 1})
    }

    componentDidMount()
    {
        console.log("CBC Mounted")
    }

    componentWillUnmount()
    {
        console.log("CBC Unmounted")
    }

    componentDidUpdate(prevProp, prevState)
    {
        if(this.state.count != prevState.count)
        {
            console.log("Count updated")
        }
    }

    render()
    {
        return(
            <div>
                <h1>Welcome, {this.props.name}</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }

}



export default Counter