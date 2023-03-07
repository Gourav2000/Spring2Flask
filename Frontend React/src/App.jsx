import "./App.css";
import { Cards } from "./components/Cards";
// import Header from './components/Header';
import { Navbars } from "./components/Navbars";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="App">
      <Navbars />
      
      <div className="typography">
      <div>
      <p>Spring to flask Converter -</p>
      </div>
        <div>
        <Typewriter className="semicolons"
            onInit={(typewriter) => {
              typewriter
                .typeString("2023")
                .pauseFor(1000)
                .start();
            }}
          />
        </div>
      </div>
      

      {/* <Typewriter options={{autostart:true,loop:true,delay:40}}  name="AI Based code converter! "/> */}
      <Cards />
    </div>
  );
}

export default App;
