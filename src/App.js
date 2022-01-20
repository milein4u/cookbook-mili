import './App.css';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';
import {BrowserRouter as Router, Routes, Route, NavLink} from  "react-router-dom";


function App() {
    return (
        <Router>
        <div className="App">
           <nav>
           <NavLink to="/" className="nav-links">HOME</NavLink>
           <NavLink to="/AddRecipe" className="nav-links">ADD RECIPE</NavLink>
           <NavLink to="/Recipes" className="nav-links">RECIPES</NavLink>
           </nav>
           <Routes>
           <Route path="/" exact element={<Home />} />
           <Route path="/AddRecipe" element={<AddRecipe />} />
           <Route path="/Recipes" element={<Recipes />} />
           </Routes>
           
        </div>
        </Router>
    );
}

const Home = () => (
    <div>
        <h1>Home page</h1>
    </div>
);

export default App;