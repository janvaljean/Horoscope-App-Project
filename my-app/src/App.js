import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import data from "./helper/data"



function App() {
  return (
    <div className="App">
    <Navbar />  
    <Header/> 
    <Main/>
  
    </div>
  );
}

export default App;
