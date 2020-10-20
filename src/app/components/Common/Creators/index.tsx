import React, {Component} from 'react';
import './Creators.scss';
import {connect} from "react-redux";

const INITIAL_STATE = {
    creators: []
}

class Creators extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        // @ts-ignore
        const { creators, resume } = this.props;

        if (resume) {
            return (
                <section className="creators-container">
                    {
                        creators.items.length > 0 ? (
                            <span>
                                {
                                    creators.items.map((item: any, idx: any) => {
                                        if (idx < 1) {
                                            return (<div className="creator-item" key={idx}>{item.name}</div>)
                                        }
                                    })
                                }
                            </span>
                        ) : (
                            <span>sem autor</span>
                        )

                    }
                </section>
            );
        } else {
            return (
                <section className="creators-container">
                    <ul>
                        {
                            creators.items.map((item: any, idx: any) => {
                                return (
                                    <li>
                                        <h3>Nome: {item.name}</h3>
                                        <h4>Função: {item.role}</h4>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            );
        }

    }
}

const mapStateToProps = (state: any, props: any) => ({
});


// @ts-ignore
export default connect(mapStateToProps)(Creators);
