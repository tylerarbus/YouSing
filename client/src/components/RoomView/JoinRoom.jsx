import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Header, Loader } from 'semantic-ui-react';

import { joinRoom } from './room.actions.js';

export class JoinRoom extends React.Component {
  constructor(props) {
    super(props);
    this.props = {
      roomName: null
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      roomName: e.target.value
    });
  }

  handleSubmit() {
    this.props.joinRoom(this.state.roomName);
  }

  render() {
    return (
      <div>
        {!this.props.joiningRoom &&
          <div>
            <Header as="h2" icon inverted>
              Welcome to YouSing
              <Header.Subheader>Please enter a room name</Header.Subheader>
            </Header>
            <br />
            <Input
              placeholder="Room Name"
              autoFocus="true"
              style={{ width: '200px', margin: '10px' }}
              onChange={this.onChange}
            />
            <Button
              inverted
              color="red"
              onClick={this.handleSubmit}
            >
              Join Room
            </Button>
          </div>
        }
        {this.props.joiningRoom &&
          <Loader>Joining Room...</Loader>
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  {
    joinRoom: (roomName) => {
      dispatch(joinRoom(roomName));
    }
  }
);

const mapStateToProps = state => (
  {
    joiningRoom: state.room.joining
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(JoinRoom);
