// js/main.js
import { content } from '../data/content/es.js';

document.addEventListener('DOMContentLoaded', () => {
  // Función para inyectar contenido
  function injectContent() {
    // Navbar (if dynamic content is needed, e.g., links from content.navbar.links)
    // You can iterate content.navbar.links to populate your nav-links
    // For now, assuming static HTML for navbar links, but dynamic for logo
    const navbarLogo = document.querySelector('.navbar-logo'); // Assuming you have a class for your logo
    if (navbarLogo) {
      navbarLogo.textContent = content.navbar.logo;
    }
    // Example for dynamic nav links:
    // const navLinksContainer = document.querySelector('.nav-links ul');
    // if (navLinksContainer) {
    //   navLinksContainer.innerHTML = ''; // Clear existing
    //   content.navbar.links.forEach(linkText => {
    //     const li = document.createElement('li');
    //     li.className = 'nav-link-item';
    //     li.innerHTML = `<a href="#${linkText.toLowerCase()}" class="nav-link-anchor">${linkText}</a>`;
    //     navLinksContainer.appendChild(li);
    //   });
    // }


    // inicio Section
    document.querySelector('#inicio h1').textContent = content.inicio.title;
    document.querySelector('#inicio h2').textContent = content.inicio.subtitle;
    document.querySelector('#inicio p').textContent = content.inicio.description;
    document.querySelector('#inicio .cta').textContent = content.inicio.button;


    // Guardianes del Reino Section
    document.querySelector('#guardianes h2').textContent = content.guardianes.title;
    // Assuming the first paragraph is the description
    document.querySelector('#guardianes .md\\:w-1\\/2 > p:first-of-type').textContent = content.guardianes.description;
    // For lists, we'll iterate as well for robustness
    const guardianesListUl = document.querySelector('#guardianes ul');
    if (guardianesListUl) {
      guardianesListUl.innerHTML = ''; // Clear existing
      content.guardianes.list.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong class="font-semibold">${item}</strong>`;
        guardianesListUl.appendChild(li);
      });
    }
    document.querySelector('#guardianes .italic').textContent = content.guardianes.invitation; // Use invitation
    document.querySelector('#guardianes .cta-guardianes').textContent = content.guardianes.button;

    // Discipulados Section
    document.querySelector('#discipulados h2').textContent = content.discipulados.title;
    document.querySelector('#discipulados .md\\:w-1\\/2 > p:first-of-type').textContent = content.discipulados.description;
    const discipuladosListUl = document.querySelector('#discipulados ul');
    if (discipuladosListUl) {
      discipuladosListUl.innerHTML = ''; // Clear existing
      content.discipulados.list.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong class="font-semibold">${item}</strong>`;
        discipuladosListUl.appendChild(li);
      });
    }
    document.querySelector('#discipulados .cta').textContent = content.discipulados.button;


    // Escuela Section - REFACTORIZADO
    document.querySelector('#escuela h2').textContent = content.escuela.title;
    document.querySelector('#escuela .relative.z-10 > p').textContent = content.escuela.description;

    const escuelaCards = document.querySelectorAll('#escuela .card');
    content.escuela.cursos.forEach((course, index) => {
      const card = escuelaCards[index];
      if (card) {
        // Apply Quicksand font to all text in the card (example using a general class)
        // If specific elements need different fonts, adjust selectors.
        card.querySelectorAll('.font-montserrat, .font-open-sans').forEach(el => {
          el.classList.remove('font-montserrat', 'font-open-sans');
          el.classList.add('font-quicksand');
        });

        card.querySelector('.card-title-overlay').textContent = course.nombre; // Use 'nombre' from content
        // Update the card's data-date attribute from the content
        card.dataset.date = course.fecha;

        // Populate content in the card body
        card.querySelector('.card-content p:nth-of-type(1) strong').textContent = `Modalidad: ${course.modalidad}`;
        card.querySelector('.card-content p:nth-of-type(2) strong').textContent = `Horario: ${course.horario}`;
        // Description paragraph
        card.querySelector('.card-content p.text-base.text-gray-700.font-quicksand').textContent = course.descripcion;
        // The button text and href
        const ctaButton = card.querySelector('.card-cta-button');
        if (ctaButton) {
          ctaButton.textContent = course.button;
          ctaButton.href = course.anchor;
        }

        // The speaker info might need a specific element if you want to display it
        // For now, let's assume it's part of the description or not explicitly displayed in a separate element.
        // If you have a specific element for 'Orador', add it like:
        // card.querySelector('.card-speaker-info').textContent = `Orador: ${course.orador}`;
      }
    });


    // Reuniones Section - CORREGIDO
    document.querySelector('#reuniones h2').textContent = content.reuniones.title;
    // This paragraph should correspond to content.reuniones.description if you add it.
    // If not, you can remove this line or add a specific element in HTML for it.
    document.querySelector('#reuniones .reuniones-info > p:first-of-type').textContent = content.reuniones.description;

    const reunionesListUl = document.querySelector('#reuniones ul');
    if (reunionesListUl) {
      reunionesListUl.innerHTML = ''; // Limpiar cualquier contenido existente
      content.reuniones.list.forEach(itemText => {
        const liElement = document.createElement('li');
        liElement.innerHTML = `<strong class="font-semibold">${itemText}</strong>`;
        reunionesListUl.appendChild(liElement);
      });
    }
    // This targets the italic paragraph
    document.querySelector('#reuniones .reuniones-info > p:last-of-type').textContent = content.reuniones.invitation;


    // Footer Section
    // Changed to use the new font family for consistency
    document.querySelector('.footer-info p:nth-child(1)').innerHTML = `<strong class="font-semibold text-blue-400 font-quicksand">📍 Dirección:</strong> <span class="font-quicksand">${content.contacto.direccion}</span>`;
    document.querySelector('.footer-info p:nth-child(2)').innerHTML = `<strong class="font-semibold text-blue-400 font-quicksand">📞 Teléfono:</strong> <span class="font-quicksand">${content.contacto.telefono}</span>`;
    document.querySelector('.footer-info p:nth-child(3) a').textContent = content.contacto.correo;
    const footerRedesTitle = document.querySelector('.footer-box.footer-social .font-montserrat');
    if (footerRedesTitle) {
    footerRedesTitle.textContent = content.contacto.redes.title;
    footerRedesTitle.classList.remove('font-montserrat');
    footerRedesTitle.classList.add('font-quicksand');
    }

    if (footerRedesTitle) {
    footerRedesTitle.textContent = content.contacto.redes.title;
    footerRedesTitle.classList.remove('font-montserrat');
    footerRedesTitle.classList.add('font-quicksand');
    }
    document.querySelector('.footer-bottom p').textContent = content.contacto.derechos;
  }

  injectContent(); // Call on initial load

  // --- Date Calculation and Card Styling (Remains largely the same, but now uses content.fecha) ---
  const updateSchoolDates = () => {
    const today = new Date();
    // Set hours, minutes, seconds, milliseconds to 0 for accurate date comparison
    today.setHours(0, 0, 0, 0);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const cards = document.querySelectorAll('#escuela .card');

    let nextCourseDate = null;
    let nextCourseCard = null;

    cards.forEach(card => {
      // Get the date from the card's data-date attribute, which is now injected from content.escuela.cursos.fecha
      const dateString = card.dataset.date;
      const courseDate = new Date(dateString);
      courseDate.setHours(0, 0, 0, 0); // Normalize course date to midnight for comparison

      const fechaSpan = card.querySelector('.fecha-inicio span');
      let dateText;

      // Determine if the course is upcoming or already started
      if (courseDate > today) {
        dateText = `Inicio: ${courseDate.toLocaleDateString('es-ES', options)}`;
        // Check if this is the soonest upcoming course
        if (!nextCourseDate || courseDate < nextCourseDate) {
          nextCourseDate = courseDate;
          nextCourseCard = card;
        }
      } else {
        dateText = 'Inicio: ¡Ya inició!';
      }
      fechaSpan.textContent = dateText;

      // Apply initial border based on past/future status
      if (courseDate < today) {
        card.style.borderColor = '#fca5a5'; // Red border for past/current
        card.classList.add('past-course'); // Add class for specific styling
      } else {
        card.style.borderColor = '#60a5fa'; // Blue border for upcoming
        card.classList.remove('past-course'); // Remove class if it was marked as past
      }
    });

    // Highlight the very next upcoming course
    cards.forEach(card => card.classList.remove('next-course-highlight')); // Clear previous highlights
    if (nextCourseCard) {
      nextCourseCard.classList.add('next-course-highlight'); // Add a class to highlight the next course
      nextCourseCard.style.borderColor = '#22c55e'; // Green border for the next upcoming course
      // You might want to add a badge or specific text for "Próximo"
      const fechaSpan = nextCourseCard.querySelector('.fecha-inicio span');
      fechaSpan.textContent = `Próximo: ${nextCourseDate.toLocaleDateString('es-ES', options)}`;
    }
  };

  updateSchoolDates(); // Call on load

  // ... (Menu Toggle, Nav Link highlighting, Navbar Theme, etc. - remains unchanged) ...

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-link-item a');
  const sections = document.querySelectorAll('section[id]');
  const navbar = document.querySelector('.navbar');

  // Menu Toggle for Mobile
  menuToggle.addEventListener('click', () => {
    if (navLinks.classList.contains('nav-links-mobile-open')) {
      navLinks.classList.remove('nav-links-mobile-open');
      navLinks.classList.add('nav-links-mobile-close');
      setTimeout(() => navLinks.classList.remove('nav-links-mobile-close', 'flex-col', 'flex'), 300);
      navLinks.classList.add('hidden');
    } else {
      navLinks.classList.remove('hidden');
      navLinks.classList.add('flex-col', 'flex', 'nav-links-mobile-open');
    }
  });

  // Close mobile menu when a link is clicked
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (navLinks.classList.contains('nav-links-mobile-open')) {
        navLinks.classList.remove('nav-links-mobile-open');
        navLinks.classList.add('nav-links-mobile-close');
        setTimeout(() => navLinks.classList.remove('nav-links-mobile-close', 'flex-col', 'flex'), 300);
        navLinks.classList.add('hidden');
      }
    });
  });

  // Highlight active nav link on scroll and change navbar theme
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Trigger when 50% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentSectionId = entry.target.id;
        // Update active link
        navItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
          }
        });

        // Update navbar theme
        const theme = entry.target.dataset.theme;
        navbar.dataset.theme = theme || 'default';
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // Set initial navbar theme based on the first section
  const firstSection = document.querySelector('section[id]:first-of-type');
  if (firstSection) {
    navbar.dataset.theme = firstSection.dataset.theme || 'inicio';
  }
});