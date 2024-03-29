import React, { useRef, useEffect } from 'react';
import { navigate } from 'gatsby-link'
import styles from './Form.module.scss';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    console.log('handling submission')
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

  return (
      <div className={styles['form']}>
      <form
        name="contact-me"
        method="post"
        action="./pages/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        // data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact-me" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Name:
            <br />
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Email:
            <br />
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message" onChange={handleChange} />
          </label>
        </p>
          <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      </div>
  )
}
