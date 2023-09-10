// Increment quantity
$('.increment').click(function() {
    var quantityElement = $(this).siblings('.quantity-value');
    var quantity = parseInt(quantityElement.text());
    quantityElement.text(quantity + 1);

    updateTotalPrice();
  });

  // Decrement quantity
  $('.decrement').click(function() {
    var quantityElement = $(this).siblings('.quantity-value');
    var quantity = parseInt(quantityElement.text());
    if (quantity > 0) {
      quantityElement.text(quantity - 1);
    }

    updateTotalPrice();
  });

  // Delete item
  
$('.delete-button').click(function() {
var cartItem = $(this).closest('.cart-item');

// Display a confirmation dialog
var confirmDelete = confirm("Are you sure you want to delete ?");

if (confirmDelete) {
  cartItem.remove();
  updateTotalPrice();
}
});

  // Like item
  $('.like-button').click(function() {
    $(this).toggleClass('active');
  });

  // Update total price
  function updateTotalPrice() {
    var totalPrice = 0;
    $('.cart-item').each(function() {
      var quantity = parseInt($(this).find('.quantity-value').text());
      var price = parseFloat($(this).find('p').text().replace('Price: $', ''));
      totalPrice += quantity * price;
    });

    $('#total-price').text(totalPrice.toFixed(2));
  }