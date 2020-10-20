import React, {Component} from 'react';
import './Footer.scss';
import {connect} from "react-redux";

const INITIAL_STATE = {

}

class Footer extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        // @ts-ignore
        return (
            <footer className="text-muted">
                <div className="container">
                    <p className="float-right">
                        <a href="#">Back to top</a>
                    </p>
                    <p>Teste Dextra - React.js + Redux + Bootstrap 4</p>
                </div>
            </footer>
        )

    }
}

const mapStateToProps = (state: any, props: any) => ({
});


// @ts-ignore
export default connect(mapStateToProps)(Footer);
