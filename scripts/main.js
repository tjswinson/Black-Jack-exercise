window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
  const dealBtn = document.querySelector("#deal-button");
  dealBtn.addEventListener("click", function(){
    console.log("Hello World");

    // create a new card image element
    const newCard = document.createElement('img');
    console.log(newCard);
  });

})


