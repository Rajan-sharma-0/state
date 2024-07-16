import React from "react";
import Header from "./component/Header";
import Howitwork from "./component/Howitwork";
import About from "./component/About";
import Agent from "./component/Agent";
import Properties from "./component/Properties";
import Contact from "./component/Contact";
// import Loginpage from "./component/loginpage";
function App() {
  return (
    <div className="App">
     <Header/>
     <Howitwork/>
     <About/>
     <Agent/>
     <Properties/>
     <Contact/>
     {/* <Loginpage/> */}
    </div>
  );
}

export default App;
