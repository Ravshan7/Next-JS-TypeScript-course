import React, {ReactNode, ReactChildren} from 'react'

import Head from "next/head";
import Link from 'next/link'
import style from './Layout.module.scss'
import {useRouter} from 'next/router'


export const Layout = ({children, title}) => {

    const route = useRouter()

    const links = [
        {id: 1, name: 'Главная', path: '/'},
        {id: 2, name: 'Курсы', path: '/courses'},
        {id: 3, name: 'О нас', path: '/about'}
    ]


    return (
        <div>
            <Head>
                title={`Next JS | ${title}`}
            </Head>
            <nav className={style.main}>
                <div className={"container"}>
                    <Link href="/">Next JS</Link>
                    <div>
                        {links.map(l => <Link
                            key={l.id}
                            href={l.path}>
                            <a className={route.pathname !== '/'
                                ? '/' + route.pathname.split('/')[1] === l.path ? style.activeClassName : ''
                                : route.pathname === l.path ? style.activeClassName : ''}>
                                {l.name}
                            </a>
                        </Link>)}
                    </div>
                </div>
            </nav>
            <div className="container" style={{marginTop: '40px'}}>
                {children}
            </div>
            <style jsx>{`
              nav > div {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 100%;
                padding-top: 20px;
                padding-bottom: 20px;
              }
            `}</style>
        </div>
    );
};

