$(function () {
  
    var initButton = $("#init-button"),
      app = $("#app"),
      form = $("#form"),
      searchInput = $("#search-input"),
      rcBtns = $("#r-btn, #c-btn"),
      submitButton = $("#submit-button");
      msg = $("#text");
      infoParagraph = $("#information");
      
  
    function initApp() {
      app.toggleClass("active");
      msg.hide();
      if (form.hasClass("active")) {
        form.removeClass("active");
        msg.show();
      }
      else {
        setTimeout(function () {
          form.addClass("active");
        }, 40);
        setTimeout(function () {
          searchInput.focus();
        }, 600);
      }
    }
  
    function checkInput() {
      if ($(this).val().trim().length > 0) {
        rcBtns.addClass("change");
        submitButton.addClass("active");
      } else {
        rcBtns.removeClass("change");
        submitButton.removeClass("active");
      }
    }

    infoPara = document.getElementById('information');
    function submitInput(){
        if(isNaN(searchInput.val())){
            alert("Enter a number value!");
        }
        else if(searchInput.val() < Infinity){
            // alert("Number value");
            window.location.href="information.html";
            // receivedValue = searchInput.val();
            // if(receivedValue == 1){
            //     infoParagraph = receivedValue;
            // }
            return false;
        }
        // function displayInfo(){
        //     document.onload = document.getElementById("information").innerHTML = "hello";
        // }


        // if(searchInput.val() === 1){
        //     document.getElementById("information").innerHTML = info1;
        // }
    }

    function handleSubmit(){
        const inputVal = document.getElementById('search-input').value;

        localStorage.setItem("INPUTVAL", inputVal);
        return;
    }

    initButton.on("click", initApp);
    searchInput.on("keyup", checkInput);
    submitButton.on("click", submitInput);
    submitButton.on("click", handleSubmit);
    // infoParagraph.append(info1);
    // if(receivedValue < 2){
    //     document.getElementById("information").innerHTML = info1;
    // }
  });
  