import React, { Component } from 'react'
const PropKullanimiContext = React.createContext();
export class PropKullanimiprovider extends Component {
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
      <PropKullanimiContext.Provider value={this.state}>
        {this.props.children}
      </PropKullanimiContext.Provider>
    )
  }
}
const PropKullanimiConsumer = PropKullanimiContext.Consumer;

export default PropKullanimiConsumer;
