function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}

function scrollToSection(){

  document.getElementById("about").scrollIntoView({
    behavior:"smooth"
  });

}

/* Reveal Animation */

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

  cards.forEach(card=>{

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }

  });

});

/* Initial State */

cards.forEach(card=>{

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.8s ease";

});

/* PARTICLES JS */

particlesJS("particles-js",{

  particles:{

    number:{
      value:80,
      density:{
        enable:true,
        value_area:800
      }
    },

    color:{
      value:["#38bdf8","#8b5cf6","#ffffff"]
    },

    shape:{
      type:"circle"
    },

    opacity:{
      value:0.5,
      random:true
    },

    size:{
      value:4,
      random:true
    },

    line_linked:{
      enable:true,
      distance:150,
      color:"#38bdf8",
      opacity:0.3,
      width:1
    },

    move:{
      enable:true,
      speed:2,
      direction:"none",
      random:false,
      straight:false,
      out_mode:"out"
    }

  },

  interactivity:{

    detect_on:"canvas",

    events:{

      onhover:{
        enable:true,
        mode:"repulse"
      },

      onclick:{
        enable:true,
        mode:"push"
      }

    },

    modes:{

      repulse:{
        distance:100
      },

      push:{
        particles_nb:4
      }

    }

  },

  retina_detect:true

});
function validateForm(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){
    alert("Please fill all fields!");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}
