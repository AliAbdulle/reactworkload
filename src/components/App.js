import React, {Component} from 'react';
// import './css/App.css';

import AddWorkingFlows from './AddWorkingFlows';
import ListOfTheWork from './ListOfTheWorks';
import SearchWorks from './SearchWorks';

class App extends Component {
  render() {
    return (
      <main className="page bg-gray" id="workingflow">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
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
