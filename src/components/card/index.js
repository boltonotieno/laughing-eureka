import React from 'react'
import styled from "styled-components";
import PreLoader from '../loader'
import { Message } from 'semantic-ui-react'

const Container = styled.div`
  margin-top: 20px;
  display: block;
  padding: 25px 50px;
`
const JokesCard = ({ loading, jokes }) => (
    <Container> {
        loading ? (
            <PreLoader />
        ) :
        jokes.result ? (
            jokes.result.map((joke, index) => (
            <Message
            key={joke.id}
            content={`${index + 1}.  ${joke.value}`}
            />))
        ) : ([])
    }
    </Container>
)

export default JokesCard;
