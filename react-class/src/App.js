
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav';
import JZDavidson from './pages/JZDavidson'
import AboutMe from './pages/AboutMe'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Footer from './components/Footer/Footer'
import './App.css'

const projects = [
  {
    name: 'Budget Tracker',
    img: './images/BudgetTracker.png',
    github: 'https://github.com/JDavid337/Progressive-Budget-Tracker',
    deployed: 'www.tofollow.com'
  },
  {
    name: 'Chosen Outfit',
    img: './images/ChosenOutfit.png',
    github: 'https://github.com/JDavid337/Project-3/tree/main',
    deployed: 'https://infinite-fjord-75479.herokuapp.com/'
  },
  {
    name: 'Express Note Taker',
    img: './images/ExpressNoteTaker.png',
    github: 'https://github.com/JDavid337/express-note-jotter',
    deployed:  'https://express-note-jotter-jzd.herokuapp.com/'
  },
  {
    name: 'Lyric Finder',
    img: './images/LyricFinder.png',
    github: 'https://github.com/Lyndseyfin/Lyric-finder',
    deployed:  'https://lyndseyfin.github.io/Lyric-finder/'
  },
  {
    name: 'Budget Tracker',
    img: './images/Tripr.png',
    github: 'https://github.com/JDavid337/Project-2-Travel-Green',
    deployed:  'https://tripr-project2.herokuapp.com/'
  },
]


function App() {
  return (
      <Router>

        <Nav/>

          <Switch>

            <Route exact path={'/'}>
              <AboutMe />
            </Route>

            <Route exact path={'/JZDavidson'}>
              <JZDavidson />
            </Route>

            <Route exact path={'/Portfolio'}>
              <Portfolio projects={projects}/>
            </Route>

            <Route exact path={'/AboutMe'}>
              <AboutMe />
            </Route>

            <Route exact path={'/Resume'}>
              <Resume />
            </Route>

            <Route exact path={'/Contact'}>
              <Contact />
            </Route>

          </Switch>

        <Footer/>

      </Router>

  );
}

export default App;
