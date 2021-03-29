'use strict';

/**
 * Объект для задания вопросов игроку.
 */
const inquirer = {
    /**
     * Получает и отдает ответ от пользователя
     * @returns {string|null} Возвращает ответ от пользователя в виде 'a', 'b', 'c' или 'd'.
     */
    getAnswer(question) {
        const options = ['a', 'b', 'c', 'd'];
        while (true) {
            const answer = prompt(question);
            if (!options.includes(answer) && answer !== null) {
                alert('Введите вариант ответа: a, b, c или d');
                continue;
            }
            return answer;
        }
    },

    /**
     * Составляет и форматирует текст вопроса.
     * @param {Object} question - Объект вопроса.
     * @returns {string} text - Отформатированный текст вопроса с вариантами ответов.
     */
    makeQuestion(question) {
        let text = question.text;
        for (let item in question.answerOptions) {
            text += `\n${item}: ${question.answerOptions[item]}`;
        }
        return text;
    }
};
