import React, { Component } from 'react'
import Fonksiyonel from "./components/Fonksiyonel";
import KullaniciY from './components/KullaniciY';
import './App.css';

export default class App extends Component {
  
  render() {
    return (
      <div className='container'>
        <hr/>
        <Fonksiyonel baslik="Merhaba Türkiye"/>
        <hr/>
        <KullaniciY />
      </div>
    )
  }
}
