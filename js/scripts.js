class LandingPage {
    constructor() {}

    contactButtons = `<div class="row justify-content-center contact-links">
        <div class="col-lg-4">
            <a href="tel:${resources.contact.phone}"><i class="bi bi-telephone fs-3 text-white"></i></a>
        </div>
        <div class="col-lg-4">
            <a href="sms:${resources.contact.phone}"><i class="bi bi-chat-left-dots fs-3 text-white"></i></a>
        </div>
        <div class="col-lg-4">
            <a href="mailto:${resources.contact.email}"><i class="bi bi-envelope fs-3 text-white"></i></a>
        </div>
    </div>`

    masthead = `<header class="masthead">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="text-center text-white">
                            <h1 class="mb-5 bonheur-royale-regular" id="main-head">${resources.brandname}</h1>
                            <h1 class="mb-5">${resources.mastheadSubline}</h1>
                        </div>
                    </div>
                </div>
                <div class="row feature-icons text-center">
                    <div class="col-lg-4">${this.getIcon("bi-egg-fried", "Nutrition", "Fulfill Your Body's Needs!")}</div>
                    <div class="col-lg-4">${this.getIcon("bi-graph-up-arrow", "Strength", "Grow Your Confidence!")}</div>
                    <div class="col-lg-4">${this.getIcon("bi-heart-pulse", "Cardio", "Build All Day Energy!")}</div>
                </div>
                <div class="row">
                    <div class="col-xl-6">
                        <div class="text-center text-white">${this.contactButtons}</div>
                    </div>
                </div>
            </div>
        </header>`;

    imageShowcase = `<section class="showcase">
        <div class="container-fluid p-0">
            <div class="row g-0">${this.getShowcaseItem("assets/img/bg-showcase-1.jpg", "A Solid Foundation", "For your body to be primed and ready for dramatic transformation, it must be built on a fundamentally sound diet. Level up with tailored nutrition plans designed to fit your personal needs and goals!", true)}</div>
            <div class="row g-0">${this.getShowcaseItem("assets/img/bg-showcase-2.jpg", "Strength Training", "Whether you dream of having a physique worthy of a competition stage or you simply long to hold a grandchild, personalized strength training plans will take you from moving pebbles to moving mountains!", false)}</div>
            <div class="row g-0">${this.getShowcaseItem("assets/img/bg-showcase-3.jpg", "Cardio", "Lacking energy as the day wears on? Stairs stealing your breath more than you'd like to admit? Optimized cardio sessions will give your mental and physical stamina a jump start!", true)}</div>
        </div>
    </section>`;

    testimonials = `<section class="testimonials text-center bg-light">
            <div class="container">
                <h2 class="mb-5">What people are saying...</h2>
                <div class="row">
                    <div class="col-lg-4">${this.getTestimonialItem("assets/img/testimonials-1.jpg", "Johnathan E.", "This is fantastic! Bulking programs have never been so easy!")}</div>
                    <div class="col-lg-4">${this.getTestimonialItem("assets/img/testimonials-2.jpg", "Jessica S.", "Regular cardio sessions give me the long lasting energy to go anywhere and do anything!")}</div>
                    <div class="col-lg-4">${this.getTestimonialItem("assets/img/testimonials-3.jpg", "William H.", "Having a complete fitness approach has allowed me to achieve my goals at the right pace for me!")}</div>
                </div>
            </div>
        </section>`;

    callToAction = `<section class="call-to-action text-white text-center" id="signup">
        <div class="container position-relative">
            <div class="row justify-content-center">
                <div class="col-xl-6">
                    <h2 class="mb-4">${resources.callToAction}</h2>
                    ${this.contactButtons}
                </div>
            </div>
        </div>
    </section>`;

    footer = `<footer class="footer bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <p class="text-muted small mb-4 mb-lg-0">&copy; ${resources.brandname} ${resources.now.getFullYear()}. All Rights Reserved.</p>
                    </div>
                    <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item me-4">
                                <a href="${resources.socialLinks.facebook}"><i class="bi-facebook fs-3"></i></a>
                            </li>
                            <li class="list-inline-item me-4">
                                <a href="${resources.socialLinks.x}"><i class="bi-twitter-x fs-3"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="${resources.socialLinks.instagram}"><i class="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>`;

    getIcon(icon, title, description) {
        return `<div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div class="features-icons-icon d-flex"><i class="${icon} m-auto text-primary"></i></div>
                <h3>${title}</h3>
                <!-- p class="lead mb-0">${description}</p -->
            </div>`;
    }

    getShowcaseItem(imagePath, title, description, orientation) {
        return `<div class="col-lg-6 ${orientation === true ? 'order-lg-2' : ''} text-white showcase-img" style="background-image: url('${imagePath}')"></div>
                <div class="col-lg-6 ${orientation === true ? 'order-lg-1' : ''} my-auto showcase-text">
                    <h2>${title}</h2>
                    <p class="lead mb-0">${description}</p>
                </div>`;
    }

    getTestimonialItem(imagePath, name, testimony) {
        return `<div class="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img class="img-fluid rounded-circle mb-3" src="${imagePath}" alt="..." />
                    <h5>${name}</h5>
                    <p class="font-weight-light mb-0">"${testimony}"</p>
                </div>`;
    }

    toString() {
        return this.masthead + 
            this.imageShowcase + 
            this.testimonials + 
            this.callToAction + 
            this.footer;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // set tab title
    document.getElementsByTagName('title')[0].innerText = resources.brandname;

    var page = new LandingPage();
    // set body content
    document.body.innerHTML += page.toString();

    document.body.classList.remove('loading');
});

