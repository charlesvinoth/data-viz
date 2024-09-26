const Ripple = {
  mounted(el: HTMLElement) {
    el.addEventListener('click', createRipple)
  },
  unmounted(el: HTMLElement) {
    el.removeEventListener('click', createRipple)
  },
}

function createRipple(event: MouseEvent) {
  const el = event.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()

  const existingRipple = el.querySelector('.ripple')
  if (existingRipple) {
    existingRipple.remove()
  }

  const diameter = Math.max(rect.width, rect.height)
  const radius = diameter / 2

  const ripple = document.createElement('span')
  ripple.style.width = ripple.style.height = `${diameter}px`
  ripple.style.left = `${event.clientX - rect.left - radius}px`
  ripple.style.top = `${event.clientY - rect.top - radius}px`
  ripple.classList.add('ripple')

  el.appendChild(ripple)
}

export default Ripple
