import React, { useRef, useEffect } from 'react';
import styles from './Form.module.scss';

const Form = () => {

  return (

    <div className={styles['form']}>
    <form method="post" data-netlify="true">
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
