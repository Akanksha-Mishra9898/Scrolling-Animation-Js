
gsap.to(".imagecontainer",{
    ease:Expo.easeInOut,
    width:"100%",
    delay:0.5,
    duration:2,
    stagger:2,
})

gsap.to(".text h1" ,{
    ease:Expo.easeInOut,
    stagger:2,
    top:0, 
})
gsap.to(".text h1" ,{
    ease:Expo.easeInOut,
    stagger:2,
    delay:2,
    top:"-100%", 

})