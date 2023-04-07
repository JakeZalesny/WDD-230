const whoa_submit = document.querySelector("#whoa-form");

function submitInfo() {
    const first_name = document.querySelector("#first-name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;

    localStorage.setItem("Name", first_name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);
}

whoa_submit.addEventListener("click", submitInfo);