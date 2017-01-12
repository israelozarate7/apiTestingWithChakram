# Api Testing With Chakram
Repo to check the response that we receive from different APIs.
This tool is based in Chakram. Chakram runs on node.js and is distributed via NPM. 
 
The Mocha test runner is used to run tests.
 
# Requirements
 * Chakram: http://dareid.github.io/chakram/
 * Mocha  : http://mochajs.org/

# Install Process
 1. Clone the repo..
 2. Run `sudo docker-compose build` to create docker containers of the fake API.
 3. Run `sudo docker-compose up` to launch docker containers.
 4. Run `npm install --save-dev chakram` to install the needed libraries.
 5. Run `npm install -g mocha` to install dependencies that we need.

# How It works
 1. Run `mocha path/to/tests` or `mocha testName`
 2. Check the results in you terminal.
 3. That's all folks.