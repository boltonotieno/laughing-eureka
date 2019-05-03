import React, { useEffect, useState } from 'react';
import CategoryList from "./category-list";
import JokesModal from "./jokes-modal";

const Categories = (props) => {

    const [status, setStatus] = useState(false);

    const [nextJokeStatus, setNextJokeStatus] = useState(false);

    useEffect(() => {
        props.loadCategories();
    }, []);

    const handleOpenModal = (category) => () => {
        props.loadJoke(category)();
        setStatus(true)
    }

    const handleNextJoke = (category) => () => {
        setNextJokeStatus(true)
        props.loadJoke(category)();
    }

    const handleCloseModal = () => {
        setStatus(false)
        setNextJokeStatus(false)
    }

    const getCategory = (joke) => joke.category ? joke.category[0] : joke.category == null ? "explicit" : "";

    const { categories, loading, joke, jokeLoading } = props;
    return (
        <div>
            <CategoryList categories={categories} loading={loading} handleOpenModal={handleOpenModal} />
            <JokesModal open={status} nextJokeStatus={nextJokeStatus} joke={joke} loading={jokeLoading}
                getCategory={getCategory} loadNextJoke={handleNextJoke} handleCloseModal={handleCloseModal} />
        </div>
    );
}

export default Categories;
