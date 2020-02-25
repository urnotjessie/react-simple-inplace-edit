# react-simple-inplace-edit
A react component that enables in-place editing for text.

### Installation

`npm install react-simple-inplace-edit --save-dev`

### Required props
- `originalValue`:`string` initial text

### Optional props
- `errorMessage`: `string` error message for invalid input
- `onSubmit`: `function` function to call when the new text is submitted
- `validate`: `function` boolean function for customized validating
- `titleClassName`: `string` CSS class name for `<h1>` 
- `formClassName`: `string` CSS class name for `<form>`
- `inputClassName`: `string` CSS class name for `<input>`
- `errorMessageClassName`: `string` CSS class name for error message