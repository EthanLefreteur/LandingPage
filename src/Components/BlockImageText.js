import React from "react"
import "./BlockImageText.css"

export default function BlockImageText({
    image_url = "/logo512.png",
    alt = "",
    text = "",
    div_id = "",
}) {
    return (
        <div className="imageText" id={div_id}>
            <img
                src={image_url}
                alt={alt}
            />
            <p>
                {text}
            </p>
        </div>
    );
}

