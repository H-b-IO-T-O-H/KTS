import React from "react";
import "./Home.scss"
import Card from "@components/Card";

// <a href="#" className="btn btn-primary">Переход куда-нибудь(кнопка в карточку для перехода по ссылке)"</a> под параграфом

const Home = () => {
    return (
        <div className="Home">
            <div className="d-flex flex-row">
            <Card title={'День недели и дата'} item1={'Дисциплина'} item2={'Дисциплина'} item3={'Дисциплина'} item4={'Дисциплина'}/>
            <Card title={'День недели и дата'} item1={'Дисциплина'} item2={'Дисциплина'} item3={'Дисциплина'} item4={'Дисциплина'}/>
            <Card title={'День недели и дата'} item1={'Дисциплина'} item2={'Дисциплина'} item3={'Дисциплина'} item4={'Дисциплина'}/>
            <Card title={'День недели и дата'} item1={'Дисциплина'} item2={'Дисциплина'} item3={'Дисциплина'} item4={'Дисциплина'}/>
            <Card title={'День недели и дата'} item1={'Дисциплина'} item2={'Дисциплина'} item3={'Дисциплина'} item4={'Дисциплина'}/>
            <Card title={'День недели и дата'} item1={'Дисциплина'} item2={'Дисциплина'} item3={'Дисциплина'} item4={'Дисциплина'}/>
            <Card title={'День недели и дата'} item1={'Дисциплина'} item2={'Дисциплина'} item3={'Дисциплина'} item4={'Дисциплина'}/>
            </div>

        </div>

    )
}

export default Home;