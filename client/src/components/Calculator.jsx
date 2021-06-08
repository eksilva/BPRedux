import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { assignBonds } from '../actions';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();

    //const riskTracker = useSelector(state => state.riskTracker);
  
    //const dispatch = useDispatch();

  }

  // handleChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const id = target.id;
  //   this.setState({
  //     [id]: Number(value),
  //   })
  // }
  
  handleSubmit(event) {
    event.preventDefault();
    // use actions
    const bonds = this.input.current.value;
    console.log(bonds);
    // assignBonds(bonds);
  }

  render() {
    return (
      <div id="Calculator">
        <form onSubmit={this.handleSubmit}>
          <input required={true} className="amount" id="BONDS" type="text" ref={this.input}></input>

          <input type='submit'>Calculate</input>
        </form>
      </div>
    )
  }
}

export default Calculator;