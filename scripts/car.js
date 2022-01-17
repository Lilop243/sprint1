let content1 = JSON.parse(localStorage.getItem('key')) || []
const carrito = document.getElementById("carrito")
const del = document.getElementById("del")
let compra = document.getElementById("compra")


document.addEventListener("DOMContentLoaded",() => {
    content1.forEach(element => {
        const {id,name,precio,img} = element
        carrito.innerHTML += `
        <div class="col d-flex justify-content-center mb-4">
        <div class="card shadow mb-1 bg-light rounded" style="width: 20rem;">
            <h5 class="card-title pt-2 "><button class="dto">32% dto.</button></h5>
                <img src="${img}" class="card-img-top" alt="...">
                    <h4 class="text-dark">${precio}<span class="text-secondary">$26.82/kg</span></h4>
                        <p class="card-text text-dark-50 description">${name}</p>
                            <div class="d-grid gap-2">
                            <button type="button" class="btn btn-primary" onclick="btn(${id})"><a href="#"></a>Eliminar</button>
    </div>
        </div>
                            </div>
   
               
        
        </div>`
    })

   
        suma();

        
})



const suma = () => {
    let valor = content1.reduce((suma, valor) => (typeof valor.precio == "number" ? suma + valor.precio: suma),0)
    del.innerHTML += `
                <br>
        <p class="btn btn-success" class="total">Total:&#36;${valor}</p>
        
    `
}



const btn = (idP) => {
    const produ = element => element.id !== idP
    const productoeliminar = content1.filter(produ)
    content1 = productoeliminar

        localStorage.setItem("key",JSON.stringify(content1))
    window.location.reload()
}

compra.addEventListener("click", (e) => {
    e.preventDefault()
    
    Swal.fire({
        title: 'Gracias por tu compra',
        imageUrl: 'https://res.cloudinary.com/ddgyxfetd/image/upload/v1642380208/Sprint%201/Hands_Buying_xmchlh.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonColor: '#0AC763',
        confirmButtonText: 'Seguir comprando'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "index.html"
        }
    })
    localStorage.removeItem("key")
})