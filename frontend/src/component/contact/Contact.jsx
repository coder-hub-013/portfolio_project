import { useState } from "react";
import "./Contact.css";
import Notification from "../notofication/Notification";

export default function Contact() {
  let [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [notify, setNotify] = useState({ message: "", type: "" });
  let [loading, setLoading] = useState(false);

  let handleInput = (e) => {
    setInputData((curr) => {
      return {
        ...curr,
        [e.target.name]: e.target.value,
      };
    });
  };

  let handleForm = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    console.log(inputData)
    try {
        let response = await fetch(`/api/m9/c8/a9/contact`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ inputData }),
        });

      let result = await response.json();
      console.log(result);
      setLoading(false);
      if (response.status == 200) {
        setNotify({ message: `✅ ${result.message}`, type: "success" });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.log(error);
      setNotify({ message: "❌ Failed to send email!", type: "error" });

      setLoading(false);
    }
    setInputData({ message: "", name: "", email: "" });
  };

  return (
    <div>
      <Notification
        message={notify.message}
        type={notify.type}
        onClose={() => setNotify({ message: "", type: "" })}
      />

      <section id="contact" className="contact-section">
        <div className="contact-form">
          <p className="heading">Let's Connect</p>
          <form onSubmit={handleForm}>
            <div>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Name"
                required
                value={inputData.name}
                onChange={handleInput}
              />
            </div>
            <div>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={inputData.email}
                onChange={handleInput}
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="6"
                cols="50"
                value={inputData.message}
                onChange={handleInput}
              ></textarea>
            </div>
            {!loading && (
              <button type="submit" className="submit-btn">
                Send
              </button>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
