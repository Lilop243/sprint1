const btnBuscar = document.getElementById('buscarProduct')
const btnAgregar = document.getElementById('agregarProduct')
const endPointOferta = 'https://young-atoll-72259.herokuapp.com/producto/'
const resultProdut = document.getElementById('resultProdut')
const btnVolver = document.getElementById('volver')

btnBuscar.addEventListener('click', async (e) => {
    e.preventDefault()

    const nombreProducto = document.getElementById('nameProduct').value
    const precioProduct = document.getElementById('precioProduct')
    const precioInicial1 = document.getElementById('precioInicial')
    const urlImagen = document.getElementById('urlImagen')
    let busq = await fetch(endPointOferta)
    let data = await busq.json()
   
   

  let result = data.find(product => product.nombre == nombreProducto)
   const {id, name, dtc, precio, antes, img, desciption} = result
    resultProdut.innerHTML = ""
    resultProdut.innerHTML += 
    `
    `
})