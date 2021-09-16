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