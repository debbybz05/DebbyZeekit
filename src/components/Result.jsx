import React, {Component, PropTypes} from 'react';
import {Grid} from 'react-bootstrap';
import PosterItem from './PosterItem';

class Result extends Component{

	render(){
        let {movies} =this.props;
        
		return (
            <div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <Grid>
                        {
                            movies
                           ?movies.map((movie) =>{
                                return <PosterItem Title={movie.Title} 
                                    Poster={movie.Poster}
                                    Year={movie.Year} />;
                            })
                            :null
                        }     
                    </Grid>
                </div>
            </div>

        )
    }
}
Result.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string
    }))
};

export default Result;
