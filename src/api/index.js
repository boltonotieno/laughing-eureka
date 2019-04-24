const baseURL = "https://api.chucknorris.io/"

const fetchCategories = async () => {
    const response = await fetch(`${baseURL}jokes/categories`);
    const data = response.json();
    return data;
}

export { fetchCategories };
