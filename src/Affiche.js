import React, { Component } from 'react';
import './Credit.css';
import Chip from './chip.png';

class Affiche extends Component {
    render() {
        return (
            <div className='classone'>
                <div className="classtwo">
                    <div className="classthree">
                        <p className="classfours">Company name</p>
                    </div>
                    <div className="classfive">
                        <img className="classsix" src={Chip} />
                    </div>
                    <div className="classeven">
                        <p className="classeyt">{this.props.nombre}</p>
                    </div>
                    <div className="classnine">
                        <div className="classten">
                            <p className="classfours">{this.props.nomutili}</p>
                        </div>
                        <div>
                            <p className="classfours">{this.props.date}</p>
                        </div>
                        <div>
                            <img className="classonze" src={'https://s.olj.me/storage/attachments/753/752364_16990157876_565239.jpeg/r/800'} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Affiche;