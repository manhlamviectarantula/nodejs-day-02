const listItem = [
    {
        name: "San Pham 1",
        price: 100,
        description: "Mo ta san pham 1",
        image: "./images/product-1.jpg"
    },
    {
        name: "San Pham 2",
        price: 100,
        description: "Mo ta san pham 2",
        image: "./images/product-2.jpg"
    },
    {
        name: "San Pham 3",
        price: 100,
        description: "Mo ta san pham 3",
        image: "./images/product-3.jpg"
    }
];

const listItemE1 = document.getElementById('list-item');

listItem.forEach((el, index) => {

    const h1 = document.createElement('h1');
    h1.innerHTML = el.name;

    const description = document.createElement('p');
    description.innerText = el.description;

    const p = document.createElement('p');
    p.innerText = el.price;

    if(el.price > 50){
        p.style.color = 'red';
    }

    const item = document.createElement('div');
    item.style.display = 'inline-block'; 
    item.style.border = '1px solid black';
    item.style.padding = '20px';

    const img = document.createElement('img');
    img.src = el.image;
    img.width = 200; 
    img.height = 200; 

    item.appendChild(h1);
    item.appendChild(description);
    item.appendChild(p);
    item.appendChild(img);
    listItemE1.appendChild(item);
});

