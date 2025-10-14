function App() {
    const color = "pink"; // you can change this value

    let username = "1", message = "";
    if (color === "red") {
        message = "Correct color";
    } else if (color === "pink") {
        message = "Pinky";
    } else {
        message = "Error";
    }

    return (
    <>
        {message}
        <hr/>
            <h1>Color Check</h1> : {color === "red" && <p>🎯 Correct color! You chose red.</p>}            
        <hr/>
            <div>
                <h1>Color: {color}</h1>
                {color === "red" && <p>🎯 Correct color!</p>}
                {color === "pink" && <p>💗 Ready mode activated!</p>}
                {color !== "red" && color !== "pink" && <p>❌ Error: Unknown color</p>}
            </div>
        <hr/>
            <h1>
                This is my {color === "red" ? " red .": " multicolor "}pen. I found it in exam.
            </h1>
        <hr/>
            <h1>
                This is my {color === "red" ? " red .": color === "pink"? "smooth pink": " multicolor "}pen. I found it in exam.
            </h1>
        <hr />
        <h2>{username || "Guest User"}</h2>
    </>);  
}

export default App;
