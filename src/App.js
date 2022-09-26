import './App.css';
import Header from "./AdminPage/Header";
import Footer from "./AdminPage/Footer";
import Registration from "./MainPage/HomePage/RegistrationPage/Registration";
// import Background from "./MainPage/HomePage/Background";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './Practise';
function App() {
  
  return (
    <>
    <Router>
      <Header/>
      <Routes>
         
          <Route exact path="/" element={
            <>
               <Login/>
              </>}
          >  
          </Route>
          <Route path="/Registration" element={
            <Registration/>
          }>
          
          </Route>
          </Routes>
      
      <Footer />
    </Router>
    </>
  );
}

export default App;
