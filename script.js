function showPaymentDetails() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    // Hide all sections first
    document.querySelectorAll('.payment-section').forEach(section => {
        section.classList.add('d-none');
    });
    
    // Show the selected section
    if (paymentMethod === 'mpesa_till') {
        document.getElementById('mpesa_till_section').classList.remove('d-none');
    } else if (paymentMethod === 'mpesa_paybill') {
        document.getElementById('mpesa_paybill_section').classList.remove('d-none');
    } else if (paymentMethod === 'bank_transfer') {
        document.getElementById('bank_transfer_section').classList.remove('d-none');
    }
}
