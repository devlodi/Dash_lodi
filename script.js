document.getElementById('searchBox').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const buttons = document.querySelectorAll('#appContainer button');

    buttons.forEach(function(button) {
        const text = button.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            button.style.display = '';
        } else {
            button.style.display = 'none';
        }
    });
});
