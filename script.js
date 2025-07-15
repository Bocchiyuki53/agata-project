
        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
        
        // FAQ toggles
        document.querySelectorAll('.faq-toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const content = toggle.nextElementSibling;
                const arrow = toggle.querySelector('.faq-arrow');
                
                content.classList.toggle('hidden');
                arrow.classList.toggle('rotate-180');
            });
        });
        
        // Form submission
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            // For demo purposes, we'll just show an alert
            alert(`Terima kasih, ${name}! Pesan Anda telah diterima. Kami akan segera menghubungi Anda mengenai layanan ${service} kami.`);
            
            // Reset form
            contactForm.reset();
        });
        
        // Animation on scroll
        const animateElements = document.querySelectorAll('.opacity-0');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0');
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        animateElements.forEach(el => {
            observer.observe(el);
        });

        
    