const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

document.getElementById("whatsappBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "https://api.whatsapp.com/send?phone=5493875375650";
  link.target = "_blank";
  link.click();
});

document.getElementById("git-btn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "https://github.com/alecobos";
  link.target = "_blank";
  link.click();
});

document.getElementById("linkedin-btn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "https://www.linkedin.com/in/alejandro-cobos-09056526b/";
  link.target = "_blank";
  link.click();
});

document.getElementById("downloadBtn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/file/d/1CnTOz_B72AvRk47mx5-UCLiNEJqsG0Yd/view?usp=drive_link";
  link.target = "_blank";
  link.click();
});

document.addEventListener("DOMContentLoaded", () => {
  const navAbout = document.getElementById("navAbout");
  const navExperience = document.getElementById("navExperience");
  const navProjects = document.getElementById("navProjects");
  const navContact = document.getElementById("navContact");
  const visitGitElement = document.getElementById("visitGit");
  const saludoElement = document.getElementById("saludo");
  const trabajoElement = document.getElementById("trabajo");
  const downloadBtn = document.getElementById("downloadBtn");
  const whatsappBtn = document.getElementById("whatsappBtn");
  const presente = document.getElementById("presente");
  const experiencia = document.getElementById("experiencia");
  const frontend = document.getElementById("frontend");
  const experienciaFrontA = document.getElementById("experienciaFrontA");
  const experienciaFrontD = document.getElementById("experienciaFrontD");
  const backend = document.getElementById("backend");
  const experienciaBackA = document.getElementById("experienciaBackA");
  const experienciaBackD = document.getElementById("experienciaBackD");
  const database = document.getElementById("database");
  const experienciaDataA = document.getElementById("experienciaDataA");
  const experienciaDataD = document.getElementById("experienciaDataD");
  const odoo = document.getElementById("odoo");
  const experienciaOdooA = document.getElementById("experienciaOdooA");
  const experienciaOdooD = document.getElementById("experienciaOdooD");
  const proyectos = document.getElementById("proyectos");
  const descTech = document.getElementById("descTech");
  const descTienda = document.getElementById("descTienda");
  const descTrip = document.getElementById("descTrip");
  const titleContact = document.getElementById("titleContact");
  const btnContacto = document.getElementById("btnContacto");
  const footerAbout = document.getElementById("footerAbout");
  const footerExperience = document.getElementById("footerExperience");
  const footerProyect = document.getElementById("footerProyect");
  const footerContact = document.getElementById("footerContact");
  const copyright = document.getElementById("copyright");

  const check = document.querySelector(".check-language");
  let currentLanguage = "en";

  const loadContent = (languaje) => {
    fetch('.portfolio/json/content.json') //github
    // fetch('./json/content.json') //local
    .then (response => response.json())
    .then (data => {
        navAbout.textContent = data[languaje].navAbout;
        navExperience.textContent = data[languaje].navExperience;
        navProjects.textContent = data[languaje].navProjects;
        navContact.textContent = data[languaje].navContact
        visitGitElement.textContent = data[languaje].visitGit
        saludoElement.textContent = data[languaje].saludo
        trabajoElement.textContent = data[languaje].trabajo
        downloadBtn.textContent = data[languaje].downloadBtn
        whatsappBtn.textContent = data[languaje].whatsappBtn
        presente.textContent = data[languaje].presente
        experiencia.textContent = data[languaje].experiencia
        frontend.textContent = data[languaje].frontend
        experienciaFrontA.textContent = data[languaje].experienciaFrontA
        experienciaFrontD.textContent = data[languaje].experienciaFrontD
        backend.textContent = data[languaje].backend
        experienciaBackA.textContent = data[languaje].experienciaBackA
        experienciaBackD.textContent = data[languaje].experienciaBackD
        database.textContent = data[languaje].database
        experienciaDataA.textContent = data[languaje].experienciaDataA
        experienciaDataD.textContent = data[languaje].experienciaDataD
        odoo.textContent = data[languaje].odoo
        experienciaOdooA.textContent = data[languaje].experienciaOdooA
        experienciaOdooD.textContent = data[languaje].experienciaOdooD
        proyectos.textContent = data[languaje].proyectos
        descTech.textContent = data[languaje].descTech
        descTienda.textContent = data[languaje].descTienda
        descTrip.textContent = data[languaje].descTrip
        titleContact.textContent = data[languaje].titleContact
        btnContacto.textContent = data[languaje].btnContacto
        footerAbout.textContent = data[languaje].footerAbout
        footerExperience.textContent = data[languaje].footerExperience
        footerProyect.textContent = data[languaje].footerProyect
        footerContact.textContent = data[languaje].footerContact
        copyright.textContent = data[languaje].copyright
    })
    .catch(error => console.log(error));
  };
  check.addEventListener('change', ()=> {
    if (check.checked) {
        currentLanguage = 'es'
    } else {
        currentLanguage = 'en'
    }
    loadContent(currentLanguage);
  })
});





//Eso funciona bien sin json
// const check=document.querySelector(".check-language")
// check.addEventListener('click', idioma);

// function idioma(){
//     let id=check.checked
//     if (id){
//         location.href="es/index.html"
//     }else {
//         location.href="../index.html"
//     }
// }
