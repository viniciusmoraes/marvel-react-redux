import React, {Component} from 'react';
import {connect} from "react-redux";
import Gallery from "../Gallery";
import Moment from 'react-moment';
import {Col, Container, Row, Card} from "react-bootstrap";

const INITIAL_STATE = {
}

class DescriptionComics extends Component {

    constructor(props: any) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        // @ts-ignore
        const { item } = this.props;
        const arrayDates = item.dates;
        const arrayPrice = item.prices;
        const arrayUrls = item.urls;
        const dateFOC = arrayDates.find((date: any) => date.type === 'focDate');
        const link = arrayUrls.find((url: any) => url.type === 'detail');
        const price = arrayPrice[0].price === 0 ? 'Free' : arrayPrice[0].price;
        const stories = item.stories.items;
        const creators = item.creators.items;
        const characters = item.characters.items;
        const events = item.events.items;

        return (
            <section className="description-container">
                <Container>
                    <Row>
                        <Col className="col-12" xs={12} md={12} sm={12}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Modificado: <Moment format="DD/MM/YYYY">{item.modified}</Moment>
                                    </Card.Subtitle>

                                    {item.description !== null ? (
                                        <Card.Text>{item.description}</Card.Text>
                                    ) : null}

                                    <Card.Link href={link.url} target="_blank">Info Marvel</Card.Link>

                                    <Container>
                                        <Row>
                                            { item.images.length > 0 ? (
                                                <Col className="col-12" xs={12} md={12} sm={12}>
                                                    <Gallery className="mt-5" images={item.images}/>
                                                </Col>
                                            ) : null}

                                            <Col className="col-12 list-container" xs={12} md={4} sm={12}>
                                                <h3>Créditos e Informações</h3>
                                                <ul>
                                                    <li>Diamond Code: {item.diamondCode}</li>
                                                    <li>Price: {price}</li>
                                                    <li>UPC: {item.upc}</li>
                                                    <li>FOC Date: <Moment format="DD/MM/YYYY">{dateFOC.date}</Moment></li>
                                                </ul>
                                            </Col>
                                            <Col className="col-12 list-container" xs={12} md={4} sm={12}>
                                                <h3>Histórias</h3>
                                                { item.stories.available !== 0 ? (
                                                    <ul>
                                                        {stories.map((item: any, idx: any) => {
                                                            return (
                                                                <li className="" key={idx}>{item.name}</li>
                                                            )
                                                        }) }
                                                    </ul>
                                                ): (
                                                    <p>Not Available</p>
                                                )}
                                            </Col>
                                            <Col className="col-12 list-container" xs={12} md={4} sm={12}>
                                                <h3>Criadores</h3>
                                                { item.creators.available !== 0 ? (
                                                    <ul>
                                                        {creators.map((item: any, idx: any) => {
                                                            return (
                                                                <li className="" key={idx}>{item.role} : {item.name}</li>
                                                            )
                                                        }) }
                                                    </ul>
                                                ): (
                                                    <p>Not Available</p>
                                                )}
                                            </Col>
                                            <Col className="col-12 list-container" xs={12} md={4} sm={12}>
                                                <h3>Personagens</h3>
                                                { item.characters.available !== 0 ? (
                                                    <ul>
                                                        {characters.map((item: any, idx: any) => {
                                                            return (
                                                                <li className="" key={idx}>{item.name}</li>
                                                            )
                                                        }) }
                                                    </ul>
                                                ): (
                                                    <p>Not Available</p>
                                                )}
                                            </Col>
                                            <Col className="col-12 list-container" xs={12} md={4} sm={12}>
                                                <h3>Eventos</h3>
                                                { item.events.available !== 0 ? (
                                                    <ul>
                                                        {events.map((item: any, idx: any) => {
                                                            return (
                                                                <li className="" key={idx}>{item.role} : {item.name}</li>
                                                            )
                                                        }) }
                                                    </ul>
                                                ): (
                                                    <p>Not Available</p>
                                                )}
                                            </Col>
                                        </Row>
                                    </Container>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

const mapStateToProps = (state: any, props: any) => ({

});

export default connect(mapStateToProps)(DescriptionComics);