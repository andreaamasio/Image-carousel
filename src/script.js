// factory function images
function createSlide(src, alt="a picture"){
    return { src, alt }
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
        imageAltArray[i]
    )
    slidesArray.push(newImage)
}


const imageContainer=document.querySelector("div.container")
slidesArray.forEach(slide => {
    
});

