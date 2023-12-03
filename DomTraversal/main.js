
$(document).on("click", ".generator", function() {
  console.log($(this).closest(".computer").find(".processor").attr("id"));
});



$(document).on("click", ".generator", function() {
  let processorData = $(this).closest(".computer").data("id");
  let processorID = [];
  processorID.push({ cmp_id: processorData });
  console.log(processorID);
});



$(document).on("click", ".generator", function() {
  console.log($(this).closest(".computer").find(".BUS").text());
});


$(document).on("click", ".validator", function() {
  console.log($(this).closest(".computer").find(".processor .generator").text());
});


$(document).on("click", ".validator", function() {
  console.log($(this).closest(".computer").find(".MB").text());
});


$(document).on("click", ".validator", function() {
  console.log($(this).closest(".computer").find(".processor .QR:eq(0)").text());
  console.log($(this).closest(".computer").find(".processor .QR:eq(1)").text());
});




