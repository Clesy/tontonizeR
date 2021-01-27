import React, { Component } from 'react';


class ContactUS extends Component {
    render() {
        return (
            <div className="ContactUS">
                <div className="container">
                    <div className="row">
                        <img src="" alt="" />
                        <div className="column">
                            <h1 Style="text-align: center;">Contact Us</h1>
                            <p>Hello, this form was created so that anyone can contact
                            us and report their suggestions or bugs found. We really appreciate
                                the time you have given us and thank you for that. </p>
                        </div>
                        <div className="column">
                            <form method="post" action="/send.php">
                                <label for="fname">Full Name</label>
                                <input type="text" id="FullNameContactUs" name="firstname" placeholder="Your full name.." />
                                <label for="fname">Email</label>
                                <input type="email" id="EmailContactUs" name="email" placeholder="Your email.." />
                                <label for="country">Country</label>
                                <select id="country" name="country">
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                    <option value="russian">Russian</option>
                                    <option value="ukraine">Ukraine</option>
                                </select>
                                <label for="subject">Subject</label>
                                <textarea id="subject" name="subject" placeholder="Write something.." Style="height:170px" ></textarea>
                                <input type="submit" id="BtnSubmitContactUS" value="Submit" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUS;