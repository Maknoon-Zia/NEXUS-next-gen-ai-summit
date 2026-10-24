// Brands Slider---------------------
$(document).ready(function () {
    $('.compony-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 600,
        infinite: true,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});
// Testimonial slider
$('.testimonial-slider').slick({
    variableWidth: true,      
    // card width now comes from CSS
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: $('.testimonial-prev'),
    nextArrow: $('.testimonial-next'),
    dots: false,
    speed: 500,
    adaptiveHeight: false
});



// Register section ---- early bird countdown
const countdown = document.getElementById("countdown");
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");

// End date is read from data-end attribute in index.html
const endDate = new Date(countdown.dataset.end).getTime();

function updateCountdown() {
    const remaining = Math.max(endDate - Date.now(), 0);

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remaining / (1000 * 60)) % 60);

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// Contact & newsletter forms ---- demo submit
document.querySelectorAll("#contactForm, #newsletterForm").forEach(form => {
    form.addEventListener("submit", event => {
        event.preventDefault();
        form.reset();
    });
});