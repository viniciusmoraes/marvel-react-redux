import React, {Component} from 'react';
import './Comics.scss';
import {connect} from "react-redux";
import Gallery from "../Gallery";
import Creators from "../Creators";
import {Link} from 'react-router-dom';
import * as ROUTES from "../../../constants/routes";
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';

const INITIAL_STATE = {
    OPEN: false,
    CLOSE: false,
    activeID: ''
};

class Comics extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    componentDidMount() {

    }

    componentWillUnmount() {}

    render() {

        //@ts-ignore
        const { items } = this.props;
        let description = '';
        let title = '';

        return (
            <Container>
                <Row>
                    {items.map((item: any, idx: any) => {
                        if (item.description !== null) {
                            description =  item.description.substring(0, 70);
                        }

                        title = item.title.substring(0, 20);

                        return (
                            <Col className="col-12" key={idx} xs={4} md={3} sm={12} >
                                <Card className="mt-4">
                                    <Card.Img src={`${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`} alt={`${item.title}`} variant="top" />
                                    <Card.Body>
                                        <Card.Title>{item.title.length > 20 ? title + '...' : item.title }</Card.Title>
                                        <Creators creators={item.creators} resume={true} />
                                        <Card.Text>
                                            {item.description !== null ? (
                                                <span>{description}...</span>
                                            ): (
                                                <span>sem descrição</span>
                                            )}

                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">
                                            <Link to={`${ROUTES.DETALHE}/quadrinho/${item.id}`}>mais detalhes...</Link>
                                        </small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state: any, props: any) => ({
});


// @ts-ignore
export default connect(mapStateToProps)(Comics);
