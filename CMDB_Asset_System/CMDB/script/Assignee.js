

function assigneeSearch() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tblAsset");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



function deleteAlert() {
    if (confirm("Do you want to delete..") == true) {
        txt = "You pressed OK!";
    }
    else {
        document.writeln("");
    }
}

function Popup1() {
    alert("Saved Successfully...");
}
function assignAlert() {
    alert("Assigned Successfully...");
}

//jQuery(function () {
    
//    jQuery("#emailId").validate({
//        expression: "if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/)) return true; else return false;",
//        message: "Should be a valid Email id"
//    });


//    jQuery("#contactNo").validate({
//        expression: "if (VAL.match(/^[0-9][0-9]{9}$/)) return true; else return false;",
//        message: "Please enter 10 digit Mobile Number"


//    });


//});





jQuery(function () {

    jQuery("#emailId").validate({
        expression: "if (VAL.match(/^[^\\W][a-zA-Z0-9\\_\\-\\.]+([a-zA-Z0-9\\_\\-\\.]+)*\\@[a-zA-Z0-9_]+(\\.[a-zA-Z0-9_]+)*\\.[a-zA-Z]{2,4}$/)) return true; else return false;",
        message: "Should be a valid Email id"
    });


    jQuery("#contactNo").validate({
        expression: "if (VAL.match(/^[0-9][0-9]{9}$/)) return true; else return false;",
        message: "Should be a valid Mobile Number"


    });
        

});





function checkforblank() {

    var errormessage = "";
    if (document.getElementById('empId').value == "") {
        errormessage += "Enter  Emp Id\n";

    }
    if (document.getElementById('empName').value == "") {
        errormessage += "Enter Emp Name\n";

    }
    if (document.getElementById('empCubicalNo').value == "") {
        errormessage += "Enter Cubical No\n";

    }
    if (document.getElementById('contactNo').value == "") {
        errormessage += "Enter Contact No\n";

    }
    if (document.getElementById('emailId').value == "") {
        errormessage += "Enter Email-Id \n";

    }


    if (errormessage != "") {
        alert(errormessage);
        return false;

    }
}


