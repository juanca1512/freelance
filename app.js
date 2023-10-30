const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
    <div class="logo">
        <h1>Juan Carlos Flores</h1>
    </div>

    <nav id="nav" class="">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#trabajos">Trabajos</a>
        <a href="contacto.html">Contacto</a>
    </nav>

    <div id="icono-nav" onclick="responsiveMenu()">
        <i class="fa-solid fa-bars"></i>
    </div>

    <div class="redes">
        <a href="#"><i class="fa-brands fa-facebook fa-xl" style="color: #00deef;"></i></a>
        <a href="#"><i class="fa-brands fa-square-instagram fa-xl" style="color: #00deef;"></i></a>
        <a href="#"><i class="fa-brands fa-youtube fa-xl" style="color: #00deef;"></i></a>
    </div>
`;


footer.innerHTML = `
<footer class="pie-pagina">
<div class="grupo-1">
    <div class="box">
        <figure>
            <a href="#">
                <img src="/img/favivon-web-270x270.png" alt="Logo de SLee Dw" class="logo">
            </a>
        </figure>
        <p>Llámanos al <strong>+56962226912</strong></p>
        <p>Somos una empresa con más de 10 años en el mercado.</p>
    </div>
    <div class="box">
        <h2>Nuestros Servicios</h2>
        <ul class="servicios-lista">
            <li><a href="#">Desarrollo web</a></li>
            <li><a href="#">Programación</a></li>
            <li><a href="#">Asesorías</a></li>
            <li><a href="#">Desarrollo de Software</a></li>
            <li><a href="#">Soporte Remoto</a></li>
            <li><a href="#">Soporte Presencial</a></li>
        </ul>
    </div>

    <div class="box">
        <h2>Contacto rápido</h2>
        <form id="contacto-form">
            <div class="form-group">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" placeholder="Su Nombre" required>
            </div>
            <div class="form-group">
                <label for="correo">Correo:</label>
                <input type="email" id="correo" name="correo" placeholder="Su Correo" required>
            </div>
            <div class="form-group">
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" placeholder="Su Mensaje" required></textarea>
            </div>
            <button type="submit">Enviar mensaje</button>
        </form>
    </div>

    <div class="box">
        <h2>Síguenos</h2>
        <div class="redes-sociales">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-youtube"></a>
        </div>
    </div>

    <!-- ... (otras partes del código) ... -->

</div>
<div class="grupo-2">
    <small>&copy; 2023 <b>JCF Desarrollador Freelance</b> - Todos los Derechos Reservados.</small>
</div>
</footer>
`;


/*
footer.innerHTML = `
<footer>
<div class="main-content">
  <div class="left box">
    <h2>Nosotros</h2>
    <div class="content">
      <p>Empresa dedica al desarrollo de Software, manteniendo de Sistemas, con mucha experiencia en Desarrollo Web y Progración, diseñando tu portafolio, tienda Online, portal de Noticias o Sistemas ....</p>
      <div class="social">
        <a target="_blank" href="#"><span class="fab fa-facebook-f"></span></a>
        <a target="_blank" href="#"><span class="fab fa-twitter"></span></a>
        <a target="_blank" href="#"><span class="fab fa-instagram"></span></a>
        <a target="_blank" href="https://www.youtube.com/channel/UCodSpPp_r_QnYIQYCjlyVGA"><span class="fab fa-youtube"></span></a>
      </div>
    </div>
  </div>

  <div class="center box">
    <h2>Ubicación</h2>
    <div class="content">
      <div class="place">
        <span class="fas fa-map-marker-alt"></span>
        <span class="text">Bogotá, Colombia</span>
      </div>
      <div class="phone">
        <span class="fas fa-phone-alt"></span>
        <span class="text">+57 321-387-2648</span>
      </div>
      <div class="email">
        <span class="fas fa-envelope"></span>
        <span class="text">programadorphp2017@gmail.com</span>
      </div>
    </div>
  </div>

  <div class="right box">
    <h2>Contacto</h2>
    <div class="content">
      <form action="#">
        <div class="email">
          <div class="text">Email *</div>
          <input type="email" required>
        </div>
        <div class="msg">
          <div class="text">Mensaje *</div>
          <textarea rows="2" cols="25" required></textarea>
        </div>
        <div class="btn">
          <button type="submit">Enviar Mensaje</button>
        </div>
      </form>
    </div>
  </div>
</div>
<div class="bottom">
  <center>
    <span class="credit">Desarrollado por 
      <a target="_blank" href="https://www.youtube.com/channel/UCodSpPp_r_QnYIQYCjlyVGA">Urian Viera</a> | </span>
    <span class="far fa-copyright"></span><span> 2021.</span>
  </center>
</div>
</footer>
`;
*/

//funciòn que carga las animaciones de las habilidades
function cargarAnimaciones() {
    $(function() {
        $('.chart1').easyPieChart({
            size: 110,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 10,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart2').easyPieChart({
            size: 110,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 10,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart3').easyPieChart({
            size: 110,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 10,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart4').easyPieChart({
            size: 110,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 10,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart5').easyPieChart({
            size: 110,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 10,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart6').easyPieChart({
            size: 110,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 10,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });

    })
}
//Función para filtrar las categorías de los trabajos
function verCategoria(cat) {
    const items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for (let i = 0; i < itemCat.length; i++) {
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".trabajos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}

//Función que detecta cuando lanzar la animación de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("chart");
        habilidades[0].classList.add("chart1");
        habilidades[1].classList.add("chart2");
        habilidades[2].classList.add("chart3");
        habilidades[3].classList.add("chart4");
        habilidades[4].classList.add("chart5");
        habilidades[5].classList.add("chart6");

        cargarAnimaciones();
    }
}

//detecto el scrolling para aplicar la animación de las habilidaes
window.onscroll = function() {
    efectoHabilidades();
}

//función que muestra el menu responsive{
function responsiveMenu() {
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        let span = document.createElement("span");
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);

        //quitamos el boton eliminar cuando se hace click sobre este
        span.onclick = function() {
            x.className = "";
            span.remove();
        }
    } else {
        x.className = "";
    }
}

//Este codigo es para agregar una función a cada links del menu
//responsive
//cuando se presione en cualquier de los links del menu debe desaparecer el menu
const links = document.querySelectorAll("#nav a");
for (i = 0; i < links.length; i++) {
    links[i].onclick = function() {
        var x = document.getElementById("nav");
        x.className = "";

        //removemos el boton eliminar
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}