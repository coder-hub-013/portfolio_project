import Preview_card from "./Preview_card";
import "./Preview_page.css";

export default function Preview_page_1() {
    const arr = [
        {
            image: [
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325063/portfolia/chat_connect_home_page_after_login_pgq1w9.jpg",
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325063/portfolia/chat_connect_home_page_s45xyp.jpg",
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325061/portfolia/chat_connect_logout_notfi_xm18u0.jpg",
            ],
            heading: "Landing Page (Main Page) – Chat-Connect",
            para: "The landing page of ChatApp welcomes users with a bold heading and a short tagline that introduces the purpose of the application. It provides clear options through buttons, allowing users to start chatting, sign up, or log in. After a user successfully logs in, the page updates to replace the sign-up and login options with a logout button, offering a straightforward and user-friendly navigation experience.",
        },
        {
            image: [
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325063/portfolia/chat_connect_signup_page_dbxsej.jpg",
            ],
            heading: "Signup Page – Chat-Connect",
            para: "The Signup page allows new users to create an account by entering their username, email, and password. A submit button registers the user, and a link below provides quick access to the login page for existing users.On successful signup, a confirmation notification (“Sign up successfully”) appears on the home page, confirming account creation and redirecting the user to start chats.",
        },
        {
            image: [
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325062/portfolia/chat_connect_login_page_szsnxs.jpg",
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325062/portfolia/chat_connect_incorrect_pass_khkil1.jpg",
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325063/portfolia/chat_connect_login_email_not_found_lfyn5z.jpg",
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325065/portfolia/chat_connect_signup_success_nl6odl.jpg",
            ],
            heading: "Login Page – Chat-Connect",
            para: "The Login Page enables registered users to access their accounts securely. It contains input fields for email and password, along with a submit button to proceed. A link below redirects new users to the Signup Page if they don’t already have an account.In case of invalid credentials, the system displays an error message (e.g., “Email not found”) in red, ensuring users are informed and can correct their details.",
        },
        {
            image: [
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325064/portfolia/chat_connect_chatList_not_available_ymwgjc.jpg",
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325062/portfolia/chat_connect_chatlist_messageNotSeen_izuac0.jpg",
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325063/portfolia/chat_connect_chatList_f4fnyi.jpg",
            ],
            heading: "Chat List Page – Chat-Connect",
            para: "After login or signup, users are directed to the Chat List page, where they can view and manage their conversations. If no previous chats exist, the page remains simple with only the options to create a new group or start a new chat, along with a message indicating that no users are available and encouraging the user to begin a conversation. When chats are available, they appear in a neatly organized list, each with a clickable button to enter the conversation. The page also provides clear visual indicators for message status: a blue button shows that all messages in the chat have been seen, while a green button highlights new unread messages, making it easy for users to track their conversations. This design ensures smooth navigation and effective communication management within the application.",
        },
        {
            image: [
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325061/portfolia/chat_connect_user_not_found_oqk8bw.jpg",
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325064/portfolia/chat_connect_user_found_auffcb.jpg",
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325062/portfolia/chat_connect_startChat_gjqigp.jpg",
            ],
            heading: "Create-first-chat – Chat-Connet",
            para: `When a user clicks on the “Create New Chat” button, a dialog box appears, prompting them to enter the email address of the person they want to connect with. Once the email is entered and the search button is clicked, the system checks if the user exists in the application. If the user is not found, a red notification appears clearly stating “User not found”, preventing any further action. On the other hand, if the user is found, a green confirmation message appears with the user’s details, and a “Start Chat” button becomes available. By clicking this button, a one-to-one chat is either created or opened instantly, allowing the conversation to begin. This workflow provides users with a simple and reliable way to start new chats, ensuring that they can only connect with existing users while receiving immediate visual feedback for errors or success.`,
        },

        {
            image: [
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325064/portfolia/chat_connect_provide_group_name_error_uml5ag.jpg",
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325064/portfolia/chat_connect_groupCreate_tcpnec.jpg",
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325061/portfolia/chat_connect_group_created_notfi_h2dxsk.jpg",
            ],
            heading: "Create-Group – Chat-Connect",
            para: `When a user clicks on the “Create Group” button, a dialog box opens where they are required to provide a group name and select members from the list of available users in the database. If the user tries to proceed without entering a name or selecting members, the system displays a clear error message asking them to fill in the required details. Once the group name is provided and members are chosen, clicking the “Create Group” button successfully creates the group, and a green notification appears confirming the action. The newly created group then appears in the chat list, displaying all selected participants. Inside the group chat, members can send and receive messages in real time, making it easy to collaborate and communicate collectively. This workflow ensures that groups are created in an organized manner with proper validation and immediate feedback for both errors and successful actions.`,
        },
        {
            image: [
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325064/portfolia/chat_connect_add_new_user_in_group_fmp8qg.jpg",
            ],
            heading: "Add-new-user-in-existing-group – Chat-Connect",
            para: `Within an existing group chat, users have the option to expand the group by clicking on the “Add New User” button. This opens a dialog box that displays the list of all users available in the database. From here, one or multiple users can be selected, and by clicking the “Add in Group” button, the chosen users are successfully added to the group. Once added, a confirmation message is displayed, and the updated participant list reflects the new members. Importantly, only messages sent after the user is added are visible to them, ensuring that previous chat history remains private to the original group participants. This feature allows groups to grow dynamically while maintaining message privacy and ensuring smooth onboarding of new members.`,
        },
        {
            image: [
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325063/portfolia/chat_connect_message_deletedByEveyone_klokem.jpg",
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325061/portfolia/chat_connect_group_message_zuqiap.jpg",
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757564364/portfolia/chat_connect_select_delete_message_nilx7y.jpg",
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757564364/portfolia/chat_connect_messages_in_one_to_one_t9pkml.jpg"
            ],
            heading: "Chats and Messages – Chat-Connect",
            para: "The application provides flexible message management options to ensure a smooth chatting experience. When a user clicks on the “Select” option for any message, they are given two choices: “Delete from Me” and “Delete from Everyone.” Choosing Delete from Me removes the message only from the current user’s view, while the message remains visible to other participants. On the other hand, selecting Delete from Everyone replaces the original message with a placeholder text stating “This message was deleted”, ensuring transparency across the conversation and preventing confusion. This feature works seamlessly in both one-to-one chats and group conversations, where the deleted message is reflected for all participants. Additionally, group chat views display the list of active participants along with their messages, keeping communication organized. The clear distinction between personal deletion and universal deletion helps maintain user control while preserving the integrity of group interactions.",
        },
        {
            image: [
                "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1757325064/portfolia/chat_connect_page_not_found_bpbtzr.jpg",
            ],
            heading: "Page-Not-Found – Chat-Connect",
            para: "In cases where a user mistypes a URL, follows a broken link, or navigates to a page that does not exist within the application, they are redirected to a custom “Page Not Found” screen. This page clearly informs the user that the requested content is unavailable, reducing confusion. To help users quickly recover from this error, the page includes a prominent link that redirects them back to the main page of the application. This ensures smooth navigation and maintains a user-friendly experience, even in situations where errors occur due to incorrect or unavailable routes.",
        },

    ];
    return (
        <div>
            <section className="section" id="about">
                <h2>About the Project</h2>
                <p style={{ letterSpacing: "3px", wordSpacing: "7px" }}>
                    Chat-Connect is a real-time messaging application built with React and Node.js that supports both one-to-one and group conversations. It features secure user authentication, instant message delivery using WebSockets, and a responsive interface for seamless communication across devices. The preview of this project is primarily designed for mobile web, offering a clean and intuitive chat experience similar to modern mobile messaging apps.
                </p>

                <div className="tech-stack">
                    <h3>Tech Stack</h3>
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>Socket.io</li>
                    </ul>
                </div>
            </section>

            <section className="section" id="screens">
                <h2>App Screens</h2>

                {arr.map((a, i) => (
                    <Preview_card
                        key={i}
                        image={a.image}
                        heading={a.heading}
                        para={a.para}
                    />
                ))}
            </section>

        </div>
    );
}
