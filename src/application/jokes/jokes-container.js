import React, { Component } from 'react';
import { connect } from "react-redux";
import CategoryList from "./category-list";
import { loadCategories } from "./actions"

class Categories extends Component {

    componentDidMount() {
        this.props.loadCategories();
    }

    render() {
        const { categories, loading } = this.props;
        return (
            <CategoryList categories={categories} loading={loading} />
        );
    }
}

const mapStateToProps = (state) => ({
    categories: state.categories.categories,
    loading: state.categories.loading,
    error: state.categories.error,
})

const mapDispatchToProps = dispatch => ({
    loadCategories: () => dispatch(loadCategories()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);