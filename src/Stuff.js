import React from 'react';

export default class Stuff extends React.Component {
    render() {
        return(
            <div>
                <h2>Продукты</h2>
                <p>Уже каждый , наверное, знает что надо покупать, когда отправляется за покупками. Чтобы не покупать лишнего и не забыть необходимое, всегда хорошо иметь под рукой список.</p>
                <ol>
                    <li>Картофель</li>
                    <li>Морковь</li>
                    <li>Лук</li>
                    <li>Чеснок</li>
                    <li>Петрушка</li>
                    <li>Укроп</li>
                    <li>Яблоки/бананы</li>
                    <li>Лимон</li>
                </ol>
            </div>
        )
    }
}