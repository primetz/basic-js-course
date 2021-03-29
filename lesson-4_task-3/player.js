'use strict';

/**
 * Объект игрока
 * @property {number} questionsAsked - Количество заданных вопросов.
 * @property {number} rightAnswers - Количество правильных ответов.
 * @property {number} winningAmount - Деньги за правильные ответы.
 * @property {number} win - Выигрыш - несгораемая сумма.
 */
const player = {
    questionsAsked: 0,
    rightAnswers: 0,
    winningAmount: 0,
    win: 0,

    /**
     * Метод для проверки на несгораемую сумму, если дошел до нее - записывает сумму в выигрыш
     * @param {Array} fireproof - массив с несгораемыми суммами.
     */
    checkWin(fireproof) {
        if (fireproof.includes(this.winningAmount)) {
            this.win = this.winningAmount;
        }
    }
};
