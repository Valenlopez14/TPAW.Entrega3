import tienda from  "./productos.js"

// desarrollo del script
const html = document.getElementById("contenedor-productos")
let productos = ""

tienda.articulos.forEach((producto)=>{
    productos += ` 
        <div class="producto__datos">
        <h3>${producto.nombre}</h3>
        <div>${producto.precio}</div>
    </div>
    <figure class="producto__fig">
        <img src="${producto.imagen}" alt="" />
    </figure>

</article>
 `
})
html.innerHTML = productos