import React, {Component} from 'react';
 import '../css/App.css';

import AddWorkingFlows from './AddWorkingFlows';
import ListOfTheWork from './ListOfTheWorks';
import SearchWorks from './SearchWorks';
import { isEmptyStatement } from '@babel/types';

class App extends Component {
  constructor(){
    super();
      this.state = {
        myworks: [],
        lastIndex:  0
      };
  }

  componentDidMount() {
      fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const works = result.map(item =>{
          item.worksId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1});
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
