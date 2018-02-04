##Instructions
  - ensure that you are using a compatible version of node and npm as defined under the 'engines' property of package.json
  - to install all the required dependencies run `npm install` 
  - to view development server run `npm run dev` and open a browser to http://localhost:8080
  - to build production distribution folder:
    - make a copy of `.env.example` at `.env.prod`
    - if you wish to point to a survey repository on a different server replace value of `BASE_API_URL` in `.env.prod` with the api server address
    - run `npm run start`
    - open a browser to http://localhost:8080
  - to use an arbitrary API url set the `API_BASE_URL` environment variable before running `npm run start`. The API server must respond with the appropriate headers to allow [Cross-Origin Resource Sharing (CORS)](https://enable-cors.org/)

##Decisions made
  - I decided to create the app and app components using a functional programming paradigm to make it as easy as possible to reason about the state of the app.
  - I organised the application logic into an app component with two controllers. Each controller is responsible for handeling business logic related to a section of the user interface.
  - Almost all of the visible user interface components are controlled in view objects. This seperation makes it easy to seperate display logic from business logic
  - I used TDD for the development of api.js and I am very pleased with how it turned out
  - I chose `standard` as my linter to avoid having to make decisions about linting configuration

##Known issues
  - XSS: Not escaping any HTML that may be in JSON payload such survey names, question descriptions or theme names. This problem could be mitigated by using handlebars or similar templating language. Configuring a templating system fell out of scope for this project
