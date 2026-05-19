/**
 * Ana Sofrası Ev Yemekleri & Catering
 * Custom Scripts
 */

document.addEventListener('DOMContentLoaded', () => {

    // Set Current Year in Footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (hamburgerBtn && mobileMenu) {
        const closeMobileMenu = () => {
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            const icon = hamburgerBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        };

        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            // Toggle Icon between bars and times
            const icon = hamburgerBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.classList.add('menu-open');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.classList.remove('menu-open');
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // Close the panel after choosing any mobile-menu link.
        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', (e) => {
                const targetPath = new URL(link.href, window.location.href).pathname;
                const currentPath = window.location.pathname;
                const isCurrentHomeLink =
                    (targetPath.endsWith('/index.html') || targetPath.endsWith('/')) &&
                    (currentPath.endsWith('/index.html') || currentPath.endsWith('/'));

                closeMobileMenu();

                if (isCurrentHomeLink) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    }

    // Form Submission to WhatsApp
    const teklifForm = document.getElementById('teklifForm');

    if (teklifForm) {

        teklifForm.addEventListener('submit', function (e) {

            e.preventDefault();

            const name = document.getElementById('t_name').value;
            const company = document.getElementById('t_company').value;
            const phone = document.getElementById('t_phone').value;
            const people = document.getElementById('t_people').value;
            const location = document.getElementById('t_location').value;
            const message = document.getElementById('t_message').value;

            const whatsappNumber = "905077126447";

            const whatsappMessage =
                `Merhaba, Ana Sofrası Ev Yemekleri & Catering için teklif almak istiyorum.

            Ad Soyad: ${name}
            Firma: ${company}
            Telefon: ${phone}
            Kişi Sayısı: ${people}
            Lokasyon: ${location}
            Mesaj: ${message}`;

            const encodedMessage = encodeURIComponent(whatsappMessage);

            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            window.open(whatsappURL, '_blank');

        });

    }

});
