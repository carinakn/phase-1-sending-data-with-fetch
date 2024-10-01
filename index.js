const submitData = (name, email) => {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ name, email }),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        const responseDiv = document.getElementById("response");
        responseDiv.innerHTML = `User ID: ${data.id}`;
      })
      .catch(error => {
        const responseDiv = document.getElementById("response");
        responseDiv.innerHTML = `Error: ${error.message}`;
      });
  };
  
  // Attach the submitData function to form submission
  document.getElementById("userForm").addEventListener("submit", event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    submitData(name, email);
  });
  