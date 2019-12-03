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

  componentWillMount() {
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
    const listItems = this.state.myworks.map(item => (
      <div>{item.fullName}</div>
    ));
    return (
      <main className="page bg-gray" id="workingflow">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                {listItems}
                <AddWorkingFlows />
                <SearchWorks />
                <ListOfTheWork />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default App;
