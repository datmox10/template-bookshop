var sliders = document.querySelectorAll('.slider')

function slide(){
    setInterval(()=>{
        sliders.forEach((slide)=>{
            if(slide.classList.contains('active-fl')){
                slide.classList.remove('active-fl')
            }else{
                slide.classList.add('active-fl')
            }
        })
     
    },8000)
}
slide()

var bestProductArea = document.querySelector('.best-product_area');

var bestProduct = document.querySelectorAll('.best-product_menu-title');
var bestProductList = document.querySelectorAll('.best-product_list')

bestProduct.forEach((e,index) => {
    e.onclick = function(){
        bestProductList.forEach(element => {
            if(element.classList.contains('active')){
                element.classList.remove('active')
            }
        });
        bestProduct.forEach(e=>{
            if(e.classList.contains('active')){
                e.classList.remove('active')
            }
        })
        e.classList.add('active')
        var a = index
        document.getElementById(a).classList.add('active')
    }

});

var filters = document.querySelectorAll('.shop-bar_filter-item');
var shopProductListBar = document.querySelectorAll('.shop-product_list-bar');
filters.forEach((element,index) => {
    element.onclick = function(){
        filters.forEach(e=>{
            e.style.color='#000'
        })
        shopProductListBar.forEach(e=>{
            e.classList.remove('active')
        })
        element.style.color = '#f44344'
        document.getElementById(index).classList.add('active')
    }
});

var productDesRevs =document.querySelectorAll('.product-description-title');
var productDesRevContents = document.querySelectorAll('.product-description-review-content');
productDesRevs.forEach((element,index)=>{
    element.onclick = function(){
        productDesRevs.forEach(e=>{
            e.classList.remove('active-des-rev')
        })
        productDesRevContents.forEach(e=>{
            e.classList.remove('active')
        })
        element.classList.add('active-des-rev')
        var productDesRevItem = document.getElementById('#product-rev-'+index);
        productDesRevItem.classList.add('active')
    }
})
console.log(productDesRevItem)