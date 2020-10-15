export default function personaje(){
   
    let producto={
        name:'Nutella',
        lasName:'Ferrero',
        bio:'Nutella es una marca de crema de chocolate y avellana endulzada elaborada por la empresa Ferrero que fue introducida por primera vez en 1965.​',
        avatar:'./assets/nutella.jpg',
        country:'descococido'
    }
    let {name,lasName,avatar,bio,country}=producto
    //console.log(name,lasName,bio,country);
    document.getElementById("producto").innerHTML=`
    <div class="nutella">
    <img src="${avatar}" alt="${name}">
    <p>${name} ${lasName}</p> 
    <p class=country>${country}</p>
    <button id="btn" class="button">cambiar</button>
    <p class="bio">${bio}</p>
    </div>
    `;
    const $btn= document.getElementById("btn");
    $btn.addEventListener("click",(e)=>{
        let aviso=prompt("Lugar de Origen de la Nutella?");
        document.querySelector(".country").innerHTML=`<p>Lugar de origen: ${aviso}</p>`;
        if(aviso===null){
            document.querySelector(".country").innerHTML=`<p>Desconocido</p>`;
            document.querySelector(".country").style.color=""; 
        }
        if(aviso==="italia"){   
        document.querySelector(".country").style.color="var(--main-color)";
        } 
        if(aviso!=="italia"){
        document.querySelector(".country").innerHTML=`<p>Desconocido</p>`;
        document.querySelector(".country").style.color="";
        }
    })
}