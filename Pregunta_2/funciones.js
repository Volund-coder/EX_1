function calcular(){
    let x = document.getElementById('temp').value;
    let y = (parseInt(x)-31)*(5/9);
    alert("La temperatura calculadada es " + y + "°C");
}