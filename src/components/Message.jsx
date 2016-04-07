import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem leftAvatar={<Avatar src="https://lh3.googleusercontent.com/h9g9B7RMcwe2tl4ooBA4pyn7QviQmK26BnECHdEjZi1iKHf9lc86ZhrfIYRrQNDLSSQr=w1920-h1080-rw-no" />}>{this.props.message}</ListItem>  
    ); 
  }
}

export default Message;
