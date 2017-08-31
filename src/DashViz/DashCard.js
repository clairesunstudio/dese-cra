import React from 'react'
import Description from '../Description'
import LineChart from './LineChart'
import './DashCard.css'


const DataCard =({Title, data}) => {
    return(
      <div className="col-md-4">
          <div className="dash-card">
            <h4>{Title}</h4>
            <hr />
            <LineChart data={data}/>
          </div>
      </div>
    )
}

export default DataCard