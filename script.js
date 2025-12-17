let clickCount = 0;
let cigarettesSmoked = 0;
let moneySpent = 0;

// prisen per cigaret
const pricePerCig = 3.15;  // man kan ændre dette til den ønskede pris

// Image frames
const frames = ["Images/frame1.png", "Images/frame2.png", "Images/frame3.png"];

const smoker = document.getElementById("smoker");

const cigCountDisplay = document.getElementById("cigCount");
const moneyDisplay = document.getElementById("moneySpent");

// Cough sound
const coughSound = document.getElementById("coughSound");

if (smoker) {
  smoker.addEventListener("click", () => {
    clickCount++;

    // Cycle through the image frames
    const frameIndex = (clickCount - 1) % frames.length;
    smoker.src = frames[frameIndex];

    // Every 3rd click = cigarette finished
    if (clickCount % 3 === 0) {
      cigarettesSmoked++;
      moneySpent += pricePerCig;

      // Update counters if present
      if (cigCountDisplay) cigCountDisplay.textContent = cigarettesSmoked;
      if (moneyDisplay) moneyDisplay.textContent = moneySpent.toFixed(2);
    }

    // Play cough sound
    if (coughSound && clickCount % 15 === 0) {
      coughSound.currentTime = 0;
      coughSound.play();
    }
  });
}



// Tand Script :D
const slider = document.getElementById('slider');
const teeth = document.getElementById('teeth');
const label = document.getElementById('label');

if (slider) {
  slider.addEventListener('input', () => {
    const value = slider.value;

    if (value < 25) {
      if (teeth) teeth.style.backgroundImage = "url('Images/tand_hvid.png')";
      if (label) label.textContent = "Sunde hvide tænder, ingen snus!";
    } else if (value < 50) {
      if (teeth) teeth.style.backgroundImage = "url('Images/tand_let_gul.png')";
      if (label) label.textContent = "Efter 6 måneders normal snus forbrug.";
    } else if (value < 75) {
      if (teeth) teeth.style.backgroundImage = "url('Images/tand_gul.png')";
      if (label) label.textContent = "Efter 2 års snus forbrug.";
    } else {
      if (teeth) teeth.style.backgroundImage = "url('Images/tand_meget_gul.png')";
      if (label) label.textContent = "Efter 5 års tungt snus forbrug...";
    }
  });
}

/* Hamburger / mobile navigation toggle
   Centralized here so every page can include a single script file
*/
(function(){
  function initHamburger(){
    const ham = document.getElementById('hamburger');
    const nav = document.getElementById('main-navigation');
    if(!ham || !nav) return;

    ham.setAttribute('role','button');
    ham.setAttribute('aria-label','Åbn navigation');
    ham.setAttribute('aria-expanded','false');

    let isOpen = false;
    let ignoreOutsideClick = false;
    let scrollTimeout = null;

    function lockBody(lock){ document.body.style.overflow = lock ? 'hidden' : ''; }
    function openNav(){
      ham.classList.add('open');
      nav.classList.add('mobile-open');
      ham.setAttribute('aria-expanded','true');
      lockBody(true);
      isOpen = true;
      ignoreOutsideClick = true;
      setTimeout(()=> ignoreOutsideClick = false, 300);
    }
    function closeNav(){
      ham.classList.remove('open');
      nav.classList.remove('mobile-open');
      ham.setAttribute('aria-expanded','false');
      lockBody(false);
      isOpen = false;
    }
    function toggleNav(e){ e && e.stopPropagation(); if(isOpen) closeNav(); else openNav(); }

    // Prefer handling both click and touchstart to avoid synthetic click issues on mobile
    ham.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); toggleNav(); });
    ham.addEventListener('touchstart', function(e){ e.preventDefault(); e.stopPropagation(); toggleNav(); }, { passive: false });

    // Close when a navigation link is clicked
    nav.addEventListener('click', function(e){ if(e.target && e.target.tagName === 'A') closeNav(); });

    // Click outside should close the nav — add extra guards for touch/click quirks
    document.addEventListener('click', function(e){
      try {
        if(ignoreOutsideClick) return;
        // if the click is inside nav or hamburger, do nothing
        if(e.target && (nav.contains(e.target) || ham.contains(e.target) || e.target.closest && e.target.closest('.hamburger') )) return;
        closeNav();
      } catch (err) {
        // swallow any unexpected errors
      }
    });
    window.addEventListener('scroll', function(){ if(isOpen){ if(scrollTimeout) clearTimeout(scrollTimeout); scrollTimeout = setTimeout(()=> closeNav(), 150); } }, { passive: true });
    window.addEventListener('resize', function(){ if(window.innerWidth > 900 && isOpen) closeNav(); });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initHamburger);
  else initHamburger();
})();