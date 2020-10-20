import React, {Component} from 'react';
import './Content.scss';
import {connect} from "react-redux";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
import DescriptionComics from "../Common/Description/Comics";
import DescriptionCharacters from "../Common/Description/Characters";
import { fetchDetails} from "../../store/actions/detalhe";
import {Col, Container, Row, Button} from "react-bootstrap";

const INITIAL_STATE = {
    type: '',
    id: ''
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Content extends Component {

    constructor(props: any) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    queryStringUrl = (path: string) => {
        return path.match(/[^/?]*[^/?]/g);
    }

    componentDidMount() {
        //@ts-ignore
        const params = this.queryStringUrl(this.props.location.pathname);

        if (params) {
            this.setState({type: params[1], id: params[2]});
            //@ts-ignore
            this.props.dispatch(fetchDetails(params[1], params[2]))
        }

    }

    componentWillUnmount() {

    }

    render() {
        // @ts-ignore
        const { item, related, loading, error, history } = this.props;
        // @ts-ignore
        const { type, id } = this.state;
        const goBack = history.goBack;

        if (error) {
            return <div>Error! {error}</div>;
        }

        if (loading) {
            return(
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-center">
                                <div className="sweet-loading">
                                    <PacmanLoader
                                        css={override}
                                        size={20}
                                        color={"red"}
                                        loading={loading}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            );
        }

        return (
            <article className="detalhe-container">
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <div className="d-flex justify-content-left">
                                <Button onClick={goBack} variant="primary" className="mb-5">
                                    Voltar
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {
                    type === 'quadrinho' ? (
                        <DescriptionComics item={item} />
                    ) : (
                        <DescriptionCharacters item={item} />
                    )
                }
            </article>
        )
    }
}

const mapStateToProps = (state: any, props: any) => ({
    item: state.detalhe.item,
    related: state.detalhe.related,
    loading: state.detalhe.loading,
    error: state.detalhe.error
});

export default connect(mapStateToProps)(Content);