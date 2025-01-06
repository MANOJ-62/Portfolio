// SHOW MENU

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// //
// var typed=new Typed(".typing",{
//       strings:["Java Full Stack Developer","React.Js Developer","Devops Engineer"],
//       typeSpeed:90,
//       backSpeed:60,
//       loop:true
//     })

let currentIndex = 0;
const certificates = [
  {
    src: "./assets/cerificates/Infosys_Certified_Java_Programmer.png",
    name: "Infosys Certified Java Programmer",
  },
  {
    src: "./assets/cerificates/Infosys_Certified_Spring_Microservices_Developer.png",
    name: "Infosys Certified Spring Microservices Developer",
  },
  {
    src: "./assets/cerificates/Infosys_Certified_L1_Junior_Open_Source_Programmer.png",
    name: "Infosys Certified L1 Junior Open Source Programmer",
  },
  {
    src: "./assets/cerificates/Infosys_Certified_L1_Junior_Web_Programmer.png",
    name: "Infosys Certified L1 Junior Web Programmer",
  },
  {
    src: "./assets/cerificates/Infosys_Certified_L1_Junior_Linux_Admin_Professional.png",
    name: "Infosys Certified L1 Junior Linux Admin Professional",
  },
  {
    src: "./assets/cerificates/SpringBoot.png",
    name: "Spring Boot Certification",
  },
];

function openModal(index) {
  currentIndex = index;
  const modal = document.getElementById("certificateModal");
  const modalImage = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");

  modalImage.src = certificates[currentIndex].src;
  modalCaption.innerHTML = certificates[currentIndex].name;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("certificateModal");
  modal.style.display = "none";
}

function navigateModal(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = certificates.length - 1;
  } else if (currentIndex >= certificates.length) {
    currentIndex = 0;
  }
  openModal(currentIndex);
}


// Close modal on click outside
window.onclick = function (event) {
  const modal = document.getElementById("certificateModal");
  if (event.target === modal) {
    closeModal();
  }
};

