import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css';
import Home from './Home/home'
import BooksApp from './BooksApp'
import PostsApp from './PostsApp'
import FormApp from './FormApp'
import Form from './PostForm'
import NavBar from './NavBar'

function App() {
  return (
    <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav style={{ backgroundColor: '#343a40', color:'white' }}
                onSelect={(eventKey) => {
                    let to = '/'+eventKey;
                    if (location.pathname !== to) {
                      history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="/">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="books">
                        <NavIcon>
                            <i className="fa fa-fw fa-book" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Books
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="form">
                        <NavIcon>
                            <i className="fa fa-fw fa-wpforms" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            User Form
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="posts">
                        <NavIcon>
                            <i className="fa fa-fw fa-list" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Posts
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <NavBar />
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/books" component={BooksApp} />
              <Route path="/form" component={FormApp} />
              <Route path="/posts" component={PostsApp} />
            </Switch>
        </React.Fragment>
      )}
    />
</Router>
);
}

export default App;
