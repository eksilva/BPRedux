import React from 'react';
import { connect } from 'react-redux';
import { assignBonds, 
         assignLargeCap,
         assignMidCap,
         assignSmallCap,
         assignForeign } from '../actions';
import AmountDeltas from './AmountDeltas.jsx';
import NewAmounts from './NewAmounts.jsx';


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
      <div id="section-two">
        <div id="calculator">
          Current Allocations:
          <div className="allocation-input">
            <label htmlFor="bonds">Bonds:</label>
            <input required={true} value={this.state.BONDS} className="amount-input" id="BONDS" name="bonds" type="text" onChange={e => this.handleChange(e.target)}></input>
          </div>

          <div className="allocation-input">
            <label htmlFor="largecap">LargeCap:</label>
            <input required={true} value={this.state.LARGECAP} className="amount-input" id="LARGECAP" name="largecap" type="text" onChange={e => this.handleChange(e.target)}></input>
          </div>

          <div className="allocation-input">
            <label htmlFor="midcap">MidCap:</label>
            <input required={true} value={this.state.MIDCAP} className="amount-input" id="MIDCAP" name="midcap" type="text" onChange={e => this.handleChange(e.target)}></input>
          </div>

          <div className="allocation-input">
            <label htmlFor="smallcap">SmallCap:</label>
            <input required={true} value={this.state.SMALLCAP} className="amount-input" id="SMALLCAP" name="smallcap" type="text" onChange={e => this.handleChange(e.target)}></input>
          </div>

          <div className="allocation-input">
            <label htmlFor="foreign">Foreign:</label>
            <input required={true} value={this.state.FOREIGN} className="amount-input" id="FOREIGN" name="foreign" type="text" onChange={e => this.handleChange(e.target)}></input>
          </div>
          <input type="button" value="Rebalance" className="allocation-input" onClick={this.handleSubmit}></input>
        </div>
        <AmountDeltas />
        <NewAmounts />
      </div>
    )
  }
}

export default connect(
  null,
  { assignBonds, assignLargeCap, assignMidCap, assignSmallCap, assignForeign }
  )(Calculator);