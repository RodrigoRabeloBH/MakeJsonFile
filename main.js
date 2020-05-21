const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const password = document.querySelector("#password");
const clientId = document.querySelector("#clientId");
const connection = document.querySelector("#connection");
const url = document.querySelector("#url");
const user = document.querySelector("#user");

btn.addEventListener("click", (e) => {
  if (!form.checkValidity()) alert("Preencha todos os campos corretamente!!");
  else download();

  clear();
  e.preventDefault();
});

function download() {
  const credentil = {
    Username: user.value,
    Password: password.value,
    ClientId: parseInt(clientId.value),
    ConnectionString: connection.value,
    Url: url.value,
  };

  const json = JSON.stringify(credentil);

  var a = document.createElement("a");
  a.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(json)
  );
  a.setAttribute("download", "parms.json");

  a.click();
}

function clear() {
  user.value = "";
  password.value = "";
  clientId.value = "";
  connection.value = "";
  url.value = "";
}
