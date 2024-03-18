function smoothScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

smoothScroll();

function mouseeAnimaation() {
  // var gola = document.querySelector("#gola")
  window.addEventListener("mousemove", (e) => {
    gsap.to("#gola", {
      // duration: 0.2,
      x: e.clientX,
      y: e.clientY,
    });
  });
}

mouseeAnimaation();



var tl = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page2",
    start: "-20% 85%",
    end: "-20% 65%",
    // markers: true,
    scrub: 1,
  },
});

tl.to(
  "#fram1 img",
  {
    transform: "scale(1)",
    objectPosition: "0% 0%",
  },
  "same"
);

tl.to(
  "#fram2 img",
  {
    transform: "scale(1)",
    objectPosition: "center",
  },
  "same"
);

var tldate = gsap.timeline({
  scrollTrigger: {

  }
})

gsap.to("#page6-5 svg", {
  duration: 1,
  yoyo: true,
  repeat: -1,
  pin: true,
  y: 30,
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page8",
    start: "0% 75%",
    end: "0% 40%",
    // markers: true,
    scrub: 1,
  },
});

tl2.to("#jholo", {
  scale: 1.3,
});


var tl4 = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page2",
    start: "0% 25%",
    end: "0% 5%",
    // markers: true,
    scrub: 1,
  },
});

tl4.to("#one h1",{
  transform: `translateY(200%)`,
  duration:2,
},"same")

tl4.to("#two h1",{
  transform: `translateY(-100%)`,
  duration:1.5,
},"same")

tl4.to("#three h1",{
  transform: `translateY(-100%)`,
  duration:1,
},"same")

tl4.to("#four h1",{
  transform: `translateY(-100%)`,
  duration:.5,
},"same")

var loader = document.querySelector("#loader");
const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
loader.addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("loadimage");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";
    var image = document.createElement("img");
      image.setAttribute("src","images/image-5.jpg")
      div.appendChild(image);
    document.body.appendChild(div);
   
    setTimeout(() => {
      div.remove();
    }, 500);
  }, 50)
);


var timer = document.querySelector("#no h1");
var grow = 0
setInterval(() => {
  grow++
  if(grow <= 100) {
    timer.innerHTML = grow
  }else{
    timer.innerHTML + grow
  }
},15);

var tl3 = gsap.timeline();
tl3.to("#loader",{
  delay:.3,
  duration:1,
})

tl3.to("#loader",{
  display: "none",
})


var tl5 = gsap.timeline({
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page69",
    start: "0% 100%",
    end: "0% 50%",
    // markers: true,
    scrub: 1,
    pin:true,
  },
});

tl5.to("nav h4",{
  display:"none"
})

tl5.to("#mid1",{
  width:"20vw",
  height:"20vw",
  top: "20%",
  left:"50%"
},"same")

tl5.to("#middle1 p",{
  marginTop: "10vh"
},"same")

gsap.to('#fimg', {
  clipPath: "polygon(0 0, 100% 0, 58% 70%, 58% 100%, 42% 100%, 42% 70%)",
  scrollTrigger: {
    trigger: "#fimg",
    scroller: '#main',
    // markers: true,
    start: 'top 120%',
    end: 'top 80%',
    scrub: true
  }
})
