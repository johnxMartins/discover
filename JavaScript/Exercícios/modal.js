const buttonOpenModal = document.getElementById('openModal') // Pegando o button

const modalWrapper = document.querySelector('.modal-wrapper') // Adicionar e remover uma classe

buttonOpenModal.onclick = function () {
  modalWrapper.classList.remove('ivisible')
}

document.addEventListener('keydown', function (event) {
  console.log(event)
  const isEscKey = event.key === 'Escape'

  if (isEscKey) {
    modalWrapper.classList.add('invisible')
  }
})
