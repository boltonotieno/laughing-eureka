import React, { useState } from 'react'
import styled from "styled-components";
import { func } from "prop-types"

const Form = styled.form`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  font-family: Montserrat;
`;

const TextField = styled.input`
    width: 500px;
    height: 40px;
    outline: none;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 20px;
`;

const SearchForm = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(query);
    }

    return (
        <Form class="text-input" onSubmit={handleSubmit}>
            <TextField type="text" onChange={handleChange} value={query} placeholder="Try searching for a joke in here!" />
        </Form>
    )
}

SearchForm.propTypes = {
    onSubmit: func
}

export default SearchForm;
