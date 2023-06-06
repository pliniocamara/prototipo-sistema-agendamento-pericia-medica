import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Sidebar = ({ currentPath }) => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        {currentPath !== '/agendar-pericia' && (
          <ListItem component={Link} to="/agendar-pericia">
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Agendar Perícia" />
          </ListItem>
        )}
        {currentPath !== '/listar-pericias' && (
          <ListItem button component={Link} to="/listar-pericias">
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Listar Perícias" />
          </ListItem>
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;