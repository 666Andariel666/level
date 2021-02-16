const product = {
    plainBurger:{
        name: 'Гамбургер простой',
        price: 10000,
        kcall: 500,
        amount:0,
        Summ: function () {
            return this.price * this.amount;
        },
        Kcall: function () {
            return this.kcall * this.amount;
        }
    },
    
    freshBurger:{
        name: 'Гамбургер Fresh',
        price: 20500,
        kcall: 700,
        amount:0,
        Summ: function () {
            return this.price * this.amount;
        },
        Kcall: function () {
            return this.kcall * this.amount;
        }
    },
    
    freshCombo:{
        name: 'Fresh Combo',
        price: 31900,
        kcall: 1000,
        amount:0,
        Summ: function () {
            return this.price * this.amount;
        },
        Kcall: function () {
            return this.kcall * this.amount;
        }
    }
}

const extraProduct = {
    doubleMayonnaise:{
        name: 'Двойной майонез',
        price: 1000,
        kcall: 130,
        
    },
    lettuce:{
        name: 'Салатный лист',
        price: 500,
        kcallL: 20
    },
    
    cheese:{
        name: 'Сыр',
        price: 2000,
        kcall: 30
    }
}

const btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
      checkExtraProduct = document.querySelectorAll('.main__product-checkbox');
      
for (let i = 0; i < btnPlusOrMinus.length; i++) {
    btnPlusOrMinus[i].addEventListener('click', function () {
        plusOrMinus(this);
    })
    
}

function plusOrMinus(elem) {
    const parent = elem.closest('.main__product'),
    parentId = parent.getAttribute('id'),
    out = parent.querySelector('.main__product-num'),
    price = parent.querySelector('.main__product-price span'),
    kcall = parent.querySelector('.main__product-kcall span'),
    elementDate = elem.getAttribute('data-symbol');
    
    if (elementDate == '+' && product[parentId].amount < 10) {
        product[parentId].amount++;
        console.log(product[parentId]);
    }else if(elementDate == '-' && product[parentId].amount > 0){
        product[parentId].amount--;
    }
    out.innerHTML = product[parentId].amount;
    price.innerHTML = product[parentId].Summ();
    kcall.innerHTML = product[parentId].Kcall();
    
    
}
let level = document.querySelector('.header__timer-extra');
function levelTimer() {
    if (level.innerHTML <= 29) {
        level.innerHTML++;
        level.style = `
        color: red;
        transition: color 1s;

        `
        setTimeout(levelTimer, 50)
    }else if(level.innerHTML <= 59){
        level.innerHTML++;
        level.style = `
        color: rgb(58%, 96%, 77%);
        transition: color 1s;

        `
        setTimeout(levelTimer, 60)
    }else if(level.innerHTML <= 79){
        level.innerHTML++;
        level.style = `
        color: rgb(84%, 62%, 56%);
        transition: color 1s;

        `
        setTimeout(levelTimer, 70)
    }else if(level.innerHTML <= 89){
        level.innerHTML++;
        level.style = `
        color: rgb(47%, 6%, 37%);
        transition: color 1s;

        `
        setTimeout(levelTimer, 100)
    }else if(level.innerHTML <= 99){
        level.innerHTML++;
        level.style = `
        color: rgb(94%, 89%, 35%);
        transition: color 1s;
        `
        setTimeout(levelTimer, 150)
    }else{
        level.style =
        `animation: blink 2s linear infinite;`
    }
    
}
levelTimer();