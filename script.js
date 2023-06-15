document.addEventListener("DOMContentLoaded",function(){
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
      event.preventDefault();
   
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
  
    saveSubscriber(name, phone, email);
  });
});
  
  function saveSubscriber(name, phone, email) {
    // Send a POST request to the server to save the subscriber in the database
    fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "package.json"
      },
      body: JSON.stringify({
        name: "name",
        phone: "phone",
        email: "email"
      })
    })
    .then(function(response) {
      if (response.ok) {
        alert("Successfully subscribed to email updates!");
        document.getElementById("subscribe-form").reset();
      } else {
        alert("Failed to subscribe. Please try again later.");
        document.getElementById("subscribe-form").reset();
        
        
      }
    })
    .catch(function(error) {
      console.log(error);
      alert("An error occurred. Please try again later.");
    });
  }
  