import React, { Component } from 'react'

export default class Islem extends Component {
  render() {
    return (
      <div>
        <label>
            Adınız:<input name="ad"/>
        </label>
        <hr/>
        <label>
            Soyadınız:<input type="checkbox" name="ad"/>
        </label>
        <hr/>
        <p>
            Radio Button Kullanımı
            <br/>
            Cinsiyet:
            <label>
                <input type='radio' name='kadin' value="Kadın"/>
                Kadın
            </label>
            <label>
                <input type='radio' name='erkek' value="Erkek"/>
                Erkek
            </label>
        </p>
      </div>
    )
  }
}
