import React, {Component} from 'react';
 import '../css/App.css';

import AddWorkingFlows from './AddWorkingFlows';
import ListOfTheWork from './ListOfTheWorks';
import SearchWorks from './SearchWorks';


import {without} from 'lodash';

class App extends Component {
  constructor(){
    super();
      this.state = {
        myworks: [],
        formDisplay: false,
        lastIndex:  0
      };

      this.deleteWorks = this.deleteWorks.bind(this);
      this.toggleForm = this.toggleForm.bind(this);
      this.addWorkingFlows = this.addWorkingFlows.bind(this);
    }
  toggleForm(){
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  addWorkingFlows(works){

    let tempWorks = this.state.addWorkingFlows;
    works.worksId = this.state.lastIndex;
    tempWorks.unshift(works);

    this.setState({
      myworks: tempWorks,
      lastIndex: this.state.lastIndex + 1
    });
  }

  deleteWorks(work) {
    let tempWorks =this.state.myworks;
    tempWorks = without(tempWorks, work)

    this.setState({
      myworks: tempWorks
    })

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
                <AddWorkingFlows 
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addWorkingFlows={this.addWorkingFlows}
                />
                <SearchWorks />
                <ListOfTheWork works = {this.state.myworks}
                deleteWorks={this.deleteWorks}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default App;
