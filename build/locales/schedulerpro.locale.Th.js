(function(c,l){var s=typeof exports=="object";if(typeof define=="function"&&define.amd)define([],l);else if(typeof module=="object"&&module.exports)module.exports=l();else{var u=l(),g=s?exports:c;for(var m in u)g[m]=u[m]}})(typeof self<"u"?self:void 0,()=>{var c={},l={exports:c},s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,g=Object.getOwnPropertyNames,m=Object.prototype.hasOwnProperty,v=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t)s(e,a,{get:t[a],enumerable:!0})},f=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of g(t))!m.call(e,n)&&n!==a&&s(e,n,{get:()=>t[n],enumerable:!(r=u(t,n))||r.enumerable});return e},D=e=>f(s({},"__esModule",{value:!0}),e),T=(e,t,a)=>(v(e,typeof t!="symbol"?t+"":t,a),a),y={};h(y,{default:()=>x}),l.exports=D(y);var i=typeof self<"u"?self:typeof globalThis<"u"?globalThis:null,b=class p{static mergeLocales(...t){let a={};return t.forEach(r=>{Object.keys(r).forEach(n=>{typeof r[n]=="object"?a[n]={...a[n],...r[n]}:a[n]=r[n]})}),a}static trimLocale(t,a){let r=(n,o)=>{t[n]&&(o?t[n][o]&&delete t[n][o]:delete t[n])};Object.keys(a).forEach(n=>{Object.keys(a[n]).length>0?Object.keys(a[n]).forEach(o=>r(n,o)):r(n)})}static normalizeLocale(t,a){if(!t)throw new Error('"nameOrConfig" parameter can not be empty');if(typeof t=="string"){if(!a)throw new Error('"config" parameter can not be empty');a.locale?a.name=t||a.name:a.localeName=t}else a=t;let r={};if(a.name||a.locale)r=Object.assign({localeName:a.name},a.locale),a.desc&&(r.localeDesc=a.desc),a.code&&(r.localeCode=a.code),a.path&&(r.localePath=a.path);else{if(!a.localeName)throw new Error(`"config" parameter doesn't have "localeName" property`);r=Object.assign({},a)}for(let n of["name","desc","code","path"])r[n]&&delete r[n];if(!r.localeName)throw new Error("Locale name can not be empty");return r}static get locales(){return i.bryntum.locales||{}}static set locales(t){i.bryntum.locales=t}static get localeName(){return i.bryntum.locale||"En"}static set localeName(t){i.bryntum.locale=t||p.localeName}static get locale(){return p.localeName&&this.locales[p.localeName]||this.locales.En||Object.values(this.locales)[0]||{localeName:"",localeDesc:"",localeCoode:""}}static publishLocale(t,a){let{locales:r}=i.bryntum,n=p.normalizeLocale(t,a),{localeName:o}=n;return!r[o]||a===!0?r[o]=n:r[o]=this.mergeLocales(r[o]||{},n||{}),r[o]}};T(b,"skipLocaleIntegrityCheck",!1);var d=b;i.bryntum=i.bryntum||{},i.bryntum.locales=i.bryntum.locales||{},d._$name="LocaleHelper";var C={localeName:"Th",localeDesc:"ไทย",localeCode:"th",RemoveDependencyCycleEffectResolution:{descriptionTpl:"ลบการพึ่งพา"},DeactivateDependencyCycleEffectResolution:{descriptionTpl:"ปิดใช้งานการพึ่งพา"},CycleEffectDescription:{descriptionTpl:"พบรอบที่เกิดขึ้นโดย: {0}"},EmptyCalendarEffectDescription:{descriptionTpl:'งาน "{2}" ไม่สามารถทำได้ ปฏิทิน "{0}" ไม่ได้ให้ช่วงเวลาการทำงานใด ๆ',forwardDescriptionTpl:'งาน "{2}" ไม่สามารถทำได้ ปฏิทิน "{0}" ไม่มีเวลาทำงานหลังจาก {1}',backwardDescriptionTpl:'งาน "{2}" ไม่สามารถทำได้ ปฏิทิน "{0}" ไม่มีเวลาทำงานก่อน {1}',noIntersectionDescriptionTpl:'งาน "{2}" ไม่สามารถทำได้ ปฏิทิน "{0}" และปฏิทินทรัพยากรไม่มีเวลาทำงานร่วมกัน'},Use24hrsEmptyCalendarEffectResolution:{descriptionTpl:"ใช้ปฏิทิน 24 ชั่วโมงกับวันเสาร์และวันอาทิตย์ที่ไม่ได้ทำงาน"},Use8hrsEmptyCalendarEffectResolution:{descriptionTpl:"ใช้ปฏิทิน 8 ชั่วโมง (08:00-12:00 น., 13:00-17:00 น.) กับวันเสาร์และอาทิตย์ที่ไม่ได้ทำงาน"},IgnoreProjectConstraintResolution:{descriptionTpl:"ไม่สนใจชายแดนโครงการและดำเนินการเปลี่ยนแปลง"},ProjectConstraintConflictEffectDescription:{startDescriptionTpl:'คุณย้ายงาน "{0}" เพื่อเริ่มต้น {1} นี่คือก่อนวันที่เริ่มต้นโครงการ {2}',endDescriptionTpl:'คุณย้ายงาน "{0}" ไปให้เสร็จ {1} นี่คือหลังจากวันที่สิ้นสุดโครงการ {2}'},HonorProjectConstraintResolution:{descriptionTpl:"ปรับงานเพื่อเป็นเกียรติแก่ชายแดนโครงการ"},IgnoreResourceCalendarEmptyCalendarEffectResolution:{descriptionTpl:"ละเว้นปฏิทินทรัพยากรและกำหนดเวลางานด้วยปฏิทินของตัวเองเท่านั้น"},ConflictEffectDescription:{descriptionTpl:"พบข้อขัดแย้งด้านกำหนดการ: {0} ขัดแย้งกับ {1}"},ConstraintIntervalDescription:{dateFormat:"LLL"},ProjectConstraintIntervalDescription:{startDateDescriptionTpl:"วันที่เริ่มโครงการ {0}",endDateDescriptionTpl:"วันที่สิ้นสุดโครงการ {0}"},DependencyType:{long:["เริ่มต้นถึงเริ่มต้น","เริ่มต้นถึงสิ้นสุด","สิ้นสุดถึงเริ่มต้น","สิ้นสุดถึงสิ้นสุด"]},ManuallyScheduledParentConstraintIntervalDescription:{startDescriptionTpl:'"{2}" ที่กำหนดเวลาด้วยตนเองบังคับให้เด็ก ๆ เริ่มต้นไม่เร็วกว่า {0}',endDescriptionTpl:'"{2}" ที่กำหนดเวลาด้วยตนเองบังคับให้เด็ก ๆ เสร็จไม่ช้ากว่า {1}'},DisableManuallyScheduledConflictResolution:{descriptionTpl:'ปิดใช้งานการจัดกำหนดการด้วยตนเองสำหรับ "{0}"'},DependencyConstraintIntervalDescription:{descriptionTpl:'การพึ่งพา ({2}) จาก "{3}" ถึง "{4}"'},RemoveDependencyResolution:{descriptionTpl:'ลบการพึ่งพาจาก "{1}" ถึง "{2}"'},DeactivateDependencyResolution:{descriptionTpl:'ปิดใช้งานการพึ่งพาจาก "{1}" ถึง "{2}"'},DateConstraintIntervalDescription:{startDateDescriptionTpl:'งาน "{2}" {3} {0} ข้อจำกัด',endDateDescriptionTpl:'งาน "{2}" {3} {1} ข้อจำกัด',constraintTypeTpl:{startnoearlierthan:"ต้องไม่เริ่มต้นก่อน",finishnoearlierthan:"ต้องไม่สิ้นสุดก่อน",muststarton:"ต้องเริ่มตั้งแต่",mustfinishon:"ต้องสิ้นสุดเมื่อ",startnolaterthan:"ต้องไม่เริ่มต้นหลังจาก",finishnolaterthan:"ต้องไม่สิ้นสุดหลังจาก"}},RemoveDateConstraintConflictResolution:{descriptionTpl:'ลบ "{1}" ข้อจำกัดของงาน "{0}"'},PostponeDateConstraintConflictResolution:{descriptionTpl:'เลื่อนการแก้ปัญหาและแฟล็กงาน "{0}" ด้วยเครื่องหมายข้อขัดแย้ง'}},A=d.publishLocale(C),E={localeName:"Th",localeDesc:"ไทย",localeCode:"th",Object:{Yes:"ใช่",No:"ไม่ใช่",Cancel:"ยกเลิก",Ok:"ตกลง",Week:"สัปดาห์",None:"ไม่มี"},CodeEditor:{apply:"ใช้",autoApply:"ใช้โดยอัตโนมัติ",downloadCode:"ดาวน์โหลดโค้ด",editor:"ตัวแก้ไขโค้ด",viewer:"ตัวดูโค้ด"},ColorPicker:{noColor:"ไม่มีสี"},Combo:{noResults:"ไม่พบผลลัพธ์",recordNotCommitted:"ไม่สามารถเพิ่มบันทึกได้",addNewValue:e=>`เพิ่ม ${e}`},FilePicker:{file:"ไฟล์"},Field:{badInput:"ค่าในช่องไม่ถูกต้อง",patternMismatch:"ค่าควรตรงกับรูปแบบที่เฉพาะเจาะจง",rangeOverflow:e=>`ค่าควรน้อยกว่าหรือเท่ากับ ${e.max}`,rangeUnderflow:e=>`ค่าควรมากกว่าหรือเท่ากับ ${e.min}`,stepMismatch:"ค่าควรสอดคล้องกับการก้าวกระโดด",tooLong:"ค่าควรสั้นกว่านี้",tooShort:"ค่าควรยาวกว่านี้",typeMismatch:"ค่าต้องอยู่ในรูปแบบพิเศษ",valueMissing:"จำเป็นต้องกรอกช่องนี้",invalidValue:"ค่าในช่องไม่ถูกต้อง",minimumValueViolation:"ค่าน้อยกว่าค่าต่ำสุด",maximumValueViolation:"ค่ามากกว่าค่าสูงสุด",fieldRequired:"ช่องนี้จำเป็นต้องกรอก",validateFilter:"ต้องเลือกค่าจากรายการ"},DateField:{invalidDate:"วันที่ที่กรอกไม่ถูกต้อง"},DatePicker:{gotoPrevYear:"ไปที่ปีก่อนหน้า",gotoPrevMonth:"ไปที่เดือนก่อนหน้า",gotoNextMonth:"ไปที่เดือนถัดไป",gotoNextYear:"ไปที่ปีถัดไป"},NumberFormat:{locale:"th",currency:"THB"},DurationField:{invalidUnit:"หน่วยไม่ถูกต้อง"},TimeField:{invalidTime:"เวลาที่กรอกไม่ถูกต้อง"},TimePicker:{hour:"ชั่วโมง",minute:"นาที",second:"วินาที"},List:{loading:"กำลังโหลด...",selectAll:"เลือกทั้งหมด"},GridBase:{loadMask:"กำลังโหลด...",syncMask:"กำลังบันทึกการเปลี่ยนแปลง กรุณารอสักครู่..."},PagingToolbar:{firstPage:"ไปที่หน้าแรก",prevPage:"ไปที่หน้าก่อนหน้า",page:"หน้า",nextPage:"ไปที่หน้าถัดไป",lastPage:"ไปที่หน้าสุดท้าย",reload:"โหลดซ้ำหน้าปัจจุบัน",noRecords:"ไม่มีบันทึกที่ต้องแสดง",pageCountTemplate:e=>`จาก ${e.lastPage}`,summaryTemplate:e=>`บันทึกที่แสดง ${e.start} - ${e.end} จาก ${e.allCount}`},PanelCollapser:{Collapse:"ย่อ",Expand:"ขยาย"},Popup:{close:"ปิดป๊อปอัป"},UndoRedo:{Undo:"เลิกทำ",Redo:"ทำซ้ำ",UndoLastAction:"เลิกทำการกระทำล่าสุด",RedoLastAction:"ทำซ้ำการกระทำที่ถูกยกเลิก",NoActions:"ไม่มีการกระทำในรายการเลิกทำ"},FieldFilterPicker:{equals:"เท่ากับ",doesNotEqual:"ไม่เท่ากับ",isEmpty:"ว่างเปล่า",isNotEmpty:"ไม่ว่างเปล่า",contains:"มี",doesNotContain:"ไม่มี",startsWith:"เริ่มต้นด้วย",endsWith:"ลงท้ายด้วย",isOneOf:"เป็นหนึ่งใน",isNotOneOf:"ไม่ได้เป็นหนึ่งใน",isGreaterThan:"มากกว่า",isLessThan:"น้อยกว่า",isGreaterThanOrEqualTo:"มากกว่าหรือเท่ากับ",isLessThanOrEqualTo:"น้อยกว่าหรือเท่ากับ",isBetween:"อยู่ระหว่าง",isNotBetween:"ไม่อยู่ระหว่าง",isBefore:"ก่อน",isAfter:"หลังจาก",isToday:"เป็นวันนี้",isTomorrow:"เป็นวันพรุ่งนี้",isYesterday:"เป็นเมื่อวานนี้",isThisWeek:"เป็นสัปดาห์นี้",isNextWeek:"เป็นสัปดาห์หน้า",isLastWeek:"เป็นสัปดาห์ที่แล้ว",isThisMonth:"เป็นเดือนนี้",isNextMonth:"เป็นเดือนหน้า",isLastMonth:"เป็นเดือนที่แล้ว",isThisYear:"เป็นปีนี้",isNextYear:"เป็นปีหน้า",isLastYear:"เป็นปีที่แล้ว",isYearToDate:"เป็นปีจนถึงปัจจุบัน",isTrue:"เป็นจริง",isFalse:"เป็นเท็จ",selectAProperty:"เลือกคุณสมบัติ",selectAnOperator:"เลือกผู้ปฏิบัติการ",caseSensitive:"การบังคับใช้ตัวอักษรเล็ก/ใหญ่",and:"และ",dateFormat:"D/M/YY",selectValue:"เลือกค่า",selectOneOrMoreValues:"เลือกหนึ่งค่าหรือมากกว่า",enterAValue:"ป้อนค่า",enterANumber:"ป้อนหมายเลข",selectADate:"เลือกวันที่",selectATime:"เลือกเวลา"},FieldFilterPickerGroup:{addFilter:"เพิ่มตัวกรอง"},DateHelper:{locale:"th",weekStartDay:1,nonWorkingDays:{0:!0,6:!0},weekends:{0:!0,6:!0},unitNames:[{single:"มิลลิวินาที",plural:"มิลลิวินาที",abbrev:"มิลลิวินาที"},{single:"emillisecond",plural:"ems",abbrev:"ems"},{single:"วินาที",plural:"วินาที",abbrev:"วินาที"},{single:"esecond",plural:"eseconds",abbrev:"es"},{single:"นาที",plural:"นาที",abbrev:"น."},{single:"eminute",plural:"eminutes",abbrev:"emin"},{single:"ชั่วโมง",plural:"ชั่วโมง",abbrev:"ชม."},{single:"ehour",plural:"ehours",abbrev:"eh"},{single:"วัน",plural:"วัน",abbrev:"ว."},{single:"eday",plural:"edays",abbrev:"ed"},{single:"สัปดาห์",plural:"สัปดาห์",abbrev:"สัปดาห์"},{single:"eweek",plural:"eweeks",abbrev:"ew"},{single:"เดือน",plural:"เดือน",abbrev:"ด."},{single:"emonth",plural:"emonths",abbrev:"emon"},{single:"ไตรมาส",plural:"ไตรมาส",abbrev:"ไตรมาส"},{single:"equarter",plural:"equarters",abbrev:"eq"},{single:"ปี",plural:"ปี",abbrev:"ป."},{single:"eyear",plural:"eyears",abbrev:"eyr"},{single:"ทศวรรษ",plural:"ทศวรรษ",abbrev:"ทศวรรษ"},{single:"edecade",plural:"edecades",abbrev:"edec"}],unitAbbreviations:[["มิลลิวินาที"],[],["วินาที","วินาที"],[],["น.","น."],[],["ชม.","ชม."],[],["วัน"],[],["สัปดาห์","สัปดาห์"],[],["ด.","ด.","ด."],[],["ไตรมาส","ไตรมาส","ไตรมาส"],[],["ป.","ป."],[],["ทศวรรษ"],[]],parsers:{L:"DD/MM/YYYY",LT:"HH:mm",LTS:"HH:mm:ss A"},ordinalSuffix:e=>e}},M=d.publishLocale(E),S=new String,k={localeName:"Th",localeDesc:"ไทย",localeCode:"th",ColumnPicker:{column:"คอลัมน์",columnsMenu:"คอลัมน์",hideColumn:"ซ่อนคอลัมน์",hideColumnShort:"ซ่อน",newColumns:"คอลัมน์ใหม่"},Filter:{applyFilter:"ใช้ตัวกรอง",filter:"ตัวกรอง",editFilter:"แก้ไขตัวกรอง",on:"ในเงื่อนไข",before:"ก่อน",after:"หลัง",equals:"เท่ากับ",lessThan:"น้อยกว่า",moreThan:"มากกว่า",removeFilter:"นำตัวกรองออก",disableFilter:"ปิดใช้งานตัวกรอง"},FilterBar:{enableFilterBar:"แสดงแถบตัวกรอง",disableFilterBar:"ซ่อนแถบตัวกรอง"},Group:{group:"จัดกลุ่ม",groupAscending:"จัดกลุ่มจากน้อยไปมาก",groupDescending:"จัดกลุ่มจากมากไปน้อย",groupAscendingShort:"จากน้อยไปมาก",groupDescendingShort:"จากมากไปน้อย",stopGrouping:"หยุดการจัดกลุ่ม",stopGroupingShort:"หยุด"},HeaderMenu:{moveBefore:e=>`ย้ายก่อนหน้า "${e}"`,moveAfter:e=>`ย้ายหลังจาก "${e}"`,collapseColumn:"ยุบคอลัมน์",expandColumn:"ขยายคอลัมน์"},ColumnRename:{rename:"เปลี่ยนชื่อ"},MergeCells:{mergeCells:"ผสานเซลล์",menuTooltip:"ผสานเซลล์ที่มีค่าเท่ากันเมื่อจัดเรียงตามคอลัมน์นี้"},Search:{searchForValue:"ค้นหาค่า"},Sort:{sort:"จัดเรียง",sortAscending:"จัดเรียงจากน้อยไปมาก",sortDescending:"จัดเรียงจากมากไปน้อย",multiSort:"จัดเรียงตามหลายคุณลักษณะ",removeSorter:"นำตัวจัดเรียงออก",addSortAscending:"เพิ่มตัวจัดเรียงจากน้อยไปมาก",addSortDescending:"เพิ่มตัวจัดเรียงจากมากไปน้อย",toggleSortAscending:"เปลี่ยนเป็นจากน้อยไปมาก",toggleSortDescending:"เปลี่ยนเป็นจากมากไปน้อย",sortAscendingShort:"จากน้อยไปมาก",sortDescendingShort:"จากมากไปน้อย",removeSorterShort:"นำออก",addSortAscendingShort:"+ จากน้อยไปมาก",addSortDescendingShort:"+ จากมากไปน้อย"},Split:{split:"แยก",unsplit:"ไม่แยก",horizontally:"แนวนอน",vertically:"แนวตั้ง",both:"ทั้งสอง"},LockRows:{lockRow:"ล็อกแถว",unlockRow:"ปลดล็อกแถว"},Column:{columnLabel:e=>`${e.text?`${e.text} คอลัมน์. `:""}แตะ SPACE สำหรับเมนูบริบท${e.sortable?", กดปุ่ม ENTER เพื่อจัดเรียง":""}`,cellLabel:S},Checkbox:{toggleRowSelect:"สลับการเลือกแถว",toggleSelection:"สลับการเลือกชุดข้อมูลทั้งหมด"},RatingColumn:{cellLabel:e=>{var t;return`${e.text?e.text:""} ${(t=e.location)!=null&&t.record?`คะแนน : ${e.location.record.get(e.field)||0}`:""}`}},GridBase:{loadFailedMessage:"การโหลดข้อมูลล้มเหลว!",syncFailedMessage:"การซิงค์ข้อมูลล้มเหลว!",unspecifiedFailure:"การล้มเหลวที่ไม่ระบุ",networkFailure:"ข้อผิดพลาดของเครือข่าย",parseFailure:"การวิเคราะห์การตอบสนองของเซิร์ฟเวอร์ล้มเหลว",serverResponse:"การตอบสนองของเซิร์ฟเวอร์:",noRows:"ไม่มีบันทึกที่จะแสดง",moveColumnLeft:"ย้ายไปที่ส่วนซ้าย",moveColumnRight:"ย้ายไปที่ส่วนขวา",moveColumnTo:e=>`ย้ายคอลัมน์ไปที่ ${e}`},CellMenu:{removeRow:"ลบ"},RowCopyPaste:{copyRecord:"คัดลอก",cutRecord:"ตัด",pasteRecord:"วาง",rows:"หลายแถว",row:"แถว"},CellCopyPaste:{copy:"คัดลอก",cut:"ตัด",paste:"วาง"},PdfExport:{"Waiting for response from server":"กำลังรอการตอบสนองจากเซิร์ฟเวอร์...","Export failed":"การส่งออกล้มเหลว","Server error":"พบข้อผิดพลาดที่เซิร์ฟเวอร์","Generating pages":"กำลังสร้างหน้าข้อมูล...","Click to abort":"ยกเลิก"},ExportDialog:{width:"40em",labelWidth:"12em",exportSettings:"การตั้งค่าสำหรับการส่งออก",export:"การส่งออก",printSettings:"การตั้งค่าการพิมพ์",print:"พิมพ์",exporterType:"ควบคุมการแบ่งข้อมูลเป็นหน้า",cancel:"ยกเลิก",fileFormat:"รูปแบบของไฟล์",rows:"แถว",alignRows:"จัดแนวแถว",columns:"คอลัมน์",paperFormat:"รูปแบบกระดาษ",orientation:"การวางแนว",repeatHeader:"ทำซ้ำหัวตาราง"},ExportRowsCombo:{all:"แถวทั้งหมด",visible:"แถวที่มองเห็น"},ExportOrientationCombo:{portrait:"แนวตั้ง",landscape:"แนวนอน"},SinglePageExporter:{singlepage:"หน้าเดียว"},MultiPageExporter:{multipage:"หลายหน้า",exportingPage:({currentPage:e,totalPages:t})=>`กำลังส่งออกหน้า ${e}/${t}`},MultiPageVerticalExporter:{multipagevertical:"หลายหน้า (แนวตั้ง)",exportingPage:({currentPage:e,totalPages:t})=>`กำลังส่งออกหน้า ${e}/${t}`},RowExpander:{loading:"กำลังโหลด",expand:"ขยาย",collapse:"ย่อ"},TreeGroup:{group:"จัดกลุ่มตาม",stopGrouping:"หยุดการจัดกลุ่ม",stopGroupingThisColumn:"ยกเลิกการจัดกลุ่มคอลัมน์นี้"}},N=d.publishLocale(k),R={localeName:"Th",localeDesc:"ไทย",localeCode:"th",Object:{newEvent:"เพิ่มกิจกรรมใหม่"},ResourceInfoColumn:{eventCountText:e=>e+" กิจกรรม"},Dependencies:{from:"ตั้งแต่",to:"ถึง",valid:"ถูกต้อง",invalid:"ไม่ถูกต้อง"},DependencyType:{SS:"เอสเอส",SF:"เอสเอฟ",FS:"เอฟเอส",FF:"เอฟเอฟ",StartToStart:"เริ่มต้นถึงเริ่มต้น",StartToEnd:"เริ่มต้นถึงสิ้นสุด",EndToStart:"สิ้นสุดถึงเริ่มต้น",EndToEnd:"สิ้นสุดถึงสิ้นสุด",short:["เอสเอส","เอสเอฟ","เอฟเอส","เอฟเอฟ"],long:["เริ่มต้นถึงเริ่มต้น","เริ่มต้นถึงสิ้นสุด","สิ้นสุดถึงเริ่มต้น","สิ้นสุดถึงสิ้นสุด"]},DependencyEdit:{From:"ตั้งแต่",To:"ถึง",Type:"ประเภท",Lag:"การล่าช้า","Edit dependency":"แก้ไขการอ้างอิง",Save:"บันทึก",Delete:"ลบ",Cancel:"ยกเลิก",StartToStart:"เริ่มต้นถึงเริ่มต้น",StartToEnd:"เริ่มต้นถึงสิ้นสุด",EndToStart:"สิ้นสุดถึงเริ่มต้น",EndToEnd:"สิ้นสุดถึงสิ้นสุด"},EventEdit:{Name:"ชื่อ",Resource:"ทรัพยากร",Start:"เริ่มต้น",End:"สิ้นสุด",Save:"บันทึก",Delete:"ลบ",Cancel:"ยกเลิก","Edit event":"แก้ไขกิจกรรม",Repeat:"ทำซ้ำ"},EventDrag:{eventOverlapsExisting:"กิจกรรมทับซ้อนกับกิจกรรมที่มีอยู่แล้วสำหรับทรัพยากรนี้",noDropOutsideTimeline:"ไม่สามารถวางกิจกรรมนอกไทม์ไลน์โดยสมบูรณ์ได้"},SchedulerBase:{"Add event":"เพิ่มกิจกรรม","Delete event":"ลบกิจกรรม","Unassign event":"ยกเลิกการกำหนดกิจกรรม",color:"สี"},TimeAxisHeaderMenu:{pickZoomLevel:"ขยาย",activeDateRange:"ช่วงวันที่",startText:"วันที่เริ่มต้น",endText:"วันที่สิ้นสุด",todayText:"วันนี้"},EventCopyPaste:{copyEvent:"คัดลอกกิจกรรม",cutEvent:"ตัดกิจกรรม",pasteEvent:"วางกิจกรรม"},EventFilter:{filterEvents:"กรองกิจกรรม",byName:"ตามชื่อ"},TimeRanges:{showCurrentTimeLine:"แสดงไทม์ไลน์ปัจจุบัน"},PresetManager:{secondAndMinute:{displayDateFormat:"ll LTS",name:"วินาที"},minuteAndHour:{topDateFormat:"ddd DD/MM, H",displayDateFormat:"ll LST"},hourAndDay:{topDateFormat:"ddd DD/MM",middleDateFormat:"LST",displayDateFormat:"ll LST",name:"วัน"},day:{name:"วัน/ชั่วโมง"},week:{name:"สัปดาห์/ชั่วโมง"},dayAndWeek:{displayDateFormat:"ll LST",name:"สัปดาห์/วัน"},dayAndMonth:{name:"เดือน"},weekAndDay:{displayDateFormat:"ll LST",name:"สัปดาห์"},weekAndMonth:{name:"สัปดาห์"},weekAndDayLetter:{name:"สัปดาห์/วันธรรมดา"},weekDateAndMonth:{name:"เดือน/สัปดาห์"},monthAndYear:{name:"เดือน"},year:{name:"ปี"},manyYears:{name:"หลายปี"}},RecurrenceConfirmationPopup:{"delete-title":"คุณกำลังจะลบกิจกรรม","delete-all-message":"คุณต้องการที่จะลบกิจกรรมนี้ทุกครั้งหรือไม่?","delete-further-message":"คุณต้องการที่จะลบกิจกรรมครั้งนี้รวมถึงกิจกรรมทั้งหมดในอนาคต หรือลบเฉพาะกิจกรรมที่เลือก?","delete-only-this-message":"คุณต้องการลบการเกิดเหตุการณ์นี้หรือไม่?","delete-further-btn-text":"ลบกิจกรรมทั้งหมดในอนาคต","delete-only-this-btn-text":"ลบเฉพาะกิจกรรมนี้","update-title":"คุณกำลังเปลี่ยนแปลงกิจกรรมที่เกิดซ้ำ","update-all-message":"คุณต้องการที่จะเปลี่ยนแปลงกิจกรรมนี้ทุกครั้งหรือไม่?","update-further-message":"คุณต้องการที่จะเปลี่ยนแปลงเฉพาะกิจกรรมครั้งนี้ หรือเปลี่ยนแปลงกิจกรรมนี้รวมถึงกิจกรรมทั้งหมดในอนาคต?","update-only-this-message":"คุณต้องการเปลี่ยนแปลงการเกิดเหตุการณ์นี้หรือไม่?","update-further-btn-text":"กิจกรรมทั้งหมดในอนาคต","update-only-this-btn-text":"เฉพาะกิจกรรมครั้งนี้",Yes:"ใช่",Cancel:"ยกเลิก",width:600},RecurrenceLegend:{" and ":" และ ",Daily:"ทุกวัน","Weekly on {1}":({days:e})=>`ทุกสัปดาห์ในวัน ${e}`,"Monthly on {1}":({days:e})=>`ทุกเดือนในวัน ${e}`,"Yearly on {1} of {2}":({days:e,months:t})=>`ทุกปีในวัน ${e} ของ ${t}`,"Every {0} days":({interval:e})=>`ทุก ${e} วัน`,"Every {0} weeks on {1}":({interval:e,days:t})=>`ทุก ${e} สัปดาห์ในวัน ${t}`,"Every {0} months on {1}":({interval:e,days:t})=>`ทุก ${e} เดือนในวัน ${t}`,"Every {0} years on {1} of {2}":({interval:e,days:t,months:a})=>`ทุก ${e} ปีในวัน ${t} ของ ${a}`,position1:"วันที่หนึ่ง",position2:"วันที่สอง",position3:"วันที่สาม",position4:"วันที่สี่",position5:"วันที่ห้า","position-1":"วันสุดท้าย",day:"วัน",weekday:"วันธรรมดา","weekend day":"วันสุดสัปดาห์",daysFormat:({position:e,days:t})=>`${e} ${t}`},RecurrenceEditor:{"Repeat event":"ทำกิจกรรมซ้ำ",Cancel:"ยกเลิก",Save:"บันทึก",Frequency:"ความถี่",Every:"ทุก",DAILYintervalUnit:"วัน",WEEKLYintervalUnit:"สัปดาห์",MONTHLYintervalUnit:"เดือน",YEARLYintervalUnit:"ปี",Each:"แต่ละ",on:"ในวัน",the:"ในวัน","On the":"ในวัน","End repeat":"สิ้นสุดการทำซ้ำ","time(s)":"ครั้ง",Days:"วัน",Months:"เดือน"},RecurrenceDaysCombo:{day:"วัน",weekday:"วันธรรมดา","weekend day":"วันสุดสัปดาห์"},RecurrencePositionsCombo:{position1:"วันที่หนึ่ง",position2:"วันที่สอง",position3:"วันที่สาม",position4:"วันที่สี่",position5:"วันที่ห้า","position-1":"วันสุดท้าย"},RecurrenceStopConditionCombo:{Never:"ไม่ต้อง",After:"หลังจาก","On date":"ในวันที่"},RecurrenceFrequencyCombo:{None:"ไม่มีการทำซ้ำ",Daily:"ทุกวัน",Weekly:"ทุกสัปดาห์",Monthly:"ทุกเดือน",Yearly:"ทุกปี"},RecurrenceCombo:{None:"ไม่มี",Custom:"กำหนดเอง..."},Summary:{"Summary for":e=>`สรุปสำหรับ ${e}`},ScheduleRangeCombo:{completeview:"กำหนดการทั้งหมด",currentview:"กำหนดการที่มองเห็น",daterange:"ช่วงวันที่",completedata:"กำหนดการทั้งหมด (สำหรับทุกกิจกรรม)"},SchedulerExportDialog:{"Schedule range":"ช่วงกำหนดการ","Export from":"ตั้งแต่","Export to":"ถึง"},ExcelExporter:{"No resource assigned":"ไม่มีการจัดสรรทรัพยากร"},CrudManagerView:{serverResponseLabel:"การตอบสนองของเซิร์ฟเวอร์:"},DurationColumn:{Duration:"ระยะเวลา"}},F=d.publishLocale(R),w={localeName:"Th",localeDesc:"ไทย",localeCode:"th",ConstraintTypePicker:{none:"ไม่มี",assoonaspossible:"โดยเร็วที่สุด",aslateaspossible:"โดยช้าที่สุด",muststarton:"ต้องเริ่มตั้งแต่",mustfinishon:"ต้องสิ้นสุดเมื่อ",startnoearlierthan:"ต้องไม่เริ่มต้นก่อน",startnolaterthan:"ต้องไม่เริ่มต้นหลังจาก",finishnoearlierthan:"ต้องไม่สิ้นสุดก่อน",finishnolaterthan:"ต้องไม่สิ้นสุดหลังจาก"},SchedulingDirectionPicker:{Forward:"ไปข้างหน้า",Backward:"ถอยหลัง",inheritedFrom:"สืบทอดมาจาก",enforcedBy:"บังคับใช้โดย"},CalendarField:{"Default calendar":"ปฏิทินเริ่มต้น",editCalendar:"แก้ไขปฏิทิน"},TaskEditorBase:{Information:"ข้อมูล",Save:"บันทึก",Cancel:"ยกเลิก",Delete:"ลบ",calculateMask:"กำลังคำนวณ...",saveError:"ไม่สามารถบันทึก กรุณาแก้ไขข้อผิดพลาดก่อน",repeatingInfo:"กำลังเรียกดูกิจกรรมที่เกิดซ้ำ",editRepeating:"แก้ไข"},TaskEdit:{editEvent:"แก้ไขกิจกรรม",ConfirmDeletionTitle:"ยืนยันการลบ",ConfirmDeletionMessage:"คุณแน่ใจหรือไม่ว่าคุณต้องการลบกิจกรรมนี้?"},GanttTaskEditor:{editorWidth:"44em"},SchedulerTaskEditor:{editorWidth:"33em"},SchedulerGeneralTab:{labelWidth:"6em",General:"ทั่วไป",Name:"ชื่อ",Resources:"ทรัพยากร","% complete":"% ที่เสร็จสิ้น",Duration:"ระยะเวลา",Start:"เริ่มต้น",Finish:"สิ้นสุด",Effort:"การลงแรง",Preamble:"ส่วนต้น",Postamble:"ส่วนท้าย"},GeneralTab:{labelWidth:"6.5em",General:"ทั่วไป",Name:"ชื่อ","% complete":"% ที่เสร็จสิ้น",Duration:"ระยะเวลา",Start:"เริ่มต้น",Finish:"สิ้นสุด",Effort:"การลงแรง",Dates:"จำนวนวัน"},SchedulerAdvancedTab:{labelWidth:"13em",Advanced:"ขั้นสูง",Calendar:"ปฏิทิน","Scheduling mode":"โหมดจัดกำหนดการ","Effort driven":"ขับเคลื่อนด้วยการลงแรง","Manually scheduled":"จัดกำหนดการด้วยตนเอง","Constraint type":"ประเภทของข้อจำกัด","Constraint date":"วันที่ของข้อจำกัด",Inactive:"ไม่ทำงาน","Ignore resource calendar":"เพิกเฉยต่อปฏิทินทรัพยากร"},CalendarEditorDatePicker:{addException:"เพิ่มข้อยกเว้น",addWeek:"เพิ่มสัปดาห์"},CalendarEditorExceptionTab:{addException:"เพิ่มข้อยกเว้น",removeException:"ลบข้อยกเว้น",noRows:"ไม่มีการเพิ่มข้อยกเว้น"},CalendarEditorWeekTab:{addWeek:"เพิ่มสัปดาห์",removeWeek:"ลบสัปดาห์"},CalendarEditor:{daysAreWorkingByDefault:"วันทำงานตามค่าเริ่มต้น",workingTimeCalendar:"ปฏิทินเวลาทำงาน",exceptions:"ข้อยกเว้น",general:"ทั่วไป",name:"ชื่อ",parent:"พ่อแม่",save:"บันทึก",weeks:"หลายสัปดาห์",error:"ข้อผิดพลาด",inputErrors:"มีข้อผิดพลาดในการป้อนข้อมูล โปรดแก้ไขก่อนบันทึกการเปลี่ยนแปลงของคุณ",delete:"ลบ",addCalendar:"เพิ่มปฏิทิน",confirmation:"การยืนยัน",removeCalendarWithChildren:'ปฏิทินมีปฏิทินเด็ก คลิก "ใช่" เพื่อลบปฏิทินกับลูก ๆ',removeCalendarAndLinks:'ปฏิทินถูกใช้โดยบันทึกบางอย่าง คลิก "ใช่" เพื่อยกเลิกการเชื่อมโยงและลบปฏิทิน',newException:"ข้อยกเว้นใหม่",newWeek:"สัปดาห์ใหม่"},CalendarEditorDateInfo:{isWorking:" กำลังทำงานอยู่",isNotWorking:" ไม่ทำงาน",basedOn:" ขึ้นอยู่กับ:",byDefault:"โดยค่าเริ่มต้น",rangeTpl:(e,t)=>`${e} ถึง ${t} น`},CalendarEditorLegend:{workingDay:"วันทำงาน",nonWorkingDay:"วันที่ไม่ทำงาน"},AvailabilityRangeError:{errorOverlap:"มีช่วงที่ทับซ้อนกัน",errorMissingDate:"ต้องใช้เวลาเริ่มต้นและสิ้นสุด",errorStartAfterEnd:"เวลาเริ่มต้นไม่สามารถเป็นหลังจากเวลาสิ้นสุด"},CalendarEditorExceptionPanel:{name:"ชื่อ",from:"จาก",to:"ถึง",is:"เป็น",nonWorking:"ไม่ทำงาน",working:"การทำงาน",hours:"ชั่วโมง",repeat:"ทำซ้ำ",repeatEnd:"ทำซ้ำ",errorMissingDate:"จำเป็นต้องมีช่วงวันที่ยกเว้น",errorStartAfterEnd:'"จาก" วันที่ไม่สามารถหลังจาก "ถึง" วันที่ ',errorStartAndEndRepeatNumberMismatch:"ข้อยกเว้นควรเริ่มต้นและสิ้นสุดจำนวนครั้งเดียวกัน"},CalendarEditorWeekPanel:{name:"ชื่อ",from:"จาก",to:"ถึง",days:"วัน",copyDay:"วันคัดลอก",pasteDay:"วางวัน",stopCopying:"หยุดคัดลอก"},CalendarEditorAvailabilityRangeContainer:{addRange:"เพิ่มช่วง",removeRange:"ลบช่วง"},CalendarEditorWeekGrid:{errorStartAfterEnd:'"จาก" วันที่ไม่สามารถหลังจาก "ถึง" วันที่ ',errorNoDefaultWeek:"จำเป็นต้องมีการกำหนดค่าสัปดาห์",errorMultipleDefaultWeeks:"มีการระบุมากกว่าหนึ่งสัปดาห์เริ่มต้น",errorNoWeekAvailability:"สัปดาห์ต้องให้เวลาทำงาน",errorInvalidWeekAvailability:"สัปดาห์มีข้อผิดพลาดในการกำหนดค่าเวลาทำงาน",noRows:"ไม่มีการเพิ่มสัปดาห์"},AdvancedTab:{labelWidth:"11.5em",Advanced:"ขั้นสูง",Calendar:"ปฏิทิน","Scheduling mode":"โหมดจัดกำหนดการ","Effort driven":"ขับเคลื่อนด้วยการลงแรง","Manually scheduled":"จัดกำหนดการด้วยตนเอง","Constraint type":"ประเภทของข้อจำกัด","Constraint date":"วันที่ของข้อจำกัด",Constraint:"ข้อจำกัด",Rollup:"การแสดงข้อมูลที่หน้าสรุป",Inactive:"ไม่ทำงาน","Ignore resource calendar":"เพิกเฉยต่อปฏิทินทรัพยากร","Scheduling direction":"ทิศทางการตั้งตารางเวลา",projectBorder:"เส้นขอบโครงการ",ignore:"ไม่สนใจ",honor:"ให้เกียรติ",askUser:"ถามผู้ใช้"},DependencyTab:{Predecessors:"งานลำดับก่อนหน้า",Successors:"งานที่ตามมา",ID:"รหัส",Name:"ชื่อ",Type:"ประเภท",Lag:"การล่าช้า",cyclicDependency:"การอ้างอิงเป็นวงรอบ",invalidDependency:"การอ้างอิงที่ไม่ถูกต้อง"},NotesTab:{Notes:"หมายเหตุ"},ResourceCalendarColumn:{calendar:"ปฏิทิน"},ResourcesTab:{unitsTpl:({value:e})=>`${e}%`,Resources:"ทรัพยากร",Resource:"ทรัพยากร",Units:"หน่วย"},RecurrenceTab:{title:"ทำซ้ำ"},SchedulingModePicker:{Normal:"ปกติ","Fixed Duration":"ระยะเวลาคงที่","Fixed Units":"หน่วยคงที่","Fixed Effort":"การลงแรงคงที่"},ResourceHistogram:{barTipInRange:'<b>{resource}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated} จาก {available}</span>ที่ได้รับการจัดสรร',barTipOnDate:'<b>{resource}</b> on {startDate}<br><span class="{cls}">{allocated} จาก {available}</span> ที่ได้รับการจัดสรร',groupBarTipAssignment:'<b>{resource}</b> - <span class="{cls}">{allocated} จาก {available}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} จาก {available}</span> allocated:<br>{assignments}',groupBarTipOnDate:'ใน {startDate}<br><span class="{cls}">{allocated} จาก {available}</span> ที่ได้รับการจัดสรร:<br>{assignments}',plusMore:"+{value} เพิ่มเติม"},ResourceUtilization:{barTipInRange:'<b>{event}</b> {startDate} - {endDate}<br><span class="{cls}">{allocated}</span> ที่ได้รับการจัดสรร',barTipOnDate:'<b>{event}</b> ใน {startDate}<br><span class="{cls}">{allocated}</span> ที่ได้รับการจัดสรร',groupBarTipAssignment:'<b>{event}</b> - <span class="{cls}">{allocated}</span>',groupBarTipInRange:'{startDate} - {endDate}<br><span class="{cls}">{allocated} จาก {available}</span> ที่ได้รับการจัดสรร:<br>{assignments}',groupBarTipOnDate:'ใน {startDate}<br><span class="{cls}">{allocated} จาก {available}</span> ที่ได้รับการจัดสรร:<br>{assignments}',plusMore:"+{value} เพิ่มเติม",nameColumnText:"ทรัพยากร / กิจกรรม"},SchedulingIssueResolutionPopup:{"Cancel changes":"ยกเลิกการเปลี่ยนแปลงและไม่ดำเนินการใด ๆ",schedulingConflict:"ความขัดแย้งของการจัดกำหนดการ",emptyCalendar:"ข้อผิดพลาดของการกำหนดค่าปฏิทิน",cycle:"วงรอบการจัดกำหนดการ",Apply:"นำไปใช้"},CycleResolutionPopup:{dependencyLabel:"กรุณาเลือกการอ้างอิง:",invalidDependencyLabel:"พบการอ้างอิงไม่ถูกต้องที่จำเป็นต้องได้รับการแก้ไข:"},DependencyEdit:{Active:"ทำงาน"},SchedulerProBase:{propagating:"กำลังคำนวณโครงการ",storePopulation:"กำลังโหลดข้อมูล",finalizing:"กำลังสรุปผลลัพธ์"},EventSegments:{splitEvent:"แยกกิจกรรม",renameSegment:"เปลี่ยนชื่อ"},NestedEvents:{deNestingNotAllowed:"ไม่อนุญาตให้ยกเลิกการรวมกลุ่ม",nestingNotAllowed:"ไม่อนุญาตให้รวมกลุ่ม"},VersionGrid:{compare:"เปรียบเทียบ",description:"คำอธิบาย",occurredAt:"เกิดขึ้นที่",rename:"เปลี่ยนชื่อ",restore:"กู้คืน",stopComparing:"หยุดเปรียบเทียบ"},Versions:{entityNames:{TaskModel:"งาน",AssignmentModel:"งานที่กำหนด",DependencyModel:"ลิงก์",ProjectModel:"โครงการ",ResourceModel:"ทรัพยากร",other:"ออบเจ็กต์"},entityNamesPlural:{TaskModel:"งาน",AssignmentModel:"งานที่กำหนด",DependencyModel:"ลิงก์",ProjectModel:"โครงการ",ResourceModel:"ทรัพยากร",other:"ออบเจ็กต์"},transactionDescriptions:{update:"เปลี่ยน {n} {entities} แล้ว",add:"เพิ่ม {n} {entities} แล้ว",remove:"นำ {n} {entities} ออกแล้ว",move:"ย้าย {n} {entities} แล้ว",mixed:"เปลี่ยนแปลง {n} {entities} แล้ว"},addEntity:"เพิ่ม {type} **{name}** แล้ว",removeEntity:"นำ {type} **{name}** ออกแล้ว",updateEntity:"เปลี่ยน {type} **{name}** แล้ว",moveEntity:"ย้าย {type} **{name}** จาก {from} ไปยัง {to}",addDependency:"เพิ่มลิงก์จาก **{from}** ไปยัง **{to}** แล้ว",removeDependency:"นำลิงก์ออกจาก **{from}** ไปยัง **{to}** แล้ว",updateDependency:"แก้ไขลิงก์จาก **{from}** ไปยัง **{to}**",addAssignment:"กำหนด **{resource}** ไปยัง **{event}** แล้ว",removeAssignment:"นำงานที่กำหนดของ **{resource}** ออกจาก **{event}** แล้ว",updateAssignment:"แก้ไขงานที่กำหนดของ **{resource}** ไปยัง **{event}** แล้ว",noChanges:"ไม่มีการเปลี่ยนแปลง",nullValue:"ไม่มี",versionDateFormat:"M/D/YYYY h:mm a",undid:"ยกเลิกการเปลี่ยนแปลง",redid:"ทำการเปลี่ยนแปลงซ้ำ",editedTask:"แก้ไขคุณสมบัติงานแล้ว",deletedTask:"ลบงานแล้ว",movedTask:"ย้ายงานหนึ่งแล้ว",movedTasks:"ย้ายหลายงานแล้ว"}},x=d.publishLocale(w);if(typeof l.exports=="object"&&typeof c=="object"){var P=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Object.getOwnPropertyNames(t))!Object.prototype.hasOwnProperty.call(e,n)&&n!==a&&Object.defineProperty(e,n,{get:()=>t[n],enumerable:!(r=Object.getOwnPropertyDescriptor(t,n))||r.enumerable});return e};l.exports=P(l.exports,c)}return l.exports});