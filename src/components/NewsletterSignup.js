import React, { useState } from "react";
import "./styles/NewsletterSignup.css"; // Include your CSS file for styling

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the email address to your server or perform the subscription action here
    // For this example, we'll just set a flag to indicate successful subscription
    setSubscribed(true);
  };

  return (
    <div className="newsletter-signup">
      <div className="newsletter-container">
        <h2>
          <strong>Subscribe to Our Newsletter</strong>
        </h2>
        {subscribed ? (
          <p>
            Thank you for subscribing! You will now receive our latest news and
            updates.
          </p>
        ) : (
          <div>
            <p>
              Stay informed with the latest news, promotions, and game releases.
              Join our gaming community and never miss out on exciting updates!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsletterSignup;
