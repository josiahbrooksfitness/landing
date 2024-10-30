class LandingPage {
    contactButtons = `<div class="row justify-content-center contact-links">
        <div class="col-lg-4">
            <a href="tel:${Resources.contact.phone}"><i class="bi bi-telephone fs-3 text-white"></i></a>
        </div>
        <div class="col-lg-4">
            <a href="sms:${Resources.contact.phone}"><i class="bi bi-chat-left-dots fs-3 text-white"></i></a>
        </div>
        <div class="col-lg-4">
            <a href="mailto:${Resources.contact.email}"><i class="bi bi-envelope fs-3 text-white"></i></a>
        </div>
    </div>`

    masthead = `<header class="masthead">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="text-center text-white">
                            <h1 class="mb-5 bonheur-royale-regular" id="main-head">${Resources.brandname}</h1>
                            <h1 class="mb-5">${Resources.mastheadSubline}</h1>
                        </div>
                    </div>
                </div>
                <div class="row feature-icons text-center">
                    <div class="col-lg-4">${this.getIcon("bi-heart-pulse", "Cardio")}</div>
                    <div class="col-lg-4">${this.getIcon("bi-graph-up-arrow", "Strength")}</div>
                    <div class="col-lg-4">${this.getIcon("bi-egg-fried", "Nutrition")}</div>
                </div>
            </div>
        </header>`;
    
    missionStatement = `<section class="mission bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="mb-1">${Resources.mission.title}</h1>
                    <p class="lead mb-0">${Resources.mission.description}</p>
                </div>
            </div>
        </div>
    </section>`;

    showcase = `<section class="showcase">
        <div class="container-fluid p-0">
            <div class="row g-0">${this.getShowcaseItem("assets/img/bio.jpg", Resources.bio.title, Resources.bio.description, true)}</div>
            <div class="row g-0">${this.getShowcaseItem("assets/img/cust-expectations-2.jpg", Resources.clientExpectation.title, Resources.clientExpectation.description, false)}</div>
            <div class="row g-0">${this.getShowcaseItem("assets/img/my-expectations-1.jpg", Resources.myExpectation.title, Resources.myExpectation.description, true)}</div>
        </div>
    </section>`;
    
    modalities = `<section class="modalities text-center bg-light">
        <div class="container">
            <h1 class="mb-3">Modalities</h1>
            <div class="row">
                <div class="col-lg-12">
                    <div id="modalitiesCarousel" class="carousel slide mb-5" data-bs-ride="carousel">
                        ${this.getCarouselIndicators()}
                        ${this.getCarouselBody()}
                        <button class="carousel-control-prev" type="button" data-bs-target="#modalitiesCarousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#modalitiesCarousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

    callToAction = `<section class="call-to-action text-white text-center" id="signup">
        <div class="container position-relative">
            <div class="row justify-content-center">
                <div class="col-xl-6">
                    <h2 class="mb-4">${Resources.callToAction}</h2>
                    ${this.contactButtons}
                </div>
            </div>
        </div>
    </section>`;

    footer = `<footer class="footer bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <p class="text-muted small mb-4 mb-lg-0">&copy; ${Resources.brandname} ${Resources.now.getFullYear()}. All Rights Reserved.</p>
                    </div>
                    <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item me-4">
                                <a href="${Resources.socialLinks.facebook}"><i class="bi-facebook fs-3"></i></a>
                            </li>
                            <li class="list-inline-item me-4">
                                <a href="${Resources.socialLinks.x}"><i class="bi-twitter-x fs-3"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="${Resources.socialLinks.instagram}"><i class="bi-instagram fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>`;

    getIcon(icon, title) {
        return `<div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div class="features-icons-icon d-flex" style="color:#6ba6e0"><i class="${icon} m-auto"></i></div>
                <h2>${title}</h2>
            </div>`;
    }

    getCarouselIndicators() {
        var result = '<div class="carousel-indicators">';

        for(var i = 0; i < Resources.modalities.length; i++) {
            result += `<button type="button" data-bs-target="#modalitiesCarousel" data-bs-slide-to="${i}" ${i === 0 ? 'class="active" aria-current="true" ' : ''}aria-label="Slide ${i}"></button>`;
        }
        
        result += '</div>';

        return result;
    }

    getCarouselBody() {
        var result = '<div class="carousel-inner">';

        for (var i = 0; i < Resources.modalities.length; i++) {
            result += `<div class="carousel-item${i === 0 ? ' active' : ''}" style="background: url('${Resources.modalities[i].image}') no-repeat center center">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${Resources.modalities[i].title}</h5>
                    <p>${Resources.modalities[i].description}</p>
                </div>
            </div>`;
        }

        result += '</div>';

        return result;
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
            this.missionStatement +
            this.showcase + 
            this.modalities +
            this.callToAction + 
            this.footer;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // set tab title
    document.getElementsByTagName('title')[0].innerText = Resources.brandname;

    document.body.innerHTML += new LandingPage();

    document.body.classList.remove('loading');
});

