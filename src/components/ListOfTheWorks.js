import React, { Component } from 'react';

class ListOfTheWorks extends Component {

    render() {
        const listItems = this.props.works.map(item => (
            <div>
                <div>{item.title}</div>
                <div>{item.fullName}</div>
            </div>
        ));

        return (
            <div className="works-list item-list mb-2">
                {this.props.works.map(item => (
                    <div className="title-item col-media py-3">
                        <div className="mr-3">
                            <button className="work-delete btn btn-sm btn-danger">X</button>
                        </div>


                        <div className="name-info madia-body">
                            <div className="title-head d-flex">
                                <span className="title-name">{item.title}</span>
                                <span className="dt-date ml-outo">{item.hireDate}</span>

                            </div>
                            <div className="full-name">
                                <span className="label-item"></span>
                                <span>{item.fullName}</span>
                            </div>
                            <div className="hobby-note">{item.habby}</div>

                        </div>
                    </div>

                ))}
            </div>

        )

    }
}

export default ListOfTheWorks;