import React  from 'react';
import Clock from 'react-live-clock';

export default class MyApp extends React.Component {
    render() {
        return(
            <div>
                <h1>Time is now :  <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />  </h1>
           
             </div>
    )
        }
}