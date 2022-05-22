function button() {
    var Element = document.getElementById("addnumber");
    var value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById("addnumber").innerHTML = value;

}