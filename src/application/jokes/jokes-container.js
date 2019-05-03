import { connect } from "react-redux";
import Categories from "./categories";
import { loadCategories } from "./actions/categoryActions"
import { loadJoke } from "./actions/jokesActions"

const mapStateToProps = (state) => ({
    categories: state.categories.categories,
    loading: state.categories.loading,
    error: state.categories.error,
    joke: state.joke.joke,
    jokeLoading: state.joke.loading,
})

const mapDispatchToProps = dispatch => ({
    loadCategories: () => dispatch(loadCategories()),
    loadJoke: (category) => () => dispatch(loadJoke(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
