import Document, {Head, Html, NextScript, Main} from "next/document";

export default class _Document extends Document {
    render() {
        return <Html>
            <Head>
                <meta charSet="utf-8"/>
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
                    rel="stylesheet"/>
                <title>Next JS | Главная</title>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    }
}