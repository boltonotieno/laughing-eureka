import { connect } from "react-redux";
import { loadSearch } from "./actions/searchActions"
import Search from "./search"


const mapStateToProps = (state) => ({
    loading: state.searchResult.loading,
    jokes: state.searchResult.jokes,
    error: state.searchResult.error,
})

const mapDispatchToProps = dispatch => ({
    loadSearch: (value) => dispatch(loadSearch(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
