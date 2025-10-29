const slides = document.querySelectorAll('.Top_Slider .slide');
        const prevBtn = document.querySelector('.slider-btn.prev');
        const nextBtn = document.querySelector('.slider-btn.next');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);

                
                const textEls = slide.querySelectorAll('p, h1');
                textEls.forEach(el => {
                    el.classList.remove('slide-animate');              
                    void el.offsetWidth;
                    if (i === index) {
                        el.classList.add('slide-animate');
                    }
                });
            });
            currentSlide = index;
        }

        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        function prevSlide() {
            let prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        }

        function startSlider() {
            slideInterval = setInterval(nextSlide, 10000);
        }

        function stopSlider() {
            clearInterval(slideInterval);
        }

        prevBtn.addEventListener('click', () => {
            stopSlider();
            prevSlide();
            startSlider();
        });

        nextBtn.addEventListener('click', () => {
            stopSlider();
            nextSlide();
            startSlider();
        });

        // Initialize
        showSlide(0);
        startSlider();


