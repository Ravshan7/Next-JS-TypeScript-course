import React, {useEffect, useState} from 'react';
import {Layout} from "../../components/Layout/Layout";
import Image from 'next/image'
import logo from './../../img/next.config.png'
import {useRouter} from 'next/router'
import {Course} from "../../types/types";
import {NextPageContext} from "next";


interface PropsCourse {
    data: Course[] | null
}

const Index = ({data}: PropsCourse) => {
    const [courseData, setCourseData] = useState<Course[]>(data)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const res = await fetch(`${process.env.API_URL}courses`)
            const data = await res.json()
            setCourseData(data)
        }

        if (!data) {
            load()
        }
        return () => {
            setCourseData(null)
        }
    }, [])


    const handlerClick = (id) => {
        router.push(`/courses/${id}`)
    }


    return (
        <Layout title="Курсы">
            <h1>Курсы</h1>
            <div>
                {courseData ? courseData.map(c => <span key={c.id}>
                    <Image
                        src={logo}
                    />
                    <h3>{c.title}</h3>
                    <nav>
                        <p>{c.price}</p>
                        <button onClick={() => handlerClick(c.id)}>Купить</button>
                    </nav>
                </span>)
                    : <p>Loading...</p>}
            </div>


            <style jsx>{`
              h1 {
                font-size: 56px;
              }

              div {
                margin-top: 30px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 30px;
              }

              div > span {
                padding: 30px;
                border: 1px solid #ccc;
              }

              div > span h3 {
                margin-top: 10px;
              }

              div > span > nav {
                display: flex;
                align-items: center;
                margin-top: 10px;
                grid-gap: 10px;
              }

              div > span > nav > button {
                border: 1px solid #ccc;
                padding: 5px;
                cursor: pointer;
                display: block;
                background: transparent;
              }
            `}</style>
        </Layout>
    );
};


Index.getInitialProps = async ({req}: NextPageContext) => {

    if (!req) {
        return {
            data: null
        }
    }

    const res = await fetch(`${process.env.API_URL}courses`)
    const data = await res.json()

    return {
        data
    }
}
export default Index;