import React from "react";
import './App.css';
import { HashRouter, Route } from "react-router-dom";
import About from './routes/About';
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import Join from "./routes/Join";
import year from "./routes/year";

function App(){
    return (
        <HashRouter>

            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/movie-detail" component={Detail} />
            <Route path="/join" component={Join} />
            <Route path="/year" component={year} />
        </HashRouter>
    );
}

export default App;