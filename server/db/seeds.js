use brewdog;
db.dropDatabase();

db.basket.insertMany([

    {
        name: "Wingman",
        tagline: "BY. YOUR. SIDE",
        price: "£5.00"
    },

    {
        name: "The Headliners",
        tagline: "CRAFTED. TO .PERFECTION",
        price: "£6.50"
    },

    {
        name: "Lost Lager",
        tagline: "CRISP.CLEAN.REFRESHING",
        price: "£7.10"
    }
]);