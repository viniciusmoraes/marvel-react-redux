import React, {Component} from 'react';
import './Characters.scss';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import * as ROUTES from "../../../constants/routes";
import {Card, Col, Container, Row} from "react-bootstrap";

const INITIAL_STATE = {
    OPEN: false,
    CLOSE: false,
    activeID: ''
};

class Characters extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    toggleClick(id: any){
        if(id !== null) {
            // @ts-ignore
            this.setState(state => ({ ...this.state, OPEN: !state.OPEN, activeID: id }));
        } else {
            // @ts-ignore
            this.setState(() => ({ ...this.state, OPEN: false, activeID: id }));
        }
    }

    componentDidMount() {
        this.toggleClick = this.toggleClick.bind(this);

    }

    componentWillUnmount() {}

    render() {
        //@ts-ignore
        const { items } = this.props;
        let description = '';
        let name = '';

        return (
            <Container className="mt-5">

                <Row>
                    {items.map((item: any, idx: any) => {
                        if (item.description !== null) {
                            description =  item.description.substring(0, 70);
                        }

                        name = item.name.substring(0, 20);

                        return (
                            <Col key={idx} xs={4} md={3}>
                                <Card className="mt-4">
                                    <Card.Img src={`${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`} alt={`${item.title}`} variant="top" />
                                    <Card.Body>
                                        <Card.Title>{item.name.length > 20 ? name + '...' : item.name }</Card.Title>
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
                                            <Link to={`${ROUTES.DETALHE}/personagem/${item.id}`}>mais detalhes...</Link>
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
export default connect(mapStateToProps)(Characters);
