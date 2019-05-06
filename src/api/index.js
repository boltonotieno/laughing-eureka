import request from "superagent";

const baseURL = "https://api.chucknorris.io"

const fetchCategories = async () => {
    const response = await request.get(`${baseURL}/jokes/categories`);
    return response.body;
}

const fetchCategoryJoke = async (category) => {
    if (category) {
        const response = await request.get(`${baseURL}/jokes/random?category=${category}`);
        return response.body;
    }
}

const searchJokes = async (query) => {
    if (query) {
        const response = await request.get(`${baseURL}/jokes/search?query=${query}`);
        return response.body;
    }
}
export { fetchCategories, fetchCategoryJoke, searchJokes };
