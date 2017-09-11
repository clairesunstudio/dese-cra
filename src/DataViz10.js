import React from 'react'
import axios from 'axios'
import BlockChart from './DataViz/BlockChart'
import {ChartTitle, ChartSubTitle} from './DataViz/ChartTitle'
import Description from './Description'
import FootNoteLink from './FootNoteLink'

class Data extends React.Component{

      constructor(props, context) {
        super(props, context);

        this.state = {
          blockData1: [],
          blockData2: []
        };

      };

      componentWillMount = () =>  {
              this.fetchData()
          };

          fetchData = () =>  {
                  var _this = this;
                  axios.all([
                          axios.get('/data/10/data.json'),
                      ])
                      .then(axios.spread(function(result) {
                        var data = eval(result.data)
                          _this.setState({
                              blockData1: data[0],
                              blockData2: data[1],
                          });
                      }))
                      .catch((error) => {console.log(error)})

              };

          componentWillUnmount = () => {
              this.ignoreLastFetch = true
          };

          render = () =>  {
            const {blockData1, blockData2} = this.state;

              if(blockData1.length==0) {
                return <div className="container">Loading...</div>
              }

              return (
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 center">
                        <ChartTitle>Steady Course: Behavioral habits and on-time graduation</ChartTitle>
                        <hr />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 center">
                      <ChartSubTitle>4-year Graduation Rate by Attendance Behavior<FootNoteLink index={4}/></ChartSubTitle>
                      <BlockChart data={blockData1}/>
                    </div>
                    <div className="col-md-6 center">
                      <ChartSubTitle>4-year Graduation Rate by Suspension Behavior</ChartSubTitle>
                      <BlockChart data={blockData2}/>
                    </div>
                  </div>
                  <div className="row">
                    <Description>
                      <p>Attendance and Behavior matters in all grades!</p>
                    </Description>
                  </div>


                </div>

              );
          };

}

export default Data
