const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

// 给about添加listenr的原因是，about是parent node，每一个button是child node
// 即使点击的是child node，也能被监听到
about.addEventListener('click', function (e){
    console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if (id){
        // remove active from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add('active');
        });

        // hide other articles
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});