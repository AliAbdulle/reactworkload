import React, { Component } from 'react';
import {FaPlus} from 'react-icons/fa';

class AddWorkingFlows extends Component {

    constructor(){
        super();
        this.state ={
        title: '',
        fullName: '',
        hireDate: '',
        time: '',
        hobby: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        e.preventDefault();
        let tempWork ={
        title: this.state.title,
        fullName: this.state.fullName,
        hireDate: this.state.hireDate + ' ' +  this.state.time,
        hobby: this.state.hobby
    }

    this.props.addWorkingFlows (tempWork);

    this.setState({
        title: '',
        fullName: '',
        hireDate: '',
        time: '',
        hobby: ''
    });

    this.props.toggleForm();
}
 
    handleChange(e) {
        const terget = e.terget;
        const value = terget.value;
        const name = terget.name;

        this.setState({
            [name]: value
        });
    }



    render() {
        return (
            <div className={
                'card textcenter mt-3 ' +
                (this.props.formDisplay ? '' : 'add-workingflows')
            }
            >
                <div className="work-addheading card-header bg-primary text-white"
                onClick={this.props.toggleForm}
                >
                    <FaPlus /> Add WorkingFlow
                </div>

                <div className="card-body">
                    <form id="title-form" noValidate onSubmit={this.handleAdd}>
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
                                    value={this.state.title}
                                    onClick={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="fullName"
                            >
                                FullName
                            </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fullName"
                                    placeholder="full Name"
                                    value={this.state.fullName}
                                    onClick={this.handleChange}
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
                                    id="hireDate"
                                    value={this.state.hireDate}
                                    onClick={this.handleChange}
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
                                    value={this.state.time}
                                    onClick={this.handleChange}
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
                                    value={this.state.hobby}
                                    onClick={this.handleChange}
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