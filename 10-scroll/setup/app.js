// Element.getBoundingClientRect() method returns the size of an element
// and its position relative to the viewport.

// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
// offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

//方式2
navToggle.addEventListener("click", function (){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    console.log(containerHeight);
    const linksHeight = links.getBoundingClientRect().height;
    console.log(linksHeight);

    if (containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});


//方式1
// navToggle.addEventListener("click", function (){
//     linksContainer.classList.toggle("show-links")
// })


// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener('scroll', function (){
    // console.log(window.scrollY);
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }

    if (scrollHeight > 700){
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link){
    link.addEventListener("click", function (e){
        e.preventDefault();

        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        console.log(id);
        const element = document.getElementById(id);

        // calculate the heights
        // navbar是 #nav
        const navHeight = navbar.getBoundingClientRect().height;

        // linksContainer 是.links-container
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");

        let position = element.offsetTop - navHeight;
        console.log("position = ");
        console.log(position);

        if (!fixedNav){
            position = position - navHeight;
        }

        // 小屏幕的时候 navbar展开，此时上面计算position时减去的navHeight包含了containerHeight（链接的高度）
        // 定位时会关闭navbar，因此相当于减多了，需要把链接的高度加回来
        if (navHeight > 82){
            position = position + containerHeight;
        }

        console.log(position);
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});