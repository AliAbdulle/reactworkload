import React, { Component } from 'react';
import {FaTimes} from 'react-icons/fa';
import Moment from 'react-moment';
import moment from 'moment';

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
                    <div className="title-item col-media py-3" key={item.worksId}>
                        <div className="mr-3">
                            <button className="work-delete btn btn-sm btn-danger"
                            onClick={() => this.props.deleteWorks(item)}>
                                <FaTimes />
                            </button>
                        </div>


                        <div className="name-info madia-body">
                            <div className="title-head d-flex">
                                <span className="title-name">{item.title}</span>
                                <span className="dt-date ml-outo">
                                    <Moment
                                        date={item.hireDate}
                                        parse="YYYY-MM-dd hh:mm"
                                        format="MMM-D   h:mma"
                                    />
                                </span>

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