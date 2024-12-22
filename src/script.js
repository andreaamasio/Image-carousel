// factory function images
function createSlide(src, alt="a picture", id){
    return { src, alt, id }
}

// array of photos

const imageSrcArray=[
    "images/image-1.jpeg",
    "images/image-2.jpg",
    "images/image-3.jpeg"]

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
        `slide-${i}`
    )
    slidesArray.push(newImage)
}
function getSlide(id){
    return slidesArray.find((slide)=>
        slide.id === id
    )
}

function displayImage(event){
    let slideID = event.currentTarget.id
    console.log(slideID)
    let slideSelected = getSlide(slideID)
    console.log(slideSelected)
    imageElement.setAttribute("src", slideSelected.src)
    imageElement.setAttribute("alt", slideSelected.alt)
    liTarget=document.querySelector(`#${slideID}`)
    liTarget.setAttribute("style","list-style:disc")
}

const dotContainer=document.querySelector("#dot-container")
slidesArray.forEach(slide => {
    let newLi = document.createElement("li")
    newLi.setAttribute("id", slide.id)
    newLi.addEventListener("click", displayImage)
    dotContainer.appendChild(newLi)
});

const imageElement=document.querySelector("div.image-container img")







