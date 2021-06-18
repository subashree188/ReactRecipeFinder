import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'; //material ui library used for creating dialog box
import Dialog from '@material-ui/core/Dialog';
import Axios from "axios"; //used for making API calls
import { useState } from "react";
import React from 'react';

import Header from './components/headerComponent'
// import {
//   Header, 
//   AppNameComponent, 
//   AppLogo, SearchComponent, 
//   SearchIcon, 
//   SearchInput
// } from './components/headerComponent'

import {
  Container,
  RecipeListContainer,
  RecipeContainer,
  CoverImage,
  RecipeName,
  IngredientsText,
  SeeMoreText,
  IngredientsSeeMore,
  IngredientsClose,
  Placeholder,
  CopyrightsFooter
} from './components/recipeComponent'


const APP_ID = "29f36c4a";
const APP_KEY = "213b62829234f32a264bd53d5d663652";



//the box component to display each recipe, based on number of json data fetched
const RecipeComponent = (props) => {
 
  const { recipeObj } = props;
  const [show, setShow] = React.useState(false);



  return(

  //div fragment
  <> 
    <Dialog open={show}>
      <DialogTitle>{recipeObj.label} Ingredients</DialogTitle>
      <DialogContent>
        <table>
          <thead>
            <th>Ingredients</th>
            <th>Weight</th>
          </thead>

          <tbody>
          {recipeObj.ingredients.map((ingredientObj) => (
              <tr>
                <td>{ingredientObj.text}</td>
                <td>{ingredientObj.weight}</td>
              </tr>
            ))}        
          </tbody>
        </table>
      </DialogContent>
      <DialogActions>
          <IngredientsSeeMore onClick={() => window.open(recipeObj.url)}>See More</IngredientsSeeMore>
          <IngredientsClose onClick={() => setShow(false)}>Close</IngredientsClose>
        </DialogActions>
    </Dialog>

    <RecipeContainer>
      <CoverImage src={recipeObj.image} />
      <RecipeName>{recipeObj.label}</RecipeName>
      <IngredientsText onClick={() => setShow(true)}> Ingredients </IngredientsText>
      <SeeMoreText onClick={() => window.open(recipeObj.url)}> View Full Recipe </SeeMoreText>
    </RecipeContainer>
  </>

  );
};

function App() {

  const [timeoutId, updateTimeOutId] = useState(); //react hooks
  const [RecipeList, updateRecipeList] = useState([]); 

  // Using Axios to get the JSON data by API calls
  const fetchRecipe = async (searchString) => {
    const response = await Axios.get("https://api.edamam.com/search?q="+searchString+"&app_id="+APP_ID+"&app_key="+APP_KEY);
    // console.log(response);
    updateRecipeList(response.data.hits);
  };

  // DEBOUNCING - calls API only after user pauses for 1 second thus preventing calls for each letter change
  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 1000);
    updateTimeOutId(timeout);
  };


  return (
    <Container>

      <Header.Header>
        <Header.AppNameComponent>
          <Header.AppLogo src="/app-logo.svg" />
          Yummy Tummy
        </Header.AppNameComponent>
        <Header.SearchComponent>
          <Header.SearchIcon src="/search-icon.svg" alt="search icon" />
          <Header.SearchInput placeholder="Search Recipe" onChange={onTextChange} />  
        </Header.SearchComponent> 
      </Header.Header>

      <RecipeListContainer>
        {
          RecipeList.length ? 
          (RecipeList.map((recipeObj) => (<RecipeComponent recipeObj ={recipeObj.recipe} />))) : 
          (<Placeholder src="app-logo.svg" />)
        }
      </RecipeListContainer>  

      <CopyrightsFooter>
        © 2021 Suba Shree V S
      </CopyrightsFooter>

       
    </Container>
  );
}

export default App;
