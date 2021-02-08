import React from 'react';
import Timetable from "./pages/Timetable";
import "./App.scss"
//import Auth from "./pages/authorization";
import Loader from "./pages/Loader";

const App = () => {
    return (
        <div className="App h-100">
           <Loader/>
        </div>
    )
}

export default App;
