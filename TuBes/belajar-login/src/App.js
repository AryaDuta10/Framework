import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './component/Register';
import HelloComponent from './component/HelloComponent';
function App() {
  return (
    
    <div >
      <div className="app-header">
      
      </div>
      
      <div className="app-content">
     
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HelloComponent/>} />
        <Route path="/register" exact element={<Register/>} />
      </Routes>
    </BrowserRouter>
      {/* <Route path="/login" exact component={HelloComponent} /> */}
      </div>
     
    </div>
    
   
  );
 }
 
 export default App;