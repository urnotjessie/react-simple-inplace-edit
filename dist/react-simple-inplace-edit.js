!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=void 0},function(e,t){e.exports=void 0},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),a=n.n(i);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?f(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(){var e,n;l(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return y(f(n=s(this,(e=p(t)).call.apply(e,[this].concat(o)))),"state",{isInputValid:!0,isEditing:!1,updatedValue:n.props.originalValue}),y(f(n),"onCancel",(function(){n.setState({isEditing:!1}),n.state.isInputValid&&n.state.updatedValue.length||n.setState({updatedValue:n.props.originalValue})})),y(f(n),"onNameClick",(function(){n.setState({isEditing:!0})})),y(f(n),"isValidInput",(function(e){return(e.match(/[a-zA-Z0-9\-_\<\>\$\!\,\.\'\s]+/)||[""])[0].length===e.length})),y(f(n),"onFieldChange",(function(e){var t=e.target.value;n.isValidInput(t)?n.setState({isInputValid:!0,updatedValue:t}):n.setState({isInputValid:!1,updatedValue:t})})),y(f(n),"handleSubmit",(function(e){n.state.updatedValue.length&&n.state.isInputValid?n.setState({isEditing:!1}):e.preventDefault()})),y(f(n),"handleKeyDown",(function(e){27===e.keyCode&&n.onCancel()})),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.originalValue;return o.a.createElement("div",{className:"uc-workspaceCollectionHeader-editingWrapper"},!this.state.isEditing&&o.a.createElement("h1",{onClick:this.onNameClick},e),this.state.isEditing&&o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit,onKeyDown:this.handleKeyDown,onBlur:this.onCancel},o.a.createElement("input",{className:"font-sansRegular uc-workspaceCollectionHeader-titleInput","data-tn":"workspaceBoardHeader-input-title",type:"text",autoFocus:!0,value:this.state.updatedValue,onChange:this.onFieldChange}))),this.state.isEditing&&!this.state.isInputValid&&o.a.createElement("p",null,"Error message"))}}])&&c(n.prototype,r),i&&c(n,i),t}(o.a.Component);a.a.render(o.a.createElement(b,{originalValue:"app"}),document.getElementById("root"))}]);