const api = "https://young-atoll-72259.herokuapp.com/producto";
const ubicacion = "https://young-atoll-72259.herokuapp.com/ubicacion/";
const ubication = document.getElementById("ubication")
const select = document.getElementById("select-ubi")
const fragmet = document.createDocumentFragment()
const btnUbicacion = document.getElementById("btnUbicacion");
const apidos = "https://young-atoll-72259.herokuapp.com/producto2";
const productos = document.getElementById("productos");
const productos2 = document.getElementById("productos2");
const apiconsul = "https://young-atoll-72259.herokuapp.com/producto/"
const apiconsuldos = "https://young-atoll-72259.herokuapp.com/producto2/"
let content1 = JSON.parse(localStorage.getItem('key')) || []
let ubicacionlocal = JSON.parse(sessionStorage.getItem('ubica')) || ""

const peticionbuscar = async (ubicacion) => {
    const buscar = await fetch(ubicacion)
    const jsno = await buscar.json()
    ubi(jsno)
}

const ubi = (ubicacion) => {
    ubicacion.forEach( element => {
        const {id,ciudad} = element
        const opciones = document.createElement("option");
        opciones.setAttribute("value",id)
        opciones.textContent = ciudad
        fragmet.appendChild(opciones)

    })

    select.appendChild(fragmet)

}

peticionbuscar(ubicacion)

btnUbicacion.addEventListener("click", ()=>{
   let sel = document.getElementById("select-ubi")
   let select = sel.options[sel.selectedIndex].value
   if (select == 0){
       window.location.href = "#"
   }
   else {
       ciu (select)
       window.location.href = "#"

   }
})

const ciu = async (select) => {
    const buscar = await fetch(ubicacion + select)
    const jsno = await buscar.json()
    
    sessionStorage.setItem("ubica", JSON.stringify(jsno))
    window.location.reload()
}

if (ubicacionlocal == ""){
    window.location.href = "#modal-ubicacion"
}

else {
    ubication.textContent = ubicacionlocal.ciudad
}


const peticion = async (producto) => {
    const buscar = await fetch(producto)
    const jsno = await buscar.json()
    muestra(jsno)
}

peticion(api)

const muestra = (producto) => {
    productos.innerHTML = ""
    producto.forEach(element => {
        const {id,name,precio,img,desciption,dtc,antes} = element
            const div = document.createElement("div");
            div.classList.add("container")
            

            div.innerHTML += `
            <div class="col d-flex justify-content-center mb-6">
            
                <div class="card shadow mb-1 bg-light rounded" style="width: 20rem;">
                    <h5 class="card-title pt-2 "><button class="dto">${dtc}% dto.</button></h5>
                        <img class="image" src="${img}"   alt="...">
                        
                            <h6 class="text-dark"><b>&#36;${precio}/kg</b><span class="text-secondary"><del> &#36;${antes}/kg</del></span></h6>
                                <p class="card-text text-center text-dark-50 ">${name}</p>
                                <p id="description" class="card-text text-dark-50 description">${desciption}</p>
                                    <div class="d-grid gap-2">
                                    <button class="btn  button" onclick="btn(${id})"><a href="#"></a>Agregar</button>
            </div>
                </div>
                                    </div>
           
                       
            `
            productos.appendChild(div)
    });
}

const peticion2 = async (producto2) => {
    const buscar2 = await fetch(producto2)
    const jsno2 = await buscar2.json()
    muestra2(jsno2)
}

peticion2(apidos)

const muestra2 = (producto2) => {
    productos2.innerHTML = ""
    producto2.forEach(element => {
        const {id,name,precio,img,desciption} = element
            const div = document.createElement("div");
            div.classList.add("container2")
            

            div.innerHTML += `
            <div class="col d-flex justify-content-center mb-6">
            
                <div class="card shadow mb-1 bg-light rounded" style="width: 20rem;">
                    <h5 class="card-title pt-2 "><button class="dto">Nuevo</button></h5>
                        <img class="image" src="${img}"   alt="...">
                            <h6 class="text-dark"><b>&#36;${precio}</b></h6>
                                <p class="card-text text-center text-dark-50 ">${name}</p>
                                <p id="description" class="card-text text-dark-50 description">${desciption}</p>
                                    <div class="d-grid gap-2">
                                    <button class="btn  button" onclick="btnn(${id})"><a href="#"></a>Agregar</button>
            </div>
                </div>
                                    </div>
           
                       
            `
            productos2.appendChild(div)
    });
}


const btnn = async (idbtnn) => {
    // alert(idbtnn)

    const buton2 = await fetch(apiconsuldos)
    const butoncar2 = await buton2.json()

    buscarproduc2 = butoncar2.find(producto2 => producto2.id == idbtnn)
     const {id,name,precio,img} = buscarproduc2
     const arreglo2 = {
        id,name,precio,img
     }

     content1.unshift(arreglo2)
     localStorage.setItem("key",JSON.stringify(content1))

     const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Producto añadido al carrito',
        color: '#fff',
        background: '#0AC763'
    })
}










const btn = async (idbtn) => {
    // alert(idbtn)

    const buton = await fetch(apiconsul)
    const butoncar = await buton.json()

    buscarproduc = butoncar.find(producto => producto.id == idbtn)
     const {id,name,precio,img} = buscarproduc
     const arreglo = {
        id,name,precio,img
     }

     content1.unshift(arreglo)
     localStorage.setItem("key",JSON.stringify(content1))
     const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Producto añadido al carrito',
        color: '#fff',
        background: '#0AC763'
    })
}

