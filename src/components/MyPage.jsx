import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import Search from './Search';
import Filter from './Filter';
import Result from './Result';
import {fetchGetMovies, updateSearchWord, updateSearchType, updateSearchYear} from '../actions/';

class MyPage extends Component{
    constructor(props){
        super(props);
        this.handleGetMovies = this.handleGetMovies.bind(this);
    }

	render(){
        let {getMovies, movies, updateSearchWord, updateSearchType, updateSearchYear} =this.props;
        let {searchWord, searchType, searchYear} =this.props;
		return (
            <div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xm-12">
                    <Search updateSearchWord={updateSearchWord} 
                        searchWord={searchWord}
                        getMovies={getMovies} />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-3 col-xm-3">
                    <Filter updateSearchType={updateSearchType} 
                        updateSearchYear={updateSearchYear}  
                        searchWord={searchWord}
                        searchType={searchType}
                        searchYear={searchYear}
                        movies={movies} 
                        getMovies={getMovies} />
                </div>
                 <div className="p-3">
                </div>
                <div className="col-lg-12 col-md-12 col-sm-9 col-xm-9">
                        <Result movies={movies} />
                </div>
            </div>
        )
	}
    handleGetMovies(){
        let {getMovies, searchWord, searchType, searchYear} =this.props;
        if(searchWord){
            if((searchType)&&(searchYear)){
                getMovies(searchWord+searchType+searchYear)
            }
            else if((!searchYear)&&(!searchType))
                getMovies(searchWord)
            else if(!searchYear)
                getMovies(searchWord+searchType)
            else getMovies(searchWord+searchYear)

        }
    }
};

MyPage.propTypes = {
    searchWord: PropTypes.string,
    searchType: PropTypes.string,
    searchYear: PropTypes.string,
    updateSearchWord: PropTypes.func,
    updateSearchType: PropTypes.func,
    updateSearchYear: PropTypes.func,
	movies: PropTypes.arrayOf(PropTypes.shape({
        Title: PropTypes.string,
        Year: PropTypes.string,
        Poster: PropTypes.string
    })),
    getMovies: PropTypes.func
};
const mapStateToProps = (state) => {
   return {  
        movies: state.movies.movies,
        searchWord: state.movies.searchWord,
        searchType: state.movies.searchType,
        searchYear: state.movies.searchYear
    };
};

export default connect(mapStateToProps,{
    updateSearchWord: updateSearchWord,
    updateSearchType: updateSearchType,
    updateSearchYear: updateSearchYear,
    getMovies:fetchGetMovies
})(MyPage);


