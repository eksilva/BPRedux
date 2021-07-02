# **BPRedux**
>**BPRedux** is a trivial financial advising calculator based on desired risks/outcomes, outputting suggested allocation of funds. BPRedux is also a project for me to learn **Redux** *(React-Redux)* state management.

## **Project Status**
*(1.5.1)* 
View latest version on [Heroku](http://fin-react-redux.herokuapp.com/).

### Current Issues
- Smaller mobile browser widths are not optimized yet.
- Amounts rendering (delta and reallocated) are out of order upon dispatching action to update store.

## **Development Roadmap**

### I. Project Setup
- [X] Create repository.
- [X] Determine/install initial dependencies.
- [X] Whiteboard components and handoffs.

### II. Back End
- [X] Create basic server and file structure.
- [X] Learn/Build Redux Store management.
- [X] Build basic risk selector input and track in store.
- [X] Build basic current allocation amount inputs and track in store

### III. Front End
- [ ] Build components for risk input/percentage output functionality
- [ ] Build pie chart graphic displaying visual allocation percentages 
- [X] Build components for fund allocation amount inputs/reallocated amounts

### IV. Deployment
- [X] Deploy to heroku free-tier hosting platform

## **Engineering Journal**

### I. Pages
1. Home page
- [ ] Home Button
- [X] Risk Selection Buttons
- [ ] Modal View/Hide Button
- [ ] Continue Button
2. Calculator page
- [ ] Home Button
- [X] Current Amount Inputs
- [X] Calculate Button

### II. Store Data
- [X] Risk selection
- [X] Current allocation amounts
- [X] New allocation amounts 

### Redux Notes
- Store must NOT be mutated; therefore reducers must not mutate state
- Fill new state with previous entries by mapping, changing only the entry you want to change, and return new state
- Actions describe what you want to happen, but also interface with UI to pass inputs to reducers, which actually update state/store
- When dealing with forms, usual class component with local state can be used, but react-redux connect function must be called upon exporting the component:
```javascript
export default connect(null, {*action*,*action*,...})(*component*);
``` 