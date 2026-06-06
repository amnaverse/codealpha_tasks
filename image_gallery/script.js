const images = document.querySelectorAll(".item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

/* OPEN LIGHTBOX */
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

/* SHOW IMAGE */
function showImage(){
    lightboxImg.src = images[currentIndex].src;
}

/* NEXT */
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

/* PREV */
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

/* CLOSE */
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

/* OUTSIDE CLICK */
lightbox.addEventListener("click", (e) => {
    if(e.target === lightbox){
        lightbox.style.display = "none";
    }
});

/* FILTER */
// function filterImages(category){
//     const items = document.querySelectorAll(".item");

//     items.forEach(item => {
//         if(category === "all" || item.classList.contains(category)){
//             item.style.display = "block";
//         } else {
//             item.style.display = "none";
//         }
//     });
// }


function filterImages(category){
    const items = document.querySelectorAll(".item");

    items.forEach(item => {

        const classes = item.className.toLowerCase();

        if(category === "all"){
            item.style.display = "block";
        }
        else if(classes.includes(category.toLowerCase())){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }

    });
}
