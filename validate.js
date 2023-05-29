document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
//  Variables
    var fullName = document.getElementById('fullName').value;
    var middleName = document.getElementById('middleName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('barangay').value;
    var contactNumber = document.getElementById('city').value;
    var contactNumber = document.getElementById('province').value;
    var contactNumber = document.getElementById('zipCode').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
// Validations
    if (fullName === '') {
      alert('Full Name is required.');
      return;
    }

   if (lastName === '') {
      alert('Last Name is required.');
      return;
    }
    
    if (email === '') {
      alert('Email is required.');
      return;
    }

    if (contactNumber.length < 11) {
        alert('Contact Number must be at least 11 characters long.');
        return;
    }

    if (barangay === '') {
      alert('Barangay is required.');
      return;
    }

    if (city === '') {
      alert('City is required.');
      return;
    }

    if (province === '') {
      alert('Province is required.');
      return;
    }

    if (zipCode.length < 4) {
        alert('Zip Code must be at least 4 characters long.');
        return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
  }

    
    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match.');
      return;
    }


  // Reset form after successful submission
    document.getElementById('registrationForm').reset();
    
    alert('Registration successful!');
  });