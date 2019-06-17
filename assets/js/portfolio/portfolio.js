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
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-1.png',
                title: 'Webb Webb & Web', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-2.png',
                title: 'Check Events', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-3.png',
                title: 'Jibe Web Application', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-4.png',
                title: 'Albumize', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-5.png',
                title: 'Rebit', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/webdevelopment/screen-shot-6.png',
                title: 'Ketamine Clinic', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
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
                title: '', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/prints/art-1.png',
                title: '', 
                // explaining the aims, outcomes, significance and benefits
                desc: ''
            },
            {
                img: '../assets/images/portfolio_images/prints/art-2.png',
                title: '', 
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
    // first empty current gallery
    $gallery.empty();


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