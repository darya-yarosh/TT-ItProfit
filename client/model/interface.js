export const LANGUAGES = [
    {
        id: "RU",
        value: "РУССКИЙ"
    }, {
        id: "EN",
        value: "ENGLISH",
    },
];

export const INTERFACE = {
    RU: {
        appTitle: "Тестовое задание",
        articleTitle: "Lorem ipsum",
        articleText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper neque vel dolor maximus, at finibus tortor pharetra. Sed in mi et ipsum laoreet mollis nec id felis. Sed volutpat ultrices molestie. In pretium libero sit amet eros vehicula, id tincidunt quam condimentum. Duis porttitor metus sed arcu pulvinar, vitae pretium neque accumsan. Sed luctus non dui eget feugiat. Suspendisse dolor dui, euismod in elit et, laoreet lobortis eros. Phasellus lectus nulla, faucibus ac lectus quis, finibus lobortis odio. Etiam suscipit aliquam diam eget maximus. Vivamus tempus ullamcorper nisl. Nulla id orci non diam vehicula commodo. Morbi nec augue leo. Nulla suscipit, dolor in pretium accumsan, ligula odio pulvinar erat, ac tristique purus nibh id mauris. Ut nisl odio, molestie in mauris eget, pharetra commodo risus. Nam ut odio a magna hendrerit hendrerit quis id ligula.

        Sed dui turpis, eleifend vitae condimentum at, tincidunt id urna. Praesent magna arcu, ultricies at massa et, venenatis fringilla odio. Aliquam at finibus velit. Sed ultrices convallis elit ac auctor. Etiam gravida mattis leo, vitae auctor elit condimentum eu. Vivamus venenatis turpis nisl, sit amet convallis sapien vulputate sed. Duis rhoncus nulla tortor, sit amet pretium urna sodales sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ut elit nec orci consequat volutpat. Mauris vestibulum suscipit est, sed hendrerit ligula luctus a. Ut pretium pharetra ipsum, mattis convallis sem congue a. Aliquam neque augue, auctor at lorem et, rutrum lobortis arcu. Praesent eros ipsum, fringilla quis gravida in, feugiat ut orci. Fusce tempus faucibus risus, ut euismod est pulvinar eget.`,
        author: "Ярош Д.С.",
        authorLinkDesc: "Ссылка на Github",
        buttonLanguage: "Язык",
        buttonLanguageDesc: "Кнопка для открытия модального окна с выбором языка страницы",
        buttonSubmit: "Отправить",
        buttonSubmitDesc: "Отправить форму",
        buttonDropdownDesc: "Кнопка для открытия выпадающего меню",
        selectLanguageTitle: "Выберите язык",
        formTitle: "Обратная связь",
        formDesc: "Форма отправки сообщения владельцу сайта",
        fieldList: {
            name: "Имя",
            namePlaceholder: "Иван",
            mail: "E-mail",
            mailPlaceholder: "ivan@mail.ru",
            tel: "Телефон",
            telPlaceholder: "+375-XX-XXX-XX-XX",
            message: "Сообщение",
            messagePlaceholder: "Напишите свой отзыв здесь."
        },
        alertList: {
            fieldNotFound: "Одно из текстовых полей не найдено. Перезагрузите страницу и повторите действия.",
            name: "Некорректный формат имени!",
            mail: "Некорректный формат почты!",
            tel: "Некорректный номер телефона!",
            message: "Некорректное сообщение!",
            successFeedback: "Ваша заявка успешно отправлена",
        }
    },
    EN: {
        appTitle: "Training task",
        articleTitle: "Lorem ipsum",
        articleText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper neque vel dolor maximus, at finibus tortor pharetra. Sed in mi et ipsum laoreet mollis nec id felis. Sed volutpat ultrices molestie. In pretium libero sit amet eros vehicula, id tincidunt quam condimentum. Duis porttitor metus sed arcu pulvinar, vitae pretium neque accumsan. Sed luctus non dui eget feugiat. Suspendisse dolor dui, euismod in elit et, laoreet lobortis eros. Phasellus lectus nulla, faucibus ac lectus quis, finibus lobortis odio. Etiam suscipit aliquam diam eget maximus. Vivamus tempus ullamcorper nisl. Nulla id orci non diam vehicula commodo. Morbi nec augue leo. Nulla suscipit, dolor in pretium accumsan, ligula odio pulvinar erat, ac tristique purus nibh id mauris. Ut nisl odio, molestie in mauris eget, pharetra commodo risus. Nam ut odio a magna hendrerit hendrerit quis id ligula.

        Sed dui turpis, eleifend vitae condimentum at, tincidunt id urna. Praesent magna arcu, ultricies at massa et, venenatis fringilla odio. Aliquam at finibus velit. Sed ultrices convallis elit ac auctor. Etiam gravida mattis leo, vitae auctor elit condimentum eu. Vivamus venenatis turpis nisl, sit amet convallis sapien vulputate sed. Duis rhoncus nulla tortor, sit amet pretium urna sodales sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ut elit nec orci consequat volutpat. Mauris vestibulum suscipit est, sed hendrerit ligula luctus a. Ut pretium pharetra ipsum, mattis convallis sem congue a. Aliquam neque augue, auctor at lorem et, rutrum lobortis arcu. Praesent eros ipsum, fringilla quis gravida in, feugiat ut orci. Fusce tempus faucibus risus, ut euismod est pulvinar eget.`,
        author: "Yarosh D.S.",
        authorLinkDesc: "Link to Github",
        buttonLanguage: "Language",
        buttonLanguageDesc: "Button for open modal window with selector of page language",
        buttonSubmit: "Send",
        buttonSubmitDesc: "Send form",
        buttonDropdownDesc: "Button for open dropdown menu",
        selectLanguageTitle: "Select language",
        formTitle: "Feedback",
        formDesc: "Form for sending a message to the site owner",
        fieldList: {
            name: "Name",
            namePlaceholder: "Ivan",
            mail: "E-mail",
            mailPlaceholder: "ivan@mail.ru",
            tel: "Telephone",
            telPlaceholder: "+375-XX-XXX-XX-XX",
            message: "Message",
            messagePlaceholder: "Write your review here."
        },
        alertList: {
            fieldNotFound: "One of the text fields was not found. Reload the page and repeat the steps.",
            name: "Incorrect name format!",
            mail: "Incorrect mail format!",
            tel: "Incorrect phone number!",
            message: "Incorrect message!",
            successFeedback: "Your request has been successfully submitted."
        }
    }
}