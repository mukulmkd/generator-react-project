# New React TypeScript Webpack project boilerplate generator
This is the yeoman generator for creating a new TypeScript/React/Redux project

## Prerequisites (do it only once in your machine)
* Create a Git clone of this repository on your machine
    * Open a git bash in the folder in which you want to create the clone.
    * Run: git clone https://github.com/mukulmkd/generator-react-project.git
* Install the dependencies
    * Open a terminal/shell in the folder "generator-react-project".
    * Run the command: "npm install -g yo"
* Make the generator available in yeoman.
    * Run the command: "npm link"

## How to generate a project base (for each new project)
* Update the generator to the latest version.
    * Open a git bash in the generator folder "generator-react-project" (created in the prerequisites).
    * Run the command: "git pull"

* Create your project folder (empty) where you want.
* Open a command prompt or any code editor terminal and navigate to the project folder created above.
* Run the command: "yo react-project"
* When prompted enter your project name without space (it will be the main namespace in the resulting JS file of your project).
* When prompted enter the project description.
* Let the magic happen.
* Test that everything is ok by running "npm run build"

If you have no red in the console, it's done and you can start to work in the src folder.

## Running the project
* First execute "npm run build" command and then you can take the 'debug' or 'release' verision of files together with the index.html file to distribute.
* Execute "npm start" to run the app at the localhost.

ENJOY and Happy Coding !!!!!!!!!!!
