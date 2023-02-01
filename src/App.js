import { Route, Routes } from 'react-router-dom';
import './assets/css/App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Door from './pages/Door';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend'
// vvv
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
              <ToastContainer />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/door/*' element={<Door/>} />
          </Routes>
    </div>
    </DndProvider>
  );
}

export default App;
