import React from "react";
import BlockImageText from "./BlockImageText";
import "./ImageCarousel.css"

function buildCarousel(blocks) {
    let list = [];
    for (let index in blocks) {
        let block = blocks[index];
        list.push(
            <BlockImageText key={`CarouselImageText-${index}`} image_url={block.url} alt={block.alt} text={block.text} div_id={block.id} />
        );
    }
    return list;
}

export default function ImageCarousel({
    blocks = [
        {url: null, alt: "", text: "Exemple text", id: ""}
    ],
    div_id = "",
}) {
    return (
        <div className="carousel" id={div_id}>
            {buildCarousel(blocks)}
        </div>
    );
}

