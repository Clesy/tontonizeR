import React, { useState } from 'react';


export const ContactUS = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [messageDirty, setMessageDirty] = useState(false);
    const [nameError, setNameError] = useState('You forgot to enter your name');
    const [emailError, setEmailError] = useState('You forgot to enter your email');
    const [messageError, setMessageError] = useState('Tell us about your problem or suggestion');


    const nameHandler = (event) => {
        setName(event.target.value);
        if (event.target.value === " ") {
            setNameError('You did not enter your name');
        } else {
            setNameError(null);
        }
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(event.target.value).toLowerCase())) {
            setEmailError('Email uncorect. Email must have the @ symbol');
        } else {
            setEmailError('');
        }
    }

    const messageHandler = (event) => {
        setMessage(event.target.value);
        if (event.target.value.length > 10 || event.target.value.length < 450) {
            setMessageError('At least 10 characters');
            if (!event.target.value) {
                setMessageError('Tell us about your problem or suggestion. At least 10 characters');
            } else {
                setMessageError('');
            }
        }
    }


    const blurHandler = (event) => {
        switch (event.target.value) {
            case name:
                setNameDirty(true);
                break;
            case email:
                setEmailDirty(true);
                break;
            case message:
                setMessageDirty(true);
                break;
            default:
                break;
        }
    }

    return (
        <div className="ContactUS" id="contact">
            <div className="container">
                <div className="ContactUSHeading">
                    <h1>Contact us</h1>
                </div>
                <div className="ContactUSColumn">
                    <div className="row">
                        <img src="" alt="" />
                        <div className="column">
                            <form method="post" action="/send.php">
                                <label for="fname">Full Name</label>
                                {(nameDirty && nameError) && <div Style='color:red'>{nameError}</div>}
                                <input
                                    onBlur={event => blurHandler(event)}
                                    onChange={event => nameHandler(event)}
                                    value={name} 
                                    type="text" id="FullNameContactUs"
                                    name="firstname"
                                    placeholder="Your full name.."
                                    required="required"
                                />

                                <label for="email">Email</label>
                                <input
                                    onBlur={event => blurHandler(event)}
                                    onChange={event => emailHandler(event)}
                                    value={email}
                                    type="email"
                                    id="EmailContactUs"
                                    name="email"
                                    placeholder="Your email.." />

                                {(emailDirty && emailError) && <div Style='color:red; margin: 0;'>{emailError}</div>}
                                <label for="country">Country</label>
                                <select id="country" name="country">
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                    <option value="russian">Russian</option>
                                    <option value="ukraine">Ukraine</option>
                                </select>
                                <label for="subject">Subject</label>

                                {(messageDirty && messageError) && <div Style='color:red'>{messageError}</div>}
                                <textarea
                                    onBlur={event => blurHandler(event)}
                                    onChange={event => messageHandler(event)}
                                    value={message}
                                    id="subject" name="subject"
                                    placeholder="Write something.."
                                    Style="height:170px"
                                    minLength="10"
                                    maxLength="450" >
                                </textarea>

                                <div className="personalData">
                                    <input type="checkbox" id="personal" required='required' />
                                    <p>By clicking the "Submit" button, you consent to the processing
                                    of the entered personal information in accordance
                                    with the Law of Ukraine 06/01/2010 No. 2297-VI
                                "On Personal Data"</p>
                                </div>
                                <input
                                    type="submit"
                                    id="BtnSubmitContactUS"
                                    value="Submit" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
