import styled from "styled-components";

//Defining various styled components (HTML kind of tags with defined styles is used to add it)

const Header = styled.div`
  color: white;
  background-color: #3B0A35;
  display: flex;
  flex-direction: row;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  align-items: center;
  justify-content: space-between; 
`;

//div tag
const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;
//img tag
const AppLogo = styled.img` 
  width: 36px;
  height: 36px;
  margin: 10px;
`;

const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 20px;
  width: 50%;

`;
//input tag for search
const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  width: 90%;
`;
//search icon image
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export default{
  Header,
  AppNameComponent,
  AppLogo,
  SearchComponent,
  SearchInput,
  SearchIcon
}