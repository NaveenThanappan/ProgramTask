// Login validation
    function myFunction() {
      var get_username = $('.input-username').val();
      var get_pw = $('.input-password').val();
      
      if (get_username !='' && get_pw != '') {
        var element = document.getElementById("loginSuccessful");
        element.classList.toggle("open");
      }
    }


    // Create Account validation
    function createFunction() {
      var get_username = $('.create-username').val();
      var get_email = $('.create-email').val();
      var get_password = $('.create-password').val();
      // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      // if(get_email.value.match(mailformat)) {
      //   var element = document.getElementById("createSuccessful");
      //   element.classList.toggle("open");
      // }

      if (get_username !='' && get_email != '' && get_password !='') {
        var element = document.getElementById("createSuccessful");
        element.classList.toggle("open");
      }
    }

    function closeFunction() {
      var element = document.getElementById("loginSuccessful");
      element.classList.remove("open");
    }

    function closecreateFunction() {
      var element = document.getElementById("createSuccessful");
      element.classList.remove("open");
    }