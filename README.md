
This Explains How we can run `Discord.js v13` with `Node v1.16.1`

Step 1: Clone the repository in repl.it

`KrishnaKsagar/Discord-Bot-Template`

Step 2: Select the language as node.js and type the following in the run container

`bash node index.js`

Step 3: Type this command in `Shell`

`npm i -D node@1.16.1`

Step 4: Create a File called `node` and type the following data

Node file data:

`~/YOUR_REPL_NAME/node_modules/node/bin/node $@`

Step 5: Create a File called `npm` and type the following data

npm file data:

`~/YOUR_REPL_NAME/node_modules/node/bin/node ~/YOUR_REPL_NAME/node_modules/npm/bin/npm-cli.js`

Step 6: Type this command in `Shell`

`npm i -D npm@7.20.5`

Step 7: Create a File called `npx` and type the following data

npx file data:

`~/YOUR_REPL_NAME/node_modules/node/bin/node ~/YOUR_REPL_NAME/node_modules/npm/bin/npx-cli.js $@`

Step 8: Create a client Secret (env file) which gives your token.

`{
  "TOKEN": "BOT_TOKEN"
}`

All Done you are ready and set to go!
