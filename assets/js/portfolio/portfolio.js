// targets
var $gallery = $('.gallery');
var $prev = $('#prev');
var $next = $('#next');
var $catTitle = $('#category_title');

// portfolio contents
let category = {
    webDevelopment: {
        images: [
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-0.png',
                title: 'Crystals Collector JS Game', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Built my first Front End JS game for the browser. This simple project helped me to understand how objects and call back functions work.'
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-1.png',
                title: 'Webb Webb & Web', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Launched my first collaborated mock freelancing business website for the Richmond Area. Wire-framed and designed in Adobe Xd, and utilized preprocessing technologies such as Sass and Scss. Completely hand-coded this website from scratch without utilizing any frame works to demonstrate understanding of web hosting, registering domains, deploying to the web, html, css, Javascript, sass, and UI/UX design.'
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-2.png',
                title: 'Check Events', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Collaborated with a small team of developers at the University of Richmond to build a web application that allows the user to discover local events. The idea of the app was to motivate people to get out and live, and was built for fellow introverts who desire sponteniety. For this project, I decided to work on the Back-End team, gaining experience with making API calls, saving data with Session and Local storage, setting up a remote database using Google\'s Firebase, and dynamically rendering data to the DOM using javascript.'
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-3.png',
                title: 'Jibe Web Application', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Jibe is a mock dating app that connects users to like minded individuals. The idea behind this project was to promote harmonious relationships by utilizing a simple algorith that matches the user with another who shares the closest survey scores. No database technology was utilized to build this application, which helped me understand alternative ways of storing data. The survey captures basic contact information from the user, a link to a photo of the user, as well as the user\'s survey scores, and stores it into a JSON object. Upon submission of the survey, the algorithm is ran and returns the closest match.'
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-4.png',
                title: 'Albumize', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Albumize is a music blog for users to be able to share thoughts on music. It is a place to connect people to others who share similar tastes or preferences on the songs we all love. \nI decided to work on the Back-End on this project, to hone in on the javascript. In this collaberative project, I was responsible for building a RESTful API to serve routes that interfaced with the database. I gained lots of experience setting up and deploying a MySql database to Heroku, validating data with Node JS technologies like Sequelize, interfacing with APIs, setting up a dynamic Express server, working with .env files to protect API keys and sensitive data, UI/UX for user profiles, handling login and registration of users, practicing MVC standards, and dynamically rendering components of the DOM using Handlebars.'
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-5.png',
                title: 'Rebit', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Rebit is a mock company I invented for the purposes of sharpening my Front-End skills. Rebit is pronounced "Ribbit," like a frog\'s croak (hence the logo), but represents a digital agency (hence the spelling Re[bit]) that helps automate various exhaustive financial processes involved in Commercial real estate transactions. This simple project helped me understand the various ways one can scaffold Bootstrap 4\'s components to achieve a responsive, desireable layout. The design of the website was google searched, and I coded it from scratch. This demonstrates my ability to convert .PSD layouts or designs from a Web Designer into a responsive, pixel perfect, functional, static web page.'
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-6.png',
                title: 'Ketamine Clinic', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Ketamine Clinic is a mock company I\'m promoting for the purposes of polishing my Front-End skills. This was another project that was inspired by randomly Google searching a layout, and coding it. I gained more comfortability using Bootstrap 4, successfully converting this design to a functional, responsive static web page.'
            }
        ]
    },
    logos: {
        images: [
            {
                img: '../assets/images/portfolio_images/logos/art-0.png',
                title: 'Bahashem Soaps, LLC', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'The aim of this design was to render a two-colored, flat style logo that delivers a royal, chemical-free message.'
            },
            {
                img: '../assets/images/portfolio_images/logos/art-1.png', 
                title: 'Symmetry Gaming',
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/logos/art-2.png', 
                title: 'Web of Webb',
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/logos/art-3.png', 
                title: 'Love Flowers, LLC',
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/logos/art-4.png', 
                title: 'Tyranturla',
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/logos/art-5.png', 
                title: 'NG Pro Gaming',
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/logos/art-6.png', 
                title: 'Future World of Israel',
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/logos/art-7.png', 
                title: 'SKSK Gaming',
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            }
        ]
    },
    illustrations: {
        images: [
            {
                img: '../assets/images/portfolio_images/illustrations/art-0.png',
                title: '', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/illustrations/art-1.png',
                title: '', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/illustrations/art-2.png',
                title: '', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/illustrations/art-3.png',
                title: '', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/illustrations/art-4.png',
                title: '', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/illustrations/art-5.png',
                title: '', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            }
        ]
    },
    prints: {
        images: [
            {
                img: '../assets/images/portfolio_images/prints/art-0.png',
                title: 'Bold As Lions', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/prints/art-1.png',
                title: 'Hair Like Wool', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/prints/art-2.png',
                title: 'Overcome', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            }
        ]
    },
    'ui/ux': {
        images: []
    }
};

// functions

function render_gallery() {
// populate gallery
    // first empty current gallery...
    $gallery.empty();
    // prevent right-click on images...
    $('#content').on('contextmenu', 'img', function(e){ return false; });


    category.webDevelopment.images.forEach( (project, i) => build_card(project, i, 'webDevelopment'));
    category.logos.images.forEach( (logo, i) => build_card(logo, i, 'logos'));
    category.illustrations.images.forEach( (logo, i) => build_card(logo, i, 'illustrations'));
    category.prints.images.forEach( (logo, i) => build_card(logo, i, 'prints'));

}

function build_card (logo, i, category) {
    let card = $('<div>').attr({'data-desc': logo.desc,'class': 'card pop border-0'});
    let image = $('<img>').attr({'src': logo.img, 'class': 'img-fluid'});
    let card_body = $('<div>').attr('class', 'card-body p-0');
    let card_title = $('<h5>').attr('class', 'card-title text-light bg-dark text-center m-0 p-3');

    let card_title_text = logo.title;
    // let modal_text = $('<p>').attr('class', 'm-0 p-3 bg-light text-dark');
    // let desc = category.logos.images[i].desc;

    card_title.text(card_title_text);
    card_body.append(card_title);
    card.append(image, card_body);

    $(`#${category}_slide .gallery`).append(card);

    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#modal_desc').attr('class', 'm-0 p-3 bg-light text-dark').text($(this).attr('data-desc'));
		$('#imagemodal').modal('show');   
	});		
}

// Main
render_gallery();