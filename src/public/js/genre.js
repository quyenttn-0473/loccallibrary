document.addEventListener('DOMContentLoaded', () => {
    const minLength = 3;
    const errorElement = document.getElementById('genre-error');
    function onChange(event) {
        const input = event.target.value;
        if (input.length < minLength) {
            errorElement.style.display = 'block';
        } else {
            errorElement.style.display = 'none';
        }
    }
    document.getElementById('name').addEventListener('input', onChange);
});
