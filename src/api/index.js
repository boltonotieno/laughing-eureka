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
export { fetchCategories, fetchCategoryJoke };
