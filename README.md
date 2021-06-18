# Recipe Finder Application using React.js
Responsive website built using React which displays recipes based on the searched ingredient or dish. Displays the set of ingredients for a particular recipe in the form of a pop up. Redirects to other websites for the full recipe. 
<br><br>

![Recipe Finder App](RecipeFinderApp.gif)
<br><br>

## Libraries Used:
<ul>
  <li>
    <b>Styled Components</b><br>
    CSS-in-JS. CSS selectors are scoped automatically to their component and styles are tightly coupled with their components, making it easier to use CSS. Avoids selector name collisions. 
  </li>
  <li>
    <b>Material-UI</b><br>
    Used for the dialog/popup to display the list of ingredients 
  </li>
  <li>
    <b>Axios</b><br>
     Used to make HTTP requests from the browser. Supports Promise API.
  </li>
</ul>
<br>

## Other Concepts Used:
<ul>
  <li><b>Food API setup using Edamam https://www.edamam.com </b></li>
  <li><b>Debouncing</b><br>Avoids calling the API for each letter typed in search box and fetches API only after a gap of one second</li>
  <li><b>Responsive UI using CSS flex property</b></li>
  <li><b>React Hooks</b><br>State Hooks used to update the list of recipes on each API call</li>
</ul>

