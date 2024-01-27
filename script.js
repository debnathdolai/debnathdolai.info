function sendWhatsAppMessage() {
    // Get user input
    var email = document.getElementById('inputEmail4').value;
    var phone = document.getElementById('inputPhoneNumber').value;
    var query = document.getElementById('inputQuery').value;
    var comment = document.getElementById('floatingTextarea2').value;
    var address = document.getElementById('inputAddress').value;
    var city = document.getElementById('inputCity').value;
    var country = document.getElementById('inputCountry').value;
    var pincode = document.getElementById('inputPincode').value;
    var viewerCheck = document.getElementById('gridCheck1').checked;
    var termsCheck = document.getElementById('gridCheck2').checked;

    // Construct the WhatsApp message with user input
    var whatsappMessage =
      "Email: " + email +
      "\nPhone: " + phone +
      "\nQuery: " + query +
      "\nComment: " + comment +
      "\nAddress: " + address +
      "\nCity: " + city +
      "\nCountry: " + country +
      "\nPincode: " + pincode +
      "\nRegular Viewer: " + viewerCheck +
      "\nAccept Terms: " + termsCheck;

    // Construct the WhatsApp API link
    var whatsappLink = "https://wa.me/8649894940?text=" + encodeURIComponent(whatsappMessage);

    // Open WhatsApp in a new tab with the pre-filled message
    window.open(whatsappLink, '_blank');
  }

      
