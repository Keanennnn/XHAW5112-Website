function calculateFees() {
    const courseCheckboxes = document.querySelectorAll('input[name="course"]:checked');
    const totalFeeElement = document.getElementById("totalFee");
    const errorMessage = document.getElementById("errorMessage");

    // If no courses are selected, display an error message
    if (courseCheckboxes.length === 0) {
        errorMessage.textContent = "Please select a course.";
        totalFeeElement.textContent = "0"; // Reset total fee
        return;
    } else {
        errorMessage.textContent = ""; // Clear error message
    }

    let totalFee = 0;
    courseCheckboxes.forEach(checkbox => {
        totalFee += parseFloat(checkbox.value);
    });

    totalFeeElement.textContent = totalFee;
}