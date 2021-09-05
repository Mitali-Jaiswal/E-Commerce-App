import Navbar  from "./Components/NavBar/NavBar";
import ProductList from './Components/ProductList/ProductList';
import Cart from "./Components/Cart/Cart";
import{BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Footer from './Components/Footer/Footer'
import Details from "./Components/Details/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Home} exact />
          
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
