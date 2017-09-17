import React from 'react'

import {Thumbnail} from 'react-bootstrap'
import {connect} from "react-redux";


import {search, filterResults} from "../state/searching";
import NoItemFound from "./NoItemFound";
import SearchResultsGridItem from "./SearchResultsGridItem";

class SearchResultsGrid extends React.Component {

    render() {
        const searchResults = this.props.filteredResults

        return (

            <div>
                <h1>Grid</h1>
                <Thumbnail>{
                    searchResults && searchResults.toString() === "" ?
                        <NoItemFound/>
                        :
                        <SearchResultsGridItem searchResults={searchResults}/>
                }
                </Thumbnail>
            </div>
        )
    }
}


export default connect(
    state => ({
        searchedItems: state.searching.searchedItems,
        filteredResults: state.searching.filteredResults
    }),
    dispatch => ({
        addSearchedItem: searchedItem => dispatch(search(searchedItem)),
        addSearchedResults: (searchedProducts, searchedItem) => dispatch(filterResults(searchedProducts, searchedItem))
    })
)(SearchResultsGrid)