import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'room' };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu icon="labeled">
        <Menu.Item name="logo" active={activeItem === 'logo'} onClick={this.handleItemClick}>
          🎶 &nbsp;&nbsp;YouSing
        </Menu.Item>
        <Menu.Item name="room" active={activeItem === 'room'} onClick={this.handleItemClick}>
          Room
        </Menu.Item>
      </Menu>
    );
  }
}
