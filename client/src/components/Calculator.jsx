import React from 'react';
import { connect } from 'react-redux';
import { assignBonds, 
         assignLargeCap,
         assignMidCap,
         assignSmallCap,
         assignForeign } from '../actions';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      BONDS: 100,
      LARGECAP: 100,
      MIDCAP: 100,
      SMALLCAP: 100,
      FOREIGN: 100,
     };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(target) {
    const value = target.value;
    const id = target.id;
    this.setState({
      [id]: Number(value),
    })
  }
  
  handleSubmit(event) {
    // use actions
    this.props.assignBonds(this.state.BONDS);
    this.props.assignLargeCap(this.state.LARGECAP);
    this.props.assignMidCap(this.state.MIDCAP);
    this.props.assignSmallCap(this.state.SMALLCAP);
    this.props.assignForeign(this.state.FOREIGN);
  }

  render() {
    return (
      <div id="calculator">
        <div className="instructions">2. Input Current Allocation Amounts Per Category</div>
        <label htmlFor="bonds">Bonds:</label>
        <input required={true} value={this.state.BONDS} className="amount" id="BONDS" name="bonds" type="text" onChange={e => this.handleChange(e.target)}></input>

        <label htmlFor="largecap">LargeCap:</label>
        <input required={true} value={this.state.LARGECAP} className="amount" id="LARGECAP" name="largecap" type="text" onChange={e => this.handleChange(e.target)}></input>

        <label htmlFor="midcap">MidCap:</label>
        <input required={true} value={this.state.MIDCAP} className="amount" id="MIDCAP" name="midcap" type="text" onChange={e => this.handleChange(e.target)}></input>

        <label htmlFor="smallcap">SmallCap:</label>
        <input required={true} value={this.state.SMALLCAP} className="amount" id="SMALLCAP" name="smallcap" type="text" onChange={e => this.handleChange(e.target)}></input>

        <label htmlFor="foreign">Foreign:</label>
        <input required={true} value={this.state.FOREIGN} className="amount" id="FOREIGN" name="foreign" type="text" onChange={e => this.handleChange(e.target)}></input>
        <button className="amount" onClick={this.handleSubmit}>Calculate</button>
      </div>
    )
  }
}

export default connect(
  null,
  { assignBonds, assignLargeCap, assignMidCap, assignSmallCap, assignForeign }
  )(Calculator);