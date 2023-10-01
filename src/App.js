
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar />
    <Routes>
      <Route  path="/" element={<ItemListContainer />} />
      <Route  path="/category/:categoryId" element={< ItemListContainer/>} />
      <Route  path="/item/:itemId" element={<ItemDetailContainer />} />
      <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
    </Routes>
    <ItemListContainer greeting={'Bienvenidos'} />
    </div>
    </BrowserRouter>
  );
}

export default App;

