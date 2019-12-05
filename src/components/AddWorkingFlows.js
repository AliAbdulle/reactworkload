import React, { Component } from 'react';
import {FaPlus} from 'react-icons/fa';

class AddWorkingFlows extends Component {

    render() {
        return (
            <div className={
                'card textcenter mt-3 ' +
                (this.props.formDisplay ? '' : 'add-workingflows')
            }
            >
                <div className="apt-addheading card-header bg-primary text-white"
                onClick={this.props.toggleForm}
                >
                    <FaPlus /> Add WorkingFlow
                </div>

                <div className="card-body">
                    <form id="apt-form" noValidate onSubmit={this.handleAdd}>
                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="title" reasOnly
                            >
                                Title
                            </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    placeholder="title"
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="fullName"
                            >
                                fullName
                            </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fullName"
                                    placeholder="full Name"
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="hireDate"
                            >
                                Date
                            </label>
                            <div className="col-md-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="hireDate"
                                    id="ahireDate"
                                />
                            </div>

                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="time"
                            >
                                Time
                            </label>
                            <div className="col-md-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="time"
                                    id="time"
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="hobby"
                            >
                                Hobby
                            </label>
                            <div className="col-md-10">
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    cols="50"
                                    name="hobby"
                                    id="aptNhobbyote"
                                    placeholder="hobby"
                                />
                            </div>
                        </div>

                        <div className="form-cgroup form-row mb-0">
                            <div className="offset-md-2 col-md-10">
                                <button
                                    type="submit"
                                    className="btn-primary d-block ml-outro"
                                    >
                                        Add WorkingFlows
                                    </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )

    }
}

export default AddWorkingFlows;