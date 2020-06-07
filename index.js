const categories = [
    {
        "id": 1,
        "title": "Угрозы, обусловленные человеческим фактором",
        "description": "К данному классу угроз относятся угрозы, возникающие вследствие предумышленных или непредумышленных действий человека",
    },
    {
        "id": 2,
        "title": "Угрозы, связанные с техническими средствами, используемыми при разработке и эксплуатации системы",
        "description": "К данному классу угроз информационной безопасности относятся угрозы, возникающие вследствие физических повреждений, отказов и неисправностей технических средств системы, ее отдельных компонентов и вспомогательных коммуникаций\n",
    },
    {
        "id": 3,
        "title": "Угрозы, связанные с программными средствами, используемыми при разработке и эксплуатации системы",
        "description": "К данному классу угроз информационной безопасности относятся угрозы, возникающие вследствие возникновения ошибок в системном и функциональном программном обеспечении компонентов системы",
    },
]

const categories_lvl2 = [
    {
        "id": 101,
        "parent_id": 1,
        "title": "Неправомерные действия авторизованных пользователей в системах и приложениях",
        "description": "Использование нарушителем учетной записи, к которой ему разрешен доступ, в неразрешенных целях, в том числе неправомерные действия в системах управления сетями телекоммуникаций, биллинговых, финансовых и технологических системах",
        "source": "Администраторы, пользователи, программисты, партнёры, временные пользователи, удалённые пользователи. ",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 102,
        "parent_id": 1,
        "title": "Отказ в обслуживании",
        "description": "Выполнение намеренных действий, направленных на возникновение отказа в обслуживании в системах, приложениях, базах и сетях передачи данных",
        "source": "Администраторы, технический персонал, внешние злоумышленники, программисты, партнёры, пользователи, удалённые пользователи, временные пользователи",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 103,
        "parent_id": 1,
        "title": "Внедрение вредоносного или разрушающего программного обеспечения",
        "description": "Внедрение вредоносного или разрушающего программного обеспечения, включающего вирусы, «троянских коней», «червей», «логические бомбы» и приводящее к сбою или нарушению в работе компонентов системы, а также получению полного контроля над уязвимой системой",
        "source": "Внешние злоумышленники, удалённые пользователи, пользователи, партнёры, временные пользователи, разработчики, программисты, технический персонал, администраторы",
        "coeff": 0.35,
        "isSelected": "false"
    },
    {
        "id": 104,
        "parent_id": 1,
        "title": "Подмена имени авторизованными пользователями",
        "description": "Получение доступа (например, с помощью использования чужой учетной записи) авторизованными пользователями к информации, доступ к которой им запрещен",
        "source": "Пользователи, технический персонал, временные пользователи, партнёры, удалённые пользователи, администраторы",
        "coeff": 0.5,
        "isSelected": "false"
    },
    {
        "id": 105,
        "parent_id": 1,
        "title": "Подмена имени пользователя посторонними лицами",
        "description": "Получение посторонними лицами доступа (под именем авторизованного пользователя) к информации",
        "source": "Внешние злоумышленники, посетители",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 106,
        "parent_id": 1,
        "title": "Неправомерное использование системных ресурсов",
        "description": "Использование аппаратного и программного обеспечения Компании в нерабочих целях, включающее:\n" +
            "компьютерные игры, просмотр фильмов;\n" +
            "использование доступа в Интернет в целях, не относящихся к выполнению функциональных обязанностей;\n" +
            " использование ресурсов для несанкционированного выполнения работ для сторонних организаций и в личных целях.",
        "source": "Пользователи, технический персонал, программисты, администраторы, удалённые пользователи, временные пользователи",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 107,
        "parent_id": 1,
        "title": "Ошибка в операциях",
        "description": "Совершение ошибок сотрудниками Компании при выполнении операций, связанных с управлением настройками аппаратно-программных средств системы",
        "source": "Администраторы, партнёры",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 108,
        "parent_id": 1,
        "title": "Ошибка в обслуживании аппаратного обеспечения",
        "description": "Совершение ошибок сотрудниками Компания в процессе технического обслуживания аппаратных средств",
        "source": "Технический персонал",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 109,
        "parent_id": 1,
        "title": "Ошибка пользователя",
        "description": "Совершение ошибок пользователями при работе с приложениями",
        "source": "Пользователи, удалённые пользователи, временные пользователи, партнёры",
        "coeff": 0.35,
        "isSelected": "false"
    },
    {
        "id": 1_10,
        "parent_id": 1,
        "title": "Проникновение в сеть, к которой подключена система",
        "description": "К данной угрозе относятся:\n" +
            "проникновение хакера в систему с использованием, например, атаки с переполнением буфера;\n" +
            "проникновение в систему с подменой участника сетевого соединения;\n" +
            "проникновение в систему с подменой IP-, MAC-адресов;\n" +
            "осуществление атаки с заведомым введением в заблуждение",
        "source": "Внешние злоумышленники",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 1011,
        "parent_id": 1,
        "title": "Манипулирование информацией",
        "description": "К данной угрозе относятся:\n" +
            "подмена информации на вебсайте;\n" +
            "рассылка заведомо ненужной адресату информации (спам);\n" +
            "внедрение ложных сообщений;\n" +
            "намеренное нарушение очередности доставки информации;\n" +
            "намеренная задержка доставки;\n" +
            "намеренный сбой маршрутизации;\n" +
            "перехват, изменение и перенаправление сообщения атакующей стороной посредством посылки сообщения через скомпрометированную рабочую станцию или компьютер злоумышленника.",
        "source": "Внешние злоумышленники, администраторы, технический персонал, временные пользователи, партнёры, пользователи, программисты, удалённые пользователи",
        "coeff": 0.35,
        "isSelected": "false"
    },
    {
        "id": 1012,
        "parent_id": 1,
        "title": "Перехват информации",
        "description": "К данной угрозе относятся:\n" +
            "пассивный перехват информации;\n" +
            "активный перехват;\n" +
            "несанкционированный мониторинг трафика",
        "source": "Временные пользователи, технический персонал, пользователи, внешние злоумышленники, программисты, партнёры, удалённые пользователи, администраторы",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 1013,
        "parent_id": 1,
        "title": "Отрицание приема/передачи сообщений",
        "description": "К данной угрозе относятся следующие случаи:\n" +
            "пользователи сети отрицают, что они посылали сообщение (отрицание передачи);\n" +
            "пользователи сети отрицают, что они приняли сообщение (отрицание приема)",
        "source": "Пользователи, удалённые пользователи, технический персонал, программисты, администраторы, партнёры, временные пользователи.",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 1014,
        "parent_id": 1,
        "title": "Кражи персоналом",
        "description": "Совершение краж документов, а также имущества сотрудниками, находящимися в помещениях Компании, включая уборщиц, подсобных рабочих и т. п.",
        "source": "Обслуживающий персонал, пользователи, технический персонал, программисты, администраторы",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 1015,
        "parent_id": 1,
        "title": "Кражи посторонними",
        "description": "Совершение краж документов, а также имущества людьми, не являющимися пользователями системы в том числе, осуществившими незаконное проникновение в помещения с установленной системой",
        "source": "Посетители, временные пользователи",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 1016,
        "parent_id": 1,
        "title": "Умышленная порча имущества",
        "description": "Совершение актов вандализма и причинение физического ущерба техническим средствам, носителям информации, системам жизнеобеспечения лицами, находящимися в помещениях с установленной системой",
        "source": "Обслуживающий персонал, пользователи, технический персонал, программисты, администраторы",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 1017,
        "parent_id": 1,
        "title": "Умышленная порча имущества посторонними",
        "description": "Совершение актов вандализма и причинение физического ущерба техническим средствам, носителям информации, системам жизнеобеспечения людьми, не являющимися пользователями системы в том числе, осуществившими незаконное проникновение в помещения с установленной системой",
        "source": "Посетители, временные пользователи ",
        "coeff": 0.25,
        "isSelected": "false"
    },

    {
        "id": 201,
        "parent_id": 2,
        "title": "Отказы и сбои серверного оборудования",
        "description": "Отказ в работе серверов в результате влияния различных факторов",
        "source": "Технические средства",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 202,
        "parent_id": 2,
        "title": "Отказы и сбои дисковых массивов",
        "description": "Отказ в работе дисковых массивов в результате влияния различных факторов",
        "source": "Технические средства",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 203,
        "parent_id": 2,
        "title": "Отказы и сбои сетевого оборудования",
        "description": "Отказ в работе сетевого оборудования в результате влияния различных факторов",
        "source": "Технические средства",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 204,
        "parent_id": 2,
        "title": "Пропадание каналов связи",
        "description": "Пропадание связи между узлами системы",
        "source": "Технические средства",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 205,
        "parent_id": 2,
        "title": "Отказы и сбои библиотек",
        "description": "Отказ в работе библиотек в результате влияния различных факторов",
        "source": "Технические средства",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 206,
        "parent_id": 2,
        "title": "Отказы и сбои станций управления и мониторинга",
        "description": "Отказ в работе станций управления и мониторинга в результате влияния различных факторо",
        "source": "Технические средства",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 207,
        "parent_id": 2,
        "title": "Отказы и сбои рабочих станций",
        "description": "Отказ в работе рабочих станций в результате влияния различных факторов",
        "source": "Технические средства",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 208,
        "parent_id": 2,
        "title": "Непреднамеренная ошибка маршрутизации",
        "description": "Доставка информации при пересылке по сети по ошибочному адресу",
        "source": "Технические средства",
        "coeff": 0.25,
        "isSelected": "false"
    },
    {
        "id": 301,
        "parent_id": 3,
        "title": "Отказ прикладного программного обеспечения",
        "description": "Отказ прикладного программного обеспечения вследствие наличия ошибок в ПО, влекущих возникновение уязвимостей и сбоев в работе ПО",
        "source": "Программные средства",
        "coeff": 0.25,
        "isSelected": "false"
    },
]

let app = document.querySelector('#app');
let app_categories = document.querySelector('#app_categories');
let app2 = document.querySelector('#app2');
let app2_selected_categories = document.querySelector('#app2_selected_categories');
let resultView = document.querySelector('#result');
let resultNumber = document.querySelector('#result_number');
let resultMessage = document.querySelector('#result_message');

let calculateResultBtn = document.querySelector('#calculateResultBtn');
let setProbabilitiesBtn = document.querySelector('#setProbabilitiesBtn');
let toTheBeginningBtn = document.querySelector('#toTheBeginningBtn');
let errorDiv = document.querySelector('#error');

let probabilities = [];
let probabilitiesInputs = [];

setProbabilitiesBtn.addEventListener('click', showApp2, false);
calculateResultBtn.addEventListener('click', calculateResult, false);
toTheBeginningBtn.addEventListener('click', toTheBeginning, false);

generateApp();

// generate app
function generateApp(){

    app.style.display = 'block';
    app2.style.display = 'none';
    resultView.style.display = 'none';

    categories.forEach(function (category) {
        let categoryHtml = `
        <div>
            <div class="category">
                <div>
                    <h3 class="category_title" onclick="showCategoriesLvl2('categoriesLvl2_container_${category.id}')">
                        ${category.title}
                    </h3>
                    <p class="show-on-hover">${category.description}</p>
                </div>
            </div>
            <div id="categoriesLvl2_container_${category.id}" style="display: none">
    `;
        categories_lvl2
            .filter(cat2 => cat2.parent_id === category.id)
            .forEach(cat2 => {
                categoryHtml += `
             <div class="category">
                <div class="category_checkbox">
                     <h3>
                        <input type="checkbox" value="${cat2.id}" id="checkbox_${cat2.id}" class="boxCheck" onclick="chooseCategory(${cat2.id})">
                    </h3>
                </div>
                <div class="category_title_container">
                    <h3 class="category_title">
                        ${cat2.title}
                    </h3>
                    <p class="show-on-hover">${cat2.description}</p>
                    <p class="show-on-hover">${cat2.source}</p>
                </div>
             </div>
            `
            })
        categoryHtml += '</div>                </div>'

        this.app_categories.innerHTML += categoryHtml;
    });
}

function showCategoriesLvl2(parentCategoryId) {
    let categoriesLvl2Container = document.querySelector('#' + parentCategoryId);
    if (categoriesLvl2Container.style.display === 'none') {
        categoriesLvl2Container.style.display = 'block';
    } else {
        categoriesLvl2Container.style.display = 'none';
    }
}

function chooseCategory(categoryId) {
    for (let i = 0; i < categories_lvl2.length; i++) {
        if (categories_lvl2[i].id === categoryId) {
            categories_lvl2[i].isSelected = true;
            break;
        }
    }
}

//
// app 2
//
function showApp2() {
    let selectedCounter = 0;

    for (let i = 0; i < categories_lvl2.length; i++) {
        const category = categories_lvl2[i];

        if (category.isSelected === true) {
            selectedCounter++;
        }
    }

    if (selectedCounter === 0) {
        showError();
    } else {
        app.style.display = 'none';
        app2.style.display = 'block';
        resultView.style.display = 'none';
        generateApp2()
    }
}

function generateApp2() {
    for (let i = 0; i < categories_lvl2.length; i++) {
        const category = categories_lvl2[i];
        if (category.isSelected === true) {
            let categoryHtml = `
                <div class="category">
                    <div class="category_checkbox">
                        <h3>
                            <input type="number" value="0" id="probability_${category.id}"  max="1" min="0" step="0.1">
                        </h3>
                    </div>
                    <div class="category_title_container">
                        <h3 class="category_title">
                            ${category.title}
                        </h3>
                        <p class="show-on-hover">${category.description}</p>
                        <p class="show-on-hover">${category.source}</p>
                    </div>
                 </div>
            `;
            probabilities.push({
                "category_lvl2_id": category.id,
                "value": 0
            })
            probabilitiesInputs.push()
            this.app2_selected_categories.innerHTML += categoryHtml;
        }
    }
}

// result

function calculateResult() {
    for (let p = 0; p < probabilities.length; p++){
        let input = document.querySelector('#probability_' + probabilities[p].category_lvl2_id);
        probabilities[p].value = input.value;
    }

    let selectedCounter = 0;
    let totalCoeffSum = 0;
    let selectedCoeffSum = 0;
    for (let i = 0; i < categories_lvl2.length; i++) {
        const category = categories_lvl2[i];

        totalCoeffSum += category.coeff;

        if (category.isSelected === true) {
            selectedCounter++;
            let categoryCoeff = category.coeff;
            for (let p = 0; p < probabilities.length; p++){
                if(probabilities[p].category_lvl2_id === category.id){
                    categoryCoeff = categoryCoeff * probabilities[p].value;
                }
            }
            selectedCoeffSum += categoryCoeff;
        }
    }

    if (selectedCounter === 0) {
        showError();
    } else {
        const result = Math.round(selectedCoeffSum * 100 / totalCoeffSum);

        resultNumber.innerHTML += result + ' %';

        let message = 'Система в опасности.';
        if (result < 30) {
            message = 'Система в безопасности.';
        } else if (result < 70) {
            message = 'Система в нормальном состоянии.';
        }
        resultMessage.innerHTML += message;

        app.style.display = 'none';
        app2.style.display = 'none';
        resultView.style.display = 'block';
    }
}

function showError() {
    errorDiv.innerHTML += "<div id='errorMessage'>Вы должны осуществить выбор хотя бы 1 угрозы!</div>";

    setTimeout(function () {
        document.querySelector('#errorMessage').remove();
    }, 3000)
}

function toTheBeginning() {
    clearAllDataAndView();
    generateApp();

    for (let i = 0; i < categories_lvl2.length; i++) {
        categories_lvl2[i].isSelected = false;
    }
    probabilities = [];
}

function clearAllDataAndView() {
    for (let i = 0; i < categories_lvl2.length; i++) {
        categories_lvl2[i].isSelected = false;
    }
    probabilities = [];

    this.app_categories.innerHTML = '';
    this.app2_selected_categories.innerHTML = '';
    resultNumber.innerHTML = '';
    resultMessage.innerHTML = '';
}

