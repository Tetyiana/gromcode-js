const baseUrl = "https://64b5368bf3dbab5a95c6f173.mockapi.io/api/v1/register";
const form = document.querySelector(".login-form");
const submitButton = document.querySelector(".submit-button");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (form.reportValidity() === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
    return;
  }

  const email = document.getElementById("email").value;
  const name = document.getElementsByName("name").value;
  const password = document.getElementsByName("password").value;
  const body = { email, name, password };

  function register(method, url, body = null) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json;charset=utf-8" },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          submitButton.disabled = false;
        });
    });
  }

  register("POST", baseUrl, body)
    .then((response) => {
      alert(JSON.stringify(response));
      form.reset();
    });
});



