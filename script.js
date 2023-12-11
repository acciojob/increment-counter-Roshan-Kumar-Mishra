//your JS code here. If required.
 const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');

    // Initialize counter value
    let counterValue = 0;

    // Function to update and display the counter value
    function updateCounter() {
      counterElement.textContent = counterValue;
    }

    // Event listener for the button click
    incrementBtn.addEventListener('click', function () {
      // Increment the counter value
      counterValue++;

      // Update and display the counter value
      updateCounter();
    });

    // Initial display
    updateCounter();