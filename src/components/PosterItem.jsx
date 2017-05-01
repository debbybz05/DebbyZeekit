import React, {Component, PropTypes} from 'react';
import {Col} from 'react-bootstrap';

class PosterItem extends Component{

	render(){
        let {Title, Poster, Year} =this.props;
        return (
            <Col xs={6} sm={6} md={4} lg={4}>
                <code>
                    <div>{Title} </div>
                    <div>{Year}</div>
                    <div><a href={Poster}>Poster</a></div>
                </code>
           </Col>
        )
    }
}
PosterItem.propTypes = {
	Title: PropTypes.string,
	Poster: PropTypes.string,
    Year: PropTypes.string
};

export default PosterItem;
