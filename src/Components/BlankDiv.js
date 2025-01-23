import React from "react";

export default function Header({
    height = 10,
    width = 10,
}) 
{
    return (
        <div className="blankDiv" style={{height: height + 'vh', width: width + 'vw'}} > </div>
    );
}

