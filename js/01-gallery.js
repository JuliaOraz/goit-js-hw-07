import { galleryItems } from './gallery-items.js';
// // Change code below this line


const galleryEl = document.querySelector('.gallery')

// Создание и рендер разметки по массиву данных
function createMarkupGalleryItem(galleryItems) { 
    return galleryItems.map(({ preview: src, original: source, description: alt }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${source}">
                <img
                class="gallery__image"
                src="${src}"
                data-source="${source}"
                alt="${alt}"
                />
            </a>
        </div>`
       
    }).join('');
}

galleryEl.insertAdjacentHTML('beforeend', createMarkupGalleryItem(galleryItems));



let modalGallery;

// Открытие модального окна по клику
galleryEl.addEventListener('click', onModalGalary)

function onModalGalary(e) { 
    e.preventDefault();

    if (e.target.nodeName === 'IMG') { 
        modalGallery = basicLightbox.create(`<img src="${e.target.dataset.source}">`);
        modalGallery.show(() => window.addEventListener('keydown', closeModalGallery));
       
    }
    return; 
}

// Закрытие модального окна по клику
function closeModalGallery(e) { 
    if (e.key === 'Escape') {  
        modalGallery.close();
        window.removeEventListener('keydown', closeModalGallery);
    }
    return;
}

