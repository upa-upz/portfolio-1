/* ===== Scroll Reveal animation =====*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 3000,
    reset: true
})

/*scroll Home*/
sr.reveal('.text-presentation',{});
sr.reveal('.lenguages',{delay: 400});

/*scroll PROJECTS*/
sr.reveal('.project-container',{});

/*scroll Social Media*/
sr.reveal('.git',{delay: 100});
sr.reveal('.linke',{delay: 150});
sr.reveal('.mail',{delay: 200});