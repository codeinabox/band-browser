import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import searchArtists from './queries/searchArtists'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', artists: [] };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSearch() {
    searchArtists( this.state.name )
      .then(artists => { this.setState({ artists }) });
  }

  render() {
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextField
              id="group-name"
              label="Group Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <Button variant="contained" color="primary" onClick={this.handleSearch}>
              Search
            </Button>
          </Grid>

          <Grid item xs={12}>
           <List>
                {this.state.artists.map(artist =>
                  <ListItem>
                    <ListItemText primary={artist.name} />
                  </ListItem>
                )}
            </List>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
