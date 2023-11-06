import React from "react";

export default function EndGame() {

    function play() {
        window.location.reload()
    }

    return (
        <div>
            <h1>Fin del juego</h1>
            <button onClick={play}>Jugar de nuevo</button>
        </div>
    )
}