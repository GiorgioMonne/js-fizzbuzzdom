// ***versione giusta


let numero;
let box;

for(let i=1 ; i <= 100; i++){
    box = document.createElement("div");
    document.querySelector(".lista").append(box);
    box.className = "box";

    if(i % 3 ==0){
        numero = "Fizz";
        box.classList.add("verde");
        console.log(numero);
    }else if(i % 5 ==0){
        numero = "Bazz";
        box.classList.add("giallo");
        console.log(numero);
    }else if(i % 15 ==0){
        numero = "FizzBazz";
        box.classList.add("rosa");
        console.log(numero);
    }else{
        numero = i;
        console.log(numero);
    }
    box.innerHTML = numero;
    console.log(box);
}



// ***WARNING***
// ricordarsi di mettere la creazione del box dentro il ciclo sennò verrà creato solo una volta

// **versione che non flexa

// let lista = document.querySelector('.list');
// console.log(lista);

// // let box;

// let x;

// for(let i=0;i < 100; i++){
//     if(i % 3 == 0){
//         x = 1;
//         lista.innerHTML += `<li class="box box--${x}">${"Fizz"}</li>`;

//     }else{
//         if(i % 5 == 0){
//             x = 2;
//             lista.innerHTML += `<li class="box box--${x}">${"Bazz"}</li>`;

//         }else{
//             lista.innerHTML += `<li class="box box--${"normale"}">${i}</li>`;
//         }
//     }
// }


