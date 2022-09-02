/*!@license
 * Infragistics.Web.ClientUI Tree Grid 22.1.16
 *
 * Copyright (c) 2011-2022 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.9.1.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.dataSource.js
 *	infragistics.ui.shared.js
 *	infragistics.ui.treegrid.js
 *	infragistics.util.js
 *	infragistics.ui.grid.framework.js
 *	infragistics.ui.grid.filtering.js
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.ui.treegrid","./infragistics.ui.grid.filtering"],factory)}else{return factory(jQuery)}})(function($){"use strict";var _aNull=function(val){return val===null||val===undefined};$.widget("ui.igTreeGridFiltering",$.ui.igGridFiltering,{css:{recordMatchFiltering:"ig-igtreegrid-filter-matching-row",cellMatchFiltering:"ig-igtreegrid-filter-matching-cell",recordNotMatchFiltering:"ui-igtreegrid-record-not-matchfiltering"},options:{recordCountKey:null,fromLevel:0,toLevel:-1,displayMode:"showWithAncestors",matchFiltering:"__matchFiltering",filterSummaryInPagerTemplate:null,locale:{filterSummaryInPagerTemplate:undefined},inherit:false},_create:function(){this.element.data($.ui.igGridFiltering.prototype.widgetName,this.element.data($.ui.igTreeGridFiltering.prototype.widgetName));$.ui.igGridFiltering.prototype._create.apply(this,arguments)},_getFilterSummaryPagerTemplate:function(){var template=this._getLocaleValue("filterSummaryInPagerTemplate"),matchesCount,countMatchesPerPage=0;if(!template){return null}if(template.indexOf("${currentPageMatches}")>-1){countMatchesPerPage=this.grid.dataSource.getFilteredRecordsCountFromDataView();template=template.replace("${currentPageMatches}",countMatchesPerPage)}if(template.indexOf("${totalMatches}")>-1){matchesCount=this.getFilteringMatchesCount();template=template.replace("${totalMatches}",matchesCount)}return template},_transformCss:function(cssClass,dataRow){var matchFiltering,grid=this.grid,ds=grid.dataSource;if(this._gridTransformCssCallback){cssClass=this._gridTransformCssCallback.apply(grid,arguments)}if(this._filteringApplied()){matchFiltering=ds.settings.treeDS.filtering.matchFiltering;if(cssClass!==""){cssClass+=" "}if(!_aNull(matchFiltering)){if(dataRow[matchFiltering]){cssClass+=this.css.recordMatchFiltering}else{cssClass+=this.css.recordNotMatchFiltering}}}return cssClass},_filteringApplied:function(){var ds=this.grid.dataSource,expr=ds.settings.filtering.expressions;if(this.options&&this.options.type==="local"){return ds._filter}return expr&&expr.length},getFilteringMatchesCount:function(){var o=this.options,ds=this.grid.dataSource,matches;if(o.type==="local"||o.type==="remote"&&ds.hasTotalRecordsCount()===false){if(ds._filter){matches=ds.getFilteredRecordsCount()}else{matches=ds.flatDataView().length}}else{matches=ds.getFilteringMatchRecordsCount()}return matches},destroy:function(){this._superApply(arguments);this.element.removeData($.ui.igGridFiltering.prototype.widgetName)},_injectGrid:function(gridInstance,isRebind){var ds,o=this.options;$.ui.igGridFiltering.prototype._injectGrid.apply(this,arguments);if(!isRebind){if(this.grid._transformCssCallback){this._gridTransformCssCallback=this.grid._transformCssCallback}this.grid._transformCssCallback=$.proxy(this._transformCss,this)}ds=this.grid.dataSource;if(ds&&ds.settings&&ds.settings.treeDS){ds.settings.filtering.enabled=true;ds.settings.treeDS.filtering.fromLevel=o.fromLevel;ds.settings.treeDS.filtering.toLevel=o.toLevel;ds.settings.treeDS.filtering.displayMode=o.displayMode;ds.settings.treeDS.filtering.matchFiltering=o.matchFiltering}if(o.recordCountKey!==null){ds.settings.responseTotalRecCountKey=o.recordCountKey}}});$.extend($.ui.igTreeGridFiltering,{version:"22.1.16"});return $});(function(factory){if(typeof define==="function"&&define.amd){define("watermark",["jquery"],factory)}else{factory(jQuery)}})(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})});