import styled from "styled-components";


export const Container = styled.div` 
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
`;

export const RecipeListContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px;
    justify-content: space-evenly;
    gap: 20px;
    flex-wrap: wrap;
`;

export const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 300px;
    box-shadow: 0 3px 10px 0;
`; 

export const CoverImage = styled.img`
    height: 200px;
    object-fit: cover;
`;

export const RecipeName = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: black;
    margin 10px 0;
`;

export const IngredientsText = styled.span`
    font-size: 18px;
    border: 2px solid #064420;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 15px;
    color: #064420;
    text-align: center;
    margin-bottom: 10px;
    font-weight: 550;
`;

//the properties of above gets passed to this and changes can be added to overwrite 
export const SeeMoreText = styled(IngredientsText)` 
    border: 2px solid #AF0404;
    color: #AF0404;
`;

export const IngredientsSeeMore = styled.span`
    font-size: 16px;
    font-weight: 500;
    border: 1px solid green;
    cursor: pointer;
    padding: 6px 10px;
    border-radius: 5px;
    color: green;
    text-align: center;
    margin-bottom: 10px;
`;

export const IngredientsClose = styled(IngredientsSeeMore)` 
    border: 1px solid red;
    color: red;
`;


export const Placeholder = styled.img`
  width: 150px;
  height: 150px;
  margin: 200px;
  opacity: 70%
`;

export const CopyrightsFooter = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  // width: 99%;
  opacity: 0.6;
  font-weight: bold; 
  text-align: center;
  padding: 3px;
  margin-top: 20px

`;