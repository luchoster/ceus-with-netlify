import React, {Component} from 'react'
import {BrowserRouter, Switch} from 'react-router-dom'
import {
  AppBar,
  Drawer,
  IconButton,
  ListItem,
  Toolbar,
  Typography
} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import {RouteFunctor, RouteActor} from './routes'

class App extends Component {
  state = {
    open: false
  }

  componentDidMount() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }

  _handleToggle = () => this.setState({open: !this.state.open})

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppBar position="static" className="app-bar">
            <Toolbar>
              <IconButton
                onTouchTap={this._handleToggle}
                color="contrast"
                aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" style={{flex: 1}}>
                APP TITLE
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            docked={false}
            open={this.state.open}
            onRequestClose={this._handleToggle}>
            <ListItem>Menu Item</ListItem>
            <ListItem>Menu Item</ListItem>
          </Drawer>
          <Switch>
            {RouteFunctor.map((route, key) => (
              <RouteActor key={key} {...route} />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
