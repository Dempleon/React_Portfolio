import React, { useState } from 'react';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleName(event) {
        setName(event.target.value)
    }

    function handleEmail(event) {
        setEmail(event.target.value)
    }

    function handleMessage(event) {
        setMessage(event.target.value)
    }

    function handleSubmit(event) {
        // event.preventDefault();
        if(!name) {
            alert('name is requried')
            return
        }
        if(!email) {
            alert('email is requried')
            return
        }
        if(!message) {
            alert('message is requried')
            return
        }
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className="page contact">
            
            <div className='contact-form'>
                <input
                    name="name"
                    value={name}
                    type="text"
                    placeholder="name"
                    onChange={handleName}
                >
                </input>
                <input
                    name="email"
                    value={email}
                    type="text"
                    placeholder="email"
                    onChange={handleEmail}
                >
                </input>
                <input
                    name="message"
                    value={message}
                    type="text"
                    placeholder="message"
                    onChange={handleMessage}
                >
                </input>
                <button
                    type='submit'
                    onClick={handleSubmit}

                >
                    Submit
                </button>
            </div>
        </div>
    )
}