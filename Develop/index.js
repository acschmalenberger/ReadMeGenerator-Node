
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input" ,
            message:"What is your email?" ,
            name: "email"
        },
        {
            type: "input" ,
            message:"What is the name of this project?" ,
            name: "project"
        },
        {
            type: "input",
            message:"What is the URL to your project?" ,
            name: "url"
        },
        {
            type: "input",
            message:"Please write a short description of your project",
            name: "description"
        },
        {
            type: "input" ,
            message:"What kind of license should your project have?",
            name: "license"
        },
        {
            type: "input",
            message:"What command should be run to install dependencies?" ,
            name: "dependencies"
        },
        {
            type:"input" ,
            message:"What command should be run to run tests?",
            name:"tests" 
        },
        {
            type: "input",
            message:"What does the used need to know about using this repo?" ,
            name: "usage"
        },
        {
            type:"input",
            message:"What does the user need to know about contributing to the repo?",
            name: "contributing"
        },
    ])

    .then(answers=>{
        var data = generateMarkdown(answers); 
        fs.writeFile("README.md", data, function(err) {
            if (err) {
                return console.log(err);
            }
        })
        
        console.log("You're README file has been successfully created!!")
    })



