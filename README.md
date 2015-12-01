# react-fa-icon

## Font Awesome Icon component for React

### install

`npm install @epferrari/react-fa-icon --save`

**note** Don't forget to install the font awesome package itself, and include its css or less in your app somewhere
 
`npm install font-awesome --save`


### usage

###### ES6/ES2015

`import FontIcon from "@epferrari/react-fa-icon";`

`<FontIcon icon="bluetooth"/>`
`<FontIcon icon="spinner" spin/>`

###### CommonJS

`var FontIcon = require("@epferrari/react-fa-icon");`

### props

| prop | type | |
| --- | --- | --- |
| icon | _string_ | the name of the icon to render. Same as the class name you would use with an `<i>` tag, but does not need to be prefaced by "fa-" |
| size | _string_ \| _int_ | accepts one of the following `"lg", 2, 3, 4, 5` |
| right | _boolean_ | pull the icon to align right |
| left | _boolean_ | pull the icon to align left |
| flip | _boolean_ | invert the icon across the x-axis |
| mirror | _boolean_ | invert the icon across the y-axis |
| rotate | _int_ | accepts one of the following `90, 180, 270` |
| fixed | _boolean_ | creates a fixed width icon |
| spin | _boolean_ | animate the icon spinning |
| border | _boolean_ | render a border around the icon |
