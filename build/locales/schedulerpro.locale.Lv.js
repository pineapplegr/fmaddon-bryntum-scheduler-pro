(function(u,s){var l=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],s);else if(typeof module=="object"&&module.exports)module.exports=s();else{var p=s(),k=l?exports:u;for(var c in p)k[c]=p[c]}})(typeof self<"u"?self:void 0,()=>{var u={},s={exports:u},l=Object.defineProperty,p=Object.getOwnPropertyDescriptor,k=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,b=(e,a,t)=>a in e?l(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,y=(e,a)=>{for(var t in a)l(e,t,{get:a[t],enumerable:!0})},D=(e,a,t,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of k(a))!c.call(e,i)&&i!==t&&l(e,i,{get:()=>a[i],enumerable:!(n=p(a,i))||n.enumerable});return e},f=e=>D(l({},"__esModule",{value:!0}),e),z=(e,a,t)=>(b(e,typeof a!="symbol"?a+"":a,t),t),v={};y(v,{default:()=>C}),s.exports=f(v);var o=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,g=class m{static mergeLocales(...a){let t={};return a.forEach(n=>{Object.keys(n).forEach(i=>{typeof n[i]=="object"?t[i]={...t[i],...n[i]}:t[i]=n[i]})}),t}static trimLocale(a,t){let n=(i,r)=>{a[i]&&(r?a[i][r]&&delete a[i][r]:delete a[i])};Object.keys(t).forEach(i=>{Object.keys(t[i]).length>0?Object.keys(t[i]).forEach(r=>n(i,r)):n(i)})}static normalizeLocale(a,t){if(!a)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof a=="string"){if(!t)throw new Error('"config" parameter can not be empty');t.locale?t.name=a||t.name:t.localeName=a}else t=a;let n={};if(t.name||t.locale)n=Object.assign({localeName:t.name},t.locale),t.desc&&(n.localeDesc=t.desc),t.code&&(n.localeCode=t.code),t.path&&(n.localePath=t.path);else{if(!t.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);n=Object.assign({},t)}for(let i of["name","desc","code","path"])n[i]&&delete n[i];if(!n.localeName)throw new Error("Locale name can not be empty");return n}static get locales(){return o.bryntum.locales||{}}static set locales(a){o.bryntum.locales=a}static get localeName(){return o.bryntum.locale||"En"}static set localeName(a){o.bryntum.locale=a||m.localeName}static get locale(){return m.localeName&&this.locales[m.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(a,t){let{locales:n}=o.bryntum,i=m.normalizeLocale(a,t),{localeName:r}=i;return!n[r]||t===!0?n[r]=i:n[r]=this.mergeLocales(n[r]||{},i||{}),n[r]}};z(g,"skipLocaleIntegrityCheck",!1);var d=g;o.bryntum=o.bryntum||{},o.bryntum.locales=o.bryntum.locales||{},d._$name="LocaleHelper";var h={localeName:"Lv",localeDesc:"Latviešu",localeCode:"lv-LV",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Noņemt atkarību"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Deaktivizēt atkarību"},CycleEffectDescription:{descriptionTpl:"Ir atrasts cikls, ko veido: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'"{0}" kalendārs nenodrošina nekādus darba laika intervālus.',forwardDescriptionTpl:'Uzdevumu "{2}" nevar izpildīt. Kalendāram "{0}" nav darba laika pēc {1}.',backwardDescriptionTpl:'Uzdevumu "{2}" nevar izpildīt. Kalendāram "{0}" nav darba laika pirms {1}.',noIntersectionDescriptionTpl:'Uzdevumu "{2}" nevar izpildīt. Tā kalendāram "{0}" un tā resursu kalendāriem nav kopīga darba laika.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Izmantojiet 24-stundu kalendāru ar brīvdienām sestdienās un svētdienās."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Izmantojiet 8-stundu kalendāru (08.00–12.00, 13.00–17.00) ar brīvdienām sestdienās un svētdienās."},IgnoreProjectConstraintResolution:{descriptionTpl:"Ignorējiet projekta robežu un turpiniet veikt izmaiņas."},ProjectConstraintConflictEffectDescription:{startDescriptionTpl:'Jūs pārvietojāt uzdevumu "{0}", lai sāktu darbu šādā datumā: {1}. Tas ir pirms projekta sākuma datuma {2}.',endDescriptionTpl:'Jūs pārvietojāt uzdevumu "{0}", lai pabeigtu {1}. Tas ir pēc projekta beigu datuma {2}.'},HonorProjectConstraintResolution:{descriptionTpl:"Pielāgojiet uzdevumu, lai ievērotu projekta robežu."},IgnoreResourceCalendarEmptyCalendarEffectResolution:{descriptionTpl:"Ignorējiet resursu kalendārus un ieplānojiet uzdevumu, izmantojot tikai savu kalendāru."},ConflictEffectDescription:{descriptionTpl:"Pamanīts plānošanas konflikts: {0} konfliktē ar {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Projekta sākuma datums {0}",endDateDescriptionTpl:"Projekta beigu datums {0}"},DependencyType:{long:["No sākuma līdz sākumam","No sākuma līdz beigām","No beigām līdz sākumam","No beigām līdz beigām"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'Manuāli ieplānotais "{2}" liek tam pakārtotajiem notikumiem sākties ne agrāk kā {0}',endDescriptionTpl:'Manuāli ieplānotais "{2}" liek tam pakārtotajiem notikumiem beigties ne vēlāk kā {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Atspējot manuālu plānošanu šim: "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Atkarība ({2}) no "{3}" līdz "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Noņemt atkarību "{1}" no "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Deaktivizēt atkarību no "{1}" līdz "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Uzdevuma "{2}" {3} {0} ierobežojums',endDateDescriptionTpl:'Uzdevuma "{2}" {3} {1} ierobežojums',constraintTypeTpl:{startnoearlierthan:"Sākt ne agrāk kā",finishnoearlierthan:"Pabeigt ne agrāk kā",muststarton:"Ir jāsākas:",mustfinishon:"Ir jābeidzas:",startnolaterthan:"Sākt ne vēlāk kā",finishnolaterthan:"Pabeigt ne vēlāk kā"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Noņemt "{1}" ierobežojumu uzdevumam "{0}"'},PostponeDateConstraintConflictResolution:{descriptionTpl:'Atlikt risinājumu un atzīmēt uzdevumu "{0}" ar konflikta marķieri'}},A=d.publishLocale(h),j={localeName:"Lv",localeDesc:"Latviešu",localeCode:"lv-LV",Object:{Yes:"Jā",No:"Nē",Cancel:"Atcelt",Ok:"Labi",Week:"Nedēļa",None:"Nav"},CodeEditor:{apply:"Pielietot",autoApply:"Automātiski pielietot",downloadCode:"Lejupielādēt kodu",editor:"Koda redaktors",viewer:"Koda skatītājs"},ColorPicker:{noColor:"Nav krāsas"},Combo:{noResults:"Nav rezultātu",recordNotCommitted:"Ierakstu nevarēja pievienot",addNewValue:e=>`Pievienot ${e}`},FilePicker:{file:"Fails"},Field:{badInput:"Nederīga lauka vērtība",patternMismatch:"Vērtībai ir jāatbilst noteiktam modelim",rangeOverflow:e=>`Vērtībai ir jābūt ne lielākai kā ${e.max}`,rangeUnderflow:e=>`Vērtībai ir jābūt vismaz ${e.min}`,stepMismatch:"Vērtībai ir jāietilpst solī",tooLong:"Vērtībai ir jābūt īsākai",tooShort:"Vērtībai ir jābūt garākai",typeMismatch:"Vērtībai jābūt īpašā formātā",valueMissing:"Šis lauks ir obligāts",invalidValue:"Nederīga lauka vērtība",minimumValueViolation:"Minimālās vērtības pārkāpums",maximumValueViolation:"Maksimālās vērtības pārkāpums",fieldRequired:"Šis lauks ir obligāts",validateFilter:"Sarakstā ir jāatlasa vērtība"},DateField:{invalidDate:"Nederīga datuma ievade"},DatePicker:{gotoPrevYear:"Pāriet uz iepriekšējo gadu",gotoPrevMonth:"Pāriet uz iepriekšējo mēnesi",gotoNextMonth:"Pāriet uz nākamo mēnesi",gotoNextYear:"Pāriet uz nākamo gadu"},NumberFormat:{locale:"lv-LV",currency:"EUR"},DurationField:{invalidUnit:"Nederīga vienība"},TimeField:{invalidTime:"Nederīga laika ievade"},TimePicker:{hour:"Stunda",minute:"Minūte",second:"Sekunde"},List:{loading:"Ielādē...",selectAll:"Atlasīt visu"},GridBase:{loadMask:"Ielādē...",syncMask:"Notiek izmaiņu saglabāšana, lūdzu, uzgaidiet..."},PagingToolbar:{firstPage:"Doties uz pirmo lapu",prevPage:"Doties uz iepriekšējo lapu",page:"Lapa",nextPage:"Doties uz nākamo lapu",lastPage:"Doties uz pēdējo lapu",reload:"Pārlādēt pašreizējo lapu",noRecords:"Nav parādāmu ierakstu",pageCountTemplate:e=>`no ${e.lastPage}`,summaryTemplate:e=>`Rāda ierakstus ${e.start} — ${e.end} no ${e.allCount}`},PanelCollapser:{Collapse:"Sakļaut",Expand:"Izvērst"},Popup:{close:"Aizvērt"},UndoRedo:{Undo:"Atsaukt",Redo:"Atsaukt atcelšanu",UndoLastAction:"Atsaukt pēdējo darbību",RedoLastAction:"Atsaukt pēdējo darbības atcelšanu",NoActions:"Atsaukšanas rindā nav elementu"},FieldFilterPicker:{equals:"vienāds ar",doesNotEqual:"nav vienāds ar",isEmpty:"tukšs",isNotEmpty:"nav tukšs",contains:"satur",doesNotContain:"nesatur",startsWith:"sākas ar",endsWith:"beidzas ar",isOneOf:"viens no",isNotOneOf:"nav viens no",isGreaterThan:"lielāks nekā",isLessThan:"mazāks nekā",isGreaterThanOrEqualTo:"lielāks par vai vienāds ar",isLessThanOrEqualTo:"mazāks vai vienāds ar",isBetween:"starp",isNotBetween:"nav starp",isBefore:"pirms",isAfter:"pēc",isToday:"šodien",isTomorrow:"rītdien",isYesterday:"vakar",isThisWeek:"šī nedēļa",isNextWeek:"nākamā nedēļa",isLastWeek:"pagājusī nedēļa",isThisMonth:"šis mēnesis",isNextMonth:"nākamais mēnesis",isLastMonth:"pagājušais mēnesis",isThisYear:"šis gads",isNextYear:"nākamais gads",isLastYear:"pagājušais gads",isYearToDate:"no gada sākuma",isTrue:"patiess",isFalse:"aplams",selectAProperty:"Atlasiet rekvizītu",selectAnOperator:"Atlasiet operatoru",caseSensitive:"Reģistrjutīgs",and:"un",dateFormat:"D/M/YY",selectValue:"Izvēlieties vērtību",selectOneOrMoreValues:"Atlasiet vienu vai vairākas vērtības",enterAValue:"Ievadiet vērtību",enterANumber:"Ievadiet numuru",selectADate:"Atlasiet datumu",selectATime:"Izvēlieties laiku"},FieldFilterPickerGroup:{addFilter:"Pievienot filtru"},DateHelper:{locale:"lv-LV",weekStartDay:0,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milisekunde",plural:"milisekundes",abbrev:"ms"},{single:"emillisecond",plural:"ems",abbrev:"ems"},{single:"sekunde",plural:"sekundes",abbrev:"sek."},{single:"esecond",plural:"eseconds",abbrev:"es"},{single:"minūte",plural:"minūtes",abbrev:"min."},{single:"eminute",plural:"eminutes",abbrev:"emin"},{single:"stunda",plural:"stundas",abbrev:"st."},{single:"ehour",plural:"ehours",abbrev:"eh"},{single:"diena",plural:"dienas",abbrev:"d."},{single:"eday",plural:"edays",abbrev:"ed"},{single:"nedēļa",plural:"nedēļas",abbrev:"ned."},{single:"eweek",plural:"eweeks",abbrev:"ew"},{single:"mēnesis",plural:"mēneši",abbrev:"mēn."},{single:"emonth",plural:"emonths",abbrev:"emon"},{single:"ceturksnis",plural:"ceturkšņi",abbrev:"cet."},{single:"equarter",plural:"equarters",abbrev:"eq"},{single:"gads",plural:"gadi",abbrev:"g."},{single:"eyear",plural:"eyears",abbrev:"eyr"},{single:"desmitgade",plural:"desmitgades",abbrev:"desmitg."},{single:"edecade",plural:"edecades",abbrev:"edec"}],unitAbbreviations:[["ms"],[],["s","sek."],[],["min.","min."],[],["h","st."],[],["d."],[],["ned.","ned."],[],["mēn.","mēn.","mēn."],[],["cet.","cet.","cet."],[],["g.","g."],[],["desmitg."],[]],parsers:{L:"DD.MM.GGGG.",LT:"HH.mm A",LTS:"HH.mm.ss A"},ordinalSuffix:e=>{let a=["11","12","13"].find(n=>e.endsWith(n)),t=".";if(!a){let n=e[e.length-1];t={1:".",2:".",3:"."}[n]||"."}return e+t}}},R=d.publishLocale(j),N=new String,P={localeName:"Lv",localeDesc:"Latviešu",localeCode:"lv-LV",ColumnPicker:{column:"Kolonna",columnsMenu:"Kolonnas",hideColumn:"Paslēpt kolonnu",hideColumnShort:"Paslēpt",newColumns:"Jaunas kolonnas"},Filter:{applyFilter:"Lietot filtru",filter:"Filtrs",editFilter:"Rediģēt filtru",on:"šādā datumā",before:"pirms",after:"pēc",equals:"vienāds ar",lessThan:"mazāks par",moreThan:"lielāks par",removeFilter:"Noņemt filtru",disableFilter:"Atspējot filtru"},FilterBar:{enableFilterBar:"Rādīt filtra joslu",disableFilterBar:"Paslēpt filtra joslu"},Group:{group:"Grupa",groupAscending:"Grupēt augošā secībā",groupDescending:"Grupēt dilstošā secībā",groupAscendingShort:"Augoši",groupDescendingShort:"Dilstoši",stopGrouping:"Apturēt grupēšanu",stopGroupingShort:"Apturēt"},HeaderMenu:{moveBefore:e=>`Pārvietot pirms "${e}"`,moveAfter:e=>`Pārvietot pēc "${e}"`,collapseColumn:"Sakļaut kolonnu",expandColumn:"Izvērst kolonnu"},ColumnRename:{rename:"Pārdēvēt"},MergeCells:{mergeCells:"Apvienot šūnas",menuTooltip:"Apvienot šūnas ar vienādu vērtību, ja kārto pēc šīs kolonnas"},Search:{searchForValue:"Meklēt vērtību"},Sort:{sort:"Kārtot",sortAscending:"Kārtot augošā secībā",sortDescending:"Kārtot dilstošā secībā",multiSort:"Vairāku līmeņu kārtošana",removeSorter:"Noņemt kārtotāju",addSortAscending:"Pievienot kārtotāju augošā secībā",addSortDescending:"Pievienot kārtotāju dilstošā secībā",toggleSortAscending:"Mainīt uz augošu secību",toggleSortDescending:"Mainīt uz dilstošu secību",sortAscendingShort:"Augoši",sortDescendingShort:"Dilstoši",removeSorterShort:"Noņemt",addSortAscendingShort:"+ Augoši",addSortDescendingShort:"+ Dilstoši"},Split:{split:"Sadalīt",unsplit:"Atcelt sadali",horizontally:"Horizontāli",vertically:"Vertikāli",both:"Abi"},LockRows:{lockRow:"Bloķēt rindu",unlockRow:"Atbloķēt rindu"},Column:{columnLabel:e=>`${e.text?`Kolonna: ${e.text}. `:""}ATSTARPES TAUSTIŅŠ kontekstizvēlnei${e.sortable?", TAUSTIŅŠ ENTER kārtošanai":""}`,cellLabel:N},Checkbox:{toggleRowSelect:"Pārslēgt rindas atlasi",toggleSelection:"Pārslēgt visas datu kopas atlasi"},RatingColumn:{cellLabel:e=>{var a;return`${e.text?e.text:""} ${(a=e.location)!=null&&a.record?`vērtējums: ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Neizdevās ielādēt datus!",syncFailedMessage:"Datu sinhronizācija neizdevās!",unspecifiedFailure:"Nenorādīta kļūme",networkFailure:"Tīkla kļūda",parseFailure:"Neizdevās parsēt servera atbildi",serverResponse:"Servera atbilde:",noRows:"Nav parādāmu ierakstu",moveColumnLeft:"Pārvietot uz kreiso sadaļu",moveColumnRight:"Pārvietot uz labo sadaļu",moveColumnTo:e=>`Move column to ${e}`},CellMenu:{removeRow:"Dzēst"},RowCopyPaste:{copyRecord:"Kopēt",cutRecord:"Izgriezt",pasteRecord:"Ielīmēt",rows:"rindas",row:"rinda"},CellCopyPaste:{copy:"Kopēt",cut:"Izgriezt",paste:"Ielīmēt"},PdfExport:{"Waiting for response from server":"Gaida atbildi no servera...","Export failed":"Eksportēšana neizdevās","Server error":"Servera kļūda","Generating pages":"Ģenerē lapas","Click to abort":"Noklikšķiniet, lai atceltu"},ExportDialog:{width:"40 em",labelWidth:"12 em",exportSettings:"Eksportēšanas iestatījumi",export:"Eksportēt",printSettings:"Drukas iestatījumi",print:"Drukāt",exporterType:"Noteikt pielāgojumu lapai",cancel:"Atcelt",fileFormat:"Faila formāts",rows:"Rindas",alignRows:"Izlīdzināt rindas",columns:"Kolonnas",paperFormat:"Papīra formāts",orientation:"Orientācija",repeatHeader:"Atkārtot galveni"},ExportRowsCombo:{all:"Visas rindas",visible:"Redzamās rindas"},ExportOrientationCombo:{portrait:"Portretorientācija",landscape:"Ainavorientācija"},SinglePageExporter:{singlepage:"Viena lapa"},MultiPageExporter:{multipage:"Vairākas lapas",exportingPage:({currentPage:e,totalPages:a})=>`Exporting page ${e}/${a}`},MultiPageVerticalExporter:{multipagevertical:"Vairākas lapas (vertikāli)",exportingPage:({currentPage:e,totalPages:a})=>`Exporting page ${e}/${a}`},RowExpander:{loading:"Ielādē",expand:"Izvērst",collapse:"Sakļaut"},TreeGroup:{group:"Grupēt pēc",stopGrouping:"Apturēt grupēšanu",stopGroupingThisColumn:"Atgrupēt kolonnu"}},I=d.publishLocale(P),T={localeName:"Lv",localeDesc:"Latviešu",localeCode:"lv-LV",Object:{newEvent:"Jauns notikums"},ResourceInfoColumn:{eventCountText:e=>e+" notikums"+(e!==1?"(i)":"")},Dependencies:{from:"No",to:"Līdz",valid:"Derīgs",invalid:"Nederīgs"},DependencyType:{SS:"SS",SF:"SB",FS:"BS",FF:"BB",StartToStart:"No sākuma līdz sākumam",StartToEnd:"No sākuma līdz beigām",EndToStart:"No beigām līdz sākumam",EndToEnd:"No beigām līdz beigām",short:["SS","SB","BS","BB"],long:["No sākuma līdz sākumam","No sākuma līdz beigām","No beigām līdz sākumam","No beigām līdz beigām"]},DependencyEdit:{From:"No",To:"Līdz",Type:"Tips",Lag:"Aizkave","Edit dependency":"Rediģēt atkarību",Save:"Saglabāt",Delete:"Dzēst",Cancel:"Atcelt",StartToStart:"No sākuma līdz sākumam",StartToEnd:"No sākuma līdz beigām",EndToStart:"No beigām līdz sākumam",EndToEnd:"No beigām līdz beigām"},EventEdit:{Name:"Nosaukums",Resource:"Resurss",Start:"Sākums",End:"Beigas",Save:"Saglabāt",Delete:"Dzēst",Cancel:"Atcelt","Edit event":"Rediģēt notikumu",Repeat:"Atkārtot"},EventDrag:{eventOverlapsExisting:"Notikums pārklājas ar esošu notikumu šim resursam",noDropOutsideTimeline:"Notikums var nebūt pilnībā atmests ārpus laika skalas"},SchedulerBase:{"Add event":"Pievienot notikumu","Delete event":"Dzēst notikumu","Unassign event":"Notikuma piešķires noņemšana",color:"Krāsa"},TimeAxisHeaderMenu:{pickZoomLevel:"Tālummainīt",activeDateRange:"Datumu diapazons",startText:"Sākuma datums",endText:"Beigu datums",todayText:"Today"},EventCopyPaste:{copyEvent:"Kopēt notikumu",cutEvent:"Izgriezt notikumu",pasteEvent:"Ielīmēt notikumu"},EventFilter:{filterEvents:"Filtrēt uzdevumus",byName:"Pēc nosaukuma"},TimeRanges:{showCurrentTimeLine:"Rādīt pašreizējo laika skalu"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Sekundes"},minuteAndHour:{topDateFormat:"ddd DD/MM, hA",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd DD/MM",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Diena"},day:{name:"Diena/stundas"},week:{name:"Nedēļa/stundas"},dayAndWeek:{displayDateFormat:"ll LST",name:"Nedēļa/dienas"},dayAndMonth:{name:"Mēnesis"},weekAndDay:{displayDateFormat:"ll LST",name:"Nedēļa"},weekAndMonth:{name:"Nedēļas"},weekAndDayLetter:{name:"Nedēļas/darbdienas"},weekDateAndMonth:{name:"Mēneši/nedēļas"},monthAndYear:{name:"Mēneši"},year:{name:"Gadi"},manyYears:{name:"Vairāki gadi"}},RecurrenceConfirmationPopup:{"delete-title":"Jūs dzēšat notikumu","delete-all-message":"Vai vēlaties izdzēst visus šī notikuma gadījumus?","delete-further-message":"Vai vēlaties dzēst šo un visus turpmākos šī notikuma gadījumus vai tikai atlasīto gadījumu?","delete-only-this-message":"Vai vēlaties dzēst šo notikuma gadījumu?","delete-further-btn-text":"Dzēst visus turpmākos notikumus","delete-only-this-btn-text":"Dzēst tikai šo notikumu","update-title":"Jūs maināt atkārtotu notikumu","update-all-message":"Vai vēlaties mainīt visus šī notikuma gadījumus?","update-further-message":"Vai vēlaties mainīt tikai šo notikuma gadījumu vai arī šo un visus turpmākos gadījumus?","update-only-this-message":"Vai vēlaties mainīt šo notikuma gadījumu?","update-further-btn-text":"Visi turpmākie notikumi","update-only-this-btn-text":"Tikai šis notikums",Yes:"Jā",Cancel:"Atcelt",width:600},RecurrenceLegend:{" and ":" un ",Daily:"Katru dienu","Weekly on {1}":({days:e})=>`Katru nedēļu šādās dienās: ${e}`,"Monthly on {1}":({days:e})=>`Katru mēnesi šādās dienās: ${e}`,"Yearly on {1} of {2}":({days:e,months:a})=>`Katru gadu šādās dienās: ${e}, šādos mēnešos: ${a}`,"Every {0} days":({interval:e})=>`Ik pēc ${e} dienas(ām)`,"Every {0} weeks on {1}":({interval:e,days:a})=>`Ik pēc ${e} nedēļas(ām): ${a}`,"Every {0} months on {1}":({interval:e,days:a})=>`Ik pēc ${e} mēneša(iem): ${a}`,"Every {0} years on {1} of {2}":({interval:e,days:a,months:t})=>`Ik pēc ${e} gada(iem): ${a}, ${t}`,position1:"pirmā",position2:"otrā",position3:"trešā",position4:"ceturtā",position5:"piektā","position-1":"pēdējā",day:"diena",weekday:"darbdiena","weekend day":"nedēļas nogales diena",daysFormat:({position:e,days:a})=>`${e} ${a}`},RecurrenceEditor:{"Repeat event":"Atkārtot notikumu",Cancel:"Atcelt",Save:"Saglabāt",Frequency:"Biežums",Every:"Ik pēc",DAILYintervalUnit:"dienas(ām)",WEEKLYintervalUnit:"nedēļas(ām)",MONTHLYintervalUnit:"mēneša(iem)",YEARLYintervalUnit:"gada(iem)",Each:"Katru",on:"virs",the:"uz","On the":"Šādā datumā:","End repeat":"Beigt atkārtošanu","time(s)":"reizi(es)",Days:"Dienas",Months:"Mēneša"},RecurrenceDaysCombo:{day:"diena",weekday:"darbdiena","weekend day":"nedēļas nogales diena"},RecurrencePositionsCombo:{position1:"pirmais",position2:"otrais",position3:"trešais",position4:"ceturtais",position5:"piektais","position-1":"pēdējais"},RecurrenceStopConditionCombo:{Never:"Nekad",After:"Pēc","On date":"Datums"},RecurrenceFrequencyCombo:{None:"Neatkārtot",Daily:"Katru dienu",Weekly:"Ik nedēļu šādā dienā: {0}",Monthly:"Ik mēnesi",Yearly:"Ik gadu"},RecurrenceCombo:{None:"Nav",Custom:"Pielāgošana..."},Summary:{"Summary for":e=>`Kopsavilkums par ${e}`},ScheduleRangeCombo:{completeview:"Viss grafiks",currentview:"Redzamais grafiks",daterange:"Datumu diapazons",completedata:"Viss grafiks (visiem notikumiem)"},SchedulerExportDialog:{"Schedule range":"Grafika diapazons","Export from":"No","Export to":"Līdz"},ExcelExporter:{"No resource assigned":"Nav piešķirtu resursu"},CrudManagerView:{serverResponseLabel:"Servera atbilde:"},DurationColumn:{Duration:"Ilgums"}},L=d.publishLocale(T),E={localeName:"Lv",localeDesc:"Latviešu",localeCode:"lv-LV",ConstraintTypePicker:{none:"Nav",assoonaspossible:"Pēc iespējas ātrāk",aslateaspossible:"Pēc iespējas vēlāk",muststarton:"Ir jāsākas:",mustfinishon:"Ir jābeidzas:",startnoearlierthan:"Sākt ne agrāk kā",startnolaterthan:"Sākt ne vēlāk kā",finishnoearlierthan:"Pabeigt ne agrāk kā",finishnolaterthan:"Pabeigt ne vēlāk kā"},SchedulingDirectionPicker:{Forward:"Uz priekšu",Backward:"Uz atpakaļu",inheritedFrom:"Pārmantots no",enforcedBy:"Ieviesa"},CalendarField:{"Default calendar":"Noklusējuma kalendārs",editCalendar:"Rediģēt kalendāru"},TaskEditorBase:{Information:"Information",Save:"Saglabāt",Cancel:"Atcelt",Delete:"Dzēst",calculateMask:"Notiek aprēķināšana...",saveError:"Nevar saglabāt, vispirms izlabojiet kļūdas",repeatingInfo:"Atkārtota notikuma skatīšana",editRepeating:"Rediģēt"},TaskEdit:{editEvent:"Rediģēt notikumu",ConfirmDeletionTitle:"Apstiprināt dzēšanu",ConfirmDeletionMessage:"Vai tiešām vēlaties dzēst notikumu?"},GanttTaskEditor:{editorWidth:"44 em"},SchedulerTaskEditor:{editorWidth:"34 em"},SchedulerGeneralTab:{labelWidth:"6 em",General:"Vispārīgs",Name:"Nosaukums",Resources:"Resursi","% complete":"% pabeigts(i)",Duration:"Ilgums",Start:"Sākums",Finish:"Beigas",Effort:"Pūliņi",Preamble:"Preambula",Postamble:"Postambula"},GeneralTab:{labelWidth:"6,5 em",General:"Vispārīgs",Name:"Nosaukums","% complete":"% pabeigts(i)",Duration:"Ilgums",Start:"Sākums",Finish:"Beigas",Effort:"Pūliņi",Dates:"Datumi"},SchedulerAdvancedTab:{labelWidth:"13 em",Advanced:"Papildiespējas",Calendar:"Kalendārs","Scheduling mode":"Plānošanas režīms","Effort driven":"Pēc pūliņu ieguldījuma","Manually scheduled":"Manuāli plānojams","Constraint type":"Ierobežojuma veids","Constraint date":"Ierobežojuma datums",Inactive:"Neaktīvs","Ignore resource calendar":"Ignorēt resursu kalendāru"},CalendarEditorDatePicker:{addException:"Pievienot izņēmumu",addWeek:"Pievienojiet nedēļu"},CalendarEditorExceptionTab:{addException:"Pievienot izņēmumu",removeException:"Noņemt izņēmumu",noRows:"Nav pievienoti izņēmumi"},CalendarEditorWeekTab:{addWeek:"Pievienojiet nedēļu",removeWeek:"Noņemt nedēļu"},CalendarEditor:{daysAreWorkingByDefault:"Dienas darbojas pēc noklusējuma",workingTimeCalendar:"Darba laika kalendārs",exceptions:"Izņēmumi",general:"Ģenerālis",name:"Vārds",parent:"Vecāks",save:"Saglabāt",weeks:"Nedēļas",error:"Kļūda",inputErrors:"Ir ievades kļūdas. Lūdzu, izlabojiet tās pirms izmaiņu saglabāšanas.",delete:"Dzēst",addCalendar:"Pievienojiet kalendāru",confirmation:"Apstiprinājums",removeCalendarWithChildren:'Kalendārā ir bērnu kalendāri. Noklikšķiniet uz "Jā", lai noņemtu kalendāru ar bērniem.',removeCalendarAndLinks:'Kalendāru izmanto daži ieraksti. Noklikšķiniet uz "Jā", lai tos atsaistītu un noņemtu kalendāru.',newException:"Jauns izņēmums",newWeek:"Jauna nedēļa"},CalendarEditorDateInfo:{isWorking:" strādā",isNotWorking:" nestrādā",basedOn:" balstoties uz:",byDefault:"pēc noklusējuma",rangeTpl:(e,a)=>`${e} - ${a}`},CalendarEditorLegend:{workingDay:"Darba diena",nonWorkingDay:"Brīvdiena"},AvailabilityRangeError:{errorOverlap:"Ir diapazoni, kas pārklājas",errorMissingDate:"Jānorāda sākuma un beigu laiks",errorStartAfterEnd:"Sākuma laiks nevar būt pēc beigu laika"},CalendarEditorExceptionPanel:{name:"Vārds",from:"No",to:"Uz",is:"Ir",nonWorking:"Nestrādājošs",working:"Darbojas",hours:"Stundas",repeat:"Atkārtojiet",repeatEnd:"Atkārtojiet beigas",errorMissingDate:"Nepieciešams izņēmuma datumu diapazons",errorStartAfterEnd:"Datums “No” nevar būt pēc datuma “Līdz”.",errorStartAndEndRepeatNumberMismatch:"Izņēmumam jāsākas un jābeidzas tikpat reižu"},CalendarEditorWeekPanel:{name:"Vārds",from:"No",to:"Uz",days:"Dienas",copyDay:"Kopēšanas diena",pasteDay:"Ielīmēšanas diena",stopCopying:"Pārtrauciet kopēšanu"},CalendarEditorAvailabilityRangeContainer:{addRange:"Pievienot diapazonu",removeRange:"Noņemt diapazonu"},CalendarEditorWeekGrid:{errorStartAfterEnd:"Datums “No” nevar būt pēc datuma “Līdz”.",errorNoDefaultWeek:"Nepieciešama nedēļas konfigurācija",errorMultipleDefaultWeeks:"Ir norādīta vairāk nekā viena noklusējuma nedēļa",errorNoWeekAvailability:"Nedēļai jāparedz zināms darba laiks",errorInvalidWeekAvailability:"Nedēļā ir darba laika konfigurācijas kļūdas",noRows:"Nav pievienotas nedēļas"},AdvancedTab:{labelWidth:"11,5 em",Advanced:"Papildiespējas",Calendar:"Kalendārs","Scheduling mode":"Plānošanas režīms","Effort driven":"Pēc pūliņu ieguldījuma","Manually scheduled":"Manuāli plānojams","Constraint type":"Ierobežojuma veids","Constraint date":"Ierobežojuma datums",Constraint:"Ierobežojums",Rollup:"Saritinājums",Inactive:"Neaktīvs","Ignore resource calendar":"Ignorēt resursu kalendāru","Scheduling direction":"Plānošanas virziens",projectBorder:"Projekta robeža",ignore:"Ignorēt",honor:"Gods",askUser:"Jautājiet lietotājam"},DependencyTab:{Predecessors:"Priekšgājēji",Successors:"Pēcnācēji",ID:"ID",Name:"Nosaukums",Type:"Tips",Lag:"Aizkave",cyclicDependency:"Cikliska atkarība",invalidDependency:"Nederīga atkarība"},NotesTab:{Notes:"Piezīmes"},ResourceCalendarColumn:{calendar:"Kalendārs"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Resursi",Resource:"Resurss",Units:"Vienības"},RecurrenceTab:{title:"Atkārtojiet"},SchedulingModePicker:{Normal:"Parasts","Fixed Duration":"Fiksēts ilgums","Fixed Units":"Fiksētas vienības","Fixed Effort":"Fiksēti pūliņi"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} no {available}</span> piešķirti',barTipOnDate:'<b>{resource}</b> datumā {startDate}<br><span class="{cls}">{allocated} no {available}</span> piešķirti',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} no {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} no {available}</span> piešķirti:<br>{assignments}',groupBarTipOnDate:'Datumā {startDate}<br><span class="{cls}">{allocated} no {available}</span> piešķirti:<br>{assignments}',plusMore:"+{value} vēl"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> piešķirti',barTipOnDate:'<b>{event}</b> šajā datumā: {startDate}<br><span class="{cls}">{allocated}</span> piešķirti',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} no {available}</span> piešķirti:<br>{assignments}',groupBarTipOnDate:'Datumā: {startDate}<br><span class="{cls}">{allocated} no {available}</span> piešķirti:<br>{assignments}',plusMore:"+{value} vēl",nameColumnText:"Resurss / notikums"},SchedulingIssueResolutionPopup:{"Cancel changes":"Atcelt izmaiņas un nedarīt neko",schedulingConflict:"Plānošanas konflikts",emptyCalendar:"Kalendāra konfigurācijas kļūda",cycle:"Plānošanas cikls",Apply:"Piemērot"},CycleResolutionPopup:{dependencyLabel:"Lūdzu, atlasiet atkarību:",invalidDependencyLabel:"Ir nederīgas atkarības, kuras ir jāatrisina:"},DependencyEdit:{Active:"Aktīva"},SchedulerProBase:{propagating:"Projekta aprēķināšana",storePopulation:"Ielādē datus",finalizing:"Rezultātu pabeigšana"},EventSegments:{splitEvent:"Sadalīt notikumu",renameSegment:"Pārdēvēt"},NestedEvents:{deNestingNotAllowed:"Ligzdojuma noņemšana nav atļauta",nestingNotAllowed:"Ligzdojuma izveide nav atļauta"},VersionGrid:{compare:"Salīdzināt",description:"Apraksts",occurredAt:"Noticis:",rename:"Pārdēvēt",restore:"Atjaunot",stopComparing:"Pārtraukt salīdzināšanu"},Versions:{entityNames:{TaskModel:"uzdevums",AssignmentModel:"piešķire",DependencyModel:"atkarība",ProjectModel:"projekts",ResourceModel:"resurss",other:"cits"},entityNamesPlural:{TaskModel:"uzdevumi",AssignmentModel:"piešķires",DependencyModel:"atkarības",ProjectModel:"projekti",ResourceModel:"resursi",other:"citi"},transactionDescriptions:{update:"Mainīts(i) {n} {entities}",add:"Pievienots(i) {n} {entities}",remove:"Noņemts(i) {n} {entities}",move:"Pārvietots(i) {n} {entities}",mixed:"Mainīts(i) {n} {entities}"},addEntity:"Pievienots {type} **{name}**",removeEntity:"Noņemts {type} **{name}**",updateEntity:"Mainīts {type} **{name}**",moveEntity:"Pārvietots {type} **{name}** no {from} līdz {to}",addDependency:"Pievienota saite no **{from}** līdz **{to}**",removeDependency:"Noņemta saite no **{from}** līdz **{to}**",updateDependency:"Rediģēta saite no **{from}** līdz **{to}**",addAssignment:"Piešķirts **{resource}** notikumam **{event}**",removeAssignment:"Noņemts **{resource}** piešķīrums no notikuma **{event}**",updateAssignment:"Rediģēts **{resource}** piešķīrums notikumam **{event}**",noChanges:"Nav mainīts",nullValue:"nav",versionDateFormat:"D/M/YYYY h:mm a",undid:"Atcēla izmaiņas",redid:"Atkārtoti veica izmaiņas",editedTask:"Rediģēja uzdevuma rekvizītus",deletedTask:"Izdzēsa uzdevumu",movedTask:"Pārvietoja uzdevumu",movedTasks:"Pārvietoja uzdevumus"}},C=d.publishLocale(E);if(typeof s.exports=="object"&&typeof u=="object"){var S=(e,a,t,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of Object.getOwnPropertyNames(a))!Object.prototype.hasOwnProperty.call(e,i)&&i!==t&&Object.defineProperty(e,i,{get:()=>a[i],enumerable:!(n=Object.getOwnPropertyDescriptor(a,i))||n.enumerable});return e};s.exports=S(s.exports,u)}return s.exports});