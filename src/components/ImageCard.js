import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.state = { spans: 0 };

        //defined and initialized ref
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // this way you pull the ref data after the element is fully loaded
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    }
    
    render(){
        //destructuring image object to reduce amount of code
        const { description, urls} = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    // link the ref to an element through ref attribute
                    ref={this.imageRef}
                    alt={description} 
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;