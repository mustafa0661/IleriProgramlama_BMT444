import React, { Component } from 'react'
import PropTypes from "prop-types";
import PropKullanimiConsumer from './context';

export default class PropKullanimi extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible : false
        }
        //this.ilkEvent=this.ilkEvent.bind(this);
    }
    ilkEvent = (event) => 
        {
            this.setState({
                isVisible : !this.state.isVisible
            })
            console.log(this)
        }
    ilkSil = (dispatch,event) =>
        {
            const {id} = this.props;
            console.log(this);
            console.log(id);
            dispatch({type : "SIL", payload : id});
        }
  render() {

    const {bir, iki, uc} = this.props;
    const {isVisible} = this.state;
    return (<PropKullanimiConsumer>
        {
            value => {
                const {dispatch} = value;
                return (
                    <div className='col-md-7 mb-3'>
                      <div className='card'>
                          <div className='card-header d-flex justify-content-between'>
                              <h2 className='d-inline' onClick={this.ilkEvent.bind(this)}>{bir}</h2>
                              <i onClick={this.ilkSil.bind(this,dispatch)} className='far fa-trash-alt' style={{cursor:'pointer'}}></i>
                          </div>
                          {isVisible ?
                              <div className='card-body'>
                                  <p className='card-text'>{iki}</p>
                                  <p className='card-text'>{uc}</p>
                              </div> : <p className='card-text'>Visible Kısmı False</p>
                          }
                      </div>
                    </div>
                )
            }
        }
    </PropKullanimiConsumer>)
  }
}

PropKullanimi.propTypes={
    bir : PropTypes.string.isRequired,
    iki : PropTypes.string.isRequired,
    uc : PropTypes.string.isRequired
}
PropKullanimi.defaultProps={
    bir : "String değer gir lütfen!!!",
    iki : "String deger gir lütfen!!!",
    uc : "String deger gir lütfen!!!"
}
