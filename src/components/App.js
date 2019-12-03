import React, {Component} from 'react';
 import '../css/App.css';

import AddWorkingFlows from './AddWorkingFlows';
import ListOfTheWork from './ListOfTheWorks';
import SearchWorks from './SearchWorks';

class App extends Component {
  constructor(){
    super();
      this.state = {
        myworks: []
      };
  }

  componentDidMount() {
      fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const works = result.map(item =>{
          return item;
        })
        this.setState({
          myworks: works
        });
      });
  }
  render() {
    return (
      <main className="page bg-gray" id="workingflow">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddWorkingFlows />
                <SearchWorks />
                <ListOfTheWork works = {this.state.myworks}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default App;
