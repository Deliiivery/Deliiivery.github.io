function addToOrder(itemName) {
    alert(itemName + " has been added to your order!");
}

document.getElementById('deliveryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you! Your order has been placed.');
});
