(function(p,i){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],i);else if(typeof module=="object"&&module.exports)module.exports=i();else{var v=i(),u=s?exports:p;for(var m in v)u[m]=v[m]}})(typeof self<"u"?self:void 0,()=>{var p={},i={exports:p},s=Object.defineProperty,v=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,g=(e,a,o)=>a in e?s(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,b=(e,a)=>{for(var o in a)s(e,o,{get:a[o],enumerable:!0})},D=(e,a,o,t)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of u(a))!m.call(e,n)&&n!==o&&s(e,n,{get:()=>a[n],enumerable:!(t=v(a,n))||t.enumerable});return e},h=e=>D(s({},"__esModule",{value:!0}),e),y=(e,a,o)=>(g(e,typeof a!="symbol"?a+"":a,o),o),j={};b(j,{default:()=>E}),i.exports=h(j);var l=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,k=class c{static mergeLocales(...a){let o={};return a.forEach(t=>{Object.keys(t).forEach(n=>{typeof t[n]=="object"?o[n]={...o[n],...t[n]}:o[n]=t[n]})}),o}static trimLocale(a,o){let t=(n,r)=>{a[n]&&(r?a[n][r]&&delete a[n][r]:delete a[n])};Object.keys(o).forEach(n=>{Object.keys(o[n]).length>0?Object.keys(o[n]).forEach(r=>t(n,r)):t(n)})}static normalizeLocale(a,o){if(!a)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof a=="string"){if(!o)throw new Error('"config" parameter can not be empty');o.locale?o.name=a||o.name:o.localeName=a}else o=a;let t={};if(o.name||o.locale)t=Object.assign({localeName:o.name},o.locale),o.desc&&(t.localeDesc=o.desc),o.code&&(t.localeCode=o.code),o.path&&(t.localePath=o.path);else{if(!o.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);t=Object.assign({},o)}for(let n of["name","desc","code","path"])t[n]&&delete t[n];if(!t.localeName)throw new Error("Locale name can not be empty");return t}static get locales(){return l.bryntum.locales||{}}static set locales(a){l.bryntum.locales=a}static get localeName(){return l.bryntum.locale||"En"}static set localeName(a){l.bryntum.locale=a||c.localeName}static get locale(){return c.localeName&&this.locales[c.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(a,o){let{locales:t}=l.bryntum,n=c.normalizeLocale(a,o),{localeName:r}=n;return!t[r]||o===!0?t[r]=n:t[r]=this.mergeLocales(t[r]||{},n||{}),t[r]}};y(k,"skipLocaleIntegrityCheck",!1);var d=k;l.bryntum=l.bryntum||{},l.bryntum.locales=l.bryntum.locales||{},d._$name="LocaleHelper";var z={localeName:"Sl",localeDesc:"Slovensko",localeCode:"sl",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Odstrani odvisnost"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Deaktiviraj odvisnost"},CycleEffectDescription:{descriptionTpl:"Najden je bil cikel, ki ga tvori: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'Naloga "{2}" ni mogoče opraviti. Koledar "{0}" ne zagotavlja nobenih intervalov delovnega časa.',forwardDescriptionTpl:'Naloga "{2}" ni mogoče opraviti. Koledar "{0}" nima delovnega časa po {1}.',backwardDescriptionTpl:'Naloga "{2}" ni mogoče opraviti. Koledar "{0}" pred {1} nima delovnega časa.',noIntersectionDescriptionTpl:'Naloga "{2}" ni mogoče opraviti. Njegov koledar "{0}" in koledarji virov nimajo skupnega delovnega časa.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Uporabi 24-urni koledar z dela prostimi sobotami in nedeljami."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Uporabi 8-urni koledar (08:00-12:00, 13:00-17:00) z dela prostimi sobotami in nedeljami."},IgnoreProjectConstraintResolution:{descriptionTpl:"Prezri mejo projekta in nadaljujte s spremembo."},ProjectConstraintConflictEffectDescription:{startDescriptionTpl:'Prestavili ste nalogo "{0}" za zagon {1}. To je pred datumom začetka projekta {2}.',endDescriptionTpl:'Prestavili ste nalogo "{0}" za dokončanje {1}. To je po končnem datumu projekta {2}.'},HonorProjectConstraintResolution:{descriptionTpl:"Prilagodite nalogo, da počastite mejo projekta."},IgnoreResourceCalendarEmptyCalendarEffectResolution:{descriptionTpl:"Prezrite koledarje virov in nalogo načrtujte samo z lastnim koledarjem."},ConflictEffectDescription:{descriptionTpl:"Najden je bil konflikt pri razporedu {0} je v konfliktu z {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Datum začetka projekta {0}",endDateDescriptionTpl:"Datum konca projekta {0}"},DependencyType:{long:["Od začetka do začetka","Od začetka do konca","Od konca do začetka","Od konca do konca"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'Ročno načrtovan "{2}" prisili podrejene zahtevke da se ne začnejo prej kot {0}',endDescriptionTpl:'Ročno načrtovan "{2}" prisili podrejene zahtevke da se ne začnejo prej kot {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Onemogoči ročno razporejanje za "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'Odvisnost ({2}) od "{3}" do "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Odstrani odvisnost od "{1}" do "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Deaktiviraj odvisnost od "{1}" do "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Naloga "{2}" {3} {0} omejitev',endDateDescriptionTpl:'Naloga "{2}" {3} {1} omejitev',constraintTypeTpl:{startnoearlierthan:"Začetek ne prej kot",finishnoearlierthan:"Končati ne prej kot",muststarton:"Začeti se mora na",mustfinishon:"Končati se mora na",startnolaterthan:"Začetek najkasneje",finishnolaterthan:"Končati najkasneje"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Odstrani "{1}" omejitev naloge "{0}"'},PostponeDateConstraintConflictResolution:{descriptionTpl:'Odloži razrešitev in označi opravilo "{0}" z označevalcem spora'}},O=d.publishLocale(z),f={localeName:"Sl",localeDesc:"Slovensko",localeCode:"sl",Object:{Yes:"Da",No:"Ne",Cancel:"Prekliči",Ok:"OK",Week:"Teden",None:"Brez"},CodeEditor:{apply:"Uporabi",autoApply:"Samodejna uporaba",downloadCode:"Prenesi kodo",editor:"Urejevalnik kode",viewer:"Pregledovalnik kode"},ColorPicker:{noColor:"Brez barve"},Combo:{noResults:"Ni rezultatov",recordNotCommitted:"Zapisa ni bilo mogoče dodati",addNewValue:e=>` Dodajte ${e}`},FilePicker:{file:"Datoteka"},Field:{badInput:"Neveljavna vrednost polja",patternMismatch:"Vrednost se mora ujemati z določenim vzorcem",rangeOverflow:e=>` Vrednost mora biti manjša ali enaka ${e.max}`,rangeUnderflow:e=>` Vrednost mora biti večja ali enaka ${e.min}`,stepMismatch:"Vrednost mora ustrezati koraku",tooLong:"Vrednost naj bo krajša",tooShort:"Vrednost naj bo daljša",typeMismatch:"Vrednost mora biti v posebni obliki",valueMissing:"To polje je obvezno",invalidValue:"Neveljavna vrednost polja",minimumValueViolation:"Kršitev najmanjše vrednosti",maximumValueViolation:"Kršitev največje vrednosti",fieldRequired:"To polje je obvezno",validateFilter:"Vrednost mora biti izbrana s seznama"},DateField:{invalidDate:"Neveljaven vnos datuma"},DatePicker:{gotoPrevYear:"Pojdi na prejšnje leto",gotoPrevMonth:"Pojdi na prejšnji mesec",gotoNextMonth:"Pojdi na naslednji mesec",gotoNextYear:"Pojdi na naslednje leto"},NumberFormat:{locale:"sl",currency:"EUR"},DurationField:{invalidUnit:"Neveljavna enota"},TimeField:{invalidTime:"Neveljaven vnos časa"},TimePicker:{hour:"Ura",minute:"Minuta",second:"Drugi"},List:{loading:"Nalaganje...",selectAll:"Izberi vse"},GridBase:{loadMask:"Nalaganje...",syncMask:"Shranjevanje sprememb, prosim počakajte ..."},PagingToolbar:{firstPage:"Pojdi na prvo stran",prevPage:"Pojdi na prejšnjo stran",page:"Stran",nextPage:"Pojdi na naslednjo stran",lastPage:"Pojdi na zadnjo stran",reload:"Znova naloži trenutno stran",noRecords:"Ni zapisov za prikaz",pageCountTemplate:e=>`od ${e.lastPage}`,summaryTemplate:e=>` Prikaz zapisov ${e.start} - ${e.end} od ${e.allCount}`},PanelCollapser:{Collapse:"Strni",Expand:"Razširi"},Popup:{close:"Zapri pojavno okno"},UndoRedo:{Undo:"Razveljavi",Redo:"Ponovno uveljav",UndoLastAction:"Razveljavi zadnje dejanje",RedoLastAction:"Ponovi zadnje razveljavljeno dejanje",NoActions:"V čakalni vrsti za razveljavitev ni elementov"},FieldFilterPicker:{equals:"enako",doesNotEqual:"ni enako",isEmpty:"je prazno",isNotEmpty:"ni prazno",contains:"vsebuje",doesNotContain:"ne vsebuje",startsWith:"začne se z",endsWith:"konča se z",isOneOf:"je eden od",isNotOneOf:"ni eden od",isGreaterThan:"je večje kot",isLessThan:"je manjše kot",isGreaterThanOrEqualTo:"je večje ali enako",isLessThanOrEqualTo:"je manjše ali enako",isBetween:"je vmes",isNotBetween:"ni vmes",isBefore:"je pred",isAfter:"je potem",isToday:"je danes",isTomorrow:"je jutri",isYesterday:"je včeraj",isThisWeek:"je ta teden",isNextWeek:"je naslednji teden",isLastWeek:"je prejšnji teden",isThisMonth:"je ta mesec",isNextMonth:"je naslednji mesec",isLastMonth:"je prejšnji mesec",isThisYear:"je to leto",isNextYear:"je naslednje leto",isLastYear:"je prejšnje leto",isYearToDate:"je leto do danes",isTrue:"je res",isFalse:"je napačno",selectAProperty:"Izberite lastnost",selectAnOperator:"Izberite operaterja",caseSensitive:"Razlikuje med velikimi in malimi črkami",and:"in",dateFormat:"D/M/YY",selectValue:"Izberi vrednost",selectOneOrMoreValues:"Izberite eno ali več vrednosti",enterAValue:"Vnesite vrednost",enterANumber:"Vnesite številko",selectADate:"Izberite datum",selectATime:"Izberite čas"},FieldFilterPickerGroup:{addFilter:"Dodajte filter"},DateHelper:{locale:"sl",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"milisekunda",plural:"milisekunde",abbrev:"ms"},{single:"emillisecond",plural:"ems",abbrev:"ems"},{single:"sekunda",plural:"sekunde",abbrev:"s"},{single:"esecond",plural:"eseconds",abbrev:"es"},{single:"minuta",plural:"minute",abbrev:"min"},{single:"eminute",plural:"eminutes",abbrev:"emin"},{single:"ura",plural:"ure",abbrev:"ur"},{single:"ehour",plural:"ehours",abbrev:"eh"},{single:"dan",plural:"dnevi",abbrev:"d"},{single:"eday",plural:"edays",abbrev:"ed"},{single:"teden",plural:"tedni",abbrev:"t"},{single:"eweek",plural:"eweeks",abbrev:"ew"},{single:"mesec",plural:"meseci",abbrev:"m"},{single:"emonth",plural:"emonths",abbrev:"emon"},{single:"četrtletje",plural:"četrtletja",abbrev:"četrt"},{single:"equarter",plural:"equarters",abbrev:"eq"},{single:"leto",plural:"leta",abbrev:"l"},{single:"eyear",plural:"eyears",abbrev:"eyr"},{single:"desetletje",plural:"desetletja",abbrev:"des"},{single:"edecade",plural:"edecades",abbrev:"edec"}],unitAbbreviations:[["ms"],[],["s","sek"],[],["m","min"],[],["ur","ur"],[],["d"],[],["t","t"],[],["m","m","m"],[],["četrt","četrt","četrt"],[],["l","l"],[],["des"],[]],parsers:{L:"D. M. YYYY.",LT:"HH:mm ",LTS:"HH:mm:ss A"},ordinalSuffix:e=>e+"."}},R=d.publishLocale(f),P=new String,T={localeName:"Sl",localeDesc:"Slovensko",localeCode:"sl",ColumnPicker:{column:"Stolpec",columnsMenu:"Stolpci",hideColumn:"Skrij stolpec",hideColumnShort:"Skrij",newColumns:"Novi stolpci"},Filter:{applyFilter:"Uporabi filter",filter:"Filter",editFilter:"Uredi filter",on:"Vklopljeno",before:"Prej",after:"Po",equals:"Enako",lessThan:"Manj kot",moreThan:"Več kot",removeFilter:"Odstrani filter",disableFilter:"Onemogoči filter"},FilterBar:{enableFilterBar:"Pokaži vrstico s filtri",disableFilterBar:"Skrij vrstico s filtri"},Group:{group:"Skupina",groupAscending:"Skupina narašča",groupDescending:"Skupina pada",groupAscendingShort:"Naraščajoče",groupDescendingShort:"Padajoče",stopGrouping:"Ustavi združevanje",stopGroupingShort:"Ustavi"},HeaderMenu:{moveBefore:e=>` Premakni pred"${e}"`,moveAfter:e=>` Premakni za "${e}"`,collapseColumn:"Strni stolpec",expandColumn:"Razširi stolpec"},ColumnRename:{rename:"Preimenuj"},MergeCells:{mergeCells:"Združi celice",menuTooltip:"Združi celice z isto vrednostjo, ko so razvrščene po tem stolpcu"},Search:{searchForValue:"Išči vrednost"},Sort:{sort:"Razvrsti",sortAscending:"Razvrsti naraščajoče",sortDescending:"Razvrsti padajoče",multiSort:"Več razvrstitev",removeSorter:"Odstrani razvrščevalnik",addSortAscending:"Dodaj naraščajoči razvrščevalnik",addSortDescending:"Dodaj padajoči razvrščevalnik",toggleSortAscending:"Spremeni v naraščajoče",toggleSortDescending:"Spremeni v padajoče",sortAscendingShort:"Naraščajoče",sortDescendingShort:"Padajoče",removeSorterShort:"Odstrani",addSortAscendingShort:"+Naraščajoče",addSortDescendingShort:"+Padajoče"},Split:{split:"Deljenje",unsplit:"Nedeljenje",horizontally:"Vodoravno",vertically:"Navpično",both:"Oboje"},LockRows:{lockRow:"Zakleni vrstico",unlockRow:"Odkleni vrstico"},Column:{columnLabel:e=>`${e.text?`${e.text} stolpec. `:""}PRESLEDNICA za kontekstni meni${e.sortable?", VNESI za razvrstitev":""}`,cellLabel:P},Checkbox:{toggleRowSelect:"Preklop izbire vrstice",toggleSelection:"Preklopi izbor celotnega nabora podatkov"},RatingColumn:{cellLabel:e=>{var a;return`${e.text?e.text:""} ${(a=e.location)!=null&&a.record?`ocena : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Nalaganje podatkov ni uspelo!",syncFailedMessage:"Sinhronizacija podatkov ni uspela!",unspecifiedFailure:"Nedoločena napaka",networkFailure:"Napaka omrežja",parseFailure:"Razčlenitev odgovora strežnika ni uspela",serverResponse:"Odziv strežnika:",noRows:"Ni zapisov za prikaz",moveColumnLeft:"Premakni se v levi odsek",moveColumnRight:"Premakni se v desni odsek",moveColumnTo:e=>` Premakni stolpec v ${e}`},CellMenu:{removeRow:"Izbriši"},RowCopyPaste:{copyRecord:"Kopiraj",cutRecord:"Izreži",pasteRecord:"Prilepi",rows:"vrstice",row:"vrstica"},CellCopyPaste:{copy:"Kopiraj",cut:"Izreži",paste:"Prilepi"},PdfExport:{"Waiting for response from server":"Čakanje na odgovor strežnika ...","Export failed":"Izvoz ni uspel","Server error":"Napaka strežnika","Generating pages":"Ustvarjanje strani ...","Click to abort":"Prekliči"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Izvozi nastavitve",export:"Izvozi",printSettings:"Nastavitve tiskanja",print:"Tiskaj",exporterType:"Nadzor številčenja strani",cancel:"Prekliči",fileFormat:"Oblika datoteke",rows:"Vrstice",alignRows:"Poravnaj vrstice",columns:"Stolpci",paperFormat:"Format papirja",orientation:"Orientacija",repeatHeader:"Ponovi glavo"},ExportRowsCombo:{all:"Vse vrstice",visible:"Vidne vrstice"},ExportOrientationCombo:{portrait:"Portret",landscape:"Pokrajina"},SinglePageExporter:{singlepage:"Ena stran"},MultiPageExporter:{multipage:"Več strani",exportingPage:({currentPage:e,totalPages:a})=>`Izvažanje strani ${e}/${a}`},MultiPageVerticalExporter:{multipagevertical:"Več strani (navpično)",exportingPage:({currentPage:e,totalPages:a})=>`Izvažanje strani ${e}/${a}`},RowExpander:{loading:"Nalaganje",expand:"Razširi",collapse:"Strni"},TreeGroup:{group:"Združi po",stopGrouping:"Prenehaj z združevanjem",stopGroupingThisColumn:"Prenehaj z združevanjem te stolpca"}},w=d.publishLocale(T),S={localeName:"Sl",localeDesc:"Slovensko",localeCode:"sl",Object:{newEvent:"Nov dogodek"},ResourceInfoColumn:{eventCountText:e=>e+" dogod"+(e!==1?"ke":"ek")},Dependencies:{from:"Od",to:"Do",valid:"Veljavno",invalid:"Neveljavno"},DependencyType:{SS:"ZZ",SF:"ZK",FS:"KZ",FF:"KK",StartToStart:"Od začetka do začetka",StartToEnd:"Od začetka do konca",EndToStart:"Od konca do začetka",EndToEnd:"Od konca do konca",short:["ZZ","ZK","KZ","KK"],long:["Od začetka do začetka","Od začetka do konca","Od konca do začetka","Od konca do konca"]},DependencyEdit:{From:"Od",To:"Do",Type:"Vrsta",Lag:"Zaostajanje","Edit dependency":"Uredi odvisnost",Save:"Shrani",Delete:"Izbriši",Cancel:"Prekliči",StartToStart:"Od začetka do začetka",StartToEnd:"Od začetka do konca",EndToStart:"Od konca do začetka",EndToEnd:"Od konca do konca"},EventEdit:{Name:"Ime",Resource:"Vir",Start:"Začetek",End:"Konec",Save:"Shrani",Delete:"Izbriši",Cancel:"Prekliči","Edit event":"Uredi dogodek",Repeat:"Ponovi"},EventDrag:{eventOverlapsExisting:"Dogodek prekriva obstoječi dogodek za ta vir",noDropOutsideTimeline:"Dogodek ne sme biti popolnoma izpuščen izven časovnice"},SchedulerBase:{"Add event":"Dodaj dogodek","Delete event":"Izbriši dogodek","Unassign event":"Prekliči dodelitev dogodka",color:"Barva"},TimeAxisHeaderMenu:{pickZoomLevel:"Povečaj",activeDateRange:"Datumski obseg",startText:"Začetni datum",endText:"Končni datum",todayText:"Danes"},EventCopyPaste:{copyEvent:"Kopiraj dogodek",cutEvent:"Izreži dogodek",pasteEvent:"Prilepi dogodek"},EventFilter:{filterEvents:"Filtriraj opravila",byName:"Po imenu"},TimeRanges:{showCurrentTimeLine:"Pokaži trenutno časovnico"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"Sekunde"},minuteAndHour:{topDateFormat:"ddd MM/DD, hA",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd MM/DD",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"Dan"},day:{name:"Dan/ure"},week:{name:"Teden/ure"},dayAndWeek:{displayDateFormat:"ll LST",name:"Teden/dnevi"},dayAndMonth:{name:"Mesec"},weekAndDay:{displayDateFormat:"ll LST",name:"Teden"},weekAndMonth:{name:"Tedni"},weekAndDayLetter:{name:"Tedni/delavniki"},weekDateAndMonth:{name:"Meseci/tedni"},monthAndYear:{name:"Meseci"},year:{name:"Leta"},manyYears:{name:"Več let"}},RecurrenceConfirmationPopup:{"delete-title":"Brišete dogodek","delete-all-message":"Želite izbrisati vse pojavitve tega dogodka?","delete-further-message":"Želite izbrisati to in vse prihodnje pojavitve tega dogodka ali samo trenutno pojavitev?","delete-only-this-message":"Ali želite izbrisati to pojavljanje tega dogodka?","delete-further-btn-text":"Izbriši vse prihodnje dogodke","delete-only-this-btn-text":"Izbriši samo ta dogodek","update-title":"Spreminjate ponavljajoči se dogodek","update-all-message":"Želite spremeniti vse pojavitve tega dogodka?","update-further-message":"Želite spremeniti samo to pojavitev dogodka ali to in vse prihodnje pojavitve?","update-only-this-message":"Ali želite spremeniti to pojavljanje tega dogodka?","update-further-btn-text":"Vsi prihodnji dogodki","update-only-this-btn-text":"Samo ta dogodek",Yes:"Da",Cancel:"Prekliči",width:600},RecurrenceLegend:{" and ":" in ",Daily:"Dnevno","Weekly on {1}":({days:e})=>` Tedensko ob ${e}`,"Monthly on {1}":({days:e})=>`Mesečno ob ${e}`,"Yearly on {1} of {2}":({days:e,months:a})=>`Letno ob ${e} v mesecu  ${a}`,"Every {0} days":({interval:e})=>`Vsakih ${e} dni`,"Every {0} weeks on {1}":({interval:e,days:a})=>` Vsakih ${e} tednov ob ${a}`,"Every {0} months on {1}":({interval:e,days:a})=>` Vsakih ${e} mesecev ob ${a}`,"Every {0} years on {1} of {2}":({interval:e,days:a,months:o})=>` Vsakih ${e} let ob ${a} v mesecu ${o}`,position1:"prvi",position2:"drugi",position3:"tretji",position4:"četrti",position5:"peti","position-1":"zadnji",day:"dan",weekday:"delovni dan","weekend day":"dan za vikend",daysFormat:({position:e,days:a})=>`${e} ${a}`},RecurrenceEditor:{"Repeat event":"Ponovi dogodek",Cancel:"Prekliči",Save:"Shrani",Frequency:"Pogostost",Every:"Vsak",DAILYintervalUnit:"dan",WEEKLYintervalUnit:"teden",MONTHLYintervalUnit:"mesec",YEARLYintervalUnit:"leto",Each:"Vsak",on:"Dne",the:"Na","On the":"Na","End repeat":"Končaj ponavljanje","time(s)":"krat",Days:"Dnevi",Months:"Meseci"},RecurrenceDaysCombo:{day:"dan",weekday:"delovni dan","weekend day":"dan za vikend"},RecurrencePositionsCombo:{position1:"prvi",position2:"drugi",position3:"tretji",position4:"četrti",position5:"peti","position-1":"zadnji"},RecurrenceStopConditionCombo:{Never:"Nikoli",After:"Po","On date":"Na datum"},RecurrenceFrequencyCombo:{None:"Brez ponavljanja",Daily:"Dnevno",Weekly:"Tedensko",Monthly:"Mesečno",Yearly:"Letno"},RecurrenceCombo:{None:"Brez",Custom:"Po meri..."},Summary:{"Summary for":e=>` Povzetek za ${e}`},ScheduleRangeCombo:{completeview:"Celoten urnik",currentview:"Viden urnik",daterange:"Datumski obseg",completedata:"Celoten urnik (za vse dogodke)"},SchedulerExportDialog:{"Schedule range":"Obseg urnika","Export from":"Od","Export to":"Do"},ExcelExporter:{"No resource assigned":"Ni dodeljenega vira"},CrudManagerView:{serverResponseLabel:"Odziv strežnika:"},DurationColumn:{Duration:"Trajanje"}},M=d.publishLocale(S),C={localeName:"Sl",localeDesc:"Slovensko",localeCode:"sl",ConstraintTypePicker:{none:"Brez",assoonaspossible:"Čim prej",aslateaspossible:"Čim kasneje",muststarton:"Začeti se mora na",mustfinishon:"Končati se mora na",startnoearlierthan:"Začetek ne prej kot",startnolaterthan:"Začetek najkasneje",finishnoearlierthan:"Končati ne prej kot",finishnolaterthan:"Končati najkasneje"},SchedulingDirectionPicker:{Forward:"Naprej",Backward:"Nazaj",inheritedFrom:"Podedovani od",enforcedBy:"Prisiljeni od"},CalendarField:{"Default calendar":"Privzeti koledar",editCalendar:"Uredi koledar"},TaskEditorBase:{Information:"Informacija",Save:"Shrani",Cancel:"Prekliči",Delete:"Izbriši",calculateMask:"Računanje...",saveError:"Ni mogoče shraniti, najprej popravite napake",repeatingInfo:"Ogled ponavljajočega se dogodka",editRepeating:"Uredi"},TaskEdit:{editEvent:"Uredi dogodek",ConfirmDeletionTitle:"Potrdi brisanje",ConfirmDeletionMessage:"Ste prepričani, da želite izbrisati dogodek?"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"33em"},SchedulerGeneralTab:{labelWidth:"6em",General:"Splošno",Name:"Ime",Resources:"Viri","% complete":"% dokončano",Duration:"Trajanje",Start:"Začetek",Finish:"Konec",Effort:"Trud",Preamble:"Preambula",Postamble:"Poambula"},GeneralTab:{labelWidth:"6.5em",General:"Splošno",Name:"Ime","% complete":"% dokončano",Duration:"Trajanje",Start:"Začetek",Finish:"Konec",Effort:"Trud",Dates:"Datumi"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"Napredno",Calendar:"Koledar","Scheduling mode":"Način razporejanja","Effort driven":"Gnano po naporu","Manually scheduled":"Ročno razporejeno","Constraint type":"Vrsta omejitve","Constraint date":"Datum omejitve",Inactive:"Neaktivno","Ignore resource calendar":"Prezri koledar virov"},CalendarEditorDatePicker:{addException:"Dodaj izjemo",addWeek:"Dodaj teden"},CalendarEditorExceptionTab:{addException:"Dodaj izjemo",removeException:"Odstranite izjemo",noRows:"Dodane nobene izjeme"},CalendarEditorWeekTab:{addWeek:"Dodaj teden",removeWeek:"Odstranite teden"},CalendarEditor:{daysAreWorkingByDefault:"Dnevi delujejo privzeto",workingTimeCalendar:"Koledar delovnega časa",exceptions:"Izjeme",general:"Splošno",name:"Ime",parent:"Starš",save:"Shrani",weeks:"Tedni",error:"Napaka",inputErrors:"Obstajajo vhodne napake. Popravite jih, preden shranite spremembe.",delete:"Izbrisati",addCalendar:"Dodajte koledar",confirmation:"Potrditev",removeCalendarWithChildren:'Koledar ima otroške koledarje. Kliknite "Da", da odstranite koledar s svojimi otroki.',removeCalendarAndLinks:'Koledar uporabljajo nekateri zapisi. Kliknite "DA", da jih ublažite in odstranite koledar.',newException:"Nova izjema",newWeek:"Nov teden"},CalendarEditorDateInfo:{isWorking:" dela",isNotWorking:" ne deluje",basedOn:" temelji na:",byDefault:"privzeto",rangeTpl:(e,a)=>`${e} do ${a}`},CalendarEditorLegend:{workingDay:"Delovni dan",nonWorkingDay:"Dan, ki ne deluje"},AvailabilityRangeError:{errorOverlap:"Obstajajo prekrivajoči se razponi",errorMissingDate:"Začetek in končni čas sta potrebna",errorStartAfterEnd:"Začetni čas ne more biti po koncu časa"},CalendarEditorExceptionPanel:{name:"Ime",from:"Od",to:"Do",is:"Je",nonWorking:"Neobremenjenost",working:"Delo",hours:"Ure",repeat:"Ponovite",repeatEnd:"Ponovite konec",errorMissingDate:"Potreben je datum izjeme",errorStartAfterEnd:'"Od" datuma ne more biti po datumu "do" ',errorStartAndEndRepeatNumberMismatch:"Izjema bi se morala začeti in končati enako število"},CalendarEditorWeekPanel:{name:"Ime",from:"Od",to:"Do",days:"Dnevi",copyDay:"Kopiraj dan",pasteDay:"Dan prilepe",stopCopying:"Nehajte kopirati"},CalendarEditorAvailabilityRangeContainer:{addRange:"Dodajte domet",removeRange:"Odstranite domet"},CalendarEditorWeekGrid:{errorStartAfterEnd:'"Od" datuma ne more biti po datumu "do" ',errorNoDefaultWeek:"Potrebna je konfiguracija tedna",errorMultipleDefaultWeeks:"Določen je več privzetega tedna",errorNoWeekAvailability:"Teden mora zagotoviti nekaj delovnega časa",errorInvalidWeekAvailability:"Teden ima napake v konfiguraciji delovnega časa",noRows:"Ni dodanih tednov"},AdvancedTab:{labelWidth:"11.5em",Advanced:"Napredno",Calendar:"Koledar","Scheduling mode":"Način razporejanja","Effort driven":"Gnano po naporu","Manually scheduled":"Ročno razporejeno","Constraint type":"Vrsta omejitve","Constraint date":"Datum omejitve",Constraint:"Omejitev",Rollup:"Poročilo v povzetek",Inactive:"Neaktivno","Ignore resource calendar":"Prezri koledar virov","Scheduling direction":"Smer načrtovanja",projectBorder:"Projektna meja",ignore:"Ignoriraj",honor:"Čast",askUser:"Vprašajte uporabnika"},DependencyTab:{Predecessors:"Predhodniki",Successors:"Nasledniki",ID:"ID",Name:"Ime",Type:"Vrsta",Lag:"Zakasnitev",cyclicDependency:"Ciklična odvisnost",invalidDependency:"Neveljavna odvisnost"},NotesTab:{Notes:"Opombe"},ResourceCalendarColumn:{calendar:"Koledar"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Viri",Resource:"Vir",Units:"Enote"},RecurrenceTab:{title:"Ponovi"},SchedulingModePicker:{Normal:"Normalno","Fixed Duration":"Stalno trajanje","Fixed Units":"Stalne enote","Fixed Effort":"Stalni napor"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} od {available}</span> dodeljenih',barTipOnDate:'<b>{resource}</b> on {startDate}<br><span class="{cls}">{allocated} od {available}</span> dodeljenih',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} od {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} od {available}</span> allocated:<br>{assignments}',groupBarTipOnDate:'Na {startDate}<br><span class="{cls}">{allocated} od {available}</span> dodeljenih:<br>{assignments}',plusMore:"+{value} več"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> dodeljen',barTipOnDate:'<b>{event}</b> na {startDate}<br><span class="{cls}">{allocated}</span> dodeljen',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} od {available}</span> dodeljenih:<br>{assignments}',groupBarTipOnDate:'Na {startDate}<br><span class="{cls}">{allocated} od {available}</span> dodeljenih:<br>{assignments}',plusMore:"+{value} več",nameColumnText:"Vir / Dogodek"},SchedulingIssueResolutionPopup:{"Cancel changes":"Prekliči spremembo in ne stori ničesar",schedulingConflict:"Spor pri razporedu",emptyCalendar:"Napaka konfiguracije koledarja",cycle:"Cikel razporejanja",Apply:"Uporabi"},CycleResolutionPopup:{dependencyLabel:"Prosimo, izberite odvisnost:",invalidDependencyLabel:"Vključene so neveljavne odvisnosti, ki jih je treba obravnavati:"},DependencyEdit:{Active:"Aktivno"},SchedulerProBase:{propagating:"Preračunavanje projekta",storePopulation:"Nalaganje podatkov",finalizing:"Dokončevanje rezultatov"},EventSegments:{splitEvent:"Razdeli dogodek",renameSegment:"Preimenuj"},NestedEvents:{deNestingNotAllowed:"Odstranjevanje gnezdenja ni dovoljeno",nestingNotAllowed:"Gnezdenje ni dovoljeno"},VersionGrid:{compare:"Primerjaj",description:"Opis",occurredAt:"Zgodilo se ob",rename:"Preimenuj",restore:"Obnovi",stopComparing:"Prenehaj primerjati"},Versions:{entityNames:{TaskModel:"naloga",AssignmentModel:"dodelitev",DependencyModel:"povezava",ProjectModel:"projekt",ResourceModel:"vir",other:"predmet"},entityNamesPlural:{TaskModel:"naloge",AssignmentModel:"dodelitve",DependencyModel:"povezave",ProjectModel:"projekti",ResourceModel:"viri",other:"predmeti"},transactionDescriptions:{update:"Spremenjenih {n} {entities}",add:"Dodanih {n} {entities}",remove:"Odstranjenih {n} {entities}",move:"Premakjenih {n} {entities}",mixed:"Spremenjenih {n} {entities}"},addEntity:"Dodano {type} **{name}**",removeEntity:"Odstranjeno {type} **{name}**",updateEntity:"Spremenjeno {type} **{name}**",moveEntity:"Premaknjeno {type} **{name}** od {from} do {to}",addDependency:"Dodana povezava od **{from}** do **{to}**",removeDependency:"Odstranjena povezava od **{from}** do **{to}**",updateDependency:"Urejena povezava od **{from}** do **{to}**",addAssignment:"Dodeljen **{resource}** do **{event}**",removeAssignment:"Odstranjena dodelitev **{resource}** od **{event}**",updateAssignment:"Urejena dodelitev **{resource}** do **{event}**",noChanges:"Brez sprememb",nullValue:"nič",versionDateFormat:"M/D/YYYY h:mm a",undid:"Razveljavljene spremembe",redid:"Ponovno uvedene spremembe",editedTask:"Urejene lastnosti naloge",deletedTask:"Izbrisal nalogo",movedTask:"Premaknil nalogo",movedTasks:"Premaknjene naloge"}},E=d.publishLocale(C);if(typeof i.exports=="object"&&typeof p=="object"){var N=(e,a,o,t)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of Object.getOwnPropertyNames(a))!Object.prototype.hasOwnProperty.call(e,n)&&n!==o&&Object.defineProperty(e,n,{get:()=>a[n],enumerable:!(t=Object.getOwnPropertyDescriptor(a,n))||t.enumerable});return e};i.exports=N(i.exports,p)}return i.exports});