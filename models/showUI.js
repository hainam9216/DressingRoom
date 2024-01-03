import Api from "../service/api.js";

class showUserInf {
    constructor() {
        this.api = new Api
    }
    //Method
    //show List bar
    showBar(data) {
        let TabContent = '';
        //Kiem tra undefine
        if (data && data.navPills) {
            for (let i = 0; i < data.navPills.length; i++) {
                const tab = data.navPills[i];
                if (i === 0) {
                    TabContent += `
                    <li class="nav-item">
                        <a id = "${tab.tabName}" class="nav-link active" data-toggle="tab" href="#${tab.type}">${tab.showName}</a>
                    </li>
                `;
                } else {
                    TabContent += `
                    <li class="nav-item">
                        <a id = "${tab.tabName}" class="nav-link" data-toggle="tab" href="#${tab.type}">${tab.showName}</a>
                    </li>
                `;
                }
            }
            document.getElementById("ListBar").innerHTML = TabContent;
        }
    }
    //Show product
    
    showProductByType(data, tabID){
        // khởi tạo dữ liệu
        let content = ""
        let tabType
        if (data && data.navPills) {
            //Lấy Tab type từ Tab id
            for (const tab of data.navPills){
                if(tab.tabName === tabID){
                    tabType = tab.type
                }
            }
        }
        if (data && data.tabPanes && tabType) {
            //Lọc lấy sản phẩm có cùng type vào arrSP
            const arrSP = data.tabPanes.filter((product) => product.type === tabType);
            //In san pham
            content += `
                    <div id="${tabType}" class="container tab-pane active row mx-auto">
                    `
            for (const SpecProduct of arrSP) {
                    content += `
                        <div class="card">
                            <img class="card-img-top" src="${SpecProduct.imgSrc_jpg}" alt="">
                            <div class="card-body text-center">
                                <h4 class="card-title">${SpecProduct.name}</h4>
                                <button id="${SpecProduct.id}" class="btn btn-primary">Thử đồ</button>
                            </div>
                        </div>
                            `;
            }
            content += `</div>`
        }
        document.getElementById("ProductShowcase").innerHTML = content
    }

    //TryClothe
    PutOnClothes(data,ProductID){
        //Lấy ds chứa ProductID
        const srcProduct = data.tabPanes.filter((product) => product.id === ProductID);
        //chuyển về dạng Object
        const productDataObject = srcProduct[0];
        //Lấy dữ liệu src png
        const pngSource = productDataObject.imgSrc_png
        const ProductType = productDataObject.type
        //Đưa dữ liệu ra nhân vật
        if (ProductType === "topclothes") {
        document.getElementsByClassName("bikinitop")[0].innerHTML = `
        <img style="width: 250px; position: absolute; z-index: 2 !important" src="${pngSource}" alt="">
        `
        } else if(ProductType === "botclothes"){
            document.getElementsByClassName("bikinibottom")[0].innerHTML = `
            <img style="width: 250px;" src="${pngSource}" alt="">
            `
        } else if(ProductType === "shoes"){
            document.getElementsByClassName("feet")[0].innerHTML = `
            <img src="${pngSource}" alt="">
            `
        } else if(ProductType === "handbags"){
            document.getElementsByClassName("handbag")[0].innerHTML = `
            <img src="${pngSource}" alt="">
            `
        } else if(ProductType === "necklaces"){
            document.getElementsByClassName("necklace")[0].innerHTML = `
            <img src="${pngSource}" alt="">
            `
        } else if(ProductType === "hairstyle"){
            document.getElementsByClassName("hairstyle")[0].innerHTML = `
            <img src="${pngSource}" alt="">
            `
        } else if(ProductType === "background"){
            document.getElementsByClassName("background")[0].innerHTML = `
            <img style="width:900px; height: 1500px;" src="${pngSource}" alt="">
            `
        } 
    }
}

export default showUserInf
