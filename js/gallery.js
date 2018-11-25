function activateGallery() {
    // let thumbnails = document.querySelector("#gallery-thumbs > img").
    //     querySelectorAll("img");

    let thumbnails = document.querySelectorAll("#gallery-thumbs div img");

    let mainImage = document.querySelector("#gallery-photo img");
    let infoTitle = document.querySelector("#gallery-info > h3");
    let infoDesc = document.querySelector("#gallery-info > p");

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener("click", function () {
            let newImgSrc = thumbnail.dataset.largeVersion;
            mainImage.setAttribute("src", newImgSrc);
            // mainImage.setAttribute("alt", (thumbnail.dataset.desciption).toString());
            // console.log((thumbnail.dataset.desciption).toString());
            let newImgAlt = thumbnail.dataset.title;
            console.log(newImgAlt);
            mainImage.setAttribute("alt", newImgAlt);
            infoTitle.innerHTML = thumbnail.dataset.title;
            infoDesc.innerHTML = thumbnail.dataset.description;


        });
    });
    // galleryInfoTitle.innerHTML = "hi"; //thumbnail.dataset.data-title;
    // galleryInfoDescription.innerHTML = "bychance";  //thumbnail.dataset.data-description;

}