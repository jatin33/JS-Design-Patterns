const image1 = document.getElementById('small-floof');
const image2 = document.getElementById('catty');
const cat1name = document.getElementById('cat1-name');
const cat2name = document.getElementById('cat2-name');
const cat1click = document.getElementById('cat1-clicks');
const cat2click = document.getElementById('cat2-clicks');
let img1Click = 0;
let img2Click = 0;

cat1name.innerText = 'Small floof';
cat2name.innerText = 'Catty';

image1.addEventListener('click', () => {
    img1Click++;
    cat1click.innerText = `Cat1 clicked for ${img1Click} times`;
});

image2.addEventListener('click', () => {
    img2Click++;
    cat2click.innerText = `Cat2 clicked for ${img2Click} times`;
});