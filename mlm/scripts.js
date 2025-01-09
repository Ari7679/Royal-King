// Show confirmation form when "I’ve Paid" button is clicked
document.getElementById('show-form-btn').addEventListener('click', function () {
  const form = document.getElementById('payment-confirm-form');
  form.style.display = 'block'; // Reveal the confirmation form
});

// Handle form submission
document.getElementById('payment-confirm-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission
  const transactionId = event.target.transactionId.value;

  // Simulate sending the transaction ID to the server
  console.log(`Payment confirmed with Transaction ID: ${transactionId}`);

  // Display success message or further action
  alert('Thank you! Your payment confirmation has been submitted.');
});

// Add functionality for "Invest Now" buttons
const investButtons = document.querySelectorAll('.invest-now');
investButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert(`You selected the ${button.dataset.plan} plan. Please complete your payment using the UPI ID.`);
  });
});
