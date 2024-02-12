function calcTriArea() {
    const baseInput = document.getElementById('tbase');
    const heightInput = document.getElementById('theight');

    const base = parseFloat(document.getElementById('tbase').value); 
    const height = parseFloat(document.getElementById('theight').value);
    if (baseInput.value === "" || heightInput.value === "") {
        alert("Please enter values for both base and height.");
        return;
    } 

    const Area = 0.5 * base * height;

    const a = document.getElementById('tarea');
    const nel = document.createElement('p');
    nel.innerText = "Area = " + Area + " cm²"; 
    nel.style.textAlign = "center";
    a.appendChild(nel);
};

function calcRecArea() {
    const wInput = document.getElementById('rwidth');
    const lInput = document.getElementById('rlength');
    if (wInput.value === "" || lInput.value === "") {
        alert("Please enter values for both base and height.");
        return;
    }  

    const width = parseFloat(document.getElementById('rwidth').value); 
    const length = parseFloat(document.getElementById('rlength').value); 

    const Area = width * length;

    const a = document.getElementById('rarea');
    const nel = document.createElement('p');
    nel.innerText = "Area = " + Area + " cm²"; 
    nel.style.textAlign = "center";
    a.appendChild(nel);
};

function calcPallArea() {
    const baseInput = document.getElementById('pallbase');
    const heightInput = document.getElementById('pallheight');

    const base = parseFloat(document.getElementById('pallbase').value); 
    const height = parseFloat(document.getElementById('pallheight').value);
    if (baseInput.value === "" || heightInput.value === "") {
        alert("Please enter values for both base and height.");
        return;
    } 

    const Area = base * height;

    const a = document.getElementById('pallarea');
    const nel = document.createElement('p');
    nel.innerText = "Area = " + Area + " cm²"; 
    nel.style.textAlign = "center";
    a.appendChild(nel);
};

function calcRhArea() {
    const d1Input = document.getElementById('rhd1');
    const dInput = document.getElementById('rhd');

    const d1 = parseFloat(document.getElementById('rhd1').value); 
    const d = parseFloat(document.getElementById('rhd').value);
    if (d1Input.value === "" || dInput.value === "") {
        alert("Please enter values for both base and height.");
        return;
    } 

    const Area = d1 * d * 2 * 0.5;

    const a = document.getElementById('rharea');
    const nel = document.createElement('p');
    nel.innerText = "Area = " + Area + " cm²"; 
    nel.style.textAlign = "center";
    a.appendChild(nel);
};

function calcPenArea() {
    const pInput = document.getElementById('penp');
    const bInput = document.getElementById('penb');

    const p = parseFloat(document.getElementById('penp').value); 
    const b = parseFloat(document.getElementById('penb').value);
    if (pInput.value === "" || bInput.value === "") {
        alert("Please enter values for both base and height.");
        return;
    } 

    const Area = p*b*0.5;

    const a = document.getElementById('penarea');
    const nel = document.createElement('p');
    nel.innerText = "Area = " + Area + " cm²"; 
    nel.style.textAlign = "center";
    a.appendChild(nel);
};

function calcEllArea() {
    const aInput = document.getElementById('ella');
    const bInput = document.getElementById('ellb');

    const ea = parseFloat(document.getElementById('ella').value); 
    const b = parseFloat(document.getElementById('ellb').value);
    if (aInput.value === "" || bInput.value === "") {
        alert("Please enter values for both base and height.");
        return;
    } 

    const Area = ea*b*3.1416;

    const a = document.getElementById('ellarea');
    const nel = document.createElement('p');
    nel.innerText = "Area = " + Area + " cm²"; 
    nel.style.textAlign = "center";
    a.appendChild(nel);
}
