import React, {Component, PropTypes} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class Result extends Component{
    constructor(props){
        super(props);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
    }

	render(){
        let {movies} =this.props;
        let yearsOptions;
        if(movies){
            yearsOptions=movies.map(function(movie) {return movie.Year;});
            yearsOptions = [ ...new Set(yearsOptions) ]
        }
		return (
            <div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <DropdownButton onSelect={this.handleYearChange} title="Resale Dates" id="bg-nested-dropdown">
                            {
                                yearsOptions
                               ?yearsOptions.map((year) =>{
                                    return <MenuItem eventKey={year}>{year}</MenuItem>;
                                })
                                :null
                            }     
                        </DropdownButton>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <DropdownButton onSelect={this.handleTypeChange} title="Type" id="bg-nested-dropdown">
                            <MenuItem eventKey="movie">movie</MenuItem>
                            <MenuItem eventKey="series">series</MenuItem>
                            <MenuItem eventKey="episode">episode</MenuItem>
                        </DropdownButton>
                    </div>
                </div>
            </div>

        )
    }
    handleTypeChange(event){
        let {updateSearchType,searchWord, getMovies,searchYear} =this.props;
        updateSearchType('&type='+event);
        if (searchWord) {
            if(searchYear)
                getMovies(searchWord+'&type='+event+searchYear);
            else getMovies(searchWord+'&type='+event);
        }
    }
    handleYearChange(event){
        let {updateSearchYear,searchWord, getMovies,searchType} =this.props;
        updateSearchYear('&y='+event);
        if (searchWord) {
            if(searchType)
                getMovies(searchWord+'&y='+event+searchType);
            else getMovies(searchWord+'&y='+event);
        }
    }
}
Result.propTypes = {
    updateSearchType: PropTypes.func,
    updateSearchYear: PropTypes.func,
    searchWord: PropTypes.string,
    searchType: PropTypes.string,
    searchYear: PropTypes.string,
    movies: PropTypes.arrayOf(PropTypes.shape({
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string
    })),
    getMovies: PropTypes.func
};

export default Result;
