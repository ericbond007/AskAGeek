import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
                 <div className="row">
                     <div className="col-lg-4">
                     </div>
                     <div className="col-lg-4">
             
                        <form action="https://formspree.io/ericbond007@gmail.com" method="post" className="form-horizontal">
                            <fieldset>



                            <div className="input-group input-group-lg form-group">
                                <label className="control-label col-sm-2" htmlFor="name">Name:</label>
                                <div className="col-sm-10">
                                    <input id="name" type="text" className="form-control" placeholder="Name" name="Name" maxLength="255"/>
                                </div>
                             </div>
                             
                             <div className="input-group input-group-lg form-group">
                                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                                <div className="col-sm-10">
                                    <input id="email" className="form-control" type="email" placeholder="Email" name="email" maxLength="255"/>
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <textarea className="form-control col-xs-12" rows="10" id="question" name="question" maxLength="9999"></textarea>
                                </div>
                            </div>

                        
                            <div className="input-group input-group-lg form-group input-lg">
                                <div className="col-sm-10">
                                    <input className="" type="submit" value="Ask Me!" />
                                </div>
                            </div>
                            
                            </fieldset>
                        </form>

                      </div>
                 </div>
                );
        }
    }

    export default Form;
