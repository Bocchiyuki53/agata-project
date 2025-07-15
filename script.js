
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
        const contactForm = document.querySelector('form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const service = document.getElementById('service').value;
            const brief = document.getElementById('message').value;
            
            // Validate form
            if (!name || !service || !brief) {
                alert('Mohon lengkapi semua kolom yang wajib diisi.');
                return;
            }

            // Map service value to display text
            let serviceDisplayName = '';
            switch (service) {
                case 'full-body':
                    serviceDisplayName = 'Full Body';
                    break;
                case 'half-body':
                    serviceDisplayName = 'Half Body';
                    break;
                case 'bust-up':
                    serviceDisplayName = 'Bust Up';
                    break;
                default:
                    serviceDisplayName = service; // Fallback
            }

            // Create WhatsApp message
            const waMessage = `Halo, saya ${name}. Saya tertarik dengan layanan ${serviceDisplayName}. Brief saya: ${brief}`;
            const waLink = `https://wa.me/6285643354338?text=${encodeURIComponent(waMessage)}`;

            // Open WhatsApp link
            window.open(waLink, '_blank');
            
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

        
    