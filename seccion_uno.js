export default function carritoCompras(){
    const $btnElem=document.querySelectorAll(".btn-car");
    //console.log($btnElem);
    $btnElem.forEach(agregarAlCarrito =>{
        agregarAlCarrito.addEventListener("click", agreagarProduc);
    });
    const $btnCompra=document.querySelector(".btn-compra");
    $btnCompra.addEventListener("click",(e)=>{
        window.alert("Gracias por su Compra! ☺️ ");
        $compra.textContent="";
        actualizarTotalCompra();
    });
    const $compra=document.querySelector(".compra");
    function agreagarProduc(e){
        const $button = e.target;
        //console.log($button);
        const $elem = $button.closest(".elem");
        //console.log($elem);
        const $elemTitle=$elem.querySelector(".elem-title").textContent;
        const $elemPrecio=$elem.querySelector(".elem-precio").textContent;
        const $elemImg=$elem.querySelector(".elem-img").src;
        //console.log($elemTitle, $elemPrecio, $elemImg);
        agregarCompraAlCarrito($elemTitle, $elemPrecio, $elemImg)
    }
    function agregarCompraAlCarrito($elemTitle, $elemPrecio, $elemImg){
       const $elementoTitle=$compra.getElementsByClassName("title");
        for(let i=0;i < $elementoTitle.length;i++){
           if($elementoTitle[i].innerText===$elemTitle){
            const $cantidadElemts= $elementoTitle[i].parentElement.parentElement.parentElement.querySelector(".cantidad-compra-input");
            $cantidadElemts.value++;
            actualizarTotalCompra();
            return;
           }
       }
        //console.log($elementoTitle);
        //console.log($elemTitle, $elemPrecio, $elemImg);
        const $compraEnCarrito=document.createElement("div");
        const $contenidoCompra=`
        <div class="container-compra">
            <div class="uno">
                <div class="item-compra">
                    <img src=${$elemImg}>
                    <h3 class="title">${$elemTitle}</h3>
                </div>
            </div>
            <div class="dos">
                <div class="precio">
                    <p class="total-precio">${$elemPrecio}</p>
                </div>
            </div>
            <div class="tres">
                <div class="cantidad-compra">
                    <input type="number" class="cantidad-compra-input"  value="1">
                    <button class="eliminar" type="button">x</button>
                </div>
            </div>
        </div>
        `;
        $compraEnCarrito.innerHTML=$contenidoCompra;
        $compra.append($compraEnCarrito);
        $compraEnCarrito.querySelector(".eliminar").addEventListener("click", removerElemento);
        $compraEnCarrito.querySelector(".cantidad-compra-input").addEventListener("change",changeInput);
        actualizarTotalCompra();
    }
    function actualizarTotalCompra(){
        let total=0;
        const $totalCompras=document.querySelector(".total-carrito");
        const $totales=document.querySelectorAll(".container-compra");
        //console.log($totalCompras);
        //console.log($totales);
        $totales.forEach(($totales) =>{
            const $totalElem=$totales.querySelector(".total-precio");
            const $totalPrecio=Number($totalElem.textContent.replace("$",""));
            //console.log($totalPrecio);
            const $cantidadElem=$totales.querySelector(".cantidad-compra-input");
            //console.log($cantidadElem);
            const $cantidadDeElem=Number($cantidadElem.value);
            //console.log($cantidadDeElem);
            total= total + $totalPrecio * $cantidadDeElem; 
            //console.log(total);
        });
        $totalCompras.innerHTML=`Total ${total.toFixed(2)} $`;
    }
    function removerElemento(e){
        const $evenClick=e.target;
        //console.log($evenClick);
        $evenClick.closest(".container-compra").remove();
        actualizarTotalCompra();
    }
    function changeInput(e){
        const $input=e.target;
        //console.log($input);
        $input.value <= 0 ?($input.value=1) :null
        actualizarTotalCompra();
    }
}