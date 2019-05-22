import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { Query } from 'react-apollo';
import { withStyles } from '@material-ui/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Avatar } from '@material-ui/core';
import CURRENT_USER_QUERY from '../../graphql/queries/current_user_query';
import MiniPalette from '../MiniPalette/MiniPalette';
import styles from './styles';
import { AUTH_TOKEN } from '../../constants/constants';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletingId: '',
    };
    this.navigateToPalette = this.navigateToPalette.bind(this);
    this.toggleDeleteDialog = this.toggleDeleteDialog.bind(this);
    this.handleDeletePalette = this.handleDeletePalette.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  navigateToPalette(id) {
    const {
      history: { push },
    } = this.props;
    push(`/palette/${id}`);
  }

  toggleDeleteDialog(id) {
    const { openDeleteDialog } = this.state;
    this.setState({ openDeleteDialog: !openDeleteDialog, deletingId: id });
  }

  handleDeletePalette() {
    const { deletingId } = this.state;
    const { deletePalette } = this.props;
    deletePalette(deletingId);
    this.toggleDeleteDialog('');
  }

  async handleLogout() {
    await localStorage.removeItem(AUTH_TOKEN);
    const {
      history: { push },
    } = this.props;
    push('/login');
  }

  render() {
    const { classes } = this.props;
    const { openDeleteDialog } = this.state;
    return (
      <Query query={CURRENT_USER_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const { palettes } = data.currentUser;
          return (
            <div className={classes.paletteListWrapper}>
              <div className={classes.paletteListContainer}>
                <nav className={classes.paletteListNav}>
                  <h1 className={classes.header}>React Colors</h1>
                  <Link to="/palette/new" className={classes.createPaletteLink}>
                    Create Palette
                  </Link>
                  <button
                    type="button"
                    className={classes.logoutButton}
                    onClick={this.handleLogout}
                  >
                    Logout
                  </button>
                </nav>
                <TransitionGroup className={classes.paletteListPalettesContainer}>
                  {palettes.map(palette => (
                    <CSSTransition key={palette.id} classNames="fade" timeout={300}>
                      <MiniPalette
                        handleDelete={this.toggleDeleteDialog}
                        key={palette.id}
                        id={palette.id}
                        {...palette}
                        handleClick={() => this.navigateToPalette(palette.id)}
                      />
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </div>
              {openDeleteDialog && (
                <Dialog
                  open={openDeleteDialog}
                  aria-labelledby="delete-dialog-title"
                  onClose={this.toggleDeleteDialog}
                >
                  <DialogTitle id="delete-dialog-title">Delete this palette</DialogTitle>
                  <List>
                    <ListItem button onClick={this.handleDeletePalette}>
                      <ListItemAvatar>
                        <Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
                          <CheckIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Delete" />
                    </ListItem>
                    <ListItem button onClick={this.toggleDeleteDialog}>
                      <ListItemAvatar>
                        <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                          <CloseIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Cancel" />
                    </ListItem>
                  </List>
                </Dialog>
              )}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(PaletteList);
