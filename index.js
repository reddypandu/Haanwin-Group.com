$(document).ready(function(){
   $(".icon").click(function(){
   $(".header").addClass("responsive");
   $(".span").click(function(){
      $(".header").removeClass("responsive");
   });
   });
});

const sel=document.querySelector(".sel");
firstImg=sel.querySelectorAll(".wrapper img")[0];
arrowIcons=document.querySelectorAll(".wrapper i");


let isDragStart=false, isDragging=false,prevPageX,prevScrollLeft;


const showHideIcons=()=>{
   //showing and hiding prev/next icon according to sel scroll left value
   let scrollWidth=sel.scrollWidth-sel.clientWidth;//getting max scroll width
   arrowIcons[0].style.display=sel.scrollLeft==0?"none":"block";
   arrowIcons[1].style.display=sel.scrollLeft==scrollWidth?"none":"block";
}

arrowIcons.forEach(icon=>{
   icon.addEventListener("click",()=>{
      let firstImgWidth=firstImg.clientWidth+14;//getting first img width & adding 14 margin value
      //if clicked icon is left,reduce width value from the carousel scroll left else add to is right
      sel.scrollLeft += icon.id == "left"? -firstImgWidth: firstImgWidth;
      setTimeout(()=>showHideIcons(),60);//calling showHideIcons after 60ms
   });
})

const autoSlide=()=>{
   positionDiff=Math.abs(positionDiff);
   let firstImgWidth= firstImg.clientWidth+14;
   //getting differance value that needs to add or reduce from sel left to take middle img center
   let valDifference=firstImgWidth-positionDiff;
   
   if(sel.scrollLeft>prevScrollLeft){
      returnsel.scrollLeft+=positionDiff>firstImgWidth/4?valDifference:-positionDiff;
   }
   //if user is scrolling to the left
  sel.scrollLeft -= positionDiff>firstImgWidth/4?valDifference:-positionDiff;
}



 const dragStart=(e)=>{
   //updating global variables value on mouse event
   isDragStart=true;
   prevPageX=e.pageX || e.touches[0].pageX;
   prevScrollLeft=sel.scrollLeft;
 }

const dragging =(e)=>{
   //scrolling images/carousel to left according to mouse pointer
   if(!isDragStart) return;
   e.preventDefault();
   isDragging=true;
   sel.classList.add("dragging");
   let positionDiff=(e.pageX || e.touches[0].pageX)-prevPageX;
   sel.scrollLeft=prevScrollLeft-positionDiff;
   showHideIcons();
}

const dragStop =()=>{
   isDragStart=false;
   sel.classList.add("dragging");

   if(isDragging) return;
   isDragStart=false;
   autoSlide();
}

sel.addEventListener("mousedown",dragStart);
sel.addEventListener("touchstart",dragStart);


sel.addEventListener("mousemove",dragging);
sel.addEventListener("touchsmove",dragging);


sel.addEventListener("mouseup",dragStop);

sel.addEventListener("mouseleave",dragStop);
sel.addEventListener("touchend",dragStop);

/*let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})*/

const pc=[...document.querySelectorAll(".product-container")];
const pB=[...document.querySelectorAll(".pre-btn")];
const nB=[...document.querySelectorAll(".nxt-btn")];



pc.forEach((item,i)=>{
    let cD=item.getBoundingClientRect();
    let cW=cD.width;

pB[i].addEventListener("click",()=>{
    item.scrollLeft -=cW;
})
nB[i].addEventListener("click",()=>{
    item.scrollLeft +=cW;
})
});


//success stories coarusel
const pC=[...document.querySelectorAll(".product-card-success")];
const pb=[...document.querySelectorAll(".pre-btn-success")];
const nb=[...document.querySelectorAll(".nxt-btn-success")];


pC.forEach((item,i)=>{
    let cD=item.getBoundingClientRect();
    let cW=cD.width;

pb[i].addEventListener("click",()=>{
    item.scrollLeft -=cW;
})
nb[i].addEventListener("click",()=>{
    item.scrollLeft +=cW;
})
});

//gallery

/*function pandu(){
   document.querySelector(".hiii").style.width="50%";
  document.querySelector(".close").style.display="block";
}
function close(){
   document.body.style.display="none";
}