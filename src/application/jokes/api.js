
const fetchCategories = async () => {
    const response = await fetch(`https://api.chucknorris.io/jokes/categories`);
    const data = response.json();
    return data;
}

export { fetchCategories };
