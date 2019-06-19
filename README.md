[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![Maintainability](https://api.codeclimate.com/v1/badges/32df02bd2dca67a0a05f/maintainability)](https://codeclimate.com/github/BoltC0rt3z/laughing-eureka/maintainability)
[![CircleCI](https://circleci.com/gh/BoltC0rt3z/laughing-eureka.svg?style=svg&circle-token=8bcfd74055d92085b2f954dd0e3bbe1728e3c9e6)](https://circleci.com/gh/BoltC0rt3z/laughing-eureka)

## Laughing Eureka

Chuck Norris Facts [Application](https://boltc0rt3z.github.io/laughing-eureka/)


## Description

**laughing-eureka** is jokes application that has consumed the free JSON API for hand curated [Chuck Norris](https://api.chucknorris.io/) facts. Chuck Norris Facts are satirical factoids about martial artist and actor Chuck Norris that have become an Internet phenomenon and as a result have become widespread in popular culture.

### Dependencies

List of libraries, tools, etc needed (e.g. yarn, node.js, python, etc)

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
- [Semantic-UI](https://semantic-ui.com/) -  A Modern front-end development framework, powered by LESS and jQuery
- [Styled-Components](https://www.styled-components.com/docs) - Allows you to write actual CSS code to style your components

- A package manager - [yarn](https://yarnpkg.com/lang/en/) or [NPM](https://www.npmjs.com/)

### Getting Started

- Clone the repo - `git clone https://github.com/BoltC0rt3z/laughing-eureka.git`
- Change into the project directory
- Install project dependencies run `yarn install`
- Run the server `yarn start`


## Consumed Endpoints

In the project directory, you can get:

> Retrieve a list of available categories.
- https://api.chucknorris.io/jokes/categories

> Retrieve a random chuck norris joke from a given category.
- https://api.chucknorris.io/jokes/random?category={category}

> Free text search.
- https://api.chucknorris.io/jokes/search?query={query}

### Example response:

```
{
"icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id" : "lda3Gz9yTz6k7v6nDTAhfw",
"url" : ""
"value" : "Chuck Norris is suing CNN for using two of his initials in there name..."
}
```

## License

This application is licensed under the terms of the [MIT License](https://github.com/BoltC0rt3z/laughing-eureka/blob/develop/LICENSE)
