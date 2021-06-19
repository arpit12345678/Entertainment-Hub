//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Trending from './components/Pages/Trending/Trending';
import Search from './components/Pages/Search/Search'
import Series from './components/Pages/Series/Series'
import Movies from './components/Pages/Movies/Movies'
import { Container } from "@material-ui/core";
import SimpleNavigation from './components/MainNav';
function App() {
  return (
    <>
    <BrowserRouter>
       <Header />
       <div className="app">
          
      
       <Container>
         <Switch>
           <Route path="/" exact component={Trending} />
           <Route path="/movies" component={Movies} />
           <Route path="/series" component={Series} />
           <Route path="/search" component={Search} />
         </Switch>
       </Container>
       </div>
       <SimpleNavigation />
       </BrowserRouter>
    </>
  );
}

export default App;
