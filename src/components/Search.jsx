import React, {Component, PropTypes} from 'react';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';

class Filter extends Component{

    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

	render(){
		return (
            <div>
                <Navbar>
                    <Navbar.Header>
                      <Navbar.Brand />
                      <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                      <Navbar.Form pullLeft>
                        <FormGroup>
                          <FormControl type="text" onChange={this.handleChange} placeholder="Search" />
                        </FormGroup>
                        {' '}
                        <Button type="submit" onClick={this.handleSearch}>Show me</Button>
                      </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
                
            </div>

        )
    }
    handleSearch(event){
        let {getMovies, searchWord} =this.props;
        getMovies(searchWord);
        
    }
    handleChange(event){
        let {updateSearchWord} =this.props;
        updateSearchWord('?s='+event.target.value);
    }
}
Filter.propTypes = {
    searchWord: PropTypes.string,
    updateSearchWord: PropTypes.func,
    getMovies: PropTypes.func
};

export default Filter;
