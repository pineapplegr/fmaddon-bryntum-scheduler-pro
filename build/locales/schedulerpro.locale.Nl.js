(function(p,o){var d=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],o);else if(typeof module=="object"&&module.exports)module.exports=o();else{var g=o(),u=d?exports:p;for(var m in g)u[m]=g[m]}})(typeof self<"u"?self:void 0,()=>{var p={},o={exports:p},d=Object.defineProperty,g=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,b=(e,n,a)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,h=(e,n)=>{for(var a in n)d(e,a,{get:n[a],enumerable:!0})},f=(e,n,a,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of u(n))!m.call(e,t)&&t!==a&&d(e,t,{get:()=>n[t],enumerable:!(r=g(n,t))||r.enumerable});return e},w=e=>f(d({},"__esModule",{value:!0}),e),y=(e,n,a)=>(b(e,typeof n!="symbol"?n+"":n,a),a),k={};h(k,{default:()=>N}),o.exports=w(k);var l=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,v=class c{static mergeLocales(...n){let a={};return n.forEach(r=>{Object.keys(r).forEach(t=>{typeof r[t]=="object"?a[t]={...a[t],...r[t]}:a[t]=r[t]})}),a}static trimLocale(n,a){let r=(t,i)=>{n[t]&&(i?n[t][i]&&delete n[t][i]:delete n[t])};Object.keys(a).forEach(t=>{Object.keys(a[t]).length>0?Object.keys(a[t]).forEach(i=>r(t,i)):r(t)})}static normalizeLocale(n,a){if(!n)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof n=="string"){if(!a)throw new Error('"config" parameter can not be empty');a.locale?a.name=n||a.name:a.localeName=n}else a=n;let r={};if(a.name||a.locale)r=Object.assign({localeName:a.name},a.locale),a.desc&&(r.localeDesc=a.desc),a.code&&(r.localeCode=a.code),a.path&&(r.localePath=a.path);else{if(!a.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);r=Object.assign({},a)}for(let t of["name","desc","code","path"])r[t]&&delete r[t];if(!r.localeName)throw new Error("Locale name can not be empty");return r}static get locales(){return l.bryntum.locales||{}}static set locales(n){l.bryntum.locales=n}static get localeName(){return l.bryntum.locale||"En"}static set localeName(n){l.bryntum.locale=n||c.localeName}static get locale(){return c.localeName&&this.locales[c.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(n,a){let{locales:r}=l.bryntum,t=c.normalizeLocale(n,a),{localeName:i}=t;return!r[i]||a===!0?r[i]=t:r[i]=this.mergeLocales(r[i]||{},t||{}),r[i]}};y(v,"skipLocaleIntegrityCheck",!1);var s=v;l.bryntum=l.bryntum||{},l.bryntum.locales=l.bryntum.locales||{},s._$name="LocaleHelper";var j={localeName:"Nl",localeDesc:"Nederlands",localeCode:"nl",RemoveDependencyCycleEffectResolution:{descriptionTpl:"Verwijder afhankelijkheid"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"Deactiveer afhankelijkheid"},CycleEffectDescription:{descriptionTpl:"Er is een oneindige lus gevonden. De volgende taken zijn de oorzaak: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'"{2}" Taak kan niet worden uitgevoerd. "{0}" Kalender biedt geen werktijdintervallen.',forwardDescriptionTpl:'"{2}" Taak kan niet worden uitgevoerd. "{0}" Kalender heeft geen werktijd na {1}.',backwardDescriptionTpl:'"{2}" Taak kan niet worden uitgevoerd. "{0}" Kalender heeft geen werktijd vóór {1}.',noIntersectionDescriptionTpl:'"{2}" Taak kan niet worden uitgevoerd. De kalender "{0}" en de resource -kalenders hebben geen gemeenschappelijke werktijd.'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"Gebruik een 24 uren kalender met vrije dagen op zaterdag en zondag."},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"Gebruik een 8 uren kalender (08:00-12:00, 13:00-17:00) met vrije dagen op zaterdag en zondag."},IgnoreProjectConstraintResolution:{descriptionTpl:"Negeer de projectgrens en ga verder met de wijziging."},ProjectConstraintConflictEffectDescription:{startDescriptionTpl:'U hebt de taak "{0}" verplaatst om te starten {1}. Dit is vóór de startdatum van het project {2}.',endDescriptionTpl:'U hebt de taak "{0}" verplaatst om te voltooien {1}. Dit is na de einddatum van het project {2}.'},HonorProjectConstraintResolution:{descriptionTpl:"Pas de taak aan om de projectgrens te eren."},IgnoreResourceCalendarEmptyCalendarEffectResolution:{descriptionTpl:"Negeer resource -agenda's en plan de taak alleen met zijn eigen agenda."},ConflictEffectDescription:{descriptionTpl:"Er is een planning conflict gevonden: {0} conflicteert met {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"Project begin {0}",endDateDescriptionTpl:"Project einde {0}"},DependencyType:{long:["Gelijk-Begin","Begin-na-Einde","Einde-na-Begin","Gelijk-Einde"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'Handmatig geplande taak "{2}" forceert subtaken niet eerder te starten dan {0}',endDescriptionTpl:'Handmatig geplande taak "{2}" forceert subtaken niet later te eindigen dan {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'Schakel handmatig plannen voor "{0}" uit'},DependencyConstraintIntervalDescription:{descriptionTpl:'Afhankelijkheid ({2}) van "{3}" paar "{4}"'},RemoveDependencyResolution:{descriptionTpl:'Verwijder afhankelijkheid van "{1}" paar "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'Deactiveer afhankelijkheid van "{1}" paar "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'Taak "{2}" {3} {0} beperking',endDateDescriptionTpl:'Taak "{2}" {3} {1} beperking',constraintTypeTpl:{startnoearlierthan:"Moet-beginnen op",finishnoearlierthan:"Niet-eerder-beginnen-dan",muststarton:"Niet-eerder-eindigen-dan",mustfinishon:"Niet-later-eindigen-dan",startnolaterthan:"Moet-eindigen-op",finishnolaterthan:"Niet-later-beginnen-dan"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'Verwijder "{1}" beperking van taak "{0}"'},PostponeDateConstraintConflictResolution:{descriptionTpl:'Stel de oplossing uit en markeer taak "{0}" met een conflictmarkering'}},A=s.publishLocale(j),D={localeName:"Nl",localeDesc:"Nederlands",localeCode:"nl",Object:{Yes:"Ja",No:"Nee",Cancel:"Annuleren",Ok:"OK",Week:"Week",None:"Geen"},CodeEditor:{apply:"Toepassen",autoApply:"Automatisch toepassen",downloadCode:"Code downloaden",editor:"Code-editor",viewer:"Codeviewer"},ColorPicker:{noColor:"Geen kleur"},Combo:{noResults:"Geen resultaten",recordNotCommitted:"Record kan niet worden toegevoegd",addNewValue:e=>`${e} toevoegen`},FilePicker:{file:"Vijl"},Field:{badInput:"Ongeldige veldwaarde",patternMismatch:"Waarde moet overeenkomen met een specifiek patroon",rangeOverflow:e=>`Waarde moet kleiner zijn dan of gelijk aan ${e.max}`,rangeUnderflow:e=>`Waarde moet groter zijn dan of gelijk aan ${e.min}`,stepMismatch:"Waarde moet bij de stap passen",tooLong:"Waarde moet korter zijn",tooShort:"Waarde moet langer zijn",typeMismatch:"Waarde moet een speciaal formaat hebben",valueMissing:"Dit veld is verplicht",invalidValue:"Ongeldige veldwaarde",minimumValueViolation:"Minimale waarde schending",maximumValueViolation:"Maximale waarde schending",fieldRequired:"Dit veld is verplicht",validateFilter:"Waarde moet worden geselecteerd in de lijst"},DateField:{invalidDate:"Ongeldige datuminvoer"},DatePicker:{gotoPrevYear:"Ga naar vorig jaar",gotoPrevMonth:"Ga naar vorige maand",gotoNextMonth:"Ga naar volgende maand",gotoNextYear:"Ga naar volgend jaar"},NumberFormat:{locale:"nl",currency:"EUR"},DurationField:{invalidUnit:"Ongeldige eenheid"},TimeField:{invalidTime:"Ongeldige tijdsinvoer"},TimePicker:{hour:"Uur",minute:"Minuut",second:"Seconde"},List:{loading:"Laden...",selectAll:"Alles selecteren"},GridBase:{loadMask:"Laden...",syncMask:"Bezig met opslaan..."},PagingToolbar:{firstPage:"Ga naar de eerste pagina",prevPage:"Ga naar de vorige pagina",page:"Pagina",nextPage:"Ga naar de volgende pagina",lastPage:"Ga naar de laatste pagina",reload:"Laad huidige pagina opnieuw",noRecords:"Geen rijen om weer te geven",pageCountTemplate:e=>`van ${e.lastPage}`,summaryTemplate:e=>`Records ${e.start} - ${e.end} van ${e.allCount} worden weergegeven`},PanelCollapser:{Collapse:"Klap in",Expand:"Klap uit"},Popup:{close:"Sluiten"},UndoRedo:{Undo:"Ongedaan maken",Redo:"Opnieuw doen",UndoLastAction:"Maak de laatste actie ongedaan",RedoLastAction:"Herhaal de laatste ongedaan gemaakte actie",NoActions:"Geen items om ongedaan te maken"},FieldFilterPicker:{equals:"gelijk",doesNotEqual:"niet gelijk",isEmpty:"is leeg",isNotEmpty:"is niet leeg",contains:"bevat",doesNotContain:"bevat geen",startsWith:"begint met",endsWith:"eindigt met",isOneOf:"is een van",isNotOneOf:"is niet een van",isGreaterThan:"is groter dan",isLessThan:"is kleiner dan",isGreaterThanOrEqualTo:"is groter of gelijk aan",isLessThanOrEqualTo:"is kleiner of gelijk aan",isBetween:"zit tussen",isNotBetween:"zit niet tussen",isBefore:"is voor",isAfter:"is na",isToday:"is vandaag",isTomorrow:"is morgen",isYesterday:"is gisteren",isThisWeek:"is deze week",isNextWeek:"is volgende week",isLastWeek:"is afgelopen week",isThisMonth:"is deze maand",isNextMonth:"is volgende maand",isLastMonth:"is vorige maand",isThisYear:"is dit jaar",isNextYear:"is volgend jaar",isLastYear:"is vorige jaar",isYearToDate:"is dit jaar tot vandaag",isTrue:"is waar",isFalse:"is niet waar",selectAProperty:"Selecteer een veld",selectAnOperator:"Selecteer een operator",caseSensitive:"Hoofdletter gevoelig",and:"en",dateFormat:"D/M/YYYY",selectValue:"Selecteer waarde",selectOneOrMoreValues:"Selecteer een of meer waarden",enterAValue:"Voer een waarde in",enterANumber:"Voer een getal in",selectADate:"Selecteer een datum",selectATime:"Selecteer tijd"},FieldFilterPickerGroup:{addFilter:"Voeg filter toe"},DateHelper:{locale:"nl",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"ms",plural:"ms",abbrev:"ms"},{single:"emillisecond",plural:"ems",abbrev:"ems"},{single:"seconde",plural:"seconden",abbrev:"s"},{single:"esecond",plural:"eseconds",abbrev:"es"},{single:"minuut",plural:"minuten",abbrev:"m"},{single:"eminute",plural:"eminutes",abbrev:"emin"},{single:"uur",plural:"uren",abbrev:"u"},{single:"ehour",plural:"ehours",abbrev:"eh"},{single:"dag",plural:"dagen",abbrev:"d"},{single:"eday",plural:"edays",abbrev:"ed"},{single:"week",plural:"weken",abbrev:"w"},{single:"eweek",plural:"eweeks",abbrev:"ew"},{single:"maand",plural:"maanden",abbrev:"ma"},{single:"emonth",plural:"emonths",abbrev:"emon"},{single:"kwartaal",plural:"kwartalen",abbrev:"kw"},{single:"equarter",plural:"equarters",abbrev:"eq"},{single:"jaar",plural:"jaren",abbrev:"j"},{single:"eyear",plural:"eyears",abbrev:"eyr"},{single:"decennium",plural:"decennia",abbrev:"dec"},{single:"edecade",plural:"edecades",abbrev:"edec"}],unitAbbreviations:[["mil"],[],["s","sec"],[],["m","min"],[],["u"],[],["d"],[],["w","wk"],[],["ma","mnd","m"],[],["k","kwar","kwt","kw"],[],["j","jr"],[],["dec"],[]],parsers:{L:"DD-MM-YYYY",LT:"HH:mm",LTS:"HH:mm:ss"},ordinalSuffix:e=>e}},P=s.publishLocale(D),E=new String,T={localeName:"Nl",localeDesc:"Nederlands",localeCode:"nl",ColumnPicker:{column:"Kolom",columnsMenu:"Kolommen",hideColumn:"Verberg Kolom",hideColumnShort:"Verberg",newColumns:"Nieuwe kolommen"},Filter:{applyFilter:"Pas filter toe",filter:"Filter",editFilter:"Wijzig filter",on:"Aan",before:"Voor",after:"Na",equals:"Is gelijk",lessThan:"Minder dan",moreThan:"Meer dan",removeFilter:"Verwijder filter",disableFilter:"Uitschakelen filter"},FilterBar:{enableFilterBar:"Maak filterbalk zichtbaar",disableFilterBar:"Verberg filterbalk"},Group:{group:"Groepeer",groupAscending:"Groepeer oplopend",groupDescending:"Groepeer aflopend",groupAscendingShort:"Oplopend",groupDescendingShort:"Aflopend",stopGrouping:"Maak groepering ongedaan",stopGroupingShort:"Maak ongedaan"},HeaderMenu:{moveBefore:e=>`Verplaatsen naar voor "${e}"`,moveAfter:e=>`Verplaatsen naar na "${e}"`,collapseColumn:"Kolom inklappen",expandColumn:"Kolom uitklappen"},ColumnRename:{rename:"Hernoemen"},MergeCells:{mergeCells:"Cellen samenvoegen",menuTooltip:"Met deze kolom sortering cellen met dezelfde waarde samenvoegen"},Search:{searchForValue:"Zoek op term"},Sort:{sort:"Sorteer",sortAscending:"Sorteer oplopend",sortDescending:"Sorteer aflopend",multiSort:"Meerdere sorteringen",removeSorter:"Verwijder sortering",addSortAscending:"Voeg oplopende sortering toe",addSortDescending:"Voeg aflopende sortering toe",toggleSortAscending:"Sorteer oplopend",toggleSortDescending:"Sorteer aflopend",sortAscendingShort:"Oplopend",sortDescendingShort:"Aflopend",removeSorterShort:"Verwijder",addSortAscendingShort:"+ Oplopend",addSortDescendingShort:"+ Aflopend"},Split:{split:"Gesplitst",unsplit:"Ongeplitst",horizontally:"Horizontaal",vertically:"Verticaal",both:"Beide"},LockRows:{lockRow:"Rij vergrendelen",unlockRow:"Rij ontgrendelen"},Column:{columnLabel:e=>`${e.text?`${e.text} kolom. `:""}SPATIEBALK voor contextmenu${e.sortable?", ENTER om te sorteren":""}`,cellLabel:E},Checkbox:{toggleRowSelect:"Rijselectie wisselen",toggleSelection:"Toggle selectie van volledige dataset"},RatingColumn:{cellLabel:e=>{var n;return`${e.text?e.text:""} ${(n=e.location)!=null&&n.record?`rating : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"Laden mislukt!",syncFailedMessage:"Gegevenssynchronisatie is mislukt!",unspecifiedFailure:"Niet-gespecificeerde fout",networkFailure:"Netwerk fout",parseFailure:"Kan server response niet parsen",serverResponse:"Server reactie:",noRows:"Geen rijen om weer te geven",moveColumnLeft:"Plaats naar het linker kader",moveColumnRight:"Plaats naar het rechter kader",moveColumnTo:e=>`Kolom verplaatsen naar ${e}`},CellMenu:{removeRow:"Verwijder"},RowCopyPaste:{copyRecord:"Kopieer",cutRecord:"Knip",pasteRecord:"Plak",rows:"rijen",row:"row"},CellCopyPaste:{copy:"Kopieer",cut:"Knip",paste:"Plak"},PdfExport:{"Waiting for response from server":"Wachten op antwoord van server...","Export failed":"Export mislukt","Server error":"Serverfout","Generating pages":"Pagina's genereren...","Click to abort":"Annuleren"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"Instellingen exporteren",export:"Exporteren",printSettings:"Afdrukinstellingen",print:"Afdrukken",exporterType:"Paginering beheren",cancel:"Annuleren",fileFormat:"Bestandsformaat",rows:"Rijen",alignRows:"Rijen uitlijnen",columns:"Kolommen",paperFormat:"Papier formaat",orientation:"Oriëntatatie",repeatHeader:"Herhaal koptekst"},ExportRowsCombo:{all:"Alle rijen",visible:"Zichtbare rijen"},ExportOrientationCombo:{portrait:"Staand",landscape:"Liggend"},SinglePageExporter:{singlepage:"Enkele pagina"},MultiPageExporter:{multipage:"Meerdere pagina's",exportingPage:({currentPage:e,totalPages:n})=>`Exporteren van de pagina ${e}/${n}`},MultiPageVerticalExporter:{multipagevertical:"Meerdere pagina's (verticaal)",exportingPage:({currentPage:e,totalPages:n})=>`Exporteren van de pagina ${e}/${n}`},RowExpander:{loading:"Bezig met laden",expand:"Klap uit",collapse:"Klap in"},TreeGroup:{group:"Groeperen op",stopGrouping:"Stop groeperen",stopGroupingThisColumn:"Groeperen opheffen voor deze kolom"}},M=s.publishLocale(T),C={localeName:"Nl",localeDesc:"Nederlands",localeCode:"nl",Object:{newEvent:"Nieuwe boeking"},ResourceInfoColumn:{eventCountText:e=>e+" evenement"+(e!==1?"en":"")},Dependencies:{from:"Van",to:"Naar",valid:"Geldig",invalid:"Ongeldig"},DependencyType:{SS:"GB",SF:"BE",FS:"EB",FF:"GE",StartToStart:"Gelijk-Begin",StartToEnd:"Begin-na-Einde",EndToStart:"Einde-na-Begin",EndToEnd:"Gelijk-Einde",short:["GB","BE","EB","GE"],long:["Gelijk-Begin","Begin-na-Einde","Einde-na-Begin","Gelijk-Einde"]},DependencyEdit:{From:"Van",To:"Tot",Type:"Type",Lag:"Achterstand","Edit dependency":"Afhankelijkheid bewerken",Save:"Bewaar",Delete:"Verwijder",Cancel:"Annuleer",StartToStart:"Begin-Tot-Begin",StartToEnd:"Begin-Tot-Einde",EndToStart:"Einde-Tot-Start",EndToEnd:"Einde-Tot-Einde"},EventEdit:{Name:"Naam",Resource:"Resource",Start:"Start",End:"Eind",Save:"Bewaar",Delete:"Verwijder",Cancel:"Annuleer","Edit event":"Wijzig item",Repeat:"Herhaal"},EventDrag:{eventOverlapsExisting:"Gebeurtenis overlapt bestaande gebeurtenis voor deze bron",noDropOutsideTimeline:"Evenement kan niet volledig buiten de tijdlijn worden verwijderd"},SchedulerBase:{"Add event":"Voeg evenement toe","Delete event":"Verwijder item","Unassign event":"Gebeurtenis ongedaan maken",color:"Kleur"},TimeAxisHeaderMenu:{pickZoomLevel:"Zoom in",activeDateRange:"Datum bereik",startText:"Start datum",endText:"Eind datum",todayText:"Vandaag"},EventCopyPaste:{copyEvent:"Kopieer item",cutEvent:"Knip item",pasteEvent:"Plak item"},EventFilter:{filterEvents:"Filter items",byName:"Op naam"},TimeRanges:{showCurrentTimeLine:"Maak huidige tijdlijn zichtbaar"},PresetManager:{secondAndMinute:{name:"Seconden"},minuteAndHour:{topDateFormat:"ddd DD-MM, hh"},hourAndDay:{topDateFormat:"ddd DD-MM",name:"Dag"},day:{name:"Dag/uren"},week:{name:"Week/uren"},dayAndWeek:{displayDateFormat:"ll LST",name:"Week/dagen"},dayAndMonth:{name:"Maand"},weekAndDay:{displayDateFormat:"hh:mm",name:"Week"},weekAndMonth:{name:"Weken"},weekAndDayLetter:{name:"Weken/doordeweekse dagen"},weekDateAndMonth:{name:"Maanden/weken"},monthAndYear:{name:"Maanden"},year:{name:"Jaren"},manyYears:{name:"Несколько лет"}},RecurrenceConfirmationPopup:{"delete-title":"U verwijdert een plan item","delete-all-message":"Wilt u alle herhaalde afspraken van dit item verwijderen?","delete-further-message":"Wilt u het geselecteerde en alle toekomstige gebeurtenissen van dit item verwijderen, of aleen het geselecteerde item?","delete-only-this-message":"Wilt u dit voorkomen van dit evenement verwijderen?","delete-further-btn-text":"Verwijder alleen de toekomstige gebeurtenissen","delete-only-this-btn-text":"Verwijder alleen deze gebeurtenis","update-title":"U verandert een herhaald item","update-all-message":"Wilt u alle herhaalde afspraken van dit item verwijderen?","update-further-message":"Wilt u het geselecteerde en alle toekomstige gebeurtenissen van dit item wijzigen, of aleen het geselecteerde item?","update-only-this-message":"Wilt u dit voorkomen van dit evenement wijzigen?","update-further-btn-text":"Wijzig alle toekomstige items","update-only-this-btn-text":"Wijzig alleen dit item",Yes:"Ja",Cancel:"Annuleer",width:600},RecurrenceLegend:{" and ":" en ",Daily:"Dagelijks","Weekly on {1}":({days:e})=>`Wekelijks op ${e}`,"Monthly on {1}":({days:e})=>`Maandelijks op ${e}`,"Yearly on {1} of {2}":({days:e,months:n})=>`Jaarlijks op ${e} ${n}`,"Every {0} days":({interval:e})=>`Elke ${e} dagen`,"Every {0} weeks on {1}":({interval:e,days:n})=>`Elke ${e} weken op ${n}`,"Every {0} months on {1}":({interval:e,days:n})=>`Elke ${e} maanden in ${n}`,"Every {0} years on {1} of {2}":({interval:e,days:n,months:a})=>`Elke ${e} jaar op ${n} ${a}`,position1:"de eerste",position2:"de tweede",position3:"de derde",position4:"de vierde",position5:"de vijfde","position-1":"laatste",day:"dag",weekday:"weekdag","weekend day":"weekend dag",daysFormat:({position:e,days:n})=>`${e} ${n}`},RecurrenceEditor:{"Repeat event":"Herhaal gebeurtenis",Cancel:"Annuleer",Save:"Bewaar",Frequency:"Frequentie",Every:"Elke",DAILYintervalUnit:"dag(en)",WEEKLYintervalUnit:"week(en)",MONTHLYintervalUnit:"maand(en)",YEARLYintervalUnit:"jaren(en)",Each:"Elke",on:"Op",the:"De","On the":"Op de","End repeat":"Einde herhaling","time(s)":"tijd(en)",Days:"Dagen",Months:"Maanden"},RecurrenceDaysCombo:{day:"dag",weekday:"weekdag","weekend day":"weekend dag"},RecurrencePositionsCombo:{position1:"eerste",position2:"tweede",position3:"derde",position4:"vierde",position5:"vijfde","position-1":"laatste"},RecurrenceStopConditionCombo:{Never:"Nooit",After:"Na","On date":"Op datum"},RecurrenceFrequencyCombo:{None:"Geen herhaling",Daily:"Dagelijks",Weekly:"Wekelijks",Monthly:"Maandelijks",Yearly:"Jaarlijks"},RecurrenceCombo:{None:"Geen",Custom:"Aangepast..."},Summary:{"Summary for":e=>`Samenvatting voor ${e}`},ScheduleRangeCombo:{completeview:"Compleet schema",currentview:"Huidige weergave",daterange:"Periode",completedata:"Alle data (events)"},SchedulerExportDialog:{"Schedule range":"Scheduler bereik","Export from":"Vanaf","Export to":"Naar"},ExcelExporter:{"No resource assigned":"Geen resource toegewezen"},CrudManagerView:{serverResponseLabel:"Server reactie:"},DurationColumn:{Duration:"Duur"}},z=s.publishLocale(C),S={localeName:"Nl",localeDesc:"Nederlands",localeCode:"nl",ConstraintTypePicker:{none:"Geen",assoonaspossible:"Zo snel mogelijk",aslateaspossible:"Zo laat mogelijk",muststarton:"Niet eerder eindigen dan",mustfinishon:"Niet later eindigen dan",startnoearlierthan:"Moet beginnen op",startnolaterthan:"Moet eindigen op",finishnoearlierthan:"Niet eerder beginnen dan",finishnolaterthan:"Niet later beginnen dan"},SchedulingDirectionPicker:{Forward:"Vooruit",Backward:"Achteruit",inheritedFrom:"Geërfd van",enforcedBy:"Opgelegd door"},CalendarField:{"Default calendar":"Standaardkalender",editCalendar:"Kalender bewerken"},TaskEditorBase:{Information:"Informatie",Save:"Opslaan",Cancel:"Annuleer",Delete:"Verwijder",calculateMask:"Taken berekenen...",saveError:"Kan niet opslaan. Corrigeer eerst de fouten",repeatingInfo:"Een herhaald item bekijken",editRepeating:"Bewerk"},TaskEdit:{editEvent:"Bewerk boeking",ConfirmDeletionTitle:"Bevestig verwijderen",ConfirmDeletionMessage:"Weet u zeker dat u dit item wilt verwijderen?"},GanttTaskEditor:{editorWidth:"55em"},SchedulerTaskEditor:{editorWidth:"41em"},SchedulerGeneralTab:{labelWidth:"6em",General:"Algemeen",Name:"Naam",Resources:"Resources","% complete":"% compleet",Duration:"Duur",Start:"Begin",Finish:"Einde",Effort:"Inspanning",Preamble:"Preamble",Postamble:"Postamble"},GeneralTab:{labelWidth:"6em",General:"Algemeen",Name:"Naam","% complete":"% compleet",Duration:"Duur",Start:"Begin",Finish:"Einde",Effort:"Inspanning",Dates:"Datums"},SchedulerAdvancedTab:{labelWidth:"10em",Advanced:"Geavanceerd",Calendar:"Kalender","Scheduling mode":"Taaktype","Effort driven":"Op inspanning","Manually scheduled":"Handmatig","Constraint type":"Beperkingstype","Constraint date":"Beperkingsdatum",Inactive:"Inactief","Ignore resource calendar":"Resourcekalender negeren"},CalendarEditorDatePicker:{addException:"Voeg uitzondering toe",addWeek:"Voeg een week toe"},CalendarEditorExceptionTab:{addException:"Voeg uitzondering toe",removeException:"Verwijder de uitzondering",noRows:"Geen uitzonderingen toegevoegd"},CalendarEditorWeekTab:{addWeek:"Voeg een week toe",removeWeek:"Verwijder de week"},CalendarEditor:{daysAreWorkingByDefault:"Dagen werken standaard",workingTimeCalendar:"Werktijdkalender",exceptions:"Uitzonderingen",general:"Algemeen",name:"Naam",parent:"Ouder",save:"Redden",weeks:"Weken",error:"Fout",inputErrors:"Er zijn invoerfouten. Los ze op voordat u uw wijzigingen opslaat.",delete:"Verwijderen",addCalendar:"Voeg een kalender toe",confirmation:"Bevestiging",removeCalendarWithChildren:'De kalender heeft kinderkalenders. Klik op "Ja" om de agenda met zijn kinderen te verwijderen.',removeCalendarAndLinks:'De kalender wordt door sommige records gebruikt. Klik op "Ja" om ze te ontkoppelen en de agenda te verwijderen.',newException:"Nieuwe uitzondering",newWeek:"Nieuwe week"},CalendarEditorDateInfo:{isWorking:" werkt",isNotWorking:" werkt niet",basedOn:" gebaseerd op:",byDefault:"standaard",rangeTpl:(e,n)=>`${e} tot ${n}`},CalendarEditorLegend:{workingDay:"Werkdag",nonWorkingDay:"Niet-werkdag"},AvailabilityRangeError:{errorOverlap:"Er zijn overlappende reeksen",errorMissingDate:"Start- en eindtijd zijn vereist",errorStartAfterEnd:"Starttijd kan niet na de eindtijd zijn"},CalendarEditorExceptionPanel:{name:"Naam",from:"Van",to:"Naar",is:"Is",nonWorking:"Niet werkend",working:"Werk",hours:"Uren",repeat:"Herhalen",repeatEnd:"Herhaal einde",errorMissingDate:"Uitzonderingsdatumbereik is vereist",errorStartAfterEnd:'"Van" datum kan niet zijn na de "Naar" datum ',errorStartAndEndRepeatNumberMismatch:"Uitzondering zou hetzelfde aantal keren moeten starten en beëindigen"},CalendarEditorWeekPanel:{name:"Naam",from:"Van",to:"Naar",days:"Dagen",copyDay:"Kopie dag",pasteDay:"Plakdag",stopCopying:"Stop met kopiëren"},CalendarEditorAvailabilityRangeContainer:{addRange:"Bereik toevoegen",removeRange:"Verwijder bereik"},CalendarEditorWeekGrid:{errorStartAfterEnd:'"Van" datum kan niet zijn na de "Naar" datum ',errorNoDefaultWeek:"Weekconfiguratie is vereist",errorMultipleDefaultWeeks:"Meer dan één standaardweek is opgegeven",errorNoWeekAvailability:"Week moet wat werktijd bieden",errorInvalidWeekAvailability:"Week heeft werktijdconfiguratiefouten",noRows:"Geen weken toegevoegd"},AdvancedTab:{labelWidth:"12em",Advanced:"Geavanceerd",Calendar:"Kalender","Scheduling mode":"Taaktype","Effort driven":"Op inspanning","Manually scheduled":"Handmatig","Constraint type":"Beperkingstype","Constraint date":"Beperkingsdatum",Constraint:"Beperking",Rollup:"Oprollen",Inactive:"Inactief","Ignore resource calendar":"Resourcekalender negeren","Scheduling direction":"Planningrichting",projectBorder:"Projectgrens",ignore:"Negeren",honor:"Eer",askUser:"Vraag de gebruiker"},DependencyTab:{Predecessors:"Voorafgaande taken",Successors:"Opvolgende taken",ID:"ID",Name:"Naam",Type:"Type",Lag:"Vertraging",cyclicDependency:"Cyclische afhankelijkheid",invalidDependency:"Ongeldige afhankelijkheid"},NotesTab:{Notes:"Notities"},ResourceCalendarColumn:{calendar:"Kalender"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"Middelen",Resource:"Hulpbron",Units:"Eenheden"},RecurrenceTab:{title:"Herhalen"},SchedulingModePicker:{Normal:"Normaal","Fixed Duration":"Vaste duur","Fixed Units":"Vaste eenheden","Fixed Effort":"Vast werk"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} van de {available}</span> toegewezen',barTipOnDate:'<b>{resource}</b> op {startDate}<br><span class="{cls}">{allocated} van de {available}</span> toegewezen',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} van de {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} van de {available}</span> toegewezen:<br>{assignments}',groupBarTipOnDate:'On {startDate}<br><span class="{cls}">{allocated} van de {available}</span> toegewezen:<br>{assignments}',plusMore:"+{value} meer"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> toegewezen',barTipOnDate:'<b>{event}</b> op {startDate}<br><span class="{cls}">{allocated}</span> toegewezen',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} van de {available}</span> toegewezen:<br>{assignments}',groupBarTipOnDate:'On {startDate}<br><span class="{cls}">{allocated} van de {available}</span> toegewezen:<br>{assignments}',plusMore:"+{value} meer",nameColumnText:"Hulpbron / Boeking"},SchedulingIssueResolutionPopup:{"Cancel changes":"Annuleer wijziging en doe niks",schedulingConflict:"Planningsconflict",emptyCalendar:"Kalender configuratie fout",cycle:"Planning lus",Apply:"Pas toe"},CycleResolutionPopup:{dependencyLabel:"Selecteer een afhankelijkheid om beneden aan te passen:",invalidDependencyLabel:"Er zijn een aantal niet valide afhankelijkheden die moeten worden opgelost:"},DependencyEdit:{Active:"Actief"},SchedulerProBase:{propagating:"Beregning",storePopulation:"Indlæser data",finalizing:"Finaliseren"},EventSegments:{splitEvent:"Item splitsen",renameSegment:"Hernoemen"},NestedEvents:{deNestingNotAllowed:"Ontnest niet toegestaan",nestingNotAllowed:"Nesten niet toegestaan"},VersionGrid:{compare:"Vergelijken",description:"Beschrijving",occurredAt:"Plaatsvond op",rename:"Hernoemen",restore:"Herstellen",stopComparing:"Vergelijken stoppen"},Versions:{entityNames:{TaskModel:"taak",AssignmentModel:"toewijzing",DependencyModel:"afhankelijkheid",ProjectModel:"project",ResourceModel:"resource",other:"object"},entityNamesPlural:{TaskModel:"taken",AssignmentModel:"toewijzingen",DependencyModel:"afhankelijkheden",ProjectModel:"projecten",ResourceModel:"resources",other:"objecten"},transactionDescriptions:{update:"Gewijzigd {n} {entities}",add:"Toegevoegd {n} {entities}",remove:"Verwijderd {n} {entities}",move:"{n} {entities} verplaatst",mixed:"Wijzigingen {n} {entities}"},addEntity:"Toegevoegd {type} {name}",removeEntity:"Verwijderd {type} {name}",updateEntity:"Gewijzigd {type} {name}",moveEntity:"{type} {name} verplaatst van {from} naar {to}",addDependency:"Afhankelijkheid van {from} naar {to} toegevoegd",removeDependency:"Afhankelijkheid {from} met {to} verwijderd",updateDependency:"Gewijzigde afhankelijkheid van {from} naar {to}",addAssignment:"Resource {resource} toegewezen aan {event}",removeAssignment:"Resource {resource} verwijderd van {event}",updateAssignment:"Gewijzigde toewijzing van {resource} aan {event}",noChanges:"Geen wijzigingen",nullValue:"niets",versionDateFormat:"D/M/YYYY HH:mm",undid:"Ongedaan gemaakt",redid:"Opnieuw gedaan",editedTask:"Taak eigenschappen aangepast",deletedTask:"Taak is verwijderd",movedTask:"Taak verplaatst",movedTasks:"Taken verplaatst"}},N=s.publishLocale(S);if(typeof o.exports=="object"&&typeof p=="object"){var R=(e,n,a,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of Object.getOwnPropertyNames(n))!Object.prototype.hasOwnProperty.call(e,t)&&t!==a&&Object.defineProperty(e,t,{get:()=>n[t],enumerable:!(r=Object.getOwnPropertyDescriptor(n,t))||r.enumerable});return e};o.exports=R(o.exports,p)}return o.exports});