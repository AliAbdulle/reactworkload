import React, { Component } from 'react';

class SearchWorks extends Component {

    render() {
        return (
            <div className="search-works row justify-content-center my-4">
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
                                arial-haspoup="true"
                                arial-expanded="false"
                            >
                                Sort by: <span className="caret" />
                            </button>
                            <div className="sort-menu dropdown-menu dropdown-menue- right">
                                <button className={
                                'sort-by dropdown-item' +
                                (this.props.orderby === 'title ' ? 'active': '')
                                }href="#">
                                    Title
                                </button>
                                <button className={
                                'sort-by dropdown-item' +
                                (this.props.hireDate === 'hireDate ' ? 'active': '')
                                }
                                 href="#">
                                    Date
                                </button>
                                <button className={
                                'sort-by dropdown-item' +
                                (this.props.orderby === 'fullName ' ? 'active': '')
                                }
                                 href="#">
                                    fullName
                                </button>
                                {/* <div role="separetor" className="dropdown-divider" /> */}
                                <button className={
                                'sort-by dropdown-item' +
                                (this.props.orderDir === 'asc ' ? 'active': '')
                                }
                                 href="#">
                                    Asc
                                </button>
                                <button className={
                                'sort-by dropdown-item' +
                                (this.props.orderDir === 'desc ' ? 'active': '')
                                }
                                 href="#">
                                    Desc
                                </button>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )

    }
}

export default SearchWorks;