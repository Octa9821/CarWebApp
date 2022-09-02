/*!@license
* Infragistics.Web.ClientUI infragistics.scheduler.core.js resources 22.1.20221.137
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.sv=$.ig.locale.sv||{};$.ig.locale.sv.schedulerCore=$.ig.locale.sv.schedulerCore||{};var l=$.ig.locale.sv.schedulerCore;l["ActivityBase_Exception_CannotModifyOccurrenceProperty"]="V\xe4rdet p\xe5 egenskapen {0} kan inte \xe4ndras i den h\xe4r {1} instansen eftersom den \xe4r medlem i en upprepning.";l["LE_ActivityBase_DisassociatedResource"]="Den angivna resursen \xe4r inte associerad med samma datak\xe4lla som den h\xe4r aktiviteten.";l["LE_AppointmentItemsSource_CannotEdit"]="Objektsk\xe4llan f\xf6r Appointmenten st\xf6der inte \xe4ndringar av inneh\xe5llet.";l["LE_AppointmentItemsSource_InvalidValue_JS"]="Det angivna v\xe4rdet m\xe5ste vara en JSON-matris eller en $ .ig.DataSource-instans.";l["LE_AppointmentItemsSource_NoIList_DOTNET"]="AppointmentItemsSource st\xf6der inte modifiering av dess inneh\xe5ll. Artikelk\xe4llan m\xe5ste implementera System.Collections.IList f\xf6r att st\xf6dja modifieringar.";l["LE_AppointmentPropertyMapping_RecurrenceRoot"]="Egenskapen RecurrenceRoot \xe4r inte bindbar och kan inte mappas. Skapa en mappning f\xf6r egenskapen RecurrenceId ist\xe4llet.";l["LE_AppointmentPropertyMapping_Resource"]="Resursegenskapen \xe4r inte bindbar och kan inte mappas. Skapa en mappning f\xf6r ResourceId-egenskapen ist\xe4llet.";l["LE_BeginEdit_CreatePending"]='Den angivna aktiviteten kan inte redigeras eftersom en "Skapa" -operation v\xe4ntar.';l["LE_CannotCreateDataObject_DOTNET"]="Det gick inte att skapa en ny dataobjektinstans. Se till att din dataobjekttyp har en parameterl\xf6s konstrukt\xf6r. Om den inte g\xf6r det, tilldela en delegat till egenskapen CreateAppointmentDataObjectCallback som skapar nya instanser av den h\xe4r typen.";l["LE_CannotModifyApppointmentsWhenDataSourceSet"]="Funktionen \xe4r inte giltig medan DataSource anv\xe4nds. F\xe5 \xe5tkomst till och \xe4ndra element med Scheduler.DataSource ist\xe4llet.";l["LE_CannotSetDataSourceWhenAppointmentsAreDefined"]="Samlingsbokningar m\xe5ste vara tomma innan du anv\xe4nder DataSource.";l["LE_CouldNotConvertColorScheme"]="V\xe4rdet '{0}' kunde inte konverteras till ett ScheduleResourceColorScheme-v\xe4rde.";l["LE_CouldNotConvertValue"]="V\xe4rdet '{0}' kunde inte konverteras till typ {1}.";l["LE_CreateDataObjectFailed"]="Det gick inte att skapa en ny dataobjektinstans.";l["LE_DataObjectNotAssociated"]="Det angivna dataobjektet \xe4r inte associerat med en Planlagt tillf\xe4lle.";l["LE_DuplicateIdentifier"]="Identifieraren '{0}' anv\xe4nds redan. Aktivitets- / resursidentifierare m\xe5ste vara unika.";l["LE_EndEdit_DataObjectAlreadyAssociated"]="Detta dataobjekt \xe4r redan associerat med en aktivitet.";l["LE_EndEdit_NotInEditMode"]="EndEdit kan inte anropas f\xf6r den angivna aktiviteten eftersom den inte \xe4r i redigeringsl\xe4ge. BeginEdit m\xe5ste anropas f\xf6rst innan en aktivitetsredigerings\xe5tg\xe4rd kan g\xf6ras.";l["LE_InvalidDayOfWeekRule"]="Den angivna veckodagen \xe4r ogiltig.";l["LE_MissingIdentifier"]="Identifierare saknas.";l["LE_NoAppointmentItemsSource"]="AppointmentItemsSource har inte tilldelats.";l["LE_NoCreateAppointmentDataObjectCallback_JS"]="En ny dataobjektinstans kunde inte skapas. Du m\xe5ste ange ett v\xe4rde f\xf6r egenskapen CreateAppointmentDataObjectCallback.";l["LE_NoDataObject"]="Den angivna aktivitetens underliggande dataobjekt finns inte i artikelk\xe4llan.";l["LE_NoPropertyMapping_Appointment"]="Ingen egenskapskartl\xe4ggning finns f\xf6r Planlagt tillf\xe4lle-egenskapen '{0}'.";l["LE_RecurrenceParsing"]="Fel vid parsning av \xe5terkommande, sammanhang: {0}";l["LE_RecurrenceSerializing"]="Fel vid serialisering av \xe5terkommande, sammanhang: {0}";l["LE_SchedulePropertyMap_Missing"]="F\xf6ljande n\xf6dv\xe4ndiga egenskapskartl\xe4ggningar definierades inte:";l["LE_SchedulePropertyMap_NoPropertyFound"]="Ingen offentlig egenskap med namnet '{0}' hittades i det underliggande dataobjektet.";l["LIT_AgendaDayHeader_Today"]="I dag";l["LIT_AgendaNoEventsMessage"]="Inga h\xe4ndelser";l["LIT_AgendaStartTime_AllDay"]="hela dagen";l["LIT_AgendaStartTime_Ends"]="Slutar";l["RD_And"]="och";l["RD_AtTime"]="vid {0}";l["RD_Effective1"]="effektiv {0}";l["RD_Effective2"]="g\xe4ller {0} till {1}";l["RD_Effective3"]="effektiv {0} fr\xe5n {1} till {2}";l["RD_Effective4"]="tr\xe4der i kraft {0} vid {1}";l["RD_Effective5"]="g\xe4ller {0} till {1} kl. {2}";l["RD_Effective6"]="g\xe4ller {0} till {1} fr\xe5n {2} till {3}";l["RD_Every"]="varje {0} {1}";l["RD_FrequencyLiterals"]="\xe5r, m\xe5nad, vecka, dag, timme, minut, sekund";l["RD_FrequencyLiterals2"]="\xe5rligen, m\xe5nadsvis, veckovis, dagligen, timvis, minutvis, sekundvis";l["RD_FrequencyLiteralsPlural"]="\xe5r, m\xe5nader, veckor, dagar, timmar, minuter, sekunder";l["RD_InMonth"]="i {0}";l["RD_Last"]="sista";l["RD_NumberSuffix_nd"]=":a";l["RD_NumberSuffix_rd"]=":e";l["RD_NumberSuffix_st"]=":a";l["RD_NumberSuffix_th"]=":e";l["RD_OccurrenceOfThe"]="f\xf6rekomst av";l["RD_OfEveryMinuteOrHour"]="av varje {0}";l["RD_OfTheMonthOrYear"]="av {0}";l["RD_OfTheNthMinuteOrHour"]="av {0} {1}";l["RD_OnEach"]="p\xe5 varje";l["RD_OnEverySecond"]="p\xe5 varje sekund";l["RD_OnThe"]="p\xe5 den";l["RD_OnTheNthSecond"]="p\xe5 {0} sekunden";l["RD_Or"]="eller";l["RD_OrdinalDayOfMonthUsesSuffix"]="Sann";l["RD_OrdinalNumberWithSuffix"]="{0} {1}";l["RD_RecurrenceDescriptionOverallStructure"]="Sker {0} {1} {2}";l["RD_RepeatingMultipleTimes"]="upprepas {0} g\xe5nger";l["RD_RepeatingOneTime"]="upprepas en g\xe5ng";l["RD_RulesInMonth"]="{0} {1}";l["RD_ToTheLast"]="till den sista";l["RD_Weekday"]="veckodag";l["RD_WeekendDay"]="helgdag";l["RD_WeekOrDayOfTheMonthOrYear"]="{0} {1}";l["ScheduleDayOfWeekSettings_Exception_InvalidValue"]="V\xe4rdet '{0}' kunde inte analyseras.";l["WorkingHourTimeRange_Exception_CannotModifyTime"]="Egenskapen {0} kan inte \xe4ndras eftersom den h\xe4r instansen redan har lagts till i en WorkingHours-samling.";$.ig.schedulerCore=$.ig.schedulerCore||{};$.ig.schedulerCore.locale=$.ig.schedulerCore.locale||l;return l});