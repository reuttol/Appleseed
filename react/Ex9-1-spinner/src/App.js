import React from "react";
import Spinner from "./components/Spinner";
import Box from "./components/Box";
import './App.css'

class App extends React.Component {
  state = {hide: true}

 toggleHide = (visible) => visible ? 'hide': '';

  componentDidMount = () =>{
    setTimeout(() => {
      this.setState({hide: false})
    }, 2000);
  }
  render(){
    return (
      <div>
        <Box hide={this.toggleHide(this.state.hide)}/>
        <Spinner hide={this.toggleHide(!this.state.hide)}/>
      </div>
    );
  }
}

export default App;
