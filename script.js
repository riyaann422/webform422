document.getElementById("userForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const password = document.getElementById("password").value;

    let gender = "";
    const genderOptions = document.getElementsByName("gender");

    for (let option of genderOptions) {
        if (option.checked) {
            gender = option.value;
        }
    }

    let skills = [];
    const skillOptions = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    skillOptions.forEach(skill => {
        skills.push(skill.value);
    });

    if (skills.length === 0) {
        alert("Please select at least one skill");
        return;
    }

    document.getElementById("message").innerHTML = `
        <h3 style="color:green;">Registration Successful ✅</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Skills:</strong> ${skills.join(", ")}</p>
    `;

    document.getElementById("userForm").reset();
});