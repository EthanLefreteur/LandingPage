import './App.css';
import TextImage from "./Components/TextImage.js";
import Header from "./Components/Header.js";
import BlankDiv from "./Components/BlankDiv.js";
import ImageCarousel from './Components/ImageCarousel.js';
import { ePosition } from "./Components/EnumPosition.ts";
import logo from "./Assets/logonumity.png";
import imgGameobject from "./Assets/GameObjectScreenShot.png";
import engineLoop from "./Assets/EngineMainLoop.png";
import frameImpact from "./Assets/ImagePhysics.webp";
import fakeGame from "./Assets/FakeGame.webp";
import numworksImage from "./Assets/Numworks.png";
import collision from "./Assets/CollisionFeature.webp"
import vector from "./Assets/Vector2.png"
import shadowLogo from "./Assets/ShadowLogo.png"

function App() {
  return (
    <div className="App">

      <Header  logo = {{src: logo, id: "Logo", alt: "Website logo", function: () => {document.getElementById("top").scrollIntoView({behavior: 'smooth'})} }} buttons = {
        [
          {text: "Home", function: () => {document.getElementById("top").scrollIntoView({behavior: 'smooth'});}},
          {text: "Features", function: () => {document.getElementById("blankdivFeature").scrollIntoView({behavior: 'smooth'});}},
          {text: "Technical Details", function: () => {document.getElementById("blankdivTechDetails").scrollIntoView({behavior: 'smooth'});}},
          {text: "Showcase", function: () => {document.getElementById("blankdivShowcase").scrollIntoView({behavior: 'smooth'});}},
        ]} 
      />

      <div className="Main">
        <BlankDiv height={15} width={99} id={"top"}/>
        <h1> Numity: A Python Game Engine </h1>
        <h2> Lightweight and Efficient Game Development for Numworks Calculators </h2>

        <BlankDiv height={15} width={99} id={"blankdivIntro"}/>
        <h2>
          Game Development on a Limited Platform, Made Possible.
        </h2>

        <p className='base-paragraph'>
          Discover how a lightweight 2D game engine is tailored to bring interactive games 
          to life on devices with limited RAM and computing power, like the Numworks calculator.
        </p>

        <button type="button" onClick={() => {document.getElementById("blankdivFeature").scrollIntoView({behavior: 'smooth'});}} className='headerButton' >
              Learn more
        </button>

        <BlankDiv height={15} width={99} id={"blankdivFeature"}/>

        <h2> Core Features </h2>

        <ImageCarousel 
            blocks={
              [
                {url: numworksImage, text: "Runs efficiently on the Numworks calculator with minimal memory overhead.", alt: "A numworks calculator"},
                {url: imgGameobject, text: "Flexible GameObject and Component system for easy development.", alt: "A python class of the gameobject for Numity"},
                {url: collision, text: "Simple box-based physics, including gravity, boundaries, and forces.", alt: "A representation of box collision for Numity"},
                {url: vector, text: "Uses custom libraries like Vector2 for easy game manipulation.", alt: "A python class for vector calculation"},
                {url: fakeGame, text: "Supports scalable game logic for puzzles, platformers, and more.", alt: "Image of a platformer 2D game, blurred, with the text 'UpComing platformer game' "},
                {url: shadowLogo, text: "Made by Shadow Studio", alt: "Logo of Shadow studio, representing a black cat with the name of the studio"},
              ]
            }
        />

        <BlankDiv height={15} width={99} id={"blankdivTechDetails"}/>

        <h2> Under the Hood </h2>

        <p className='base-paragraph'> Here’s how the engine handles critical systems to maximize performance and flexibility. </p>

        <h3> The Engine Main Loop </h3>
        <TextImage text_information={ {text: " The engine currently works on a simple, yet effective update loop, physics and camera update are both fixed on their corresponding target per seconds engine variable. "}} 
          image_information={{url: engineLoop, image_position: ePosition.Right, id: "imageEngine", alt: "Schema of the update loop of the Numity game engine"}}
        />
        
        <h3> Gameobject System </h3>
        <TextImage text_information={{text: " Each object holds its position and a list of components for modular design. "}} 
          image_information={{url: imgGameobject, image_position: ePosition.Right, id: "imageGameObject",alt: "Image of a python class of a gameobject"}}/>
        
        <h3> Physics System </h3>
        <TextImage text_information={ {text: " The Physics System only works using box collider for performance. It handles gravity, force, friction and collision using a custom Vector2 library ! "}} 
          image_information={{url: frameImpact, image_position: ePosition.Left, id: "imageImpact", alt: "Image representing a collision between 2 box in a 2D environnement"}}/>
        
        <h3> Rendering </h3>
        <p className='base-paragraph'>
          Rendering works using the built-in Kandinsky library. Using a global image buffer, users can easily write and read information present on the screen
        </p>

        <BlankDiv height={15} width={99} id={"blankdivShowcase"}/>

        <h2> Showcase </h2>

        <h3> P2D </h3>
        <TextImage text_information={
          {text: " P2D is an upcoming platform game, featuring complexe parkour, random in-game events and "}} 
          image_information={{url: fakeGame, image_position: ePosition.Right, id: "imageP2D", alt:"Image of a platformer 2D game, blurred, with the text 'UpComing platformer game' "}}/>

        <BlankDiv height={5} width={99} id={"blankdivBottom"}/>

        <button type="button" onClick={() => {document.getElementById("top").scrollIntoView({behavior: 'smooth'});}} className='headerButton' >
              Back to top
        </button>

        <BlankDiv height={5} width={99} id={"blankdivBottom"}/>
  
      </div>

    </div>
  );
}

export default App;
