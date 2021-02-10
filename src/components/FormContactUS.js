import { Component } from "react";
// import error from '../images/error.svg';

const initialState = {
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: ""
};


class FormContactUS extends Component {

    state = initialState;

    validate = () => {
        let nameError = "";
        let emailError = "";
        let messageError = "";
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!this.state.name || this.state.name.length <= 2) {
            nameError = "Please input your full name";
        }

        if (!regEx.test(String(this.state.email).toLowerCase())) {
            emailError = "You entered an invalid email address. Enter your real email so we can contact you.";
        }

        if (!this.state.message) {
            messageError = 'Empty field. Input your message.';
        }
        else if (this.state.message.length < 10) {
            messageError = 'Your message cannot be less than 10 characters.';
        }

        if (emailError || nameError || messageError) {
            this.setState({ emailError, nameError, messageError });
            return false;
        }

        return true;
    };

    handleChange = (event) => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState(initialState);
        }
    };


    render() {
        return (
            <div className="form-contact-us" id="contact">
                <div className="container">
                    <div className="form-contact-us-heading">
                        <h1>Contact us</h1>
                    </div>
                    <div className="column-contact-us">
                        <form method="post" action="/send.php">
                            <div>
                                <label for="fname">Full Name</label>
                                <input
                                    className="form-contact-us-name"
                                    name="name"
                                    placeholder="Input full name..."
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <div className="form-contact-us-error">
                                    {this.state.nameError}
                                </div>
                            </div>

                            <div>
                                <label for="email">Email</label>
                                <input
                                    className="form-contact-us-email"
                                    name="email"
                                    placeholder="Input email..."
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                                <div className="form-contact-us-error">
                                    {this.state.emailError}
                                </div>
                            </div>
                            <div>
                                <label for="country">Country</label>
                                <select id="country" name="country">
                                    <option value="other">Other..</option>
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                    <option value="russian">Russian</option>
                                    <option value="ukraine">Ukraine</option>
                                </select>
                            </div>

                            <div>
                                <label for="subject">Subject</label>
                                <textarea
                                    className="form-contact-us-message"
                                    name="message"
                                    placeholder="Write something.."
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    Style="height:170px; resize: none"
                                />

                                <div className="form-contact-us-error">
                                    {this.state.messageError}
                                </div>
                            </div>


                            <div className="personalData">
                                <input type="checkbox" id="personal" required='required' />
                                <p>By clicking the "Submit" button, you consent to the processing
                                of the entered personal information in accordance
                                with the Law of Ukraine 06/01/2010 No. 2297-VI
                                "On Personal Data"</p>
                            </div>
                            <input
                                className="btnSubmit"
                                type="submit"
                                id="btn-submit"
                                value="Submit"
                                onSubmit={this.handleSubmit}
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormContactUS;