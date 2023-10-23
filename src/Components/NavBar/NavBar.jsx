import "./NavBar.css";
import { PiCopySimpleLight } from "react-icons/pi";
import { useState, useRef } from "react";
import { MenuItems } from "../MenuItems";
import { Link } from "react-router-dom";

function NavBar() {
  const [show, setShow] = useState(true);
  const emailRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (emailRef.current) {
      const email = emailRef.current.textContent;
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        })
        .catch((error) => {
          console.error("Erro ao copiar email:", error);
        });
    }
  };

  return (
    <>
      <div className="nav-bar">
        <h2 className="nome">João Paulo Nobre</h2>

        <div className="hamburguer">
          <div className="line line-1"></div>
          <div onMouseOver={() => setShow(!show)} className="line line-2"></div>
          <div className="line line-1"></div>
        </div>
      </div>
      <div className="name">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
      </div>
      {show ? (
        <div className="hide">
          <ul className="list">
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.name} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}

            <li className="hide-item">
              <button className="email-btn" href="#" onClick={copyEmail}>
                Email{" "}
              </button>{" "}
              <PiCopySimpleLight onClick={copyEmail} className="copied-icon" />
              {copied}
            </li>
          </ul>
        </div>
      ) : null}
      <span className="email" ref={emailRef}>
        joaopnobre@gmail.com
      </span>
    </>
  );
}

export default NavBar;
