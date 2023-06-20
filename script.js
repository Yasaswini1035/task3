function submitForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;
  var age = document.getElementById('age').value;

  // Perform validation
  if (name === '' || email === '' || password === '' || confirmPassword === '' || age === '') {
    alert('Please fill in all fields');
  } else if (password !== confirmPassword) {
    alert('Passwords do not match');
  } else {
    // Display submitted data
    var submittedData = `
      <h3>Submitted Data:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Age:</strong> ${age}</p>
    `;
    document.getElementById('submitted-data').innerHTML = submittedData;

    // Reset form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm-password').value = '';
    document.getElementById('age').value = '';
  }
}
