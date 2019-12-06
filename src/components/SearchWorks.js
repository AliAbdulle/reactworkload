import React, {Component} from 'react';

class SearchWorks extends Component {

    render(){
        return (
            <div className= "search-works row justify-content-center my-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                            id="searchWorks"
                            type="text"
                            className="form-control"
                            arial-label="search Works"
                            />
                    <div className="input-group-append">
                        <button
                            type="button"
                            className="btn btn-primary dropdown-toggle"
                            data-toggle="dropdown"
                            arial--baspoup="true"
                            arial-expanded="false"
                            >
                                Sort by: <span className="caret"/>
                            </button>
                    </div>
                    </div>
                </div>


            </div> 
        )

    }
}

export default SearchWorks;