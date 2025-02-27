const params = new URLSearchParams(window.location.search);
const article = params.get('article');

const productData = [
    {
        "article": "LX-01",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Single Density",
        "type": "Low Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "assets\\productImages\\sh_p_001.png"
    },
    {
        "article": "CM-01",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Single Density",
        "type": "Low Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_002"
    },
    {
        "article": "SX-01",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Single Density",
        "type": "Low Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_004"
    },
    {
        "article": "HX-01",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Single Density",
        "type": "High Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_006"
    },
    {
        "article": "HX-02",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Single Density",
        "type": "Mid Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_005"
    },
    {
        "article": "CR-01 (Orange)",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Single Density",
        "type": "High Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_008"
    },
    {
        "article": "CR-01 (Black)",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Single Density",
        "type": "High Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_009"
    },
    {
        "article": "CR-02",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Single Density",
        "type": "Low Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_007"
    },
    {
        "article": "PS-23",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Single Density",
        "type": "Low Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_010"
    },
    {
        "article": "DC-01",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Double Density",
        "type": "Mid Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_011"
    },
    {
        "article": "DC-02",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Double Density",
        "type": "High Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_012"
    },
    {
        "article": "DC-03",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Double Density",
        "type": "Low Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_013"
    },
    {
        "article": "DC-03",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Double Density",
        "type": "Low Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_014"
    },
    {
        "article": "DC-03",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Double Density",
        "type": "Low Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_015"
    },
    {
        "article": "Nexon-01",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Single Density",
        "type": "Mid Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_016"
    },
    {
        "article": "Tiger",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Double Density",
        "type": "Low Ankle",
        "size": "6 to 10",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_017"
    },
    {
        "article": "LD-01 (Ladies)",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Single Density",
        "type": "Low Ankle",
        "size": "4 to 8",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_018"
    },
    {
        "article": "LD-02 (Ladies)",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Safety Shoes",
        "sole": "PVC injected, Oil & Acid Resistance, Anti Slip",
        "upper": "Synthetic Leather",
        "density": "Single Density",
        "type": "Low Ankle",
        "size": "4 to 8",
        "toe_cap": "Steel Toe",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_019"
    },
    {
        "article": "GM-01",
        "brand": "Datson Footwears",
        "certification": "ISO 9001:2015 Certified Company",
        "product_type": "Gumboot",
        "sole": "Hard PVC, Prevents Slip",
        "upper": "Soft and Flexible PVC",
        "height": "11 inch",
        "size": "7 to 10",
        "features": [
            "Breathable Leather Upper",
            "Oil and Fuel Resistant Sole",
            "Puncture Resistant Steel",
            "Anti-Static Shoe",
            "Water Repellent Uppers"
        ],
        "image": "../assets/productImages/sh_p_020"
    }
];

const product = productData.find(p => p.article === article);
const productDetails = document.getElementById('productDetails');

if (product) {
    document.querySelector(".flip-card-front").innerHTML = `
            <img src="${product.image}" alt="${product.article}">
        `;

    document.querySelector(".flip-card-back").innerHTML = `
            <h2>${product.article}</h2>
            <p><strong>Type:</strong> ${product.type}</p>
            <p><strong>Size:</strong> ${product.size}</p>
            <p><strong>Sole:</strong> ${product.sole}</p>
            <p><strong>Upper:</strong> ${product.upper}</p>
            <h3>Features:</h3>
            <ul>${product.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
            <a class="back-button" href="index.html">Back to Products</a>
        `;
} else {
    productDetails.innerHTML = `<p>Product not found!</p>`;
}
