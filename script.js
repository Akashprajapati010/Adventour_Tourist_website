gsap.to("#nav",{
    backgroundColor :"rgba(0,0,0,.955)",
    // color:"white",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
        
    }
    
})



//  gsap.to("#main",{
//       backgroundColor:"linear-gradient(360deg, rgb(23, 129, 185) 0%, rgb(43, 49, 55) 100%)",
//      scrollTrigger:{
//           trigger:"#main",
//           scroller:"body",
//           // markers:true,
//           start:"top -25%",
//           end:"top -70%",
//           scrub:2
//       }
//   })

//  function first(){
//      document.getElementById("img1").src="image/images (1).jpeg";
// }

//  function second(){
//      document.getElementById("img1").src="image/360_F_434936878_yp0ciikcw0jjax0mTFclNwugUgik8vlx.jpg";
//  }

//  function third(){
//      document.getElementById("img1").src="image/Stone-chariot-wheel-Konark-Surya-Deula-India.jpg";
//  }
//  function forth(){
//      document.getElementById("img1").src="image/Konarka_Temple.jpg";
//  }
// //  setInterval(first,2000);
//  setInterval(second,3000);
//  setInterval(third,6000);
//  setInterval(forth,9000);