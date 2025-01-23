import './App.css';
import TextImage from "./Components/TextImage.js";
import Header from "./Components/Header.js";
import BlankDiv from "./Components/BlankDiv.js";
import { ePosition } from "./Components/EnumPosition.ts";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">

      <Header  logo = {{src: logo, id: "Logo", alt: "Website logo", function: () => {}}} buttons = {[]} />

      <div className="Main">
        <BlankDiv height={15} width={100}/>
        <TextImage text_information={{text: "Ceci est un composant texte image !"}} image_information={{url: logo, image_position: ePosition.Left, id: "image1"}}/>
      </div>

    </div>
  );
}

export default App;
