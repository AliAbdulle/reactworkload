import React, { Component } from 'react';

class AddWorkingFlows extends Component {

    render() {
        return (
            <div className="card texycenter mt-m">
                <div className="apt-addheading card-header bg-primery text-white">
                    Add WorkingFlow
                </div>

                <div className="card-body">
                    <form id="apt-form" noValidate onSubmit={this.handleAdd}>
                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="petName" reasOnly
                            >
                                petName
                            </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="patName"
                                    placeholder="pat's Name"
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="ownerName"
                            >
                                ownerName
                            </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="ownerName"
                                    placeholder="owner's Name"
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="aptDate"
                            >
                                Date
                            </label>
                            <div className="col-md-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="aptDate"
                                    id="aptDate"
                                />
                            </div>

                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="Time"
                            >
                                Time
                            </label>
                            <div className="col-md-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="aptIime"
                                    id="aptTime"
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="aptDate"
                            >
                                Apt Note
                            </label>
                            <div className="col-md-10">
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    cols="50"
                                    name="aptNote"
                                    id="aptNote"
                                    placeholder="Appoointment Note"
                                />
                            </div>
                        </div>

                        <div className="form-cgroup form-row mb-0">
                            <div className="offset-md-2 col-md-10">
                                <button
                                    type="submit"
                                    className="btn-primary d-block ml-outro"
                                    >
                                        Add Appoointment
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