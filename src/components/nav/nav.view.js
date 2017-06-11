import navTemplate from './nav.hbs';

class NavView {
    constructor(eventEmitter, root, { countOfIndex, countOfItem }) {
        this.root = document.getElementById(root);
        this._eventEmitter = eventEmitter;

        this.DEFAULT_INDEX = 1;
        this.curIdx = this.DEFAULT_INDEX;
        this.IDX_COUNT = countOfIndex;
        this.TODO_COUNT = countOfItem;

        this._init();
    }

    onClickIndex(e) {
        e.preventDefault();
        this.curIdx = parseInt(e.target.textContent);
        this._eventEmitter.emit('buildNav', {
            index: this.curIdx,
            max: this.TODO_COUNT
        });
        this.controlNav();
    }

    onClickNavBtn(e, changeCurIdx) {
        e.preventDefault();
        if (e.target.parentNode.classList.contains('disabled')) {
            return;
        }
        this.curIdx = changeCurIdx();
        this._eventEmitter.emit('buildNav', {
            index: this.curIdx,
            max: this.TODO_COUNT
        });
        this.controlNav();
    }

    renderNav({maxIndex, pages} = { num: 1, maxIndex: 1 }) {
        this._MAX = maxIndex;
        this.root.innerHTML = navTemplate({ pages: pages });
        this.controlNav();
    }

    controlNav() {
        this.navSelected();
        this.ableCheck('prevBtn', this.curIdx === this.DEFAULT_INDEX);
        this.ableCheck('nextBtn', this.curIdx === this._MAX);
        this.ableCheck('prevPageBtn', this.curIdx <= this.IDX_COUNT);
        const isAbleToNext = parseInt((this.curIdx - 1) / this.IDX_COUNT + 1) * this.IDX_COUNT;
        this.ableCheck('nextPageBtn', (isAbleToNext > this._MAX));
    }

    navSelected() {
        const pagesNav = document.getElementsByClassName('page-nav');
        Array.from(pagesNav).forEach(target => {
            target.parentNode.classList.remove('active');
            if (parseInt(target.textContent) === this.curIdx) {
                target.parentNode.classList.add('active');
            }
        });
    }

    ableCheck(target, condition) {
        const isAble = document.getElementById(target).parentNode.classList;
        (condition) ? isAble.add('disabled') : isAble.remove('disabled');
    }

    _init() {
        this.root.addEventListener('click', e => {
            const target = e.target;
            if (target.matches('.page-nav')) {
                this.onClickIndex(e);
            } else if (target.matches('#prevBtn')) {
                this.onClickNavBtn(e, () => this.curIdx - this.DEFAULT_INDEX);
            } else if (target.matches('#nextBtn')) {
                this.onClickNavBtn(e, () => this.curIdx + this.DEFAULT_INDEX);
            } else if (target.matches('#prevPageBtn')) {
                this.onClickNavBtn(e, () => {
                    const toPrevPage = (this.curIdx - 1) % this.IDX_COUNT + this.IDX_COUNT;
                    return this.curIdx - toPrevPage;
                });
            } else if (target.matches('#nextPageBtn')) {
                this.onClickNavBtn(e, () => {
                    const toNextPage = this.IDX_COUNT - ((this.curIdx - 1) % this.IDX_COUNT);
                    return this.curIdx + toNextPage;
                });
            }
        });
    }
}

export default NavView;
