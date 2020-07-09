var vm = new Vue({
    el: "#app",
    data: {
        products:
            [
                {
                    id: "1593920341029",
                    title: "Amsterdam開放式L型沙發",
                    category: "沙發",
                    content: "Amsterdam系列有著銳利的直線和明晰的曲線。充斥著每一個細節的舒適和豪華，使Amsterdam成為起居室裡表達柔軟溫馨的完美沙發。 加上能提供全家人足夠的座位空間，這張L型沙發肯定是您客廳的主角。",
                    description: "",
                    imageUrl: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1598&q=80",
                    origin_price: 124054,
                    price: 185275,
                    enabled: true,
                    unit: "張",
                    options: {
                        start: 5,
                        comment:
                        {
                            customer: "Andy",
                            avatorImage: "https://randomuser.me/api/portraits/lego/5.jpg",
                            comment: "很棒",
                        }
                    }
                },
                {
                    id: "1593920342633",
                    title: "Vancouver 可延展桌",
                    category: "桌子",
                    content: "Vancouver採用木質頂面，沉重質感傳遞出其天然有機的理念。它的大桌面能夠讓多人圍桌而坐，是用餐空間中不可忽略的一景。",
                    description: "",
                    imageUrl: "https://images.unsplash.com/photo-1544207240-4193795530ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1514&q=80",
                    origin_price: 35000,
                    price: 32000,
                    enabled: true,
                    unit: "張",
                    options: {
                        start: 5,
                        comment:
                        {
                            customer: "Andy",
                            avatorImage: "https://randomuser.me/api/portraits/lego/5.jpg",
                            comment: "很棒",
                        }
                    }
                },
                {
                    id: "1593920345755",
                    title: "Adelaide單椅",
                    category: "椅子",
                    content: "Adelaide是一款優雅的小傑作，無論從哪個角度看都美貌不減，而且無比舒適。纖細的有機線條營造了輕盈有機外觀，邀請您坐下來欣賞精緻的丹麥設計。",
                    description: "",
                    imageUrl: "https://images.unsplash.com/photo-1520940115356-52e16be4351a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
                    origin_price: 65000,
                    price: 45000,
                    enabled: true,
                    unit: "張",
                    options: {
                        start: 5,
                        comment:
                        {
                            customer: "Andy",
                            avatorImage: "https://randomuser.me/api/portraits/lego/5.jpg",
                            comment: "很棒",
                        }
                    }
                }
            ],
        tempProduct: {}
    },
    methods: {
        openModal(isNew, item) {
            switch (isNew) {
                case 'edit':
                    this.tempProduct = Object.assign({}, item)
                    $("#addModal").modal("show");
                    break;
                case 'delete':
                    this.tempProduct = Object.assign({}, item)
                    $("#deleteModal").modal("show")
                    break;
                case 'new':
                    this.tempProduct = Object.assign({}, item)
                    $("#addModal").modal("show")
                    break;
            }
        },
        saveProduct() {
            //edit 
            if (this.tempProduct.id !== undefined) {
                this.products.forEach((element, i) => {
                    if (element.id === this.tempProduct.id) {
                        this.products[i] = this.tempProduct
                    }
                });
            }
            else {
                const id = new Date().getTime();
                this.tempProduct.id = id;
                this.products.push(this.tempProduct);
            }
            this.tempProduct = {};
            $("#addModal").modal("hide");
        },
        deleteProduct() {
            const id = this.tempProduct.id;
            this.products.forEach((element, i) => {
                if (element.id === this.tempProduct.id) {
                    this.products.splice(i, 1);
                    this.tempProduct = {};

                }
            });
            $("#deleteModal").modal("hide");
            alert("刪除成功！")
        }
    },
});

