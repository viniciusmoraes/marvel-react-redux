import React from 'react';
import './index.scss';
import {connect} from 'react-redux';
import {fetchComics} from "../../store/actions/listagem";
import Comics from "../Common/Comics";
import Characters from "../Common/Characters";
import Paginate from "../Common/Paginate";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Container, Row, Col, CardGroup } from 'react-bootstrap';

const INITIAL_STATE = {
    OPEN: false,
    CLOSE: false,
    activeID: ''
};

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Listagem extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    componentDidMount() {
        localStorage.removeItem('PaginateSelected')

        // @ts-ignore
        this.props.dispatch(fetchComics(10, 0));
    }


    render() {
        // @ts-ignore
        const {error, loading, comics, characters, meta, notfound} = this.props;
        const pageCount = Math.ceil(meta.total / meta.limit)

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

        if (notfound) {
            return <div>not found</div>
        }

        return (
            <article className="listagem-container album py-5 bg-light">
                <Container className="">
                    <Row>
                        <Col>
                            <CardGroup>
                                {comics !== null ? (
                                    <Comics items={comics} />
                                ) : null }

                                {characters !== null ? (
                                    <Characters items={characters} />
                                ) : null }
                            </CardGroup>
                        </Col>
                    </Row>
                    { meta.total > 10 ? (
                        <Row>
                            <Col>
                                <div className="d-flex justify-content-center">
                                    <Paginate offset={meta.offset} perPage={10} pageCount={pageCount} />
                                </div>
                            </Col>
                        </Row>
                    ) : null }
                </Container>
            </article>
        )

    }
}

// @ts-ignore
const mapStateToProps = state => ({
    comics: state.listagem.comics,
    characters: state.listagem.characters,
    meta: state.listagem.meta,
    loading: state.listagem.loading,
    error: state.listagem.error,
    notfound: state.listagem.notfound
});

export default connect(mapStateToProps)(Listagem);