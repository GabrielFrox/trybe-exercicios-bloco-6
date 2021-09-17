// Estados
const getStates = document.getElementById('estados');
const statesArray = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PR', 'PB', 'PA', 'PE', 'PI', 'RN', 'RS', 'RJ', 'RO', 'RR', 'SC', 'SE', 'SP', 'TO']

function addStates() {
  for (let i in statesArray) {
    const newState = document.createElement('option');
    newState.innerText = statesArray[i];
    getStates.appendChild(newState)
  }
}
addStates();
// --------

// Modal
// let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
// let saveButton = document.getElementById('buttonSave')

// saveButton.addEventListener('click', () => {
//   myModal.show()
// })
// --------

// Data
let dataInput = document.getElementById('data');
dataInput.DatePickerX.init({
  format: 'dd/mm/yyyy',
  weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
  shortMonthLabels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
})
// --------

// Validações 

const saveButton = document.getElementById('buttonSave');
saveButton.addEventListener('click', () => {
  validation.init('#myForm', {
    events: ["click"],
  });
  validation.show('#myForm', 'errado')
})
