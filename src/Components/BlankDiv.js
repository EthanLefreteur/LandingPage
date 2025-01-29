import React from "react";

export default function Header({
    height = 10,
    width = 10,
    id = "",
}) 
{
    return (
        <div className="blankDiv" id={id} style={{height: height + 'vh', width: width + 'vw'}} > </div>
    );
}

