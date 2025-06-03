const number = document.getElementById('number')
const buttonAdd = document.getElementById('buttonPlus')
const buttonMinus = document.getElementById('buttonMinus')
const buttonTwentyMinus = document.getElementById('buttonTwentyMinus')
const buttonTenMinus = document.getElementById('buttonTenMinus')
const buttonTenPlus = document.getElementById('buttonTenPlus')
const buttonTwentyPlus = document.getElementById('buttonTwentyPlus')
const toNum = () => Number(number.textContent)

function observer() {
  const listeners = []

  return {
    notifyAll(...args) {
      listeners.forEach((fn) => fn(...args))
    },
    subscribe(fn) {
      listeners.push(fn)
    },
      subscribers: listeners
  }
}

const { notifyAll, subscribe } = observer()

subscribe((value) => {
  const isValidOnSubstractTwentee = value - 20 < 0;

  if(isValidOnSubstractTwentee) {
    buttonTwentyMinus.setAttribute("disabled", "");
    return;
  }

  buttonTwentyMinus.removeAttribute("disabled", "");
})

subscribe((value) => {
  const isValidOnSubstractTeen = value - 10 < 0;

  if(isValidOnSubstractTeen) {
    buttonTenMinus.setAttribute("disabled", "");
    return;
  }

  buttonTenMinus.removeAttribute("disabled", "");
})

subscribe((value) => {
  const isValidOnSubstractOne = value - 1 < 0;

  if(isValidOnSubstractOne) {
    buttonMinus.setAttribute("disabled", "");
    return;
  }

  buttonMinus.removeAttribute("disabled", "");
})

function increaseTime(time = 0) {
  const total = toNum() + time
  notifyAll(total);
  number.textContent = total;
};

function decrementTime(time = 0) {
  const total = toNum() - time
  notifyAll(total);
  number.textContent = total;
}

buttonAdd.addEventListener('click', e => {
    increaseTime(1)
});

buttonMinus.addEventListener('click', e => {
    decrementTime(1)
});

buttonTwentyMinus.addEventListener('click', e => {  
    decrementTime(20)
});

buttonTenMinus.addEventListener('click', e => {
    decrementTime(10);
});

buttonTenPlus.addEventListener('click', e => {
    increaseTime(10);
});

buttonTwentyPlus.addEventListener('click', e => {
    increaseTime(20);
});

notifyAll(toNum());