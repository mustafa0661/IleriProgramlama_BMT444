import React, { Component } from 'react'
import PropTypes from "prop-types";
import { isVisible } from '@testing-library/user-event/dist/utils';

export default class PropKullanimi extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible : false
        }
        //this.ilkEvent=this.ilkEvent.bind(this);
    }
    ilkEvent = (sayi, event) => {
        this.setState({
            isVisible : !this.state.isVisible
        })
    }
  render() {

    const {bir, iki, uc} = this.props;
    const {isVisible} = this.state;
    return (
      <div className='col-md-7 mb-3'>
        <div className='card'>
            <div className='card-header d-flex justify-content-between'>
                <h2 className='d-inline' onClick={this.ilkEvent.bind(this.ilkEvent)}>{bir}</h2>
                <i className='far fa-trash-alt' style={{cursor:'pointer'}}></i>
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
