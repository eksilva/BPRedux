# **BPRedux**
>**BPRedux** is a trivial financial calculator based on desired risks/outcomes, outputting suggested allocation of funds. BPRedux is also a project for me to learn **Redux** state management.

## **Project Status**
*In development. (0.0.5)*

## **Development Roadmap**

### I. Project Setup
- [X] Create repository.
- [X] Determine/install initial dependencies.
- [X] Whiteboard components and handoffs.

### II. Back End
- [X] Create basic server and file structure.
- [ ] Learn/Build Redux Store management.
- [ ] Build risk selector input and track in store.
- [ ] Build current allocation amount inputs and track in store

### III. Front End
- [ ] Build components for risk input/percentage output functionality
- [ ] Build pie chart graphic displaying visual allocation percentages 
- [ ] Build components for fund allocation amount inputs/reallocated amounts

### IV. Deployment
- [ ] Deploy to heroku free-tier hosting platform

## **Engineering Journal**

### I. Pages
1. Home page
- [ ] Home Button
- [ ] Risk Selection Buttons
- [ ] Modal View/Hide Button
- [ ] Continue Button
2. Calculator page
- [ ] Home Button
- [ ] Current Amount Inputs

### II. Store Data
- [ ] Risk selection
- [ ] Current allocation amounts

### Redux Notes
- Store must NOT be mutated; therefore reducers must not mutate state
- Fill new state with previous entries by mapping, changing only the entry you want to change, and return new state