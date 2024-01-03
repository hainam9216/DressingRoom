import showUserInf from './../models/showUI.js';
import Api from './../service/api.js';

const showUI = new showUserInf()
const api = new Api()

let getEle = (id) => document.getElementById(id)

//Lấy dữ liệu
function GetData() {
    return api.fetchData()
        .then(result => {
            return result;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error; // Propagate the error
        });
}

//Hiện thanh chọn
async function showListBar() {
        const data = await GetData();
        showUI.showBar(data);
}
showListBar()

//Hiện sp theo thanh
async function showProduct() {
        const data = await GetData();
        showUI.showProductByType(data, "tabTopClothes")
        //Lọc sp theo thanh
        getEle("tabTopClothes").addEventListener("click", function() {
            showUI.showProductByType(data, "tabTopClothes");
        });
    
        getEle("tabBotClothes").addEventListener("click", function() {
            showUI.showProductByType(data, "tabBotClothes");
        });
    
        getEle("tabShoes").addEventListener("click", function() {
            showUI.showProductByType(data, "tabShoes");
        });
    
        getEle("tabHandBags").addEventListener("click", function() {
            showUI.showProductByType(data, "tabHandBags");
        });
    
        getEle("tabNecklaces").addEventListener("click", function() {
            showUI.showProductByType(data, "tabNecklaces");
        });
    
        getEle("tabHairStyle").addEventListener("click", function() {
            showUI.showProductByType(data, "tabHairStyle");
        });
    
        getEle("tabBackground").addEventListener("click", function() {
            showUI.showProductByType(data, "tabBackground");
        });
        
        //thêm eventlistener cho TryClothes lấy id product
        document.getElementById("ProductShowcase").addEventListener('click', function (event) {
            const target = event.target;
            if (target.tagName.toLowerCase() === 'button' && target.classList.contains('btn-primary')) {
                const productId = target.getAttribute('id');
                TryClothes(productId);
            }
        });

}
showProduct()

//Thử đồ
async function TryClothes(productId) {
    const data = await GetData();
    showUI.PutOnClothes(data,productId)
}