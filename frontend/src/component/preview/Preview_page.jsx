import Preview_card from "./Preview_card";
import "./Preview_page.css";

export default function Preview_page() {
  const arr = [
    {
      image: [
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929230/portfolia/home_page_vwgkeo.jpg",
      ],
      heading: "Home Page – Ez-Shop",
      para: "The home page of Ez-Shop features a top navbar with wishlist and profile icons, a search bar for products, and a scrollable category menu for Men, Women, Kids, and Footwear. The main section highlights Luxury items like handbags, watches, and apparel with price, discount, ratings, and reviews. A bottom navigation bar provides quick access to Home, GenZ Drip, Luxury, and Bag.",
    },
    {
      image: [
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929240/portfolia/signup_page_xswwd1.jpg",
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929230/portfolia/sign_up_successfully_x1fqrq.jpg",
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929230/portfolia/password_validation_fz0cxs.jpg",
      ],
      heading: "Signup Page – Ez-Shop",
      para: "The Signup page allows new users to create an account by entering their username, email, and password. The password field includes validation rules to ensure security (minimum 8 characters, with uppercase, lowercase, number, and special character). A submit button registers the user, and a link below provides quick access to the login page for existing users.On successful signup, a confirmation notification (“Sign up successfully”) appears on the home page, confirming account creation and redirecting the user to start shopping.",
    },
    {
      image: [
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929231/portfolia/login_page_dfb7xh.jpg",
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929229/portfolia/email_not_found_r1moct.jpg",
      ],
      heading: "Login Page – Ez-Shop",
      para: "The Login Page enables registered users to access their accounts securely. It contains input fields for email and password, along with a submit button to proceed. A link below redirects new users to the Signup Page if they don’t already have an account.In case of invalid credentials, the system displays an error message (e.g., “Email not found”) in red, ensuring users are informed and can correct their details.",
    },
    {
      image: [
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929240/portfolia/login_profile_page_fbedmm.jpg",
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929239/portfolia/all_orders_profile_page_evcrfb.jpg",
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929230/portfolia/not_login_profile_image_eycisj.jpg",
      ],
      heading: "Profile Page – Ez-Shop",
      para: "The Profile Page dynamically adapts based on the user’s login state. When a user is not logged in, the page displays an option to either Login or Signup to continue. After a successful login, if no orders have been placed yet, the page shows a simple message encouraging the user to create their first order. Once the user has active orders, the profile page displays a detailed list of all past orders along with product details, while also providing a Logout option for securely exiting the account.",
    },
    {
      image: [
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929230/portfolia/shopping_bag_3_fsanos.jpg",
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929231/portfolia/no_data_in_shopping_bag_ffdfeu.jpg",
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929239/portfolia/all_selected_shopping_bag_cswvax.jpg",
      ],
      heading: "Shopping Bag – Ez-Shop",
      para: `These shopping bag screens show different states of the cart flow in an e-commerce app. When no item is added, the bag simply displays a blank state with the text “No items in bag,” making it clear that the user has not selected anything yet. Once products are added, the bag lists each item with details like image, name, price (including discounts), color, size, and quantity. Each product also has an option to remove it from the bag. At the top, a counter shows how many items are selected out of the total, and at the bottom, a summary section displays the number of selected items, the total price, and a bold “PLACE ORDER” button to proceed to the payment page. In the case where only some items are selected, the total is calculated only for the chosen ones, while unselected items remain in the list for later. When all items are selected, the total price updates accordingly, and the checkout button becomes the clear call-to-action.`,
    },

    {
      image: [
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929229/portfolia/address_wjj8s3.jpg",
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929230/portfolia/user_address_fzgzxi.jpg",
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929229/portfolia/user_address_data_dwtbfg.jpg",
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929231/portfolia/before_select_address_x8glac.jpg",
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929230/portfolia/address_select_wfx2mc.jpg",
      ],
      heading: "Address Management Flow – Ez-Shop",
      para: `The Address Management screens cover the complete flow of adding, viewing, selecting, and managing delivery addresses in the e-commerce app. When the user has no address saved, the screen shows a blank state with a simple message like “No address available” along with a clear call-to-action button such as “Add New Address”, guiding the user to create their first delivery entry.

On choosing to add a new address, the user is taken to a detailed address form, where they must provide all necessary details, including their full name, phone number, street address, city, state, postal code, and country. This ensures that the delivery location is precise and valid for shipment. Once the form is filled and saved, the newly added address appears in the saved addresses list, formatted in a clean card layout that clearly shows the contact details and delivery address.

When multiple addresses are saved, they are all displayed in a list, and the user can select one address as the active delivery location. The selected card is highlighted to show it is the current choice, while others remain available for future use. Alongside each saved address, there are options to Edit the details (for example, correcting a phone number or updating a street name) or Remove the address entirely if it is no longer needed.

Once an address is selected, the app links it to the shopping bag and checkout process. The selected delivery address appears just before payment confirmation, ensuring the user knows exactly where the order will be delivered. At this stage, the user can either confirm the chosen address or go back to change it. This seamless integration ensures that the checkout flow remains smooth — the user adds products, selects the address, reviews items and totals, and then proceeds to the payment page without confusion.

Overall, the Address Management flow covers all essential states: empty (no saved address), add new address (form filling), view and manage saved addresses (list with edit/remove), and select preferred address for checkout. This ensures clarity, flexibility, and a straightforward path from shopping to delivery confirmation.`,
    },
    {
      image: [
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929240/portfolia/payment_page_bignzk.jpg",
        "https://res.cloudinary.com/dw6ux0xmu/image/upload/v1755929239/portfolia/payment_successfully_pzwasq.jpg",
      ],
      heading: "Payment Flow – Ez-Shop",
      para: `The Payment screens demonstrate the final step in the checkout process after confirming the delivery address. Once the user selects and confirms their preferred address, they are redirected to the Payment Page. Since this is a demo implementation, the payment system is simplified with two clear options: “Payment Success” (green button) and “Payment Fail” (red button). This design allows users to simulate different outcomes without integrating an actual payment gateway.

When the user selects Payment Success, the app immediately redirects them back to the Home Page, where a blue notification bar appears at the top with the message “Payment was success”. This confirmation ensures that the user knows their order flow has been completed successfully. On the other hand, if the user chooses Payment Fail, they are also redirected back to the Home Page, but this time the notification clearly states “Payment failed”, indicating that the order did not go through.

This simple flow highlights the transition between checkout and home navigation while simulating the essential states of real-world payments: successful completion and transaction failure. Even though it is a demo version, the experience captures the logical step of linking confirmed address selection → payment action → and final feedback message on the home page.`,
    },
  ];
  return (
    <div>
      <section className="section" id="about">
        <h2>About the Project</h2>
        <p>
          This e-commerce app allows users to browse categories, add products to
          the cart, and checkout with payment integration. It also includes
          authentication features like login and signup.
        </p>

        <div className="tech-stack">
          <h3>Tech Stack</h3>
          <ul>
            <li>React Native</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Stripe</li>
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
