import React from "react";
import { ePosition } from "./EnumPosition.ts";
import './TextImage.css';

function getClass(pos) {
    switch (pos) {
        case ePosition.Left:
            return "left-image"
        case ePosition.Right:
            return "right-image"
        case ePosition.Down:
            return "down-image"
        case ePosition.Up:
            return "up-image"
        default:
            return "left-image"
    }
}

export default function TextImage({
    text_information = { text: "This is a sample text", id: "text" },
    image_information = { url: "/logo512.png", id: "image", image_position: ePosition.Left, alt: "image" },
    div_id = "",
}) {
    return (
        <div
            id={div_id}
            className={getClass(image_information.image_position) + " base-image-text"}
        >
            <img
                src={image_information.url}
                id={image_information.id}
                alt={image_information.alt}
            />
            <p id={text_information.id}>
                {text_information.text}
            </p>
        </div>
    );
}
