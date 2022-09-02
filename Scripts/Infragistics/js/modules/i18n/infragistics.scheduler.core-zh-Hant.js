/*!@license
* Infragistics.Web.ClientUI infragistics.scheduler.core.js resources 22.1.20221.137
*
* Copyright (c) 2011-2022 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.zh-Hant=$.ig.locale.zh-Hant||{};$.ig.locale.zh-Hant.schedulerCore=$.ig.locale.zh-Hant.schedulerCore||{};var l=$.ig.locale.zh-Hant.schedulerCore;l["ActivityBase_Exception_CannotModifyOccurrenceProperty"]="\u7121\u6cd5\u5728\u6b64 {1} \u5be6\u4f8b\u4e0a\u4fee\u6539 {0} \u5c6c\u6027\u7684\u503c\uff0c\u56e0\u70ba\u5b83\u662f\u91cd\u8907\u7684\u6210\u54e1\u3002";l["LE_ActivityBase_DisassociatedResource"]="\u6307\u5b9a\u7684\u8cc7\u6e90\u672a\u8207\u6b64\u6d3b\u52d5\u7684\u540c\u4e00\u8cc7\u6599\u4f86\u6e90\u76f8\u95dc\u806f\u3002";l["LE_AppointmentItemsSource_CannotEdit"]="\u7d04\u6703\u9805\u76ee\u4f86\u6e90\u4e0d\u652f\u63f4\u5c0d\u5176\u5167\u5bb9\u7684\u4fee\u6539\u3002";l["LE_AppointmentItemsSource_InvalidValue_JS"]="\u6307\u5b9a\u7684\u503c\u5fc5\u9808\u662f JSON \u9663\u5217\u6216 $.ig.DataSource \u5be6\u4f8b\u3002";l["LE_AppointmentItemsSource_NoIList_DOTNET"]="AppointmentItemsSource \u4e0d\u652f\u63f4\u4fee\u6539\u5176\u5167\u5bb9\u3002\u9805\u76ee\u4f86\u6e90\u5fc5\u9808\u5be6\u73fe System.Collections.IList \u4ee5\u4fbf\u652f\u63f4\u4fee\u6539\u3002";l["LE_AppointmentPropertyMapping_RecurrenceRoot"]="RecurrenceRoot \u5c6c\u6027\u4e0d\u53ef\u7d81\u5b9a\uff0c\u7121\u6cd5\u5c0d\u61c9\u3002\u70ba RecurrenceId \u5c6c\u6027\u5275\u5efa\u5c0d\u61c9\u3002";l["LE_AppointmentPropertyMapping_Resource"]="Resource \u5c6c\u6027\u4e0d\u53ef\u7d81\u5b9a\uff0c\u7121\u6cd5\u5c0d\u61c9\u3002\u53d6\u800c\u4ee3\u4e4b\uff0c\u70ba ResourceId \u5c6c\u6027\u5275\u5efa\u5c0d\u61c9\u3002";l["LE_BeginEdit_CreatePending"]="\u7121\u6cd5\u7de8\u8f2f\u6307\u5b9a\u7684\u6d3b\u52d5\uff0c\u56e0\u70ba\u6709 'Create' \u64cd\u4f5c\u4ecd\u8655\u65bc\u66ab\u505c\u72c0\u614b\u3002";l["LE_CannotCreateDataObject_DOTNET"]="\u7121\u6cd5\u5efa\u7acb\u65b0\u7684\u8cc7\u6599\u7269\u4ef6\u5be6\u4f8b\u3002\u78ba\u4fdd\u60a8\u7684\u8cc7\u6599\u7269\u4ef6\u985e\u578b\u5177\u6709\u7121\u53c3\u6578\u69cb\u9020\u51fd\u6578\u3002\u5982\u679c\u6c92\u6709\uff0c\u8acb\u70ba CreateAppointmentDataObjectCallback \u5c6c\u6027\u6307\u6d3e\u4ee3\u8868\uff0c\u4ee5\u5efa\u7acb\u6b64\u985e\u578b\u7684\u65b0\u5be6\u4f8b\u3002";l["LE_CannotModifyApppointmentsWhenDataSourceSet"]="\u4f7f\u7528 DataSource \u6642\u64cd\u4f5c\u7121\u6548\u3002\u6539\u70ba\u4f7f\u7528 Scheduler.DataSource \u4f86\u5b58\u53d6\u548c\u4fee\u6539\u5143\u7d20\u3002";l["LE_CannotSetDataSourceWhenAppointmentsAreDefined"]="\u4f7f\u7528 DataSource \u4e4b\u524d\uff0c\u7d04\u6703\u96c6\u5408\u5fc5\u9808\u70ba\u7a7a\u767d\u3002";l["LE_CouldNotConvertColorScheme"]="\u503c '{0}' \u7121\u6cd5\u8f49\u63db\u70ba ScheduleResourceColorScheme \u503c\u3002";l["LE_CouldNotConvertValue"]="\u503c '{0}'\u7121\u6cd5\u8f49\u63db\u70ba\u985e\u578b {1}\u3002";l["LE_CreateDataObjectFailed"]="\u7121\u6cd5\u5efa\u7acb\u65b0\u7684\u8cc7\u6599\u7269\u4ef6\u5be6\u4f8b\u3002";l["LE_DataObjectNotAssociated"]="\u6307\u5b9a\u7684\u8cc7\u6599\u7269\u4ef6\u672a\u8207\u7d04\u6703\u76f8\u95dc\u806f\u3002";l["LE_DuplicateIdentifier"]="\u6a19\u8b58\u7b26 '{0}' \u5df2\u88ab\u4f7f\u7528\u3002\u6d3b\u52d5/\u8cc7\u6e90\u8b58\u5225\u78bc\u5fc5\u9808\u662f\u552f\u4e00\u7684\u3002";l["LE_EndEdit_DataObjectAlreadyAssociated"]="\u6b64\u8cc7\u6599\u7269\u4ef6\u5df2\u8207\u6d3b\u52d5\u76f8\u95dc\u806f\u3002";l["LE_EndEdit_NotInEditMode"]="\u7121\u6cd5\u5728\u6307\u5b9a\u7684\u6d3b\u52d5\u4e0a\u8abf\u7528 EndEdit\uff0c\u56e0\u70ba\u5b83\u4e0d\u5728\u7de8\u8f2f\u6a21\u5f0f\u3002\u5fc5\u9808\u5148\u8abf\u7528 BeginEdit\uff0c\u7136\u5f8c\u624d\u80fd\u63d0\u4ea4\u6d3b\u52d5\u7de8\u8f2f\u64cd\u4f5c\u3002";l["LE_InvalidDayOfWeekRule"]="\u6307\u5b9a\u7684\u661f\u671f\u5e7e\u898f\u5247\u7121\u6548\u3002";l["LE_MissingIdentifier"]="\u907a\u5931\u6a19\u8b58\u7b26\u3002";l["LE_NoAppointmentItemsSource"]="\u672a\u5206\u914d AppointmentItemsSource\u3002";l["LE_NoCreateAppointmentDataObjectCallback_JS"]="\u7121\u6cd5\u5efa\u7acb\u65b0\u7684\u8cc7\u6599\u7269\u4ef6\u5be6\u4f8b\u3002\u60a8\u5fc5\u9808\u70ba CreateAppointmentDataObjectCallback \u5c6c\u6027\u6307\u5b9a\u4e00\u500b\u503c\u3002";l["LE_NoDataObject"]="\u9805\u76ee\u4f86\u6e90\u4e2d\u4e0d\u5b58\u5728\u6307\u5b9a\u6d3b\u52d5\u7684\u57fa\u790e\u8cc7\u6599\u7269\u4ef6\u3002";l["LE_NoPropertyMapping_Appointment"]="\u7d04\u6703\u5c6c\u6027 '{0}' \u4e0d\u5b58\u5728\u5c6c\u6027\u5c0d\u61c9\u3002";l["LE_RecurrenceParsing"]="\u89e3\u6790\u91cd\u8907\u51fa\u73fe\u7684\u554f\u984c\u6642\u51fa\u932f\uff0c\u4e0a\u4e0b\u6587: {0}";l["LE_RecurrenceSerializing"]="\u5e8f\u5217\u5316\u91cd\u8907\u51fa\u73fe\u7684\u554f\u984c\u6642\u51fa\u932f\uff0c\u4e0a\u4e0b\u6587: {0}";l["LE_SchedulePropertyMap_Missing"]="\u672a\u5b9a\u7fa9\u4ee5\u4e0b\u5fc5\u9700\u7684\u5c6c\u6027\u5c0d\u61c9:";l["LE_SchedulePropertyMap_NoPropertyFound"]="\u5728\u57fa\u790e\u8cc7\u6599\u7269\u4ef6\u4e0a\u672a\u627e\u5230\u540d\u70ba '{0}' \u7684\u516c\u5171\u5c6c\u6027\u3002";l["LIT_AgendaDayHeader_Today"]="\u4eca\u5929";l["LIT_AgendaNoEventsMessage"]="\u7121\u6d3b\u52d5";l["LIT_AgendaStartTime_AllDay"]="\u5168\u5929";l["LIT_AgendaStartTime_Ends"]="\u7d50\u675f";l["RD_And"]="\u548c";l["RD_AtTime"]="\u5728 {0}";l["RD_Effective1"]="{0} \u6709\u6548";l["RD_Effective2"]="{0} \u5230 {1} \u6709\u6548";l["RD_Effective3"]="{0} \u7684 {1} \u5230 {2} \u6709\u6548";l["RD_Effective4"]="{0} \u7684 {1} \u5230 {2} \u6709\u6548";l["RD_Effective5"]="{0} \u5230 {1} \u7684 {2} \u6709\u6548";l["RD_Effective6"]="{0} \u5230 {1} \u7684 {2} \u5230 {3} \u6709\u6548";l["RD_Every"]="\u6bcf {0} {1}";l["RD_FrequencyLiterals"]="\u5e74,\u6708,\u9031,\u65e5,\u5c0f\u6642,\u5206\u9418,\u79d2";l["RD_FrequencyLiterals2"]="\u6bcf\u5e74,\u6bcf\u6708,\u6bcf\u9031,\u6bcf\u5929,\u6bcf\u5c0f\u6642,\u5206\u9418,\u7b2c\u4e8c";l["RD_FrequencyLiteralsPlural"]="\u5e74,\u6708,\u9031,\u5929,\u5c0f\u6642,\u5206\u9418,\u79d2";l["RD_InMonth"]="\u5728 {0} \u4e2d";l["RD_Last"]="\u6700\u5f8c";l["RD_NumberSuffix_nd"]="\u7b2c";l["RD_NumberSuffix_rd"]="\u7b2c";l["RD_NumberSuffix_st"]="\u7b2c";l["RD_NumberSuffix_th"]="\u7b2c";l["RD_OccurrenceOfThe"]="\u767c\u751f";l["RD_OfEveryMinuteOrHour"]="\u6bcf {0}";l["RD_OfTheMonthOrYear"]="{0} \u4e2d\u7684";l["RD_OfTheNthMinuteOrHour"]="{0} {1} \u4e2d\u7684";l["RD_OnEach"]="\u5728\u6bcf\u500b";l["RD_OnEverySecond"]="\u6bcf\u79d2";l["RD_OnThe"]="\u5728";l["RD_OnTheNthSecond"]="\u5728 {0} \u79d2";l["RD_Or"]="\u6216";l["RD_OrdinalDayOfMonthUsesSuffix"]="true";l["RD_OrdinalNumberWithSuffix"]="{0}{1}";l["RD_RecurrenceDescriptionOverallStructure"]="\u767c\u751f {0}{1}{2}";l["RD_RepeatingMultipleTimes"]="\u91cd\u8907 {0} \u6b21";l["RD_RepeatingOneTime"]="\u91cd\u8907\u4e00\u6b21";l["RD_RulesInMonth"]="{0} {1}";l["RD_ToTheLast"]="\u5230\u6700\u5f8c";l["RD_Weekday"]="\u5de5\u4f5c\u65e5";l["RD_WeekendDay"]="\u9031\u672b";l["RD_WeekOrDayOfTheMonthOrYear"]="{0} {1}";l["ScheduleDayOfWeekSettings_Exception_InvalidValue"]="\u7121\u6cd5\u6210\u529f\u89e3\u6790\u503c '{0}'\u3002";l["WorkingHourTimeRange_Exception_CannotModifyTime"]="\u7121\u6cd5\u4fee\u6539{0}\u5c6c\u6027\uff0c\u56e0\u70ba\u6b64\u5be6\u4f8b\u5df2\u88ab\u6dfb\u52a0\u81f3 WorkingHours \u96c6\u5408\u3002";$.ig.schedulerCore=$.ig.schedulerCore||{};$.ig.schedulerCore.locale=$.ig.schedulerCore.locale||l;return l});