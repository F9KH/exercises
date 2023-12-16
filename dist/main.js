function checkPrice() {
    let input = $("#productName").val();

    $.get(`/priceCheck/${input}`, function() {
        $("body").append(`<div> ${product.price}</div>`);
    });
}
// import $ from 'jquery';
// $(document).ready(function checkPrice() {
//     let input = $("#productName").val();
//     $.get(`/priceCheck/${input}`, function() {
//         $("body").append(`<div> ${productName}: ${product.price}</div>`);
//     });
// });

