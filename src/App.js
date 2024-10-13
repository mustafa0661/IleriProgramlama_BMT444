import React, { Component } from 'react'
import Fonksiyonel from "./components/Fonksiyonel";
import KullaniciY from './components/KullaniciY';
import './App.css';

export default class App extends Component {
  state = {
    kullaniciY : [
      {
        id: 1,
        bir: "Frontend Kitap Listesi",
        iki: "React",
        uc: "Angular"
      },
      {
        id: 2,
        bir: "Backend Kitap Listesi",
        iki: "Spring Boot",
        uc: "Asp.Net Core"
      },
      {
        id: 3,
        bir: "Siber Kitap Listesi",
        iki: "Siber 1",
        uc: "Siber 2"
      }
    ]
  }
  render() {
    return (
      <div className='container'>
        <hr/>
        <Fonksiyonel baslik="Merhaba Türkiye"/>
        <hr/>
        <KullaniciY kullaniciY={this.state.kullaniciY}/>
      </div>
    )
  }
}
