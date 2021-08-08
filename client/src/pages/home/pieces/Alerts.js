import React from 'react';

import alert from '../../images/alert.png';

const Alert = () => {
    return (
        <div className="alerts">
            <h2>Alerts</h2>
            <div className="alerts_container">
                <div className="alert_one">
                    <p><img src={alert} alt="alert-icon" style={{ "width": "15px", "height": "15px" }} /> Alerts</p>
                </div>
                <div className="alert_one">
                    <p><img src={alert} alt="alert-icon" style={{ "width": "15px", "height": "15px" }} /> Alerts</p>
                </div>
                <div className="alert_one">
                    <p><img src={alert} alt="alert-icon" style={{ "width": "15px", "height": "15px" }} /> Alerts</p>
                </div>
                <div className="alert_one">
                    <p><img src={alert} alt="alert-icon" style={{ "width": "15px", "height": "15px" }} /> Alerts</p>
                </div>
                <div className="alert_one">
                    <p><img src={alert} alt="alert-icon" style={{ "width": "15px", "height": "15px" }} /> Alerts</p>
                </div>
            </div>
        </div>
    )
}

export default Alert;
