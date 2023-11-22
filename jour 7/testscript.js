let slider = document.getElementById('myRange')
let output = document.getElementById('demo')
output.innerHTML = slider.value // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value
    console.log('la valeur est :' + this.value)
}
