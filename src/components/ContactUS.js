import React, { Component } from 'react';
// import { browserHistory } from 'react-router';


class ContactUS extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            message: "",
            errorMessage: false
        }
    }
    getName = (event) => {
        let username = event.targer.value;
        this.setState({
            name: username
        });
    }

    // We are using regular expressions here
    // To increase the chance of getting a valid email address

    getEmail = (event) => {
        let userEmail = event.target.value;
        if (userEmail.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-\.]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)) {
            this.setState({
                email: userEmail
            });
        } else {
            this.setState({
                email: ""
            });
        }
    }
    getDescriprion = (event) => {
        let userMessage = event.targer.value;
        this.setState({
            message: userMessage
        });
    }
    submitForm = (event) => {
        event.preventDefault();
        if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
            this.setState({
                errorMessage: true
            })
            return false;
        } else {
            this.setState({
                errorMessage: false
            });
        }
    }

    render() {
        return (
            <div className="ContactUS">
                <div className="container">
                    <div className="row">
                        <img src="" alt="" />
                        <div className="column">
                            <h1 Style="text-align: center;">Contact Us</h1>
                            <p>Hello, this form was created so that anyone can contact us and report their suggestions or bugs found. We really appreciate the time you have given us and thank you for that. </p>
                        </div>
                        <div className="column">
                            <form action="#">
                                {this.state.errorMessage &&
                                    <p className="error">
                                        Fill all the input fields please.
                                    </p>
                                }
                                <label for="fname">Full Name</label>
                                <input type="text" id="FullNameContactUs" name="firstname" placeholder="Your full name.." onChange={this.getName} />
                                <label for="fname">Email</label>
                                <input type="email" id="EmailContactUs" name="email" placeholder="Your email.." onChange={this.getEmail} />
                                <label for="country">Country</label>
                                <select id="country" name="country">
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                    <option value="russian">Russian</option>
                                    <option value="ukraine">Ukraine</option>
                                </select>
                                <label for="subject">Subject</label>
                                <textarea id="subject" name="subject" placeholder="Write something.." Style="height:170px" onChange={this.getDescription}></textarea>
                                <input type="submit" id="BtnSubmitContactUS" value="Submit" onClick={this.submitForm} />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUS;