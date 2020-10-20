import React, {Component} from 'react';
import './Gallery.scss';
import {connect} from "react-redux";
import ImageGallery from 'react-image-gallery';

const INITIAL_STATE = {
    images: []
}

const modelo = {
}

class Gallery extends Component {
    private novoArray = [];
    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {...INITIAL_STATE};

        // @ts-ignore
        this.filterArray(props.images);
    }

    filterArray(images: any) {
        images.map((image: any, idx: any) => {
            //@ts-ignore
            this.novoArray.push({original: `${image.path}/portrait_xlarge.${image.extension}`, thumbnail: `${image.path}/portrait_small.${image.extension}`})
        })
    }
    componentDidMount() {
        console.log('this.novoArray', this.novoArray);
    }

    componentWillUnmount() {

    }

    render() {
        // @ts-ignore
        const images = this.novoArray;
        return (
            <section className="gallery-container">
                <ImageGallery items={images} />
            </section>
        );
    }
}

const mapStateToProps = (state: any, props: any) => ({
});


// @ts-ignore
export default connect(mapStateToProps)(Gallery);
