'use strict';

const game = {
    /**
     * Запускает игру
     */
    run() {
        for (let question of questions) {
            // Получаем отформатированный текст вопроса.
            const text = `${player.questionsAsked + 1}. ${inquirer.makeQuestion(question)}`;

            // Получаем ответ от игрока.
            const answer = inquirer.getAnswer(text);

            // Если игрок нажал кнопку "Отмена" - выходим из игры.
            if (answer === null) {
                break;
            }

            // Если игрок угадал
            if (question.answerOptions[answer] === question.answer) {
                alert('Вы угадали');

                // Добавляем количество правильных ответов.
                player.rightAnswers++;

                // Добавляем стоимость одного вопроса.
                player.winningAmount += config.issuePrice;

                // Проверяем на несгораемую сумму.
                player.checkWin(config.nonCombustibleAmounts);
            } else {
                alert('Вы не угадали');
            }

            // Считаем количество всех заданных вопросов.
            player.questionsAsked++;
        }

        // Выводим результаты игры.
        console.log('Игра окончена, количество правильных ответов ' + player.rightAnswers);
        console.log('Выигранная сумма ' + player.win + ' рублей');

        // Если доиграл до конца предлагаем сыграть еще.
        if (player.questionsAsked === questions.length) {
            const playMore = confirm('Игра окончена, хотите сыграть еще?');
            if (playMore) {
                player.questionsAsked = 0;
                player.rightAnswers = 0;
                player.winningAmount = 0;
                player.win = 0;
                this.run();
            }
        }
    },

    /**
     * Выполняется при открытии страницы.
     */
    init() {
        console.log('Добро пожаловать в игру "Кто хочет стать миллионером?"');
        console.log('Чтобы начать игру наберите game.run() и нажмите Enter.');
    }
};

game.init();
