window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


   
    window.addEventListener('scroll', () => {
      document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    });

    
    document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
      this.classList.toggle('active');
      document.getElementById('mobileDropdown').classList.toggle('active');
    });

    
    document.querySelector('.mobile-signin').onclick = () => {
      document.querySelector('.mobile-menu-toggle').classList.remove('active');
      document.getElementById('mobileDropdown').classList.remove('active');
      
    };
    
    document.querySelector('.mobile-signup').onclick = () => {
      document.querySelector('.mobile-menu-toggle').classList.remove('active');
      document.getElementById('mobileDropdown').classList.remove('active');
      
    };
  

const btn = document.querySelector(".top-btn");

btn.addEventListener("click", () => {
  alert("Welcome to Learning Ecosystem 🚀");
});


document.querySelector(".primary").addEventListener("click", () => {
  alert("Welcome to React Aligarh 🚀");
});

document.querySelector(".secondary").addEventListener("click", () => {
  alert("Opening Resources 📚");
});

document.querySelectorAll(".ra_card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".ra_card").forEach(c => c.classList.remove("ra_active"));
    card.classList.add("ra_active");
  });
});


const mfCard = document.querySelector(".mf_card");

mfCard.addEventListener("mouseenter", () => {
  mfCard.style.transform = "translateY(-5px)";
});

mfCard.addEventListener("mouseleave", () => {
  mfCard.style.transform = "translateY(0)";
});



