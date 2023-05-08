import React, {Component} from "react";

export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>Простое SPA приложение</h1>
                <ul className="header">
                    <li><a href="/">Главная</a></li>
                    <li><a href="/stuff">Продукты</a></li>
                    <li><a href="/contact">Контакты</a></li>
                </ul>
                <div className="content"></div>
            </div>
        );
    }
}