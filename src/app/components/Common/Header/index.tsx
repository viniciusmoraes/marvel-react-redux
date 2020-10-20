import React, {Component} from 'react';
import './Header.scss';
import {connect} from "react-redux";
import {fetchSearch} from "../../../store/actions/listagem";

import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const INITIAL_STATE = {
    search: {
        name: ''
    }
}

class Header extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    componentDidMount() {
        // @ts-ignore
        console.log('componentDidMount', this.props.location)
    }

    componentWillUnmount() {}

    onChange = (event: any) => {
        this.setState({ ...this.state, search: { [event.target.name]: event.target.value } });
    };

    onSubmit = (event: any) => {
        event.preventDefault();
        // @ts-ignore
        const { search } = this.state;

        if (search.name != '')
            // @ts-ignore
            this.props.dispatch(fetchSearch(search.name));
    }

    render() {
        // @ts-ignore
        const { search } = this.state;

        // @ts-ignore
        const { location } = this.props;

        return (
            <header className="mb-5">
                <div className="navbar-container box-shadow">
                    <Container>
                        <Row>
                            <Col className="col-12" sm={12} xs={9} md={9}>
                                <a href="#" className="mt-3 mb-3 navbar-brand d-flex align-items-center">
                                    <img className="w-50" src="/static/images/marvel.png" alt="Marvel Logo"/>
                                </a>
                            </Col>
                            {
                                location.pathname === "/" ? (
                                    <Col className="col-12" sm={12} xs={3} md={3}>
                                        <Form.Group className="mt-3">
                                            <Container>
                                                <Row>
                                                    <Col className="col-12" sm={12} md={8}>
                                                        <Form.Control
                                                            name="name"
                                                            value={search.name}
                                                            type="text"
                                                            onChange={this.onChange}
                                                            placeholder="Buscar por nome do personagem"
                                                        />
                                                    </Col>
                                                    <Col className="col-12" sm={12} md={4}>
                                                        <Button onClick={this.onSubmit} variant="primary">
                                                            Buscar
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Form.Group>
                                    </Col>
                                ) : null
                            }

                        </Row>
                    </Container>
                </div>

            </header>
        )

    }
}

const mapStateToProps = (state: any, props: any) => ({
});


// @ts-ignore
export default connect(mapStateToProps)(Header);
