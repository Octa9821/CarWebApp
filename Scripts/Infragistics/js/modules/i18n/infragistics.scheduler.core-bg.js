/*!@license
* Infragistics.Web.ClientUI infragistics.scheduler.core.js resources 22.1.20221.137
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.bg=$.ig.locale.bg||{};$.ig.locale.bg.schedulerCore=$.ig.locale.bg.schedulerCore||{};var l=$.ig.locale.bg.schedulerCore;l["ActivityBase_Exception_CannotModifyOccurrenceProperty"]="\u0421\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u0442\u043e {0} \u043d\u0435 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u044f\u043d\u043e \u0432 \u0442\u0430\u0437\u0438 {1} \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u044f \u0437\u0430\u0449\u043e\u0442\u043e \u0435 \u0447\u043b\u0435\u043d \u043d\u0430 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u043c\u043e\u0441\u0442.";l["ActivityBase_Exception_CannotModifyOccurrenceProperty1"]="\u0421\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0442\u0430 \u043d\u0430 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e {0} \u043d\u0435 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u043f\u0440\u043e\u043c\u0435\u043d\u044f\u043d\u0430 \u0432 \u0442\u0430\u0437\u0438 {1} \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u044f \u0437\u0430\u0449\u043e\u0442\u043e \u0442\u044f \u0435 \u0447\u043b\u0435\u043d \u043d\u0430 \u043f\u043e\u0432\u0442\u0430\u0440\u044f\u0449\u043e \u0441\u0435 \u0441\u044a\u0431\u0438\u0442\u0438\u0435.";l["LE_ActivityBase_DisassociatedResource"]="The specified resource is not associated with the same data source as this activity.";l["LE_AppointmentItemsSource_CannotEdit"]="The appointment item source does not support modification of its contents.";l["LE_AppointmentItemsSource_InvalidValue_JS"]="The specified value must be a JSON array or an $.ig.DataSource instance.";l["LE_AppointmentItemsSource_NoIList_DOTNET"]="The AppointmentItemsSource does not support modification of its contents. The item source must implement System.Collections.IList in order to support modifications.";l["LE_AppointmentPropertyMapping_RecurrenceRoot"]="The RecurrenceRoot property is not bindable and cannot be mapped. Create a mapping for the RecurrenceId property instead.";l["LE_AppointmentPropertyMapping_Resource"]="The Resource property is not bindable and cannot be mapped. Create a mapping for the ResourceId property instead.";l["LE_BeginEdit_CreatePending"]="The specified activity cannot be edited because there is a 'Create' operation pending.";l["LE_CannotCreateDataObject_DOTNET"]="Could not create new data object instance. Ensure that your data object type has a parameterless constructor. If it does not, assign a delegate to the CreateAppointmentDataObjectCallback property which creates new instances of this type.";l["LE_CannotModifyApppointmentsWhenDataSourceSet"]="Operation is not valid while DataSource is in use. Access and modify elements with Scheduler.DataSource instead.";l["LE_CannotSetDataSourceWhenAppointmentsAreDefined"]="Appointments collection must be empty before using DataSource.";l["LE_CouldNotConvertColorScheme"]="The value '{0}' could not be converted to a ScheduleResourceColorScheme value.";l["LE_CouldNotConvertValue"]="The value '{0}' could not be converted to type {1}.";l["LE_CreateDataObjectFailed"]="Could not create new data object instance.";l["LE_DataObjectNotAssociated"]="The specified data object is not associated with an Appointment.";l["LE_DuplicateIdentifier"]="The identifier '{0}' is already in use. Activity/Resource identifiers must be unique.";l["LE_EndEdit_DataObjectAlreadyAssociated"]="This data object is already associated with an activity.";l["LE_EndEdit_NotInEditMode"]="EndEdit cannot be called on the specified activity because it is not in edit mode. BeginEdit must be called first before an activity edit operation can be committed.";l["LE_InvalidDayOfWeekRule"]="The specified day of week rule is invalid.";l["LE_MissingIdentifier"]="Missing identifier.";l["LE_NoAppointmentItemsSource"]="The AppointmentItemsSource has not been assigned.";l["LE_NoCreateAppointmentDataObjectCallback_JS"]="A new data object instance could not be created. You must specify a value for the CreateAppointmentDataObjectCallback property.";l["LE_NoDataObject"]="The specified activity's underlying data object does not exist in the item source.";l["LE_NoPropertyMapping_Appointment"]="No property mapping exists for Appointment property '{0}'.";l["LE_RecurrenceParsing"]="Error parsing recurrence, context: {0}";l["LE_RecurrenceSerializing"]="Error serializing recurrence, context: {0}";l["LE_SchedulePropertyMap_Missing"]="The following required property mappings were not defined:";l["LE_SchedulePropertyMap_NoPropertyFound"]="No public property named '{0}' was found on the underlying data object.";l["LIT_AgendaDayHeader_Today"]="Today";l["LIT_AgendaNoEventsMessage"]="No Events";l["LIT_AgendaStartTime_AllDay"]="all-day";l["LIT_AgendaStartTime_Ends"]="Ends";l["RD_And"]="and";l["RD_AtTime"]="at {0}";l["RD_Effective1"]="effective {0}";l["RD_Effective2"]="effective {0} until {1}";l["RD_Effective3"]="effective {0} from {1} to {2}";l["RD_Effective4"]="effective {0} at {1}";l["RD_Effective5"]="effective {0} until {1} at {2}";l["RD_Effective6"]="effective {0} until {1} from {2} to {3}";l["RD_Every"]="every {0} {1}";l["RD_FrequencyLiterals"]="year,month,week,day,hour,minute,second";l["RD_FrequencyLiterals2"]="yearly,monthly,weekly,daily,hourly,minutely,secondly";l["RD_FrequencyLiteralsPlural"]="years,months,weeks,days,hours,minutes,seconds";l["RD_InMonth"]="in {0}";l["RD_Last"]="last";l["RD_NumberSuffix_nd"]="nd";l["RD_NumberSuffix_rd"]="rd";l["RD_NumberSuffix_st"]="st";l["RD_NumberSuffix_th"]="th";l["RD_OccurrenceOfThe"]="occurrence of the";l["RD_OfEveryMinuteOrHour"]="of every {0}";l["RD_OfTheMonthOrYear"]="of the {0}";l["RD_OfTheNthMinuteOrHour"]="of the {0} {1}";l["RD_OnEach"]="on each";l["RD_OnEverySecond"]="on every second";l["RD_OnThe"]="on the";l["RD_OnTheNthSecond"]="on the {0} second";l["RD_Or"]="or";l["RD_OrdinalDayOfMonthUsesSuffix"]="true";l["RD_OrdinalNumberWithSuffix"]="{0}{1}";l["RD_RecurrenceDescriptionOverallStructure"]="Occurs {0}{1}{2}";l["RD_RepeatingMultipleTimes"]="repeating {0} times";l["RD_RepeatingOneTime"]="repeating once";l["RD_RulesInMonth"]="{0} {1}";l["RD_ToTheLast"]="to the last";l["RD_Weekday"]="weekday";l["RD_WeekendDay"]="weekend day";l["RD_WeekOrDayOfTheMonthOrYear"]="{0} {1}";l["ScheduleDayOfWeekSettings_Exception_InvalidValue"]="\u0421\u0442\u043e\u0439\u043d\u043e\u0441\u0442\u0442\u0430 '{0}' \u043d\u0435 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0430\u043d\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e.";l["WorkingHourTimeRange_Exception_CannotModifyTime"]="\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u0442\u043e {0} \u043d\u0435 \u043c\u043e\u0436\u0435 \u0434\u0430 \u0431\u044a\u0434\u0435 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u0430\u043d\u043e \u0442\u044a\u0439 \u043a\u0430\u0442\u043e \u0442\u0430\u0437\u0438 \u0438\u043d\u0441\u0442\u0430\u043d\u0446\u0438\u044f \u0432\u0435\u0447\u0435 \u0435 \u0431\u0438\u043b\u0430 \u0434\u043e\u0431\u0430\u0432\u0435\u043d\u0430 \u043a\u044a\u043c WorkingHours \u043a\u043e\u043b\u0435\u043a\u0446\u0438\u044f.";$.ig.schedulerCore=$.ig.schedulerCore||{};$.ig.schedulerCore.locale=$.ig.schedulerCore.locale||l;return l});