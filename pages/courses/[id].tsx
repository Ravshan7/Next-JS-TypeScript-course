import React, {useEffect, useState} from 'react';
import {Layout} from "../../components/Layout/Layout";
import {useRouter} from 'next/router'
import Link from 'next/link'

const Course = ({data}) => {
    const [courseData, setCourseData] = useState(data)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const res = await fetch(`${process.env.API_URL}courses/${router.query.id}`)
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

    return (
        <Layout title="Курсы">
            {courseData
                ? <div>
                    <h1>{courseData.title}</h1>
                    <p>{courseData.price}</p>
                    <Link href="/courses"><a>Назад в список курсов</a></Link>
                </div>
                : <p>Loading...</p>
            }
            <style jsx>{`
              h1 {
                font-size: 56px;
              }

              p {
                margin-top: 10px;
                font-size: 18px;
              }

              a {
                display: block;
                margin-top: 10px;
              }
            `}</style>
        </Layout>
    );
};


Course.getInitialProps = async ({query, req}) => {
    if (!req) return {data: null}

    const res = await fetch(`${process.env.API_URL}courses/${query.id}`)
    const data = await res.json()
    return {data}
}

export default Course;