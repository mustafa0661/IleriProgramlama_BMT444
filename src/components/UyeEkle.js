import React, { Component } from 'react'
import posed from 'react-pose'

const Box = posed.div({
    visible: { opacity: 1,
        applyAtStart:{
            display: "block"
        }
    },
    hidden: { opacity: 0,
        applyAtEnd :{
            display: "none"
        }
    }
});
export default class UyeEkle extends Component {
    state = {
        visible : true
    }
    gorunurlukDegistir = (e) =>{
        this.setState(
            {
                visible : !this.state.visible
            }
        )
    }
  render() {
    const {visible} = this.state;
    return (
      <div className='col-md-8 mb-3'>
        <button onClick={this.gorunurlukDegistir} className='btn btn-danger mb-3'>
            {visible ? "Formu Gizle" : "Formu Göster"}
        </button>
        <Box pose ={visible ? "visible" :"hidden"}>
        <div className='card'>
            <div className='card-header'>
                <h2>Uye Ekle</h2>
            </div>
            <div className='card-body'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='ad'>Ad</label>
                        <input type='text'
                            name='ad'
                            id='idAd'
                            placeholder='Adinizi Giriniz'
                            className = "form-control"
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='soyad'>Soyad</label>
                        <input type='text'
                            name='soyad'
                            id='idSoyad'
                            placeholder='Soyadınızı Giriniz'
                            className = "form-control"
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='yas'>Yaş</label>
                        <input type='text'
                            name='yas'
                            id='idYas'
                            placeholder='Yaşınızı Giriniz'
                            className = "form-control"
                        />
                    </div>
                    <button className='btn btn-primary' type='submit'>
                        Kaydet
                    </button>
                </form>
            </div>
        </div>
        </Box>
      </div>
    )
  }
}
