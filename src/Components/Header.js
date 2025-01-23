import React from "react";
import './TextImage.css';

function buildButtons(buttons) {
    let list = [];
    for (let index in buttons) {
        let button = buttons[index];
        list.push(
            <button
                key={`button-${index}`}
                type="button"
                onClick={button.function}
            >
                {button.text}
            </button>
        );
    }
    return list;
}

export default function Header({
    logo_url = "",
    buttons = [{ text: "Default Button", function: () => console.log("Test") }],
    div_id = "",
}) {
    return (
        <header className="App-header">
            {buildButtons(buttons)}
        </header>
    );
}

