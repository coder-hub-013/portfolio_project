import { useNavigate } from "react-router-dom";
import "./Project.css";
import { useState } from "react";

export default function Project() {
  const navigation = useNavigate();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectOption, setSelectOption] = useState("");

  const handleNavigation = (e) => {
    e.preventDefault();
    navigation('/preview')
  }

  const handleProjectsClick = (id) => {
    setDialogOpen(true);
    setSelectOption(id)
  };

  const handleGoLive = () => {
    console.log(selectOption)
    if (selectOption == "chat-connect") {
      window.open("https://chat-connect-part-2.onrender.com/", "_blank");
      setDialogOpen(false);
    }

  };

  const handleGoPreview = () => {
    // window.open("https://your-preview-link.com", "_blank"); // Replace with preview
    if (selectOption == "ez-shop") {
       window.scrollTo(0, 0);
      navigation('/preview')
    } else {
       window.scrollTo(0, 0);
      navigation('/preview/1')
    }
    setDialogOpen(false);
  };

  return (
    <div id="project">
      <div className="project">
        <h2 className="project-heading">Projects</h2>
      </div>
      <section className="project-section" >
        <div className="project-card" onClick={() => handleProjectsClick('chat-connect')}>
          <img
            src="https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755191204/portfolia/chat_connect_1_ersyih.png"
            // src="https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw="
            alt="image"
          />

          <div className="project-card-body">
            <h3>Chat-Connect</h3>
            <p>
                Chat-Connect is a real-time messaging application that enables seamless communication through both one-to-one and group conversations. The platform provides users with an intuitive interface to send and receive messages instantly, manage their chat history, and stay connected in real time. It offers smooth navigation, responsive design, and a reliable messaging flow that ensures an engaging and interactive user experience.
            </p>

            <div>
              <p className="project-card-stack-title">Stack Use:</p>
            </div>

            <div className="project-card-stacks">
              <p>React.js</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>Mongodb</p>
              <p>Socket.io</p>
            </div>
          </div>
        </div>

        <div className="project-card" onClick={() => handleProjectsClick('ez-shop')}>
          <img
            src="https://res.cloudinary.com/dw6ux0xmu/image/upload/v1756056425/portfolia/Ez_shop_a04b0g.png"
            // src="https://media.istockphoto.com/id/1411195926/photo/project-manager-working-on-laptop-and-updating-tasks-and-milestones-progress-planning-with.jpg?s=612x612&w=0&k=20&c=5A0CEsRbIrgnci0Q7LSxbrUZ1pliXy8C04ffpnjnVIw="
            alt="image"
          />

          <div className="project-card-body">
            <h3>Ez-Shop (E-Commerce App)</h3>
            <p>
              Ez-Shop is a mobile e-commerce application that provides users with a smooth and engaging shopping experience. The app allows users to browse a wide range of products, search and filter items with ease, and add them to their cart or wishlist. It features a simple and secure checkout flow with address selection and a demo payment process that handles both success and failure scenarios.  </p>

            <div>
              <p className="project-card-stack-title">Stack Use:</p>
            </div>

            <div className="project-card-stacks">
              <p>React Native</p>
              <p>Node.js</p>
              <p>Express.js</p>
              <p>Mongodb</p>
              <p>Redux</p>
            </div>
          </div>
        </div>
      </section>


      {dialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <div className="option">
              <h2>Choose an option</h2>
              <button className="cancleDialog" onClick={() => setDialogOpen(false)}>X</button>
            </div>

            <div className="dialog-buttons">
              {selectOption !=="ez-shop" && <button onClick={handleGoLive}>Go Live</button>}
              <button onClick={handleGoPreview}>Go Preview</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
