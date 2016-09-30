import React, { Component } from 'react';
import './inputForm.css'

class Form extends Component {
    render() {
        return (
                 <div className="row">
                     <div className="col-lg-3">
                     </div>
                     <div className="col-lg-6">
             
                        <form action="https://formspree.io/ericbond007@gmail.com" method="post" className="form-inline">
                            <fieldset>

                            <div id="topRow" className="col-md-12">

                            <div className="col-md-3">
                            </div>


                                <div className="col-md-3">
                                    <div className="input-group input-group-lg form-group">
                                    {/*<label className="control-label col-sm-2" htmlFor="name">Name:</label>*/}
                                        <div >
                                            <input id="name" type="text" className="form-control" placeholder="Name" name="Name" maxLength="255"/>
                                        </div>
                                    </div>
                                </div>
                             
                                 <div className="col-md-3">
                                     <div className="input-group input-group-lg form-group">
                                     {/*<label className="control-label col-sm-2" htmlFor="email">Email:</label>*/}
                                        <div className="col-md-6">
                                            <input id="email" className="form-control" type="email" placeholder="Email" name="email" maxLength="255"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                            </div>

                            <div id="bottomRow" className="col-md-12">
                                <div className="col-sm-1">
                                </div>
                                        <div className="col-md-9">
                                            <textarea className="form-control fillColor" rows="10" cols="120" id="question" name="question" maxLength="9999"></textarea>
                                        </div>
                                <div className="col-sm-2">
                                </div>
                            </div>


                            <div className="col-md-12">
                                <div className="col-md-5">
                                </div>
                                    <div className="col-md-4">
                                        <input id="askMe" className="btn btn-primary btn-lg" type="submit" value="Ask Me!" />
                                    </div>
                                <div className="col-md-3">
                                </div>
                            </div>

                            </fieldset>
                        </form>

                      </div>
                     <div className="col-lg-3">
                     </div>
                 </div>
                );
        }
    }

    export default Form;
