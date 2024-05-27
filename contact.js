document.getElementById("SubmitBtn").addEventListener("click", function() {
    // Get form data
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var country = document.getElementById("country").value;
    var subject = document.getElementById("subject").value;

    // You can perform additional validation here if needed

    // Create a data object to send to the server
    var data = {
        fname: fname,
        lname: lname,
        country: country,
        subject: subject
    };

    // Simulate sending data to the server (replace with actual AJAX request)   
    console.log("Form submitted with data:", data);
    alert("Form submitted successfully!"); 
});