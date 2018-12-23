import React , { Component } from 'react';
import './style.css';
class ThePublic extends Component {

    render() {
        return(
  <div className="c-mkultra">
  <p> MKUltra first became public knowledge in 1975 as the result of the Rockefeller Comission, a series of investigations into the activities of the CIA and other known intelligence agencies operating within the USA. The comission was a direct response to allegations brought forward by the New York times that the CIA had conducted <span onClick={function() {}} className="redacted">illegal experimentation</span> on US citizens.</p>
  <p> A full investigation was impossible however as two years prior to the comission all documents related to the existence of MKUltra were ordered to be destroyed by then CIA director Richard Helms. Only around 20,000 files survived, <span onClick={function() {}} className="redacted">document-87624</span> of those states that '6% of the projects were of such an ultra-sensitive nature that they cannot and should not be handled by means of contracts which would associate CIA or the Government with the work in question'. Therefore what is now public knowledge may only be the tip of the iceberg concerning the nature of the program.</p>

  </div>
        )
    }
};

export default ThePublic;