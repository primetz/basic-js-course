'use strict';

const game = {
    /**
     * Запускает игру.
     */
    run() {
        while (true) {
            // Получаем направление от игрока.
            const direction = mover.getDirection();
            if (direction === null) {
                console.log('Игра окончена.')
                return;
            }
            const nextPoint = mover.getNextPosition(direction);

            // Если позиция не изменилась, не перерисовываем карту
            if (!nextPoint.changed) {
                alert('За пределы поля выходить нельзя.');
                continue;
            }

            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },

    /**
     * Выполняется при открытии страницы.
     */
    init() {
        console.log('Ваше положение на поле в виде о.');
        renderer.render();
        console.log('Чтобы начать игру наберите game.run() и нажмите Enter.');
    }
};

game.init();
