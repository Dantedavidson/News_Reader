import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
//Theme
body{
    background-color:${({ theme }) => theme.colors.body};
    color:${({ theme }) => theme.colors.textOne};
    font-family:${({ theme }) => theme.font};
}

//Shared

//reset
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}
a:link,
a:active,
a:visited,
a:hover {
  color: inherit;
  text-decoration: none;
}

input,
label,
select,
button,
textarea {
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;
  &:focus {
    outline: none;
  }

  /* Browsers have different default form fonts */
}

/* Remove the stupid outer glow in Webkit */
input:focus {
  outline: 0;
}

/* Box Sizing Reset
-----------------------------------------------*/

/* All of our custom controls should be what we expect them to be */
input,
textarea {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

/* These elements are usually rendered a certain way by the browser */
button,
input[type="reset"],
input[type="button"],
input[type="submit"],
input[type="checkbox"],
input[type="radio"],
select {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* Text Inputs
-----------------------------------------------*/

input[type="date"],
input[type="datetime"],
input[type="datetime-local"],
input[type="email"],
input[type="month"],
input[type="number"],
input[type="password"],
input[type="range"],
input[type="search"],
input[type="tel"],
input[type="text"],
input[type="time"],
input[type="url"],
input[type="week"] {
}

/* Button Controls
-----------------------------------------------*/

input[type="checkbox"],
input[type="radio"] {
  width: 13px;
  height: 13px;
}

/* File Uploads
-----------------------------------------------*/

input[type="file"] {
}

/* Search Input
-----------------------------------------------*/

/* Make webkit render the search input like a normal text field */
input[type="search"] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
}

/* Turn off the recent search for webkit. It adds about 15px padding on the left */
::-webkit-search-decoration {
  display: none;
}

/* Buttons
-----------------------------------------------*/

button,
input[type="reset"],
input[type="button"],
input[type="submit"] {
  /* Fix IE7 display bug */
  overflow: visible;
  width: auto;
}

/* IE8 and FF freak out if this rule is within another selector */
::-webkit-file-upload-button {
  padding: 0;
  border: 0;
  background: none;
}

/* Textarea
-----------------------------------------------*/

textarea {
  /* Move the label to the top */
  vertical-align: top;

  /* Turn off scroll bars in IE unless needed */
  overflow: auto;
}

/* Selects
-----------------------------------------------*/

select {
}

select[multiple] {
  /* Move the label to the top */
  vertical-align: top;
}
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus{
  ${({ theme }) => css`
    -webkit-box-shadow: 0 0 0 30px ${theme.colors.body} inset !important;
    -webkit-text-fill-color: ${theme.colors.textOne};
  `}
  
}




.carousel-container {
  width: 100%;
  margin: 3rem auto;
  overflow: hidden;}

input,select,textarea {
    border-bottom: 1px solid ${({ theme }) => theme.colors.textOne};
    color: ${({ theme }) => theme.colors.textOne}
  }
option{
  background-color: ${({ theme }) => theme.colors.body}
}
.error{
  color:${({ theme }) => theme.colors.danger};
  font-size: 0.85rem;
}
label{
  width: 150px;
}
.like{
color:${({ theme }) => theme.colors.like};
}

`;
