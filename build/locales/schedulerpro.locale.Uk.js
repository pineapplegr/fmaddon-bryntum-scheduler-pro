(function(c,l){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],l);else if(typeof module=="object"&&module.exports)module.exports=l();else{var u=l(),g=s?exports:c;for(var m in u)g[m]=u[m]}})(typeof self<"u"?self:void 0,()=>{var c={},l={exports:c},s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,g=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,v=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t)s(e,a,{get:t[a],enumerable:!0})},f=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of g(t))!m.call(e,r)&&r!==a&&s(e,r,{get:()=>t[r],enumerable:!(n=u(t,r))||n.enumerable});return e},D=e=>f(s({},"__esModule",{value:!0}),e),C=(e,t,a)=>(v(e,typeof t!="symbol"?t+"":t,a),a),y={};h(y,{default:()=>A}),l.exports=D(y);var i=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,b=class p{static mergeLocales(...t){let a={};return t.forEach(n=>{Object.keys(n).forEach(r=>{typeof n[r]=="object"?a[r]={...a[r],...n[r]}:a[r]=n[r]})}),a}static trimLocale(t,a){let n=(r,o)=>{t[r]&&(o?t[r][o]&&delete t[r][o]:delete t[r])};Object.keys(a).forEach(r=>{Object.keys(a[r]).length>0?Object.keys(a[r]).forEach(o=>n(r,o)):n(r)})}static normalizeLocale(t,a){if(!t)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof t=="string"){if(!a)throw new Error('"config" parameter can not be empty');a.locale?a.name=t||a.name:a.localeName=t}else a=t;let n={};if(a.name||a.locale)n=Object.assign({localeName:a.name},a.locale),a.desc&&(n.localeDesc=a.desc),a.code&&(n.localeCode=a.code),a.path&&(n.localePath=a.path);else{if(!a.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);n=Object.assign({},a)}for(let r of["name","desc","code","path"])n[r]&&delete n[r];if(!n.localeName)throw new Error("Locale name can not be empty");return n}static get locales(){return i.bryntum.locales||{}}static set locales(t){i.bryntum.locales=t}static get localeName(){return i.bryntum.locale||"En"}static set localeName(t){i.bryntum.locale=t||p.localeName}static get locale(){return p.localeName&&this.locales[p.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(t,a){let{locales:n}=i.bryntum,r=p.normalizeLocale(t,a),{localeName:o}=r;return!n[o]||a===!0?n[o]=r:n[o]=this.mergeLocales(n[o]||{},r||{}),n[o]}};C(b,"skipLocaleIntegrityCheck",!1);var d=b;i.bryntum=i.bryntum||{},i.bryntum.locales=i.bryntum.locales||{},d._$name="LocaleHelper";var T={localeName:"Uk",localeDesc:"Українська",localeCode:"uk-UA",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Видалити залежність"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Деактивувати залежність"},CycleEffectDescription:{descriptionTpl:"Знайдено цикл, який утворили: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'У календарі "{0}" не вказано проміжки робочого часу.',forwardDescriptionTpl:'Неможливо виконати завдання "{2}". Календар "{0}" не має робочого часу після {1}.',backwardDescriptionTpl:'Неможливо виконати завдання "{2}". Календар "{0}" не має робочого часу до {1}.',noIntersectionDescriptionTpl:'Неможливо виконати завдання "{2}". Його календар "{0}" і календарі ресурсів не мають спільного робочого часу.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Використовуйте 24-годинний календар, в якому субота та неділя – неробочі дні."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Використовуйте 8-годинний календар (08:00–12:00, 13:00–17:00), в якому субота та неділя – неробочі дні."},IgnoreProjectConstraintResolution:{descriptionTpl:"Ігноруйте межі проекту та продовжуйте вносити зміни."},ProjectConstraintConflictEffectDescription:{startDescriptionTpl:'Ви перемістили завдання "{0}" для початку {1}. Це передує даті початку проекту {2}.',endDescriptionTpl:'Ви перемістили завдання "{0}", щоб завершити на {1}. Це після дати завершення проекту {2}.'},HonorProjectConstraintResolution:{descriptionTpl:"Відкоригуйте завдання, щоб дотримуватися меж проекту."},IgnoreResourceCalendarEmptyCalendarEffectResolution:{descriptionTpl:"Ігноруйте календарі ресурсів і плануйте завдання лише за допомогою власного календаря."},ConflictEffectDescription:{descriptionTpl:"Виявлено конфлікт розкладів: {0} конфліктує з {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Дата початку проекту {0}",endDateDescriptionTpl:"Дата завершення проекту {0}"},DependencyType:{long:["Початок-початок","Початок-завершення","Завершення-початок","Завершення-завершення"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'"{2}" створено вручну таким чином, що діти не зможуть почати раніше, ніж {0}',endDescriptionTpl:'"{2}" створено вручну таким чином, що діти не зможуть почати пізніше, ніж {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Вимкнути ручне планування для "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Залежність ({2}) від "{3}" до "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Видалити залежніть від "{1}" до "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Деактивувати залежніть від "{1}" до "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Обмеження {3} {0} для завдання "{2}"',endDateDescriptionTpl:'Обмеження {3} {1} для завдання "{2}"',constraintTypeTpl:{startnoearlierthan:"Почати не раніше, ніж",finishnoearlierthan:"Завершити не раніше, ніж",muststarton:"Треба почати в",mustfinishon:"Треба завершити до",startnolaterthan:"Почати не пізніше, ніж",finishnolaterthan:"Завершити не пізніше, ніж"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Видалити обмеження "{1}" для завдання "{0}"'},PostponeDateConstraintConflictResolution:{descriptionTpl:'Відкласти вирішення та позначити завдання "{0}" маркером конфлікту'}},P=d.publishLocale(T),E={localeName:"Uk",localeDesc:"Українська",localeCode:"uk-UA",Object:{Yes:"Так",No:"Ні",Cancel:"Скасувати",Ok:"OK",Week:"Тиждень",None:"Жодного"},CodeEditor:{apply:"Застосувати",autoApply:"Автоматично застосувати",downloadCode:"Завантажити код",editor:"Редактор коду",viewer:"Переглядач коду"},ColorPicker:{noColor:"Без кольору"},Combo:{noResults:"Немає результатів",recordNotCommitted:"Не вдалося додати запис",addNewValue:e=>`Додати ${e}`},FilePicker:{file:"Файл"},Field:{badInput:"Неприпустиме значення поля",patternMismatch:"Значення має відповідати певному шаблону",rangeOverflow:e=>`Значення повинно бути менше або дорівнювати ${e.max}`,rangeUnderflow:e=>`Значення повинно бути більше або дорівнювати ${e.min}`,stepMismatch:"Значення має відповідати кроку",tooLong:"Значення має бути коротшим",tooShort:"Значення має бути довшим",typeMismatch:"Значення потрібно вказати в спеціальному форматі",valueMissing:"Це обов’язкове поле",invalidValue:"Неприпустиме значення поля",minimumValueViolation:"Не вказано мінімальну кількість значень",maximumValueViolation:"Перевищено максимально допустиму кількість значень",fieldRequired:"Це обов’язкове поле",validateFilter:"Значення має бути вибрано зі списку"},DateField:{invalidDate:"Введено неприпустиму дату"},DatePicker:{gotoPrevYear:"Перейти до попереднього року",gotoPrevMonth:"Перейти до попереднього місяця",gotoNextMonth:"Перейти до наступного місяця",gotoNextYear:"Перейти до наступного року"},NumberFormat:{locale:"uk-UA",currency:"UAH"},DurationField:{invalidUnit:"Неприпустима одиниця"},TimeField:{invalidTime:"Введено неприпустимий час"},TimePicker:{hour:"Година",minute:"Хвилина",second:"Секунда"},List:{loading:"Завантаження...",selectAll:"Вибрати все"},GridBase:{loadMask:"Завантаження...",syncMask:"Триває збереження, зачекайте..."},PagingToolbar:{firstPage:"Перейти до першої сторінки",prevPage:"Перейти до попередньої сторінки",page:"Сторінка",nextPage:"Перейти до наступної сторінки",lastPage:"Перейти до останньої сторінки",reload:"Перезавантажити поточну сторінку",noRecords:"Немає записів для відображення",pageCountTemplate:e=>`з ${e.lastPage}`,summaryTemplate:e=>`Відображаються записи ${e.start} - ${e.end} з ${e.allCount}`},PanelCollapser:{Collapse:"Згорнути",Expand:"Розгорнути"},Popup:{close:"Закрити"},UndoRedo:{Undo:"Скасувати",Redo:"Повторити",UndoLastAction:"Скасувати останню дію",RedoLastAction:"Повторити останню невиконану дію",NoActions:"У черзі скасування немає елементів"},FieldFilterPicker:{equals:"дорівнює",doesNotEqual:"не дорівнює",isEmpty:"пусто",isNotEmpty:"не пустий",contains:"містить",doesNotContain:"не містить",startsWith:"починається з",endsWith:"закінчується на",isOneOf:"один із",isNotOneOf:"не один із",isGreaterThan:"більше",isLessThan:"менше",isGreaterThanOrEqualTo:"більше або дорівнює",isLessThanOrEqualTo:"менше або дорівнює",isBetween:"між",isNotBetween:"не між",isBefore:"до",isAfter:"після",isToday:"сьогодні",isTomorrow:"завтра",isYesterday:"учора",isThisWeek:"цей тиждень",isNextWeek:"наступний тиждень",isLastWeek:"минулий тиждень",isThisMonth:"цей місяць",isNextMonth:"наступний місяць",isLastMonth:"минулий місяць",isThisYear:"цей рік",isNextYear:"наступний рік",isLastYear:"минулий рік",isYearToDate:"з початку року",isTrue:"істина",isFalse:"хиба",selectAProperty:"Виберіть властивість",selectAnOperator:"Виберіть оператор",caseSensitive:"З урахуванням регістру",and:"та",dateFormat:"Д/М/РР",selectValue:"Виберіть значення",selectOneOrMoreValues:"Виберіть одне або кілька значень",enterAValue:"Введіть значення",enterANumber:"Введіть кількість",selectADate:"Вибрати дату",selectATime:"Виберіть час"},FieldFilterPickerGroup:{addFilter:"Додати фільтр"},DateHelper:{locale:"uk-UA",weekStartDay:0,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"мілісекунда",plural:"мілісекунди",abbrev:"мс"},{single:"emillisecond",plural:"ems",abbrev:"ems"},{single:"секунда",plural:"секунди",abbrev:"с"},{single:"esecond",plural:"eseconds",abbrev:"es"},{single:"хвилина",plural:"хвилини",abbrev:"хв"},{single:"eminute",plural:"eminutes",abbrev:"emin"},{single:"година",plural:"години",abbrev:"год"},{single:"ehour",plural:"ehours",abbrev:"eh"},{single:"день",plural:"дні",abbrev:"дн."},{single:"eday",plural:"edays",abbrev:"ed"},{single:"тиждень",plural:"тижні",abbrev:"тиж."},{single:"eweek",plural:"eweeks",abbrev:"ew"},{single:"місяць",plural:"місяці",abbrev:"міс."},{single:"emonth",plural:"emonths",abbrev:"emon"},{single:"квартал",plural:"квартали",abbrev:"кв."},{single:"equarter",plural:"equarters",abbrev:"eq"},{single:"рік",plural:"роки",abbrev:"р."},{single:"eyear",plural:"eyears",abbrev:"eyr"},{single:"десятиліття",plural:"десятиліття",abbrev:"дес."},{single:"edecade",plural:"edecades",abbrev:"edec"}],unitAbbreviations:[["мс"],[],["с","с"],[],["хв","хв"],[],["год","год"],[],["дн."],[],["тиж.","тиж."],[],["міс.","міс.","міс."],[],["кв.","кварт.","квр"],[],["р.","р."],[],["дес."],[]],parsers:{L:"ММ/ДД/РРРР",LT:"ГГ:хв A",LTS:"ГГ:хв:сс A"},ordinalSuffix:e=>{let t=["11","12","13"].find(n=>e.endsWith(n)),a="-ий";if(!t){let n=e[e.length-1];a={1:"-ий",2:"-й",3:"-ій"}[n]||"-ий"}return e+a}}},N=d.publishLocale(E),k=new String,S={localeName:"Uk",localeDesc:"Українська",localeCode:"uk-UA",ColumnPicker:{column:"Стовпець",columnsMenu:"Стовпці",hideColumn:"Приховати стовпець",hideColumnShort:"Приховати",newColumns:"Створити стовпці"},Filter:{applyFilter:"Застосувати фільтр",filter:"Фільтр",editFilter:"Редагувати фільтр",on:"В",before:"До",after:"Після",equals:"Дорівнює",lessThan:"Менше",moreThan:"Більше",removeFilter:"Видалити фільтр",disableFilter:"Вимкнути фільтр"},FilterBar:{enableFilterBar:"Показати панель фільтрування",disableFilterBar:"Приховати панель фільтрування"},Group:{group:"Групувати",groupAscending:"Групувати за зростанням",groupDescending:"Групувати за спаданням",groupAscendingShort:"За зростанням",groupDescendingShort:"За спаданням",stopGrouping:"Зупинити групування",stopGroupingShort:"Зупинити"},HeaderMenu:{moveBefore:e=>`Перемістити перед "${e}"`,moveAfter:e=>`Перемістити після "${e}"`,collapseColumn:"Згорнути стовпець",expandColumn:"Розгорнути стовпець"},ColumnRename:{rename:"Перейменувати"},MergeCells:{mergeCells:"Об’єднати клітинки",menuTooltip:"Об’єднати клітинки з однаковим значенням у разі сортування за цим стовпцем"},Search:{searchForValue:"Пошук значення"},Sort:{sort:"Сортувати",sortAscending:"Сортувати за зростанням",sortDescending:"Сортувати за спаданням",multiSort:"Сортування за кількома критеріями",removeSorter:"Видалити сортування",addSortAscending:"Додати сортування за зростанням",addSortDescending:"Додати сортування за спаданням",toggleSortAscending:"Змінити на сортування за зростанням",toggleSortDescending:"Змінити на сортування за спаданням",sortAscendingShort:"За зростанням",sortDescendingShort:"За спаданням",removeSorterShort:"Вилучити",addSortAscendingShort:"+ за зростанням",addSortDescendingShort:"+ за спаданням"},Split:{split:"Розділити",unsplit:"Скасувати розділення",horizontally:"Горизонтально",vertically:"Вертикально",both:"В обох напрямках"},LockRows:{lockRow:"Замковий ряд",unlockRow:"Рядок без замка"},Column:{columnLabel:e=>`${e.text?`Стовпець типу ${e.text}. `:""}Натисніть клавішу ПРОБІЛ для виклику контекстного меню${e.sortable?" або ENTER для сортування":""}`,cellLabel:k},Checkbox:{toggleRowSelect:"Вибрати рядок або скасувати вибір",toggleSelection:"Вибрати весь набір даних або скасувати вибір"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?`Оцінка : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Не вдалося завантажити дані!",syncFailedMessage:"Не вдалося синхронізувати дані!",unspecifiedFailure:"Невизначена помилка",networkFailure:"Помилка мережі",parseFailure:"Не вдалося проаналізувати відповідь сервера",serverResponse:"Відповідь сервера:",noRows:"Немає записів для відображення",moveColumnLeft:"Перемістити до лівого розділу",moveColumnRight:"Перемістити до правого розділу",moveColumnTo:e=>`Перемістити стовпець до ${e}`},CellMenu:{removeRow:"Видалити"},RowCopyPaste:{copyRecord:"Копіювати",cutRecord:"Вирізати",pasteRecord:"Вставити",rows:"Рядки",row:"Рядок"},CellCopyPaste:{copy:"Копіювати",cut:"Вирізати",paste:"Вставити"},PdfExport:{"Waiting for response from server":"Очікування відповіді від сервера...","Export failed":"Помилка під час спроби експортувати дані","Server error":"Помилка сервера","Generating pages":"Створення сторінок...","Click to abort":"Скасувати"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Налаштування експорту даних",export:"Експортувати дані",printSettings:"Параметри друку",print:"Роздрукувати",exporterType:"Контрольна пагінація",cancel:"Скасувати",fileFormat:"Формат файлу",rows:"Рядки",alignRows:"Вирівняти рядки",columns:"Стовпці",paperFormat:"Формат аркуша",orientation:"Орієнтація",repeatHeader:"Повторювати заголовок"},ExportRowsCombo:{all:"Усі рядки",visible:"Видимі рядки"},ExportOrientationCombo:{portrait:"Книжкова",landscape:"Альбомна"},SinglePageExporter:{singlepage:"Одна сторінка"},MultiPageExporter:{multipage:"Декілька сторінок",exportingPage:({currentPage:e,totalPages:t})=>`Експорт сторінки ${e}/${t}`},MultiPageVerticalExporter:{multipagevertical:"Декілька сторінок (книжкова орієнтація)",exportingPage:({currentPage:e,totalPages:t})=>`Експорт сторінки ${e}/${t}`},RowExpander:{loading:"Завантаження",expand:"Розгорнути",collapse:"Згорнути"},TreeGroup:{group:"Групувати за",stopGrouping:"Зупинити групування",stopGroupingThisColumn:"Розгрупувати стовпець"}},F=d.publishLocale(S),R={localeName:"Uk",localeDesc:"Українська",localeCode:"uk-UA",Object:{newEvent:"Створити подію"},ResourceInfoColumn:{eventCountText:e=>e+" подія"+(e!==1?"s":"")},Dependencies:{from:"З",to:"До",valid:"Припустимий",invalid:"Неприпустимий"},DependencyType:{SS:"ПП",SF:"ПЗ",FS:"ЗП",FF:"ЗЗ",StartToStart:"Початок-початок",StartToEnd:"Початок-завершення",EndToStart:"Завершення-початок",EndToEnd:"Завершення-завершення",short:["ПП","ПЗ","ЗП","ЗЗ"],long:["Початок-початок","Початок-завершення","Завершення-початок","Завершення-завершення"]},DependencyEdit:{From:"З",To:"До",Type:"Тип",Lag:"Відставання від графіку","Edit dependency":"Редагувати залежність",Save:"Зберегти",Delete:"Видалити",Cancel:"Скасувати",StartToStart:"Початок-початок",StartToEnd:"Початок‑завершення",EndToStart:"Завершення‑початок",EndToEnd:"Завершення‑завершення"},EventEdit:{Name:"Назва",Resource:"Ресурс",Start:"Початок",End:"Завершення",Save:"Зберегти",Delete:"Видалити",Cancel:"Скасувати","Edit event":"Редагувати подію",Repeat:"Повторити"},EventDrag:{eventOverlapsExisting:"Подія перекриває наявну подію для цього ресурсу",noDropOutsideTimeline:"За межами цієї часової шкали подію може бути видалено не повністю"},SchedulerBase:{"Add event":"Додати подію","Delete event":"Видалити подію","Unassign event":"Скасувати призначення події",color:"Колір"},TimeAxisHeaderMenu:{pickZoomLevel:"Масштаб",activeDateRange:"Діапазон дат",startText:"Дата початку",endText:"Дата завершення",todayText:"Сьогодні"},EventCopyPaste:{copyEvent:"Копіювати подію",cutEvent:"Вирізати подію",pasteEvent:"Вставити подію"},EventFilter:{filterEvents:"Завдання фільтра",byName:"За іменем"},TimeRanges:{showCurrentTimeLine:"Показати поточну часову шкалу"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Секунди"},minuteAndHour:{topDateFormat:"ддд ММ/ДД, гA",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ддд ММ/ДД",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"День"},day:{name:"День/години"},week:{name:"Тиждень/години"},dayAndWeek:{displayDateFormat:"ll LST",name:"Тиждень/дні"},dayAndMonth:{name:"Місяць"},weekAndDay:{displayDateFormat:"ll LST",name:"Тиждень"},weekAndMonth:{name:"Тижні"},weekAndDayLetter:{name:"Тижні/дні тижня"},weekDateAndMonth:{name:"Місяці/тижні"},monthAndYear:{name:"Місяці"},year:{name:"Роки"},manyYears:{name:"Кілька років"}},RecurrenceConfirmationPopup:{"delete-title":"Ви видаляєте подію","delete-all-message":"Видалити всі екземпляри цієї події?","delete-further-message":"Видалити цей і всі майбутні екземпляри цієї події або лише вибрані екземпляри?","delete-only-this-message":"Ви хочете видалити цю появу цієї події?","delete-further-btn-text":"Видалити всі майбутні події","delete-only-this-btn-text":"Видалити лише цю подію","update-title":"Ви змінюєте повторювану подію","update-all-message":"Змінити всі екземпляри цієї події?","update-further-message":"Змінити лише цей екземпляр події чи й усі майбутні екземпляри?","update-only-this-message":"Ви хочете змінити цю появу цієї події?","update-further-btn-text":"Усі майбутні події","update-only-this-btn-text":"Лише ця подія",Yes:"Так",Cancel:"Скасувати",width:600},RecurrenceLegend:{" and ":" і ",Daily:"Щоденно","Weekly on {1}":({days:e})=>`Щотижня по ${e}`,"Monthly on {1}":({days:e})=>`${e} числа кожного місяця`,"Yearly on {1} of {2}":({days:e,months:t})=>`Щороку ${e} ${t}`,"Every {0} days":({interval:e})=>`Кожен ${e}-й день`,"Every {0} weeks on {1}":({interval:e,days:t})=>`Кожен ${e}-й тиждень, день тижня: ${t}`,"Every {0} months on {1}":({interval:e,days:t})=>`Кожен ${e}-й місяць, день тижня: ${t}`,"Every {0} years on {1} of {2}":({interval:e,days:t,months:a})=>`Кожен ${e}-й рік, дата: ${t}, місяць: ${a}`,position1:"перший",position2:"другий",position3:"третій",position4:"четвертий",position5:"п’ятий","position-1":"останній",day:"дн.",weekday:"день тижня","weekend day":"вихідний день",daysFormat:({position:e,days:t})=>`${e} ${t}`},RecurrenceEditor:{"Repeat event":"Повторити подію",Cancel:"Скасувати",Save:"Зберегти",Frequency:"Періодичність",Every:"Кожн.",DAILYintervalUnit:"дн.",WEEKLYintervalUnit:"тиж.",MONTHLYintervalUnit:"міс.",YEARLYintervalUnit:"р.",Each:"Кожн.",on:"В",the:"В","On the":"В","End repeat":"Завершити повторення","time(s)":"раз",Days:"день",Months:"місяць"},RecurrenceDaysCombo:{day:"дн.",weekday:"день тижня","weekend day":"вихідний день"},RecurrencePositionsCombo:{position1:"перший",position2:"другий",position3:"третій",position4:"четвертий",position5:"п’ятий","position-1":"останній"},RecurrenceStopConditionCombo:{Never:"Ніколи",After:"Після","On date":"Дата завершення повторення"},RecurrenceFrequencyCombo:{None:"Без повтору",Daily:"Щоденно",Weekly:"Щотижня в {0}",Monthly:"Щомісячно",Yearly:"Щорічно"},RecurrenceCombo:{None:"Немає",Custom:"Настроювані..."},Summary:{"Summary for":e=>`Резюме для ${e}`},ScheduleRangeCombo:{completeview:"Увесь розклад",currentview:"Видима область розкладу",daterange:"Діапазон дат",completedata:"Увесь розклад (усі події)"},SchedulerExportDialog:{"Schedule range":"Діапазон розкладу","Export from":"З","Export to":"До"},ExcelExporter:{"No resource assigned":"Немає виділених ресурсів"},CrudManagerView:{serverResponseLabel:"Відповідь сервера:"},DurationColumn:{Duration:"Тривалість"}},M=d.publishLocale(R),w={localeName:"Uk",localeDesc:"Українська",localeCode:"uk-UA",ConstraintTypePicker:{none:"Немає",assoonaspossible:"Якомога швидше",aslateaspossible:"Якомога пізніше",muststarton:"Треба почати в",mustfinishon:"Треба завершити до",startnoearlierthan:"Почати не раніше, ніж",startnolaterthan:"Почати не пізніше, ніж",finishnoearlierthan:"Завершити не раніше, ніж",finishnolaterthan:"Завершити не пізніше, ніж"},SchedulingDirectionPicker:{Forward:"Вперед",Backward:"Назад",inheritedFrom:"Успадковано від",enforcedBy:"Застосовано"},CalendarField:{"Default calendar":"Стандартний календар",editCalendar:"Редагувати календар"},TaskEditorBase:{Information:"Інформація",Save:"Зберегти",Cancel:"Скасувати",Delete:"Видалити",calculateMask:"Обчислення...",saveError:"Не вдається зберегти, спершу виправте помилки",repeatingInfo:"Перегляд повторюваної події",editRepeating:"Редагувати"},TaskEdit:{editEvent:"Редагувати подію",ConfirmDeletionTitle:"Підтвердити видалення",ConfirmDeletionMessage:"Справді видалити подію?"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"34em"},SchedulerGeneralTab:{labelWidth:"6em",General:"Загальне",Name:"Назва",Resources:"Ресурси","% complete":"% виконано",Duration:"Тривалість",Start:"Початок",Finish:"Завершення",Effort:"Трудозатрати",Preamble:"Преамбула",Postamble:"Постамбула"},GeneralTab:{labelWidth:"6.5em",General:"Загальне",Name:"Назва","% complete":"% виконано",Duration:"Тривалість",Start:"Початок",Finish:"Завершення",Effort:"Трудозатрати",Dates:"Дати"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Додаткові",Calendar:"Календар","Scheduling mode":"Режим планування","Effort driven":"Планування з фіксованим обсягом роботи","Manually scheduled":"Ручне планування","Constraint type":"Вид обмеження","Constraint date":"Дата обмеження",Inactive:"Неактивн.","Ignore resource calendar":"Ігнорувати календар ресурсів"},CalendarEditorDatePicker:{addException:"Додати виняток",addWeek:"Додайте тиждень"},CalendarEditorExceptionTab:{addException:"Додати виняток",removeException:"Видалити виняток",noRows:"Винятків не додано"},CalendarEditorWeekTab:{addWeek:"Додайте тиждень",removeWeek:"Видалити тиждень"},CalendarEditor:{daysAreWorkingByDefault:"Дні робочі за замовчуванням",workingTimeCalendar:"Календар робочого часу",exceptions:"Винятки",general:"Загальний",name:"Ім'я",parent:"Батько",save:"зберегти",weeks:"тижнів",error:"Помилка",inputErrors:"Є помилки введення. Виправте їх, перш ніж зберегти зміни.",delete:"Видалити",addCalendar:"Додайте календар",confirmation:"Підтвердження",removeCalendarWithChildren:"У календарі є дочірні календарі. Натисніть «Так», щоб видалити календар із дочірніми елементами.",removeCalendarAndLinks:"Календар використовується деякими записами. Натисніть «Так», щоб від’єднати їх і видалити календар.",newException:"Новий виняток",newWeek:"Новий тиждень"},CalendarEditorDateInfo:{isWorking:" працює",isNotWorking:" не працює",basedOn:" на основі:",byDefault:"за замовчуванням",rangeTpl:(e,t)=>`${e} - ${t}`},CalendarEditorLegend:{workingDay:"Робочий день",nonWorkingDay:"Неробочий день"},AvailabilityRangeError:{errorOverlap:"Є діапазони, що перекриваються",errorMissingDate:"Необхідно вказати час початку та закінчення",errorStartAfterEnd:"Час початку не може бути після часу завершення"},CalendarEditorExceptionPanel:{name:"Ім'я",from:"Від",to:"до",is:"Є",nonWorking:"Неробочий",working:"Працює",hours:"години",repeat:"Повторіть",repeatEnd:"Повторити кінець",errorMissingDate:"Необхідний діапазон дат винятку",errorStartAfterEnd:"Дата «Від» не може бути після дати «До».",errorStartAndEndRepeatNumberMismatch:"Виняток має починатися і закінчуватися однакову кількість разів"},CalendarEditorWeekPanel:{name:"Ім'я",from:"Від",to:"до",days:"днів",copyDay:"День копіювання",pasteDay:"Вставити день",stopCopying:"Припинити копіювання"},CalendarEditorAvailabilityRangeContainer:{addRange:"Додайте діапазон",removeRange:"Видалити діапазон"},CalendarEditorWeekGrid:{errorStartAfterEnd:"Дата «Від» не може бути після дати «До».",errorNoDefaultWeek:"Потрібна конфігурація тижня",errorMultipleDefaultWeeks:"Вказано більше одного тижня за замовчуванням",errorNoWeekAvailability:"Тиждень повинен передбачати певний робочий час",errorInvalidWeekAvailability:"Тиждень має помилки налаштування робочого часу",noRows:"Немає доданих тижнів"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Додаткові",Calendar:"Календар","Scheduling mode":"Режим планування","Effort driven":"Планування з фіксованим обсягом роботи","Manually scheduled":"Ручне планування","Constraint type":"Вид обмеження","Constraint date":"Дата обмеження",Constraint:"Обмеження",Rollup:"Зведення",Inactive:"Неактивн.","Ignore resource calendar":"Ігнорувати календар ресурсів","Scheduling direction":"Напрямок планування",projectBorder:"Межа проекту",ignore:"Ігнорувати",honor:"Честь",askUser:"Запитайте користувача"},DependencyTab:{Predecessors:"Попередні події",Successors:"Наступні події",ID:"Ідентифікатор",Name:"Назва",Type:"Тип",Lag:"Відставання від графіку",cyclicDependency:"Циклічна залежність",invalidDependency:"Недопустима залежність"},NotesTab:{Notes:"Notes"},ResourceCalendarColumn:{calendar:"Календар"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Ресурси",Resource:"Ресурс",Units:"Одиниці вимірювання"},RecurrenceTab:{title:"Повторити"},SchedulingModePicker:{Normal:"Звичайний","Fixed Duration":"Фіксована тривалість","Fixed Units":"Фіксовані одиниці","Fixed Effort":"Фіксований обсяг роботи"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">виділено {allocated} з {available}</span>',barTipOnDate:'<b>{resource}</b>  {startDate}<br><span class="{cls}">виділено {allocated} з {available}</span>',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} з {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">виділено {allocated} з {available}</span>:<br>{assignments}',groupBarTipOnDate:'{startDate}<br><span class="{cls}">виділено {allocated} з {available}</span>:<br>{assignments}',plusMore:"Ще +{value}"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">виділено {allocated}</span>',barTipOnDate:'<b>{event}</b> {startDate}<br><span class="{cls}">виділено {allocated}</span>',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">виділено {allocated} з {available}</span>:<br>{assignments}',groupBarTipOnDate:'{startDate}<br><span class="{cls}">виділено {allocated} з {available}</span>:<br>{assignments}',plusMore:"Ще +{value}",nameColumnText:"Ресурс / Подія"},SchedulingIssueResolutionPopup:{"Cancel changes":"Скасувати зміни й нічого не робити",schedulingConflict:"Конфлікт планування",emptyCalendar:"Помилка конфігурації календаря",cycle:"Планування циклу",Apply:"Застосувати"},CycleResolutionPopup:{dependencyLabel:"Виберіть залежність:",invalidDependencyLabel:"Виявлено неприпустимі залежності, проблеми з якими необхідно вирішити:"},DependencyEdit:{Active:"Активн."},SchedulerProBase:{propagating:"Обчислення проекту",storePopulation:"Завантаження даних",finalizing:"Підведення остаточних результатів"},EventSegments:{splitEvent:"Розділити подію",renameSegment:"Перейменувати"},NestedEvents:{deNestingNotAllowed:"Скасування вкладень заборонено",nestingNotAllowed:"Вкладення заборонено"},VersionGrid:{compare:"Порівняти",description:"Опис",occurredAt:"Сталося о(б)",rename:"Перейменувати",restore:"Відновити",stopComparing:"Вийти з режиму порівняння"},Versions:{entityNames:{TaskModel:"Завдання",AssignmentModel:"Призначення",DependencyModel:"Посилання",ProjectModel:"Проект",ResourceModel:"Ресурс",other:"Об’єкт"},entityNamesPlural:{TaskModel:"Завдання",AssignmentModel:"Призначення",DependencyModel:"Посилання",ProjectModel:"Проекти",ResourceModel:"Ресурси",other:"Об’єкти"},transactionDescriptions:{update:"Змінено {n} {entities}",add:"Додано {n} {entities}",remove:"Видалено {n} {entities}",move:"Переміщено {n} {entities}",mixed:"Змінено {n} {entities}"},addEntity:"Додано {type} **{name}**",removeEntity:"Видалено {type} **{name}**",updateEntity:"Змінено {type} **{name}**",moveEntity:"Переміщено {type} **{name}** з {from} в {to}",addDependency:"Додано посилання з **{from}** на **{to}**",removeDependency:"Видалено посилання з **{from}** на **{to}**",updateDependency:"Редаговано посилання з **{from}** на **{to}**",addAssignment:"Виділено **{resource}** на **{event}**",removeAssignment:"Скасовано виділення **{resource}** на **{event}**",updateAssignment:"Змінено параметри виділення **{resource}** на **{event}**",noChanges:"Без змін",nullValue:"немає",versionDateFormat:"М/Д/РРРР г:хв A",undid:"Невнесені зміни",redid:"Повторені зміни",editedTask:"Відредаговані властивості завдання",deletedTask:"Завдання видалено",movedTask:"Переміщене завдання",movedTasks:"Переміщені завдання"}},A=d.publishLocale(w);if(typeof l.exports=="object"&&typeof c=="object"){var x=(e,t,a,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,r)&&r!==a&&Object.defineProperty(e,r,{get:()=>t[r],enumerable:!(n=Object.getOwnPropertyDescriptor(t,r))||n.enumerable});return e};l.exports=x(l.exports,c)}return l.exports});