//Javascript is a versatile programming language primarily used for web development. It allows developers to create interactive and dynamic content on websites. JavaScript can be executed on the client side (in the browser) as well as on the server side (using environments like Node.js).
//Script is a programming language that is often used to automate tasks, manipulate data, and create interactive web applications. It is a high-level, interpreted language that is widely supported across different platforms and browsers. JavaScript can be used to enhance user interfaces, validate forms, handle events, and communicate with servers through APIs. It is an essential tool for modern web development and is constantly evolving with new features and capabilities.
//JS allows full intergration with HTML/CSS, simple things are done simply,supported by all major browsers and enabled by default.

//Javascript programs can be inserted almost anywhere into an HTML document using the <script> tag.

//Statements are syntax constructs and commands that perform actions in a program. They are the building blocks of JavaScript code and can include variable declarations, function calls, loops, conditionals, and more. Each statement typically ends with a semicolon (;) to indicate the end of the instruction. Statements can be combined to create complex logic and functionality within a JavaScript program.

//"use strict" is a directive in JavaScript that enables strict mode, which enforces stricter parsing and error handling in the code. When strict mode is enabled, certain actions that are normally allowed in JavaScript will throw errors, helping developers catch potential bugs and write more secure and maintainable code. It can be applied to an entire script or to individual functions by placing the directive at the beginning of the code block.
//A variable is a named storage for data that can hold different types of values, such as numbers, strings, objects, or arrays. In JavaScript, variables can be declared using the keywords var, let, or const. The value of a variable can be changed during the execution of a program (except for const variables, which are read-only). Variables are essential for storing and manipulating data in JavaScript applications.



//Functions are values. They can be assigned, copied or declared in any place of the code.
//If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
//If the function is created as a part of an expression, it’s called a “Function Expression”.
//Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
//Function Expressions are created when the execution flow reaches them.


sayHiDeclaration("John"); // Hello, John

function sayHiDeclaration(name: string) {  // (*) works
  alert( `Hello, ${name}` );
}


sayHiDeclaration("John"); // error!

let sayHi = function(name: string) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
