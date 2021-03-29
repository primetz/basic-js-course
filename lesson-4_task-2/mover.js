'use strict';

const mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int|null} Возвращает направление введенное пользователем.
     */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            const direction = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8 или 9), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9.');
                continue;
            }
            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {number} direction Направление движения игрока.
     * @returns {{x: number, y: number}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
            changed: false,
            step(x, y) {
                if ((this.x + x) >= 0 && (this.x + x) < config.colsCount && (this.y + y) >= 0 && (this.y + y) < config.rowsCount) {
                    this.x += x;
                    this.y +=y;
                    this.changed = true;
                } else {
                    this.changed = false;
                }
            }
        };
        switch (direction) {
            case 1:
                nextPosition.step(-config.step, config.step);
                break;
            case 2:
                nextPosition.step(0, config.step)
                break;
            case 3:
                nextPosition.step(config.step, config.step);
                break;
            case 4:
                nextPosition.step(-config.step, 0);
                break;
            case 6:
                nextPosition.step(config.step, 0);
                break;
            case 7:
                nextPosition.step(-config.step, -config.step);
                break;
            case 8:
                nextPosition.step(0, -config.step);
                break;
            case 9:
                nextPosition.step(config.step, -config.step);
                break;
        }
        return nextPosition;
    }
};
