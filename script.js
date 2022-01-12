var validate = function (validation) {
    var form = document.getElementById("form")
    var name = document.getElementById("name")
    var age = document.getElementById("age")
    var phno = document.getElementById("phno")
    var occupation = document.getElementById("occu")
    var hobbies = document.getElementById("hobby")
    var food = document.getElementById("food")
    var movies = document.getElementById("movie")


    if (name.value == "") {
        alert("Please fill the name field")
        // document.getElementById("pmname").innerHTML="** Please fill the Medicine name field"
        document.getElementById("name").style.borderColor = "red"
        return false;
    }
    if ((name.value.length <= 2) || (!isNaN(name.value))) {
        alert("Please fill the name field with valid data")
        // document.getElementById("pmname").innerHTML="** medicine name length must be between 2 and 30"
        document.getElementById("name").style.borderColor = "red"
        return false;
    }
    if (age.value.length <= 0) {
        alert("Please select the date of birth")
        // document.getElementById("pdate").textContent="** Enter date."
        // document.getElementById("edate").style.borderColor = "red"
        return false;
    }

    if (phno.value == "") {
        alert("please fill the phone number field")
        // document.getElementById("pstock").innerHTML="** please fill the stock quantity field"
        document.getElementById("phno").style.borderColor = "red"
        return false;
    }
    if ((phno.value.length !== 10) || (isNaN(phno.value))) {
        alert(" Please fill the phone number field with valid data")
        // document.getElementById("pstock").innerhtml="** Please fill the field with valid data"
        document.getElementById("phno").style.borderColor = "red"
        return false;
    }

    if (occupation.value == "") {
        alert("please fill the occupation field")
        // document.getElementById("pcname").innerHTML="** please fill the Company name field"
        document.getElementById("occu").style.borderColor = "red"
        return false;
    }
    if ((occupation.value.length <= 2) || (!isNaN(occu.value))) {
        alert("Please fill the occupation field with valid data")
        // document.getElementById("pmname").innerHTML="** medicine name length must be between 2 and 30"
        document.getElementById("occu").style.borderColor = "red"
        return false;
    }
    if (hobbies.value == "") {
        alert("Please fill the hobbies field")
        // document.getElementById("pmname").innerHTML="** Please fill the Medicine name field"
        document.getElementById("hobby").style.borderColor = "red"
        return false;
    }
    if ((hobbies.value.length <= 2) || (!isNaN(hobbies.value))) {
        alert("Please fill the name field with valid data")
        // document.getElementById("pmname").innerHTML="** medicine name length must be between 2 and 30"
        document.getElementById("hobby").style.borderColor = "red"
        return false;
    }

    if (movies.value == "") {
        alert("Please fill the movies field")
        // document.getElementById("pmname").innerHTML="** Please fill the Medicine name field"
        document.getElementById("movie").style.borderColor = "red"
        return false;
    }
    if ((movies.value.length <= 2) || (!isNaN(hobbies.value))) {
        alert("Please fill the field with valid data")
        // document.getElementById("pmname").innerHTML="** medicine name length must be between 2 and 30"
        document.getElementById("movie").style.borderColor = "red"
        return false;
    }

    if (food.value == "") {
        alert("Please fill the food field")
        // document.getElementById("pmname").innerHTML="** Please fill the Medicine name field"
        document.getElementById("food").style.borderColor = "red"
        return false;
    }
    if (food.value.length <= 2) {
        alert("Please fill the field with valid data")
        // document.getElementById("pmname").innerHTML="** medicine name length must be between 2 and 30"
        document.getElementById("food").style.borderColor = "red"
        return false;
    }



    if (!false) {
        alert("Successfully registered")
    }

}