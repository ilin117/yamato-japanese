let menuData = {};

$(document).ready(function () {
    $.ajax({
        url: "menu_items.json",
        type: "GET",
        dataType: "json",
    }).done(function (data) {
        menuData = data;

        data["Appetizers"].forEach((item) => {
            $(".appetizers").append(
                `<p>${item.id}. ${item.name}......$${item.price}</p>`
            );
        });
        data["Bento Box"].forEach((item) => {
            $(".bento-box").append(
                `<p>${item.id}. ${item.name}......$${item.price}</p>`
            );
        });
        data["Side Orders"].forEach((item) => {
            $(".side-orders").append(
                `<p>${item.id}. ${item.name}......$${item.price}</p>`
            );
        });
        data["Kids Menu"].forEach((item) => {
            $(".kids-menu").append(
                `<p>${item.id}. ${item.name}......$${item.price}</p>`
            );
        });
        data["Soups & Salads"].forEach((item) => {
            $(".soups-salads").append(
                `<p>${item.id}. ${item.name}......$${item.price}</p>`
            );
        });
        data["Imperial Dinner"].forEach((item) => {
            $(".imperial-dinner").append(
                `<p>${item.id}. ${item.name}......$${item.price}</p>`
            );
        });
    });
});
