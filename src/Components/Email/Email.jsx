import "./Email.css";
import EmailBox from "../../assets/undraw_mailbox_re_dvds.svg";

import  { useRef, useState } from 'react';

function EmailCopy() {
  const emailRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (emailRef.current) {
      const email = emailRef.current.textContent;
      navigator.clipboard.writeText(email)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000); 
        })
        .catch(error => {
          console.error('Erro ao copiar email:', error);
        });
    }
  };

  return (
    <section className="ContactMe">
    <img className="image" src={EmailBox} alt="Image" />
    <div className='emailCopy'>
      <span className='email' ref={emailRef}>
        joaopnobre@gmail.com
      </span>
      <button className='email-btn' onClick={copyEmail}>Copy Email</button>
      {copied}
    </div>
    </section>
  );
}

export default EmailCopy;