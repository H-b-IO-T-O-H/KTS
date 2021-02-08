import React from "react";
import "./loader.scss"

const Loader = () => {
    return (
        <div className="Loader h-100 w-75">
            <div className="input-group mb-3 Loader__form">
                <input type="text" className="form-control" placeholder="Введите ссылку" aria-label="Введите ссылку"
                       aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button className="btn Loader__btn" type="button">Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default Loader;