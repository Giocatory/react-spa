import React, {Component} from "react";
import { Route, NavLink, HashRouter, Routes} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";


export default class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Простое SPA приложение</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Главная</NavLink></li>
                        <li><NavLink to="/stuff">Продукты</NavLink></li>
                        <li><NavLink to="/contact">Контакты</NavLink></li>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/stuff" element={<Stuff/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}