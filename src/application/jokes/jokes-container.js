import { connect } from "react-redux";
import CategoryList from "./category-list";

const categories = ["explicit", "dev", "movie", "food", "celebrity", "science", "sport", "political", "religion"];

const mapStateToProps = (state) => ({
    categories,
    loading: state.categories.loading,
    error: state.categories.error,
})

export default connect(mapStateToProps)(CategoryList);