/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("\n// const appDiv = document.getElementById(\"app\");\n// if (!(appDiv instanceof HTMLDivElement)) {\n// \tthrow new Error(\"No div with id 'app' found\");\n// }\n// let toDo: string[] = [\"Do Sport\", \"Eat\", \"Read\"];\n// const render = () => {\n// \tappDiv.innerHTML = \"\";\n// \tconst numbersUl = document.createElement(\"ul\");\n// \tfor (const number of toDo) {\n// \t\tconst numberLi = document.createElement(\"li\");\n// \t\tnumberLi.textContent = number.toString();\n// \t\tnumbersUl.appendChild(numberLi);\n// \t}\n// \tconst addInput = document.createElement(\"input\");\n// \taddInput.setAttribute(\"type\", \"string\");\n// \tconst addButton = document.createElement(\"input\");\n// \taddButton.setAttribute(\"type\", \"submit\");\n// \taddButton.setAttribute(\"value\", \"Add ToDos\");\n// \tconst addForm = document.createElement(\"form\");\n// \taddForm.appendChild(addInput);\n// \taddForm.appendChild(addButton);\n// \taddForm.addEventListener(\"submit\", (event) => {\n// \t\tevent.preventDefault();\n// \t\ttoDo.push((addInput.value));\n// \t\trender();\n// \t});\n// \tappDiv.appendChild(numbersUl);\n// \tappDiv.appendChild(addForm);\n// };\n// // Render the app on page load.\n// render();\nconst appDiv = document.getElementById(\"app\");\nif (!(appDiv instanceof HTMLDivElement)) {\n    throw new Error(\"No div with id 'app' found\");\n}\nconst todos = [\n    { job: \"Read\", done: true },\n    { job: \"eat\", done: true },\n    { job: \"doSport\", done: false }\n];\nconst render = () => {\n    appDiv.innerHTML = \"\";\n    const toDosUl = document.createElement(\"ul\");\n    for (const todo of todos) {\n        const toDosLi = document.createElement(\"li\");\n        toDosLi.textContent = todo.job;\n        toDosUl.appendChild(toDosLi);\n        const checkbox = document.createElement(\"input\");\n        checkbox.setAttribute(\"type\", \"checkbox\");\n        checkbox.checked = todo.done;\n        toDosUl.appendChild(checkbox);\n    }\n    const addInput = document.createElement(\"input\");\n    addInput.setAttribute(\"type\", \"string\");\n    const addButton = document.createElement(\"input\");\n    addButton.setAttribute(\"type\", \"submit\");\n    addButton.setAttribute(\"value\", \"Add ToDos\");\n    const addForm = document.createElement(\"form\");\n    addForm.appendChild(addInput);\n    addForm.appendChild(addButton);\n    addForm.addEventListener(\"submit\", (event) => {\n        event.preventDefault();\n        todos.push({ job: addInput.value, done: false });\n        render();\n    });\n    appDiv.appendChild(toDosUl);\n    appDiv.appendChild(addForm);\n};\nrender();\n\n\n//# sourceURL=webpack://05-array-sum/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;