import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { assignBonds, 
         assignLargeCap,
         assignMidCap,
         assignSmallCap,
         assignForeign } from '../actions';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      BONDS: '',
      LARGECAP: '',
      MIDCAP: '',
      SMALLCAP: '',
      FOREIGN: ''
     };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    //const riskTracker = useSelector(state => state.riskTracker);
  
    //const dispatch = useDispatch();

  }

  handleChange(target) {
    const value = target.value;
    const id = target.id;
    this.setState({
      [id]: Number(value),
    })
  }
  
  handleSubmit(event) {
    // event.preventDefault();
    // use actions
    this.props.assignBonds(this.state.BONDS);
    this.props.assignLargeCap(this.state.LARGECAP);
    this.props.assignMidCap(this.state.MIDCAP);
    this.props.assignSmallCap(this.state.SMALLCAP);
    this.props.assignForeign(this.state.FOREIGN);
    this.setState({
      BONDS: '',
      LARGECAP: '',
      MIDCAP: '',
      SMALLCAP: '',
      FOREIGN: ''
    });
  }

  render() {
    return (
      <div id="Calculator">
        <input required={true} className="amount" id="BONDS" type="text" onChange={e => this.handleChange(e.target)}></input>
        <input required={true} className="amount" id="LARGECAP" type="text" onChange={e => this.handleChange(e.target)}></input>
        <input required={true} className="amount" id="MIDCAP" type="text" onChange={e => this.handleChange(e.target)}></input>
        <input required={true} className="amount" id="SMALLCAP" type="text" onChange={e => this.handleChange(e.target)}></input>
        <input required={true} className="amount" id="FOREIGN" type="text" onChange={e => this.handleChange(e.target)}></input>
        <button onClick={this.handleSubmit}>Calculate</button>
      </div>
    )
  }
}

export default connect(
  null,
  { assignBonds, assignLargeCap, assignMidCap, assignSmallCap, assignForeign }
  )(Calculator);