// Add smooth scrolling for navigation links
const testimonials = document.querySelectorAll('.testimonial');

    let currentIndex = 0;

    function updateCarousel(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.transform = `translateX(${(i - index) * 100}%)`;
            testimonial.classList.toggle('active', i === index);
        });
    }

    // Initialize the carousel
    updateCarousel(currentIndex);

    // Background animation
    document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth * 100;
            const y = e.clientY / window.innerHeight * 100;
            document.documentElement.style.setProperty('--x', x + '%');
            document.documentElement.style.setProperty('--y', y + '%');
        });
        
    // Create particles
const particles = document.querySelector('.particles');
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particles.appendChild(particle);
    }

        // Animate particles
    const particleElements = document.querySelectorAll('.particle');
    particleElements.forEach(particle => {
        gsap.to(particle, {
            x: 'random(-100, 100)',
            y: 'random(-100, 100)',
            duration: 'random(3, 5)',
            repeat: -1,
            yoyo: true,
            ease: 'none'
        });
    });

        // Animate hero content
        gsap.from('.hero-content', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });


        