import React, {Component} from 'react';
import './Paginate.scss';
import {connect} from "react-redux";
import ReactPaginate from 'react-paginate';
import {fetchComics} from "../../../store/actions/listagem";

class Paginate extends Component {

    componentDidMount() {
    }

    handlePageClick = (data: any) => {
        localStorage.setItem('PaginateSelected', data.selected);

        let selected = data.selected;
        //@ts-ignore
        let offset = Math.ceil(selected * this.props.perPage);
        // @ts-ignore
        this.setState({ offset: this.props.offset, selected: selected }, () => {
            //@ts-ignore
            this.props.dispatch(fetchComics(this.props.perPage, offset));
        });
    }
    componentWillUnmount() {

    }

    render() {
        // @ts-ignore
        const { pageCount } = this.props;
        // @ts-ignore
        const historySelected = localStorage.getItem('PaginateSelected');

        return (
            <section className="paginate-container">
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    forcePage={Number(historySelected)}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </section>
        )

    }
}

const mapStateToProps = (state: any, props: any) => ({
});


// @ts-ignore
export default connect(mapStateToProps)(Paginate);
