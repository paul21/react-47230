import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greetings="¡Bienvenido a la tienda!" />
        </div>
    );
}

export default App;
