// factory function images
function createSlide(src, alt="a picture", id){
    return { src, alt, id }
}

// array of photos

const imageSrcArray=[
    "./images/image-1.jpeg",
    "./images/image-2.jpeg",
    "./images/image-3.jpeg"]

const imageAltArray=[
    "a bird",
    "a wheat field",
    "a koala",
]
const slidesArray=[]

for (let i = 0; i<imageSrcArray.length;i++){
    let newImage = createSlide(
        imageSrcArray[i],
        imageAltArray[i],
        i
    )
    slidesArray.push(newImage)
}


const dotContainer=document.querySelector("#dot-container")
slidesArray.forEach(slide => {
    let newLi = document.createElement("li")
    dotContainer.appendChild(newLi)
});

const imageContainer=document.querySelector("div.image-container")




