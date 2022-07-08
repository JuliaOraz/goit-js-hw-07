import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery')

// Создание и рендер разметки по массиву данных
function createGalleryItem(galleryItems) { 
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

galleryEl.insertAdjacentHTML('beforeend', createGalleryItem(galleryItems));



// Открытие модального окна по клику
galleryEl.addEventListener('click', onModalClick)

function onModalClick(e) { 
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
        return;
    }

    modalImageGallery(e.target.dataset.source);
  
}

// Модальное окно
function modalImageGallery(imgSource) {
    
    const modalGallery = basicLightbox.create(`
        <img src="${imgSource}">`
   
    )
    openModalImageGallery(modalGallery);
}

//Закрытие модального окна
// function onCloseEsc(e) { 
    
//     if (e.code === "Escape") {
//         console.log(e) 
//         closeModalImageGallery();
        
//     }
// }

// Открытие модального окна
function openModalImageGallery(modalGallery) { 
    // window.addEventListener('keydown', onCloseEsc)
    modalGallery.show();
}

// Закрытие модального окна
// function closeModalImageGallery() { 
//     // window.removeEventListener('keydown', onCloseEsc, {once: true})
//     // console.log(document.body);
//     // modalGallery.close();
//     const instance = basicLightbox.create(
//         document.querySelector('.basicLightbox--img'),
//         {
// 		onClose: (instance) => instance.close
// 	})

// }






