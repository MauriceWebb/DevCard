// targets
let $gallery = $('.gallery');

// portfolio contents
let category = {
    webDevelopment: {
        images: [
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-8.png',
                title: 'Urbit', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'URBIT (pronounced herb·it) is a botanical index and resource for holistic health. This online community provides a platform for noobs and health nuts to get the latest trends on herbal therapies or obtain recommendations on our indexed herbs. Only our subscribers are able to post and comment our indexed resources. A subscriber is able to build a profile and search holistic medicine solutions through the application’s customized-API. The mission of URBIT is to create a wellness community. A place where subscribers can feel comfortable about sharing holistic practices; even quirky home remedies. As an interactive platform, URBIT is an informative resource for natural products, holistic providers, and well-being tips. ',
                demo: 'https://urbitapp.herokuapp.com/',
                code: 'https://github.com/MauriceWebb/Project_3'
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-7.png',
                title: 'Guestination React JS Game', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Built my first React JS game for the browser. The user clicks on the random images and gets a point each time an image is clicked. After an image is clicked, the images are scrambled and the user can click again to gain points. Once the user clicks an image twice, the game resets, storing their highest score. This project helped me to understand how to build and deploy a react application from scratch, build custom components, link custom stylesheets to those components, utilize state, and pass props into components.',
                demo: 'https://mauricewebb.github.io/Guestination/',
                code: 'https://github.com/MauriceWebb/Guestination/tree/master'
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-0.png',
                title: 'Crystals Collector JS Game', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Built my first Front End JS game for the browser. This simple project helped me to understand how objects and call back functions work.',
                demo: 'https://mauricewebb.github.io/UOR_CB_ClassWork/Unit-4-Game/index.html',
                code: 'https://github.com/MauriceWebb/UOR_CB_ClassWork/tree/master/Unit-4-Game'
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-1.png',
                title: 'Webb Webb & Web', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Launched my first collaborated mock freelancing business website for the Richmond Area. Wire-framed and designed in Adobe Xd, and utilized preprocessing technologies such as Sass and Scss. Completely hand-coded this website from scratch without utilizing any frame works to demonstrate understanding of web hosting, registering domains, deploying to the web, html, css, Javascript, sass, and UI/UX design.',
                demo: 'https://www.webbwebbandweb.com/',
                code: 'https://github.com/MauriceWebb/WebbWebbandWeb'
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-2.png',
                title: 'Check Events', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Collaborated with a small team of developers at the University of Richmond to build a web application that allows the user to discover local events. The idea of the app was to motivate people to get out and live, and was built for fellow introverts who desire sponteniety. For this project, I decided to work on the Back-End team, gaining experience with making API calls, saving data with Session and Local storage, setting up a remote database using Google\'s Firebase, and dynamically rendering data to the DOM using javascript.',
                demo: null,
                code: 'https://github.com/sherriemcnulty/check-events/tree/maurice'
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-3.png',
                title: 'Jibe Web Application', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Jibe is a mock dating app that connects users to like minded individuals. The idea behind this project was to promote harmonious relationships by utilizing a simple algorith that matches the user with another who shares the closest survey scores. No database technology was utilized to build this application, which helped me understand alternative ways of storing data. The survey captures basic contact information from the user, a link to a photo of the user, as well as the user\'s survey scores, and stores it into a JSON object. Upon submission of the survey, the algorithm is ran and returns the closest match.',
                demo: 'https://pure-reaches-15786.herokuapp.com/',
                code: 'https://github.com/MauriceWebb/JIBE-App'
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-4.png',
                title: 'Albumize', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Albumize is a music blog for users to be able to share thoughts on music. It is a place to connect people to others who share similar tastes or preferences on the songs we all love. \nI decided to work on the Back-End on this project, to hone in on the javascript. In this collaberative project, I was responsible for building a RESTful API to serve routes that interfaced with the database. I gained lots of experience setting up and deploying a MySql database to Heroku, validating data with Node JS technologies like Sequelize, interfacing with APIs, setting up a dynamic Express server, working with .env files to protect API keys and sensitive data, UI/UX for user profiles, handling login and registration of users, practicing MVC standards, and dynamically rendering components of the DOM using Handlebars.',
                demo: 'https://glacial-tundra-34381.herokuapp.com/',
                code: 'https://github.com/jll9qw/AlbumReviewBlog/tree/maurice'
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-5.png',
                title: 'Rebit', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Rebit is a mock company I invented for the purposes of sharpening my Front-End skills. Rebit is pronounced "Ribbit," like a frog\'s croak (hence the logo), but represents a digital agency (hence the spelling Re[bit]) that helps automate various exhaustive financial processes involved in Commercial real estate transactions. This simple project helped me understand the various ways one can scaffold Bootstrap 4\'s components to achieve a responsive, desireable layout. The design of the website was google searched, and I coded it from scratch. This demonstrates my ability to convert .PSD layouts or designs from a Web Designer into a responsive, pixel perfect, functional, static web page.',
                demo: 'https://codepen.io/MauriceWebb/full/BgBqNN',
                code: 'https://codepen.io/MauriceWebb/pen/BgBqNN?editors=1100'
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-6.png',
                title: 'Ketamine Clinic', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'Ketamine Clinic is a mock company I\'m promoting for the purposes of polishing my Front-End skills. This was another project that was inspired by randomly Google searching a layout, and coding it. I gained more comfortability using Bootstrap 4, successfully converting this design to a functional, responsive static web page.',
                demo: 'https://codepen.io/MauriceWebb/full/dBobBr',
                code: 'https://codepen.io/MauriceWebb/pen/dBobBr?editors=1100'
            }
        ]
    },
    logos: {
        images: [
            {
                img: '../assets/images/portfolio_images/logos/art-8.png',
                title: 'Urbit', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'The aim of this design was to render a modern, minimal typographical logo that delivers a holistic, natural care message.'
            },
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
                desc: 'Symmetry Gamming is a competitive E-Sports gaming organization. The client wanted a logo fit for it\'s name. I rendered a labyrinth styled logo.'
            },
            {
                img: '../assets/images/portfolio_images/logos/art-2.png', 
                title: 'W3bb',
                // explaining the aims, outcomes, significance and benefits
                desc: 'Webb Webb & Web is a mock collaborative freelancing firm for web development projects.'
            },
            {
                img: '../assets/images/portfolio_images/logos/art-3.png', 
                title: 'Love Flowers, LLC',
                // explaining the aims, outcomes, significance and benefits
                desc: 'Love Flowers is a local flower shop that delivers tropical plants from South America for romantic occasions. I rendered a Heliconia plant styled logo.'
            },
            {
                img: '../assets/images/portfolio_images/logos/art-4.png', 
                title: 'Tyranturla',
                // explaining the aims, outcomes, significance and benefits
                desc: 'Tyranturla is a mock web scraping agency that crawls the web for useful data and contructs free accessible APIs for developers. Since this agency specializes in web crawlers, the logo resembles a spider.'
            },
            {
                img: '../assets/images/portfolio_images/logos/art-5.png', 
                title: 'NG Pro Gaming',
                // explaining the aims, outcomes, significance and benefits
                desc: 'Nuisance Gaming is a competitive E-Sports gaming organization. The client wanted a logo fit for it\'s name. I rendered a typographical styled logo that subtly displays the org\'s initials.'
            },
            {
                img: '../assets/images/portfolio_images/logos/art-6.png', 
                title: 'Future World of Israel',
                // explaining the aims, outcomes, significance and benefits
                desc: 'Future world of Israel is a Judeo-Christian church that wanted a logo that expressed their interpretation of Isaiah 45:17 and incorporated their church\'s colors - blue and gold. The two shofars represent the Northern and Southen kingdoms of Israel, or the Jews and Gentiles. The seven flames represent the seven candlestick menorah of Israel.'
            },
            {
                img: '../assets/images/portfolio_images/logos/art-7.png', 
                title: 'SKSK Gaming',
                // explaining the aims, outcomes, significance and benefits
                desc: 'Scary Kids Scaring Kids is a competitive E-Sports gaming organization. The client wanted a logo fit for it\'s name. I rendered a silhouette styled logo that illustrates a street gang turning the city upside down.'
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
                desc: 'T-shirt designed for OriginalRoyalty.com. Contact me to purchase a print!'
            },
            {
                img: '../assets/images/portfolio_images/prints/art-1.png',
                title: 'Hair Like Wool', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'T-shirt designed for OriginalRoyalty.com. Contact me to purchase a print!'
            },
            {
                img: '../assets/images/portfolio_images/prints/art-2.png',
                title: 'Overcome', 
                // explaining the aims, outcomes, significance and benefits
                desc: 'This powerful piece is a montage of paintings and images of the Trans Atlantic Slave Trade. It displays the challenges African Americans faced during the early 1600s and the will to overcome. Print was released as a Black History project while enrolled in VCU\'s School of Arts program.'
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
    let card = $('<div>').attr({
        'data-desc': logo.desc,
        'class': 'card pop border-0',
        'data-demo': logo.demo,
        'data-code': logo.code
    });
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
}

// function add_buttons (a, b, c) {
//     $('#imagemodal .modal-body').append(a.attr('href', $(this).attr('data-demo')));
//     $('#imagemodal .modal-body').append(b.attr('href', $(this).attr('data-code')));
// }

// Main
render_gallery();

// Event Listeners...
$(document).on('click', '.pop', function(e) {
    e.preventDefault();

    $('#modal_links').empty();
    // $('#imagemodal .modal-body').remove('#card_code');

    let card_demo = $(this).attr('data-demo') ? $('<a>').attr({'class': 'btn btn-dark p-3 m-3 align-self-center align-self-md-start text-light', 'id': 'card_demo'}).text('DEMO') : $('<a>').addClass('d-none');

    let card_code = $(this).attr('data-code') ? $('<a>').attr({'class': 'btn btn-dark p-3 m-3 align-self-center align-self-md-start text-light', 'id': 'card_code'}).text('View Code') : $('<a>').addClass('d-none');
    
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $(this).attr('data-desc') ? $('#modal_desc').attr('class', 'm-0 p-3 bg-light text-dark').text($(this).attr('data-desc')).show() : $('#modal_desc').hide();
    $('#imagemodal').modal('show');
    // add_buttons(card_demo, card_code, e);
    
    $('#modal_links').append(card_demo.attr({
        'href': $(this).attr('data-demo'),
        'target': '_blank'
    }));

    $('#modal_links').append(card_code.attr({
        'href': $(this).attr('data-code'),
        'target': '_blank'
    }));
});	