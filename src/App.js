import './App.css';
import React from "react";
import Header from "./header";


const App = () => {

    return (

        <div class='wrapper'>

            <div class='wr1'>
                <Header/>
            </div>

            <div class='wr2'>
                <ul>
                    <li>css</li>
                    <li>html</li>
                    <li>js</li>
                    <li>react</li>
                </ul>
            </div>

            <div class='wr3'>
            </div>
        </div>

    );
}


export default App;
