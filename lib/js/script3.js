$(document).ready(function(){
  $.validator.addMethod(
    "regex",
    function(value, element, regexp) {
      var re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
    },
    "Please check your input."
    );
  $("#datepicker").datepicker({  dateFormat: 'dd/mm/yy'});
  $("#addSinhvienForm").validate({
    rules: {
     firstname: {
      required: true,
      maxlength: 25
    },
    lastname: {
      required: true,
      maxlength: 25
    },
    yearold: {
      required: true,
      range: [15,150],
      regex: /^\d*$/
    },
    date: {
      required: true,
      dateITA: true
    },
    phonenumber: {
      required: true,
      regex: /^\+\d{11,12}$/
    }
  },
  messages: {
   firstname: {
    required: "This field is required",
    maxlength: "Maxlength is 25"
  },
  lastname: {
    required: "This field is required",
    maxlength: "Maxlength is 25"
  },
  yearold: {
    required: "This field is required",
    range: "Age must be between 15 and 150",
    regex: "Age must be integer"
  },
  date: {
    required: "This field is required",
    dateITA: "Date is invalid!"
  },
  phonenumber: {
    required: "This field is required",
    regex: "Phonenumber is invalid"
  }
}
});
  
});