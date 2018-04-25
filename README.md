# redux-todoapp

> is an example React/Redux app

## Usage

Go into this folder, then launch once `npm install` to install dependencies.

To start the app do

1. `npm run api`: run backend API server, see [json-server].
2. `npm start`: launch development server, then connect to http://localhost:8080/.

You can also launch:

* `npm run lint`: lint code.
* `npm run build`: generate bundle.js in public/ folder.

## Motivation

> Let's learn React and Redux with a classic ToDo app.

I started from React [TodoMVC] example and added:

* [webpack], [ESlint] to enhance development environment.
* [Redux] for a predictable global state container.
* [redux-thunk] for async actions.
* [json-server] for an easy way to simulate APIs.
* [React-Router] to benefit from HTML5 history.

## Lesson learned

> About state

Start learning [React] first! Every component has its own internal **state**. Your state can live at three main levels:

1. Your *React component*: start from here, then move up as long as your app grows in complexity. Even when your app evolves, it is worth to handle at this level everything that you don't need to persist.
2. Your *app*, hence it is located in your client device. Here you can use [Redux] to manage it, but there can be some variations: part of your state can live in the URL, hence could be managed by [React-Router]; you can use *localStorage* to persist part of your state. However rememeber that it is a good idea to have an (almost :) single source of truth that is your [Redux] state.
3. You *API*, that is an higher level. Yes, if you want to save your current app state, if you want to interact with other devices, you will end up to a **global** state, managed by your architecture APIs.

[ESlint]: http://eslint.org/
[webpack]: https://webpack.github.io/
[React]: https://facebook.github.io/react/
[Redux]: http://redux.js.org/
[React-Router]: https://reacttraining.com/react-router/
[json-server]: https://github.com/typicode/json-server
[redux-thunk]: https://github.com/gaearon/redux-thunk
[TodoMVC]: http://todomvc.com/
