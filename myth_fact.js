// delay possible clicks until page is turned
document.getElementById('book').addEventListener('click', function(e) {
  e = this
  e.style.pointerEvents = "none"
  setTimeout(function(){
    e.style.pointerEvents = ""
  }, 2000)
})
document.addEventListener('DOMContentLoaded', function() {
  const leftText = document.getElementById('leftText');
  const rightText = document.getElementById('rightText');
  let isBookOpen = false;
  let isThanksDisplayed = false;

  // Function to fade in the right text
  function fadeInRightText() {
      rightText.style.opacity = '1';
  }

  // Function to fade out the right text
  function fadeOutRightText() {
      rightText.style.opacity = '0';
  }

  // Fade in left text on page load
  leftText.classList.add('fade-in');
  

  // Listen for clicks on the book
  document.getElementById('book').addEventListener('click', function() {
      if (!isBookOpen) {
          // Book is closed, fade out left and right text
          leftText.classList.remove('fade-in');
          leftText.classList.add('fade-out');
          fadeOutRightText(); // Ensure right text is faded out
          
          isBookOpen = true;
      } else {
          // Book is open, check if "Thanks for reading" is displayed
          if (isThanksDisplayed) {
              // Book is clicked after "Thanks for reading", fade out right text
              fadeOutRightText();
          }
          
          isBookOpen = false;
      }
  });

  // Listen for clicks on the last page ("Thanks for reading")
  const lastPage = document.getElementById('page10'); // Adjust ID as per your last page
  lastPage.addEventListener('click', function() {
      // Set flag to indicate "Thanks for reading" is displayed
      isThanksDisplayed = true;
      
      // Fade in right text after a short delay
      setTimeout(fadeInRightText, 1000); // Adjust delay as needed
  });
});
