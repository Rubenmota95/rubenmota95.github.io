$(document).ready(function () {
  $("form").on("submit", function (event) {
      event.preventDefault();

      var form = $(this);
      var formData = form.serialize();

      $.ajax({
          url: "https://formspree.io/f/xjkyvwyq",
          method: "POST",
          data: formData,
          dataType: "json",
          success: function (response) {
              $(".status").html("<p style='color:green;'>Message sent successfully! Thank you for your contact.</p>");
              form.trigger("reset");
          },
          error: function (xhr, status, error) {
              $(".status").html("<p style='color:red;'>Failed to send message. Try again later.</p>");
          }
      });

      return false; // Prevent form redirection
  });
});
