import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/browse-characters" activeClassName="active">Browse Characters</NavLink>
        <NavLink to="/comics" activeClassName="active">Comics</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-characters" element={<BrowseCharacters />} />
        <Route path="/character-details/:id" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;