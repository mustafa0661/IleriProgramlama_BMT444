import React, { Component } from 'react'
import Fonksiyonel from "./components/Fonksiyonel";
import KullaniciY from './components/KullaniciY';
import UyeEkle from './components/UyeEkle';
import './App.css';

export default class App extends Component {
  
  render() {
    return (
      <div className='container'>
        <UyeEkle/>
      </div>
    )
  }
}
