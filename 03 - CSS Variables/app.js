const inputEl = document.querySelectorAll('.controls input')

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputEl.forEach(input => input.addEventListener('change', handleUpdate))
inputEl.forEach(input => input.addEventListener('mousemove', handleUpdate))