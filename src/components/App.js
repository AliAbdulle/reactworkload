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
        orderBy: 'title',
        orderDir: 'asc',
        queryText: 'Sales Person',
        lastIndex:  0
      };

      this.deleteWorks = this.deleteWorks.bind(this);
      this.toggleForm = this.toggleForm.bind(this);
      this.addWorkingFlows = this.addWorkingFlows.bind(this);
      this.changeOrder = this.changeOrder.bind(this);
      this.SearchWorks = this.SearchWorks.bind(this);
    }
  toggleForm(){
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }
  SearchWorks(query){
    this.setState({queryText: query})
  }

  changeOrder(order, dir){
    this.setState({
      orderBy: order,
      orderDir: dir
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
    let order;
    let filteredWorks = this.state. myworks;
    if (filteredWorks === 'asc') {
      order = 1;
    }
    else {
      order = -1;
    }

    let filter = filteredWorks.sort((a,b) => {
        if(
            a[this.state.orderBy].toLowerCase() <
            b[this.state.orderBy].toLowerCase()
            )
            {
              return -1 * order;
            }
            else{
              return 1 * order;
            }
    }).filter(eachItem =>{
      return (
        eachItem['title'].toLowerCase()
        .includes(this.state.queryText.toLowerCase()) ||
        eachItem['fullName'].toLowerCase()
        .includes(this.state.queryText.toLowerCase())||
        eachItem['habby'].toLowerCase()
        .includes(this.state.queryText.toLowerCase())
      )
    })


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
                <SearchWorks 
                    orderBy={this.state.orderBy}
                    orderDir={this.state.orderDir}
                    changeOrder={this.changeOrder}
                    SearchWorks={this.SearchWorks}
                />
                
                <ListOfTheWork works = {filteredWorks}
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
