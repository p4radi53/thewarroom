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
  let title = "";

  return (
      <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <script src="https://kit.fontawesome.com/039bb8f9f5.js" crossorigin="anonymous"></script>
        <title>WARRoom Conference</title>
      </Helmet>
      
      <Router>
        <main>
        <Navbar/>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/partners" exact>
              <Partners/>
            </Route>
            <Route path="/event" exact>
              <Event/>
            </Route>
            <Route path="/Register" exact>
              <Register/>
            </Route>
            <Route path="/FAQ" exact>
              <FAQ/>
            </Route>
            <Route path="/about" exact>
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
