import React from "react";
import Avatar from "./Avatar";

class AvatarList extends React.Component {
  state = { avatars: [] };

  componentDidMount(){
      this.setState({avatars: this.props.avatars});
  }

  componentDidUpdate(prevProps) {
      if(prevProps.userValue !== this.props.userValue){
          this.setState({
          avatars: this.filteredData(this.props.avatars, this.props.userValue),
          });
      }else if(prevProps.avatars !== this.props.avatars){
          this.setState({avatars: this.props.avatars})
      }
  }

  filteredData = (arr, userInput) => {
    return arr.filter((avatar) => avatar.name.includes(userInput));
  };

  mapping = () => {
    return this.state.avatars.map((avatar) => (
      <Avatar avatar={avatar} key={avatar.id}></Avatar>
    ));
  };
  render() {
    return <div className="avatar-container">{this.mapping()}</div>;
  }
}

export default AvatarList;
