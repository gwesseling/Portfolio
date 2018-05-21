import React, {Component} from 'react';
import '../css/components/divider.css';
import dividerImage from '../img/divider.jpg';

/**
 * Divider.
 */
class Divider extends Component {
    /**
     * @inheritDoc
     */
    render() {
        return (
            <div className="divider">
                <img className="divider-image" alt="divider" src={dividerImage}/>
                <div className="divider-overlay">
                    <div className="divider-content">
                        <p className="divider-title">"The only source of knowledge is experience."</p>
                        <p className="divider-subtitle right">- Albert Einstein</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Divider;
