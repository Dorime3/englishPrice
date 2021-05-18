document.addEventListener('DOMContentLoaded', () => {

    const data = [
		[ [1, 6500, 2, 15000], [2, 12000, 4, 30000], [3, 18000, 7, 52500], [4, 24000, 12, 90000], [6, 35000, 16, 127500] ],
		[ [1, 7000, 2, 15000], [2, 13000, 5, 37500], [3, 19000, 10, 75000], [5, 30000, 13, 112500] ],
		[ [1, 7000, 3, 22500], [2, 13000, 8, 60000], [4, 24000, 11, 97500] ],
		[ [1, 7000, 5, 37500], [3, 18000, 10, 75000] ],
		[ [2, 12000, 5, 37500] ],
	];

    const start = document.getElementById('start'),
          end = document.getElementById('end'),
          dayThis = document.querySelector('.day_this'),
          moneyThis = document.querySelector('.money_this'),
          dayOther = document.querySelector('.day_other'),
          moneyOther = document.querySelector('.money_other'),
          compareRange = document.querySelector('.compare-range');

    const culcResult = () => {
        const startVal = parseInt(start.value); 
        const endVal = parseInt(end.value); 
        if (startVal === endVal) {
            showResult([0 ,0 ,0 ,0 ])
        } else {
            showResult(data[startVal][endVal - startVal- 1]);
        }
    }

    const showResult = arr => {
        const [dayT, moneyT, dayO, moneyO] = arr;
        dayThis.textContent = mounth(dayT);
        moneyThis.textContent = moneyT + ' руб.';
        dayOther.textContent = mounth(dayO);
        moneyOther.textContent = moneyO + ' руб.';
    }
    

    function mounth(n) {
        if (n == 1) {
            return n + ' месяц';
        }
        if (n < 5 && n > 0) {
            return n + ' месяца'
        } else {
            return n + ' месяцев';
        }
    }

    function handler() {
        if (start.value > end.value) {
            start.value = end.value = this.value;
        }
        culcResult();
    }

    start.addEventListener('change', handler);
    end.addEventListener('change', handler);

    compareRange.addEventListener('click', (e) => {
        if (e.target.classList.contains('change_range')) {
            const parent = e.target.closest('#started') || e.target.closest('#ended');
            const range = parent.querySelector('.range');
            range.value = e.target.getAttribute('data-level');
            handler.bind(range)();
            // console.log(e.target.getAttribute('data-level'));
        }
    })

})