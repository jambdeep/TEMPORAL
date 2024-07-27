// let tl = gsap.timeline(); //create the timeline
// tl.from(".forma1", { x: 100, yoyo:true, repeat:2 }) //start sequencing
//   .to(".forma2", { rotation:10, ease: "elastic", yoyo:true, repeat:3 })
//   .to(".forma3", { rotation: 180, y:150, yoyo:true, repeat:8});

// Ejemplo
// let texto = "Este es un  texto  con muchos espacios.";
// let sinEspacios = texto.replace(/\s/g,'1');

// console.log(sinEspacios)
// console.log(texto)

const texta01 = document.querySelector('.text-1');
texta01.innerHTML = texta01.textContent.replace(/\S/g,"<span>$&</span>");

// let t1 = gsap.timeline({repeat:-1, repeatDelay:1, yoyo: true})
// t1.to(".text-1 span", { x: 400, scale:2, y:-50, rotation:"random(-10:10)", duration:3, color:'gray'})
//   .to(".text-1 span", { x: -400, scale:2, y:-50, rotation:"random(-40:40)", duration:3, stagger:{from: "random", amount: 5}})

//   .to(".text-1 span", {duration: 1,scale: 10,
//       y: 10,        
//       ease: "power2.in",
//       opacity: 0,
//       stagger: {
//         // grid: [7,15],
//         from: "random",
//         amount: 1,      
//       }
//     })

let tl = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo: true})
tl.to(".text-1 span", {y:  10, duration: 0, opacity:0, scale:5})
  .to(".text-1 span", {y:   0, duration: 2, opacity:1, scale:1, ease: "power3.inOut", stagger:{from: "edges", amount: 2}})
  // .to(".text-1 span", {x:-900, duration: 1, ease: "bounce.out", opacity: 0, stagger:{from: "random", amount: 1.5}})
  // .to(".text-1 span", {x: 900, duration: 1, opacity: 0})
  .to(".text-1 span", {x:   0, duration: 1, ease: "bounce.in", opacity: 1, stagger:{from: "random", amount: 1.5}});