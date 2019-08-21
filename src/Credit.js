import React, { Component } from 'react';
import './Credit.css';
import Affiche from './Affiche';

class Credit extends Component {
    constructor() {
        super();
        this.state = {
            nombre: '**** **** **** ****',
            nomutili: 'Foulen',
            date: '**/**/****'

        }
        this.changenombre = this.changenombre.bind(this);
        this.changenomutili = this.changenomutili.bind(this);
        this.changedate = this.changedate.bind(this);
    }

    changenombre() {
        var slim = document.getElementById('one');
        var silamin = slim.value;
        console.log(silamin.replace(/\B(?=(\d{4})+(?!\d))/g, " "));
        this.setState({
            nombre: silamin.replace(/\B(?=(\d{4})+(?!\d))/g, " ")
        });
    }

    changenomutili() {
        var slim = document.getElementById('two');
        var silamin = slim.value;
        this.setState({
            nomutili: silamin.toUpperCase()
        });
    }

    changedate() {
        var slim = document.getElementById('three');
        var silamin = slim.value;

        var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
        var dt = silamin.replace(pattern, '$2/$3');

        this.setState({
            date: dt
        });

    }

    render() {
        return (
            <div className="classdouze">
                <div>
                    <Affiche nombre={this.state.nombre} nomutili={this.state.nomutili} date={this.state.date} />
                </div>
                <div className='classtreize'>
                    <div>
                        <input maxLength='16' id='one' type='text' onChange={this.changenombre} placeholder='PAN' />
                    </div>
                    <div>
                        <input maxLength='20' id='two' type='text' onChange={this.changenomutili} placeholder="Porteur" />
                    </div>
                    <div>
                        <input id='three' type='text' onChange={this.changedate} placeholder="Date d'expiration sous format JJ.MM.AAAA" style={{ width: "350px" }} />
                    </div>
                </div>
            </div>
        );

    }
    //         return (
    //             <div className='classone'>
    //                 <div className="classtwo">
    //                     <div className="classthree">
    //                         <p className="classfours">Company name</p>
    //                     </div>
    //                     <div className="classfive">
    //                         <img className="classsix" src={Chip} />
    //                     </div>
    //                     <div className="classeven">
    //                         <p className="classeyt">{this.state.nombre}</p>
    //                     </div>
    //                     <div className="classnine">
    //                         <div className="classten">
    //                             <p className="classfours">{this.state.nomutili}</p>
    //                         </div>
    //                         <div>
    //                             <p className="classfours">{this.state.date}</p>
    //                         </div>
    //                         <div>
    //                             <img className="classonze" src={'https://s.olj.me/storage/attachments/753/752364_16990157876_565239.jpeg/r/800'} />
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="classdouze">
    //                     <div>
    //                         <input maxLength='16' id='one' type='text' onChange={this.changenombre} placeholder='PAN' />
    //                     </div>
    //                     <div>
    //                         <input maxLength='20' id='two' type='text' onChange={this.changenomutili} placeholder="Porteur" />
    //                     </div>
    //                     <div>
    //                         <input id='three' type='text' onChange={this.changedate} placeholder="Date d'expiration sous format JJ.MM.AAAA" style={{ width: "350px" }} />
    //                     </div>
    //                 </div>
    //             </div>
    //         );
    //     }
    // }
}
export default Credit;