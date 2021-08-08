import React from 'react';
import {Layout} from "../../components/Layout/Layout";

const Index = () => {
    return (
        <Layout title="О нас">
            <h1>О нас</h1>
            <p>Next.js становится лучше с каждым днем - не пропустите все самое интересное.</p>
            <style jsx>{`
              h1 {
                font-size: 56px;
              }
              p {
              margin-top: 10px;
              }
            `}</style>
        </Layout>
    );
};

export default Index;