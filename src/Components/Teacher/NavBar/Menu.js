import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from '../../../axios';
import LandingPage from '../../LandingPage'
const options = [
  'Sign Out',
  'Edit Profile',
  'Edit Preference',
  'My Calendar',
];
const ITEM_HEIGHT = 48;

class LongMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleMenuItem = (index) => {
    if(index == 0){
      console.log("sign out");
      axios.get(`api/auth/logout?token=${localStorage.getItem('token')}`)
      .then(() => {
          localStorage.removeItem('role');
          localStorage.removeItem('token');
          localStorage.removeItem('id');
          document.location.href = "/"
      })
      .catch(err => {
        console.log(err)
      })

    }
    if(index == 2){
      console.log("edit profile")
    }
    if(index == 3){
      console.log("edit preference")
    }
    if(index == 4){
      console.log("calendar")
    }
    
  }
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map((option, index) => (
            <MenuItem 
              key={option} 
              selected={option === 'Pyxis'} 
              onClick={() => this.handleMenuItem(index)}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default LongMenu;