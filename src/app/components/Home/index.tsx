import * as React from 'react';
import './index.scss';
import Listagem from "../Listagem";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const HomePage = (props: any) => (
    <article className="page-home">
        <Header location={props.location} />
        <Listagem />
        <Footer />
    </article>
);

export default HomePage;