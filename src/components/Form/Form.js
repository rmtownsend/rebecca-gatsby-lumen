import React, { useRef, useEffect } from 'react';
import styles from './Form.module.scss';

const handleSubmit = (e) => {
  e.preventDefault()
  const form = e.target
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': form.getAttribute('name'),
      ...state,
    }),
  })
    .then(() => navigate(form.getAttribute('action')))
    .catch((error) => alert(error))
}

const Form = () => {

  return (

    <div className={styles['form']}>
    <form name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}form>
      <input type="hidden" name="form-name" value="contact" />
    <label>
    Name
    <input type="text" name="name" id="name" />
    </label>
    <label>
    Email
    <input type="email" name="email" id="email" />
    </label>
    <label>
    Subject
    <input type="text" name="subject" id="subject" />
    </label>
    <label>
    Message
    <textarea name="message" id="message" rows="5" />
    </label>
    <button type="submit">Send</button>
    <input type="reset" value="Clear" />
    </form>
    </div>
  );
};

export default Form;
