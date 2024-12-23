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
    let newSlide = createSlide(
        imageSrcArray[i],
        imageAltArray[i],
        `slide-${i}`
    )
    slidesArray.push(newSlide)
}

const imageElement=document.querySelector("div.image-container img") 
function getSlide(id){
    return slidesArray.find((slide)=>
        slide.id === id
    )
}
// logic for showing slide
function displaySlide(slideSelected, slideID){
    allLi.forEach(li => {
        li.setAttribute("style","list-style:circle")
        
    });
    
    imageElement.setAttribute("src", slideSelected.src)
    imageElement.setAttribute("alt", slideSelected.alt)
    imageElement.setAttribute("class", slideID)
    liTarget=document.querySelector(`#${slideID}`)
    liTarget.setAttribute("style","list-style:disc")
}

const dotContainer=document.querySelector("#dot-container")
slidesArray.forEach(slide => {
    let newLi = document.createElement("li")
    newLi.setAttribute("id", slide.id)
    newLi.addEventListener("click", collectID)
    dotContainer.appendChild(newLi)
});

const allLi=document.querySelectorAll("li")
// dot event handler
function collectID(event){
    let slideID = event.currentTarget.id
    let slideSelected = getSlide(slideID)
    displaySlide(slideSelected, slideID)
}

//buttons left and right
const buttonLeft = document.querySelector("button.left")
const buttonRight = document.querySelector("button.right")

buttonRight.addEventListener("click", displayNextOrPreviousSlide)
buttonLeft.addEventListener("click", displayNextOrPreviousSlide)

function displayNextOrPreviousSlide(event){
    let currentSlideShownID=imageElement.classList[0]
    let slideTargetID
    if (event.currentTarget.classList[0]==="right"){
        slideTargetID= parseInt(currentSlideShownID.split("-")[1]) + 1
    } else slideTargetID= parseInt(currentSlideShownID.split("-")[1]) - 1
    if (slideTargetID>slidesArray.length-1) {
        slideTargetID = 0
    }
    if (slideTargetID<0) {
        slideTargetID = slidesArray.length-1
    }
    let slideID = `slide-${slideTargetID}`
    displaySlide(getSlide(slideID),slideID)
}

function displayNextSlide(){
    currentSlideShownID=imageElement.classList[0]
    let slideTargetID= parseInt(currentSlideShownID.split("-")[1]) + 1
    if (slideTargetID>slidesArray.length-1) {
        slideTargetID = 0
    }
    if (slideTargetID<0) {
        slideTargetID = slidesArray.length-1
    }
    let slideID = `slide-${slideTargetID}`
    displaySlide(getSlide(slideID),slideID)
} 

const intervalID = window.setInterval(displayNextSlide, 5000)




