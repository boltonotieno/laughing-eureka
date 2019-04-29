import React from "react";
import styled from "styled-components";
import PreLoader from "../../components/loader";

const Content = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 25px;
  grid-gap: 15px;
  grid-auto-flow: dense;
  align-items: stretch;
  width: 100%;
`;
const Image = styled.img`
  width: 10%;
  height: 10%;
  object-fit: cover;
  border-radius: 2px;
  float: left;
`;

const CategoryItem = styled.button`
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
`;

const CategoryList = ({ categories, loading }) => (
  <Content>
    <h1>Categories</h1>
    <Section>
      {loading ? (
        <PreLoader />
      ) : (
        categories.map(category => (
          <CategoryItem key={category}>
            <Image src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" />
            {category}
          </CategoryItem>
        ))
      )}
    </Section>
  </Content>
);

export default CategoryList;
