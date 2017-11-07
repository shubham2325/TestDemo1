

function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0,1,2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
    } else {
        tr[i].style.display = "none";
    }
    }
  }
}



 function Popup() {
     if (confirm("Do you want to delete..") == true) {
         txt = "You pressed OK!";
     }
     else {
         document.writeln("");
         txt="You Pressed Delete!"
     }
}



jQuery(function () {
    //jQuery("#validNumber").validate({
    //    expression: "if (!isNaN(VAL) && VAL) return true; else return false;",
    //    message: "Should be a number"
    //});
    jQuery("#vendorEmail").validate({
        expression: "if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/)) return true; else return false;",
        message: "Should be a valid Email id"
    });
  
    
    jQuery("#vendorContactNo").validate({
        expression: "if (VAL.match(/^[0-9][0-9]{9}$/)) return true; else return false;",
        message: "Should be a valid Mobile Number"


    });


    


 });



function Popup1() {
    alert("Record saved successfully...");
}

function checkforblank()
{

    var errormessage = "";
    if (document.getElementById('assetCode').value == "")
    {
        errormessage += "Enter  Asset Code\n";

    }
    if (document.getElementById('assetName').value == "") {
        errormessage += "Enter Asset Name\n";

    }
    if (document.getElementById('shortName').value == "") {
        errormessage += "Enter Short Name\n";

    }
    if (document.getElementById('description').value == "") {
        errormessage += "Enter Description";

    }
    if (document.getElementById('createdDate').value == "") {
        errormessage += "Created Date \n";

    }

    if (document.getElementById('serialNo').value == "") {
        errormessage += "Enter Serial Number \n";

    }
    if (document.getElementById('warrantyPeriod').value == "") {
        errormessage += "Enter Warranty Period \n";

    }
    if (document.getElementById('modelNo').value == "") {
        errormessage += "Enter Model No \n";

    }
    if (document.getElementById('vendorName').value == "") {
        errormessage += "Enter Vender Name \n";

    }

    if (document.getElementById('vendorContactNo').value == "") {
        errormessage += "Enter Vendor Contact No. \n";

    }

    if (document.getElementById('vendorEmail').value == "") {
        errormessage += "Enter Vender Email \n";

    }

    if (errormessage != "")
    {
        alert(errormessage);
        return false;

    }
    
    }





