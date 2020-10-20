import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, Col, Container, Row} from "react-bootstrap";
import Moment from "react-moment";
import Gallery from "../Gallery";

const INITIAL_STATE = {
}

class DescriptionCharacters extends Component {

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

        if (item.name != undefined) {
            const arrayUrls = item.urls;
            const link = arrayUrls.find((url: any) => url.type === 'detail');
            const stories = item.stories.items;
            const comics = item.comics.items;
            const series = item.series.items;
            const events = item.events.items;

            return (
                <section className="description-container">
                    <Container>
                        <Row>
                            <Col className="col-12" xs={12} md={12} sm={12}>
                                <Card>
                                    <Card.Body>
                                        <Col className="col-12" xs={12} md={3} sm={12}>
                                            <img src={`${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`} alt={`${item.name}`} />
                                        </Col>
                                        <Col className="col-12" xs={12} md={9} sm={12}>
                                            <Card.Title>{item.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">
                                                Modificado: <Moment format="DD/MM/YYYY">{item.modified}</Moment>
                                            </Card.Subtitle>

                                            {item.description !== null ? (
                                                <Card.Text>{item.description}</Card.Text>
                                            ) : null}

                                            <Card.Link href={link.url} target="_blank">Info Marvel</Card.Link>

                                        </Col>

                                        <Container>
                                            <Row>
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
                                                    <h3>Comics</h3>
                                                    { item.comics.available !== 0 ? (
                                                        <ul>
                                                            {comics.map((item: any, idx: any) => {
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
                                                    <h3>Series</h3>
                                                    { item.series.available !== 0 ? (
                                                        <ul>
                                                            {series.map((item: any, idx: any) => {
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

        return (
            <></>
        )
    }
}

const mapStateToProps = (state: any, props: any) => ({

});

export default connect(mapStateToProps)(DescriptionCharacters);