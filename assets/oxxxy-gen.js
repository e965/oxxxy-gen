'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const roundBtn = document.querySelector('.round button');

    const random = num => Math.floor(Math.random() * num);

    const dict = {
        govno: ['Темно', 'Сукно', 'Одно'],
        zalupa: ['халупа', 'раскупорь', 'неглупый'],
        penis: ['кризис', 'полис', 'сервис', 'теннис'],
        her: ['керн', 'нерв'],
        davalka: ['гадалка', 'русалка', 'качалка'],
        hui: ['буй', 'дуй'],
        blyadina: ['малина', 'рябина', 'дубина'],
        golovka: ['Уловка', 'Верёвка', 'Помолвка'],
        shluha: ['муха', 'плюха'],
        jopa: ['опыт', 'топот'],
        chlen: ['плен', 'ген', 'фен'],
        eblan: ['дела', 'чулан'],
        petuh: ['протух', 'главбух', 'лопух'],
        mudila: ['Ярило', 'кутила', 'грузило'],
        rukoblud: ['Украдут', 'Институт'],
        ssanina: ['картина', 'осина', 'лавина'],
        ochko: ['качки', 'Кличко'],
        blyadun: ['закон', 'бегун', 'шалун', 'хвастун'],
        vagina: ['кузина', 'Камина', 'равнина'],
        suka: ['Скука', 'Бука'],
        eblanishe: ['пристанище', 'сокровище'],
        vlagalishe: ['чудовище', 'седалище'],
        perdun: ['гарпун', 'колдун', 'тайфун', 'верун'],
        drochila: ['громила', 'ловчила', 'мерило'],
        pidor: ['Сидр', 'Кедр', 'Метр'],
        pizda: ['езда', 'звезда'],
        tuz: ['француз', 'ССУЗ'],
        malafia: ['сыновья', 'борода'],
        gomik: ['домик', 'Соник'],
        mudila2: ['удила', 'кадила'],
        pilotka: ['кроватка', 'ошибка'],
        manda: ['гряда', 'вода'],
        anus: ['Градус', 'Соус'],
        vagina2: ['пружина', 'Карина'],
        putana: ['дрезина', 'сметана', 'мембрана'],
        pidrila: ['водила', 'ангина'],
        shalava: ['застава', 'облава'],
        huila: ['верзила', 'грамм-сила', 'могила'],
        moshonka: ['амазонка', 'бензоколонка', 'вагонка', 'иконка', 'японка'],
        elda: ['балда', 'беда', 'всегда', 'еда', 'орда', 'среда'],
    };

    const generate = () => {
        for (const word in dict) {
            const wordNode = document.getElementById(word);
            const wordArray = dict[word];

            wordNode.innerText = wordArray[random(wordArray.length)];
        }
    };

    generate();

    roundBtn.onclick = () => generate();
});
