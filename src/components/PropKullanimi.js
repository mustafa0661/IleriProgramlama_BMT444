import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class PropKullanimi extends Component {
  render() {

    const {bir, iki, uc} = this.props;
    return (
      <div className='col-md-7 mb-3'>
        <div className='card'>
            <div className='card-header d-flex justify-content-between'>
                <h2 className='d-inline'>{bir}</h2>
                <i className='far fa-trash-alt' style={{cursor:'pointer'}}></i>
            </div>
            <div className='card-body'>
                <p className='card-text'>{iki}</p>
                <p className='card-text'>{uc}</p>
            </div>
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
