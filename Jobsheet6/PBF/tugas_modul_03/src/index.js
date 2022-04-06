import React from 'react'; 
import App from './App';
import ReactDOM from 'react-dom'; 

import HelloComponent from './component/HelloComponent';
import AuthExample from './auth';
  
class Test extends React.Component { 
    constructor(props) 
    { 
        super(props); 
        this.state = { hello : "World!" }; 
    } 
  
    componentWillMount() 
    { 
        console.log("componentWillMount()"); 
    } 
  
    componentDidMount() 
    { 
        console.log("componentDidMount()"); 
    } 
  
    changeState() 
    { 
        this.setState({ hello : "Geek!" }); 
    } 
  
    render() 
    { 
        return ( 
            <div> 
            <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1> 
            <h2> 
             <a onClick={this.changeState.bind(this)}>Press Here!</a> 
            </h2> 
            </div>); 
    } 
  
    shouldComponentUpdate(nextProps, nextState) 
    { 
        console.log("shouldComponentUpdate()"); 
        return true; 
    } 
  
    componentWillUpdate() 
    { 
        console.log("componentWillUpdate()"); 
    } 
  
    componentDidUpdate() 
    { 
        console.log("componentDidUpdate()"); 
    } 
}  
ReactDOM.render( 
    <App />, 
    document.getElementById('root')); 
