import { React, useState } from "react";
import s from "./Form.module.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "subject":
        setSubject(value);
        break;

      case "message":
        setText(value);
        break;

      default:
        return;
    }
  };

  return (
    <div className={s.container}>
      <span className={s.text}>CONTACT US</span>
      <h2 className={s.title}>Get in Touch</h2>
      <form className={s.formContainer} autoComplete="off">
        <div className={s.extraContainer}>
          <input
            placeholder="Your email"
            autoComplete="off"
            className={s.formInput}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />

          <input
            placeholder="Subject"
            autoComplete="off"
            className={s.formInput}
            type="text"
            name="subject"
            value={subject}
            onChange={handleChange}
          />
        </div>

        <textarea
          placeholder="Message here..."
          autoComplete="off"
          className={s.formTextarea}
          type="text"
          name="message"
          value={text}
          onChange={handleChange}
        />

        <div className={s.formBtn_cont}>
          <button type="submit" className={s.formBtn}>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
