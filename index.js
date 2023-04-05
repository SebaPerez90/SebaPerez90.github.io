
const vermas_btn = document.querySelector('.vermas_btn ');

function view_more() {
    document.querySelector('.section_bio_div').classList.toggle('active_section_bio_div');
    document.querySelector('.vermas').classList.toggle('active_vermas');

    if (document.querySelector('.vermas').classList.contains('active_vermas')) {
        vermas_btn.innerHTML = 'ver menos';
        vermas_btn.style.bottom = '3em';

    } else {
        vermas_btn.style.removeProperty('bottom');
        vermas_btn.innerHTML = 'ver mas';
    }
}

vermas_btn.addEventListener('click', view_more)

/////////////////////////////////////////////////////////////////////////
const habilidades = document.querySelector('.section_skills_div_containers');

function efectoHabilidades() {
    let skills = document.getElementById("section_skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        const habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("react");
        habilidades[4].classList.add("git");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo_equipo");
        habilidades[7].classList.add("dedicacion");
        habilidades[8].classList.add("ingles_comprension");
        habilidades[9].classList.add("ingles_oral");
    }

}

habilidades.addEventListener('mouseover', efectoHabilidades);

////////////////////////////////////////////////////////////////////////////////////
const contenedor_img = document.querySelector('.header_container_img')
const imagen = document.querySelector('.header_img');
const imagen_hover = document.querySelector('.header_img');
const parrafo_first = document.querySelector('.first');
const parrafo_second = document.querySelector('.second');

function hoverText() {
    parrafo_first.classList.toggle('text_hover_first');
    parrafo_second.classList.toggle('text_hover_second');
    contenedor_img.insertAdjacentHTML('beforebegin', `
    <div class='div_saludo'>
        <p>Soy<br><strong>Sebastian</strong>👋<br>no<br> dudes en<br>contactarme</p>
    </div>

    `)
};


function hoverTextCancel() {
    setTimeout(() => {
        parrafo_first.classList.remove('text_hover_first');
        parrafo_second.classList.remove('text_hover_second');
        document.querySelector('.div_saludo').remove();
    }, 200);
};


imagen.addEventListener('mouseover', hoverText);
imagen_hover.addEventListener('mouseout', hoverTextCancel);


//////////////////////////      ZONA HORARIA    /////////////////////////////////////////////////////////////////////////////////////////////////////
const time = document.getElementById('date');

setInterval(() => {
    const date = new Date();
    time.innerHTML = date.toLocaleTimeString();

}, 1000);


///////////////////////       FORMULARIO      //////////////////////////////////////////////////
const section_form = document.querySelector('.section_contact')
const formulario = document.querySelector('.section_contact_form');
const btn = document.querySelector(".btn-enviar");
const check = document.querySelector(".check");
const checkText = document.querySelector(".checkText");
const mailto = document.querySelector('#mailto');

function handleSubmit(e) {
    const form = new FormData(this);
    const nombre = document.getElementById('nombre').value;
    const email = document.querySelector('.email').value;
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const verificar = expReg.test(email);

    mailto.setAttribute('href', `mailto:sebastian.perez.jobs@gmail.com?subject=nombre: ${form.get('name')} email: ${form.get('email')} mensaje: ${form.get('message')}`);
    mailto.click();

    if (nombre && verificar) {

        //activamos "BURBUJA CONTENEDOR CHECK" y "CHECK ENVIADO"
        setTimeout(() => {
            check.classList.add("check-1");
            btn.classList.add("send")
        }, 5000);

        // activamos "MENSAJE CONFIRMANDO EL ENVIO"
        setTimeout(() => {
            checkText.classList.add("check-2");
            checkText.innerHTML += `<div class="innerTextConfirm"><div class="charge"></div><p>Comprobando los datos</p></div><br><br><br><div class="appear_text">Tu información se envio correctamente<div><br><br><br><br> `;
        }, 200)

        setTimeout(() => {
            checkText.remove();
            formulario.remove();
            section_form.classList.add('section_contact_confirm')
            section_form.innerHTML += `<div class='section_form_innerHTML'>Gracias<br><br> <strong style="text-transform: uppercase;">${nombreInput.value}</strong><br><br>por<br><br>tenerme en cuenta 😄<br><br></div>`
        }, 8000);
    }
    e.preventDefault();
}

formulario.addEventListener('submit', handleSubmit);


//////////////      INTERACTUAMOS CON EL BOTON ENVIAR    /////////////////////////////////////////////
function validarForm() {
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const verificar = expReg.test(emailInput.value);

    if (nombreInput.value == "") {

        nombreInput.classList.toggle('wrongName')
        nombreInput.insertAdjacentHTML('beforebegin',
            `<p class="campo1"style="color:red; position:absolute; display:block; transform: translateY(5em); width: max-content;font-size: .9em">
            Campo Obligatorio
        </p>`);
        btn.classList.toggle("sendFalse");
        setTimeout(() => {
            btn.classList.remove("sendFalse");
            nombreInput.classList.remove('wrongName');
            document.querySelector('.campo1').remove();
        }, 1500);
    }

    if (emailInput.value == "" || verificar == false) {

        emailInput.classList.toggle('wrongEmail');
        emailInput.insertAdjacentHTML('beforebegin',
            `<p class="campo2"style="color:red; position:absolute; display:block; transform: translateY(5em); width: max-content;font-size: .9em">
            Campo Obligatorio
        </p>`);
        btn.classList.toggle("sendFalse2");
        setTimeout(() => {
            btn.classList.remove("sendFalse2");
            emailInput.classList.remove('wrongEmail');
            document.querySelector('.campo2').remove();
        }, 1500);
    }
};

btn.addEventListener('click', validarForm);


///////////////////     CHEQUEAMOS EL NOMBRE INGRESADO     /////////////////////////////////////////
const labelName = document.querySelector('.labelName');
const nombreInput = document.getElementById('nombre');


function checkName() {
    if (nombreInput.value.length < 3) {
        nombreInput.classList.toggle('wrongName');
    } else {
        nombreInput.classList.toggle('checkName');

        setTimeout(() => {
            labelName.innerHTML += '<p class="parrafoName">✔️</p>';
            document.getElementById('nombre').value = nombreInput.value;
        }, 200);

    };
};

nombreInput.addEventListener('change', checkName);


///////////////////     CHEQUEAMOS EL MAIL INGRESADO     /////////////////////////////////////////
const labelEmail = document.querySelector('.labelEmail');
const emailInput = document.querySelector('.email');


function checkEmail() {
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const verificar = expReg.test(emailInput.value);

    if (verificar) {
        emailInput.classList.toggle('checkMail');

        setTimeout(() => {
            labelEmail.innerHTML += '<p class="parrafoEmail">✔️</p>';
            document.querySelector('.email').value = emailInput.value;
        }, 200);

    } else {
        emailInput.classList.toggle('wrongEmail');
        btn.classList.toggle("sendFalse");
        emailInput.insertAdjacentHTML('beforebegin',
            `<p class='check_format'style="color:red; position:absolute; display:block; transform: translateY(5em); width: max-content;font-size: .9em">
                 Debe ser un formato de mail valido
                 </p>`)
        setTimeout(() => {
            document.querySelector('.check_format').remove();
            btn.classList.remove('sendFalse');
            emailInput.classList.remove('wrongEmail');
        }, 1500);
    }
};

emailInput.addEventListener('change', checkEmail);



///////////////////////      MENU RESPONSIVE      //////////////////////////////////////////////////

const menu = document.querySelector('.menu_span')
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const menu_appear = document.querySelector('.menu_hover');
const header = document.querySelector('.header_container');
const main = document.querySelector('.main_container');

function menu_hover() {
    line1.classList.toggle("active_line1");
    line2.classList.toggle("active_line2");
    line3.classList.toggle("active_line3");

    menu_appear.classList.toggle('active_menu_hover');
    header.classList.toggle('blur');
    main.classList.toggle('blur');

    window.onscroll = function () {
        setTimeout(() => {
            line1.classList.remove("active_line1");
            line2.classList.remove("active_line2");
            line3.classList.remove("active_line3");
            menu_appear.classList.remove('active_menu_hover');
            header.classList.remove('blur');
            main.classList.remove('blur');
            efectoHabilidades();
        }, 600);

    }
};

menu.addEventListener('click', menu_hover);


///////////////////////   PROYECTOS-BOTON         //////////////////////////////
const btn_proyect = document.querySelector('.proyecto_img_btn');
const btn_repo = document.querySelector('.proyecto_img_link')
const proyect_cont_img = document.querySelector('.proyectos_img_div');
const imagen_preview = document.querySelector('.proyecto_img');

function preview() {
    proyect_cont_img.classList.toggle('proyect_cont_img');
    imagen_preview.classList.toggle('imagen_preview');

    if (proyect_cont_img.classList.contains('proyect_cont_img')) {
        btn_proyect.innerHTML = 'X';
        btn_proyect.style.boxShadow = 'inset 0 0 20px red';
        btn_proyect.style.background = '#ff3b3bc4';
        btn_proyect.style.color = 'white';
    } else {

        btn_proyect.innerHTML = 'Preview';
        btn_proyect.style.removeProperty('box-shadow');
        btn_proyect.style.removeProperty('background');
    }
}

btn_proyect.addEventListener('click', preview);

//////////////////////////////////////////////////////////////
const img = document.querySelector('.proyecto_img ');

function hover_text_img() {
    img.insertAdjacentHTML('beforebegin', '<div class="responsive_p"> RESONSIVE DESIGN</div>')

    setTimeout(() => {
        document.querySelector('.responsive_p').remove();
    }, 4000);

}

img.addEventListener('mouseover', hover_text_img);
///////////////////////   PROYECTOS         //////////////////////////////
const proyect = document.querySelector('.proyectos_description_div');
const row2 = document.querySelector('.proyecto_row2')
const row3 = document.querySelector('.proyecto_row3')
const row4 = document.querySelector('.proyecto_row4')
const parrafo = document.querySelector('.proyectos_p')

function bouncing() {
    row2.style.animation = 'bouncing_html 1.5s linear';
    row3.style.animation = 'bouncing_css 1.3s linear';
    row4.style.animation = 'bouncing_js 1.7s linear';
    parrafo.style.animation = 'scale_p 600ms linear';

    if (window.screen.width < 600) {
        row2.style.animation = 'bouncing_Y 500ms linear';
        row3.style.animation = 'bouncing_Y 1s linear';
        row4.style.animation = 'bouncing_Y 1.2s linear';
    }
};

proyect.addEventListener('mouseover', bouncing);

//////////////////////////////////////////////////////////////////////
const proyectos_img_div = document.querySelector('.proyectos_img_div');

function view_links() {
    btn_proyect.style.transform = 'translateX(0)'
    btn_repo.style.transform = 'translateX(0)'

    if (window.screen.width < 600) {
        proyectos_img_div.insertAdjacentHTML('beforebegin', ` <a class="link" href="https://github.com/SebaPerez90/PORTFOLIO" target="_blank">Repositorio</a>`)
    }
}

function cancel_links() {
    btn_proyect.style.removeProperty('transform');
    btn_repo.style.removeProperty('transform');
}

proyectos_img_div.addEventListener('mouseover', view_links);
proyectos_img_div.addEventListener('mouseout', cancel_links);



