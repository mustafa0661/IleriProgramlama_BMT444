import React, { Component } from 'react'
import PropKullanimi from './PropKullanimi'

export default class KullaniciY extends Component {
  render() {
    const {kullaniciY} = this.props;
    return (
      <div>
        {
            kullaniciY.map(propKullanimi => {
                return(
                    <PropKullanimi
                        key = {propKullanimi.id}
                        bir = {propKullanimi.bir}
                        iki = {propKullanimi.iki}
                        uc = {propKullanimi.uc}
                    />
                )
            })
        }
      </div>
    )
  }
}
