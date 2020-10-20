import * as React from 'react';
import './Detalhe.scss';
import Content from "../Content";
import Header from "../Common/Header";
import Footer from "../Common/Footer";

const DetalhePage = (props: any) => (
    <article className="page-detalhe">
        <Header location={props.location} />
        <Content history={props.history} location={props.location} />
        <Footer />
    </article>
);

export default DetalhePage;