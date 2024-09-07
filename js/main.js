
        document.addEventListener('DOMContentLoaded', function() {
            const navbar = document.querySelector('.navbar');
            const heroHeight = document.querySelector('.hero').offsetHeight;

            window.addEventListener('scroll', function() {
                if (window.scrollY > heroHeight) {
                    navbar.classList.add('bg-custom', 'text-white');
                    navbar.classList.remove('bg-light');
                } else {
                    navbar.classList.remove('bg-custom', 'text-white');
                    navbar.classList.add('bg-light');
                }
            });
        });
