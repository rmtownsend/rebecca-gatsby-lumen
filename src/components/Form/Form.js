import React, { useRef, useEffect } from 'react';
import styles from './Form.module.scss';

// type Props = {
//   title?: string,
//   children: React.Node
// };

const Form = () => {
  // const pageRef = useRef();

  // useEffect(() => {
  //   pageRef.current.scrollIntoView();
  // });

  return (
    // <div ref={pageRef} className={styles['page']}>
    //   <div className={styles['page__inner']}>
    //     { title && <h1 className={styles['page__title']}>{title}</h1>}
    //     <div className={styles['page__body']}>
    //       {children}
    //     </div>
    //   </div>
    // </div>
    <div className={styles['form']}>
    <form method="post" action="#">
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
