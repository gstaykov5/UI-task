import './App.css';
import { Route, Routes } from 'react-router-dom';

import Post from './pages/posts/Post';
import Details from './pages/details/Details';
import Header from './layout/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<Post />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
