document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("YOUR_USER_ID"); // Replace with your actual EmailJS User ID

  document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the page from refreshing

      // Collect form data
      const formData = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          subject: document.getElementById("subject").value,
          message: document.getElementById("message").value
      };

      // Send email using EmailJS
      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
          .then(function (response) {
              console.log("Email sent successfully!", response);
              alert("Message sent successfully!");
              document.getElementById("contact-form").reset();
          })
          .catch(function (error) {
              console.error("Email sending failed:", error);
              alert("Failed to send the message. Please try again later.");
          });
  });
});
