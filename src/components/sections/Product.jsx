

import Item from "./Items";
function Product() {
    const itemsData = [
        {
            name: "Artisan Bread",
            description: "Savor the aroma and taste of our artisan bread, baked with love and perfection. From classic baguettes to specialty loaves, each bite is a journey of taste and texture.",
            photoName: "./assets/product1.png",
        },
        {
            name: "Decadent Pastries",
            description: "Savor the richness and delicate texture of our decadent pastries, crafted with precision and care. From buttery croissants to indulgent éclairs, each bite is a journey of flavor and delight.",
            photoName: "./assets/product2.jpg",
        },
        {
            name: "Custom Cakes",
            description: "Delight in the elegance and flavor of our custom cakes, created with precision and care. From unique designs to bespoke themes, each bite is a testament to our craftsmanship and creativity.",
            photoName: "./assets/product3.jpg",
        },
    ];

    return (
        <>
            <div className="section-space-inner"></div>
            <div className="product container">
                <h2 className="heading">Products</h2>
                <div className="section-space-inner"></div>
                <Item items={itemsData} />
            </div>
            <div className="section-space-inner"></div>
        </>
    );
}

export default Product;
