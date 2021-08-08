import React from 'react';
import Image from 'next/image'
import {Layout} from "../components/Layout/Layout";
import logo from './../img/next.config.png'

const Index = () => {
    return (
        <Layout title={"Главная"}>
            <Image
                src={logo}
                alt="next js"/>
            <div>
                <h1>Добро пожаловать в Next JS</h1>
                <p>Здесь вы найдете для себя что-то нового</p>
            </div>
            <style jsx>{`
              div {
                text-align: center; 
              }

              p {
                color: #656565;
                margin-top: 5px;
              }
            `}</style>
        </Layout>
    );
};

export default Index;