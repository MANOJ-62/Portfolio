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
