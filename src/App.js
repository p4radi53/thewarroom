import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import './styles/_colors.scss';
import './styles/_global.scss';

import { Helmet } from 'react-helmet'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './pages/home/Home';
import Partners from './pages/partners/Partners';
import Event from './pages/event/Event';
import Register from './pages/register/Register';
import FAQ from './pages/faq/FAQ';
import About from './pages/about/About';
import NotFound from './pages/notfound/NotFound';


function App() {

  return (
      <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <script src="https://kit.fontawesome.com/039bb8f9f5.js" crossorigin="anonymous"></script>
        <title>WARRoom Consuluting Conference</title>
        <meta name="description" content="The WARroom gathers CEMS MIM students from around the world to solve business case studies together, learn from consultants and exchange new ideas."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:title" content="WARroom Conference 2021" />
        <meta property="og:description" content="The WARroom gathers CEMS MIM students from around the world to solve business case studies together, learn from consultants and exchange new ideas."/>
        <meta property="og:image" content="/images/photos2019/1.jpg" />
        <meta property="og:url" content="https://thewarroom.pl" />
        <meta property="og:site_name" content="thewarroom.pl" />
      </Helmet>
      
      <Router>
        <main>
        <Navbar/>
          <Switch>
            <Route exact path="/" exact>
              <Home/>
            </Route>
            <Route exact path="/partners" exact>
              <Partners/>
            </Route>
            <Route exact path="/event" exact>
              <Event/>
            </Route>
            <Route exact path="/Register" exact>
              <Register/>
            </Route>
            <Route exact path="/FAQ" exact>
              <FAQ/>
            </Route>
            <Route exact path="/about" exact>
              <About/>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
        </main>
        <Footer/>
      </Router>
      </>
  );
}

export default App;
