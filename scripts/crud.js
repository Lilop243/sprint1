const btnBuscar = document.getElementById('buscarProduct')
const btnAgregar = document.getElementById('agregarProduct')
const endPointOferta = 'https://young-atoll-72259.herokuapp.com/producto/'
const resultProdut = document.getElementById('resultProdut')
const btnVolver = document.getElementById('volver')


btnVolver.addEventListener('click', () => {
    window.location.href = "index.html"
})

btnBuscar.addEventListener('click', async (e) => {
    e.preventDefault()

    const nombreProducto = document.getElementById('nameProduct').value
    const precioProduct = document.getElementById('precioProduct')
    const precioInicial1 = document.getElementById('precioInicial')
    const urlImagen = document.getElementById('urlImagen')
    let busq = await fetch(endPointOferta)
    let data = await busq.json()
   
   

  let result = data.find(product => product.name == nombreProducto)
   const {id, name, dtc, precio, antes, img, desciption} = result
    resultProdut.innerHTML = ""
    resultProdut.innerHTML += 
    `
    <div>
    <img src="${img}" alt="">
        
</div>
<div>
    <h4>${name}</h4>
    <span>${precio}</span>
    <span>${dtc}</span>
</div>
<div>
    <button onclick="editar(${id})">Editar</button>
    <button onclick="eliminar(${id})">Eliminar</button>
</div>

    `
})

btnAgregar.addEventListener('click', async (e) => {
    e.preventDefault()

    const nombreProducto = document.getElementById('nameProduct').value
    const precioProduct = document.getElementById('precioProduct').value
    const precioInicial = document.getElementById('precioInicial').value
    const urlImagen = document.getElementById('urlImagen').value

    let resp = await fetch(endPointOferta, {
        method: 'POST',
        body: JSON.stringify({
            name: nombreProducto,
            precio: precioProduct,
            dtc: precioInicial,
            img: urlImagen
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
})

const eliminar = async (idP) => {
    let resp = await fetch(endPointOferta + idP, {
        method: 'DELETE'
    })
}

const editar = async (idP) => {
    const nombreProducto = document.getElementById('nameProduct').value
    const precioProduct = document.getElementById('precioProduct').value
    const precioInicial = document.getElementById('precioInicial').value
    const urlImagen = document.getElementById('urlImagen').value

    let resp = await fetch(endPointOferta + idP, {
        method: 'PUT',
        body: JSON.stringify({
            name: nombreProducto,
            precio: precioProduct,
            dtc: precioInicial,
            img: urlImagen
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
}