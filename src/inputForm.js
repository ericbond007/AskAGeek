import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
         <div>
         
            <form className='QuestionForm' action="https://formspree.io/ericbond007@gmail.com" method="post">
            <fieldset>
                <label type="text" for="name">Name</label>
                <input id="name" type="text" placeholder="Name" name="Name" />
                
                <label type="text" for="email">Email</label>
                <input id="email" type="email" placeholder="Email" name="email" />

                <label type="text" for="question">Ask Me!</label>
                <input id="question" type="textarea" name="question" />
            </fieldset>
            
            <input type="submit" value="Ask Me!" />
            </form>
          </div>
            );
    }
}

export default Form;
