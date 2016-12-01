  $(document).ready(function(){
    $.validator.addMethod(
      "regex",
      function(value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
      },
      "Please check your input."
      );
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
        min: 15,
        max: 150
      },
      date: {
        required: true
      },
      phonenumber: {
        required: true,
        regex: /^\+\d+$/
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
      min: "Min years old is 15",
      max: "Max years old is 150"
    },
    date: {
      required: "This field is required"
    },
    phonenumber: {
      required: "This field is required",
      regex: "Phonenumber is invalid"
    }
  },
  submitHandler: function(form) {
   alert("submited");
   form.submit();
 }
});
    $("#datepicker").datepicker({  dateFormat: 'dd-mm-yy'});
  });