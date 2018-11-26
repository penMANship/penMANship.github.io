function activateGallery() {
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    let mainImage  = document.querySelector("#gallery-photo img");

    thumbnails.forEach(function(thumbnail){

        // Preload large images.
        let newImageSrc  = thumbnail.dataset.largeVersion;
        let lx = new Image();
        lx.src = newImageSrc;
        // let largeVersion = new Image();
        // largeVersion.src = newImageSrc;

        thumbnail.addEventListener("click", function(){

            // Set clicked image as main image.
            mainImage.setAttribute("src", newImageSrc);
            mainImage.setAttribute("alt", thumbnail.alt);

            // change which image is current
            let currentClass = "current";
            document.querySelector(".current").classList.remove(currentClass);
            thumbnail.parentNode.classList.add(currentClass);

            // change gallery-info
            let galleryInfo = document.querySelector("#gallery-info");
            let title       = galleryInfo.querySelector(".title");
            let description = galleryInfo.querySelector(".description");
            title.innerHTML       = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;
        });
    });
}

// function activateGallery() {
//     // let thumbnails = document.querySelector("#gallery-thumbs > img").
//     //     querySelectorAll("img");
//
//     let thumbnails = document.querySelectorAll("#gallery-thumbs div img");
//
//     let mainImage = document.querySelector("#gallery-photo img");
//     let infoTitle = document.querySelector("#gallery-info > h3");
//     let infoDesc = document.querySelector("#gallery-info > p");
//
//     thumbnails.forEach(function (thumbnail) {
//         thumbnail.addEventListener("click", function () {
//             let newImgSrc = thumbnail.dataset.largeVersion;
//             mainImage.setAttribute("src", newImgSrc);
//
//             let newImgAlt = thumbnail.dataset.title;
//
//             mainImage.setAttribute("alt", newImgAlt);
//             infoTitle.innerHTML = thumbnail.dataset.title;
//             infoDesc.innerHTML = thumbnail.dataset.description;
//
//             // Change which image is current
//             document.querySelector(".current").classList.remove("current");
//             thumbnail.parentNode.classList.add("current");
//
//
//         });
//     });
//     // galleryInfoTitle.innerHTML = "hi"; //thumbnail.dataset.data-title;
//     // galleryInfoDescription.innerHTML = "bychance";  //thumbnail.dataset.data-description;
//
// }
