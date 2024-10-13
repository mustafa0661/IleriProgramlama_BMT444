import React, { Component } from 'react'

export default class Yasam extends Component {
    constructor(props){
        super(props);
        this.state={
            deger: 1071
        }
        console.log("Türkiye");
    }
    componentDidMount = () => {
        console.log("componentDidMount = mount islemi tamamlandı")
        this.setState(
            {
                deger: 1453
            }
        )
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate çalıştı");
        return true;
    }
  render() {
    console.log("Mount işlemi render ile yapılırken");
    return (
      <div>
        
      </div>
    )
  }
}
