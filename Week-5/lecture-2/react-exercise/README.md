# Unit & Integration Testing

- [ ] Types of Testing
- [ ] Tools for Testing


### Types of Testing
unit - testing the smallest piece of the app (function)
integration - testing pieces working together
end-to-end - testing the app the way a user would use it
static - Lint
regression testing - making sure new changes didn't break existing features

### Tools for Testing React
* Jest - test runner (similar to mocha, can use instead of mocha for any code)
 - look at package.jso -part of react scripts. already installed 
 - why does react favor Jest?  owned by facebook - check github
 - jestjs.io
 - getting started
 - looks a lot like Mocha!
 - API -> Expect + soemthing
 - Jest only does Unit tests

 * Testing Library
 * React Testing Library
 Built on top of the DOM Testing Library, gives us more possibilities to target and render React elements to make them possible to test
 * JestDOM