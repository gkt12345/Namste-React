# We use class App extends from React.component and this object have render method which return jsx.

# Props:- We have cunstructor method, and super keyword for props

# State:- we have this.state for create a state varibale. this is an object. and we add our vairable and inislize it's initial value for this:-- this.state{ count: 0};

# setState():-- for update state we have setState function this has an object to update state:-- this.setState({count: this.state.count+1})

-

# ------------: React Life Cycle :----------

# Class Load (instance of class created) -> cunstructor called -> render called -> componentDidMount called

# important:- But this cycle has been change When parent component having child component::::------ `parent Class Load (instance of class created) -> parent cunstructor called -> parent render called -> Child Class Load (instance of class created) -> Child cunstructor called -> Child render called -> child componentDidMount called -> Parent componentDidMount called`

# componentDidMount:- `It is best place for api calls. because this will mount after dom menupulation initial rendering happend.`

-

# React Life Cycle With more than 1 Child component:-

- Parent Constructor
- Parent Render
  - First Child Cunstructor
  - First Child Render
  - Second Child Cunstructor
  - Second Child Render
    (Now these component renderd to DOM)
- First Child componentDidMount
- First Child componentDidMount
- Parent componentDidMount
  (DOM updated or rerenderd)

-

# Whole React Life Cycle:-

    - Constructor (with state and props dummy data)
    - Render (Component render to DOM wiht dummy data)
    - ComponentDidMount  (API calls)
    - Render ( Updates or rernder DOM with data from Api )
    - ComponentDidUpdate (Update face state, props, and rerender page )
    - ComponentWillMount (Call when you will change the page)

-
