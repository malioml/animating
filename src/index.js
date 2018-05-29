import styles from './styles.scss'

const trigger = document.body.querySelector('.trigger')
if (trigger) {
  trigger.addEventListener('click', () => {
    const toggleClass = 'clicked'
    if (trigger.classList.contains(toggleClass)) {
      trigger.classList.remove(toggleClass)
    } else {
      trigger.classList.add(toggleClass)
    }
  })
}
