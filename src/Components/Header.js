import React from "react";
import './Header.css';

function buildButtons(buttons) {
    let list = [];
    for (let index in buttons) {
        let button = buttons[index];
        list.push(
            <button
                key={`button-${index}`}
                type="button"
                onClick={button.function}
                className="headerButton"
            >
                {button.text}
            </button>
        );
    }
    return list;
}

export default function Header({
    logo = {src: "/logo512.png", id: "Logo", href: null, alt: "Header image", function: () => {}},
    buttons = [{ text: "Default Button", function: () => {} }],
    div_id = "",
}) {
    return (
        <header className="App-header" id={div_id} >
            <div id="HeaderLeft">
                <a onClick={logo.function} className="logoButton" href={logo.href}> <img src={logo.src} id={logo.id} alt={logo.alt} /> </a>
            </div>
            
            <div id="HeaderMiddle">
                {buildButtons(buttons)}
            </div>

            <div id="HeaderRight">

            </div>
            
        </header>
    );
}

