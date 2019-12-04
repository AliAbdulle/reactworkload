import React, {Component} from 'react';

class AddWorkingFlows extends Component {

    render(){
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
                    </form>
                </div>
            </div>
        )

    }
}

export default AddWorkingFlows;