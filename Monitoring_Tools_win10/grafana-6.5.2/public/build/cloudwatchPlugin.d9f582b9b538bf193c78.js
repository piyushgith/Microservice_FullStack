(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{Z209:function(e,t,a){"use strict";a.r(t);var n=a("KHwQ"),r=a.n(n),s=a("txxJ"),i=a("LvDl"),o=a.n(i),c=function(){function e(e,t,a,n,s){e.init=function(){var t=e.target;t.namespace=t.namespace||"",t.metricName=t.metricName||"",t.statistics=t.statistics||["Average"],t.dimensions=t.dimensions||{},t.period=t.period||"",t.region=t.region||"default",t.id=t.id||"",t.expression=t.expression||"",e.regionSegment=a.getSegmentForValue(e.target.region,"select region"),e.namespaceSegment=a.getSegmentForValue(e.target.namespace,"select namespace"),e.metricSegment=a.getSegmentForValue(e.target.metricName,"select metric"),e.dimSegments=o.a.reduce(e.target.dimensions,function(e,t,n){return e.push(a.newKey(n)),e.push(a.newOperator("=")),e.push(a.newKeyValue(t)),e},[]),e.statSegments=o.a.map(e.target.statistics,function(e){return a.getSegmentForValue(e)}),e.ensurePlusButton(e.statSegments),e.ensurePlusButton(e.dimSegments),e.removeDimSegment=a.newSegment({fake:!0,value:"-- remove dimension --"}),e.removeStatSegment=a.newSegment({fake:!0,value:"-- remove stat --"}),o.a.isEmpty(e.target.region)&&(e.target.region="default"),e.onChange||(e.onChange=function(){})},e.getStatSegments=function(){return s.when(o.a.flatten([r.a.copy(e.removeStatSegment),o.a.map(e.datasource.standardStatistics,function(e){return a.getSegmentForValue(e)}),a.getSegmentForValue("pNN.NN")]))},e.statSegmentChanged=function(t,a){t.value===e.removeStatSegment.value?e.statSegments.splice(a,1):t.type="value",e.target.statistics=o.a.reduce(e.statSegments,function(e,t){return t.fake||e.push(t.value),e},[]),e.ensurePlusButton(e.statSegments),e.onChange()},e.ensurePlusButton=function(e){var t=e.length,n=e[Math.max(t-1,0)];n&&"plus-button"===n.type||e.push(a.newPlusButton())},e.getDimSegments=function(t,a){if("operator"===t.type)return s.when([]);var n=e.target,i=s.when([]);if("key"===t.type||"plus-button"===t.type)i=e.datasource.getDimensionKeys(e.target.namespace,e.target.region);else if("value"===t.type){var o=e.dimSegments[a-2].value;delete n.dimensions[o],i=e.datasource.getDimensionValues(n.region,n.namespace,n.metricName,o,n.dimensions)}return i.then(e.transformToSegments(!0)).then(function(a){return"key"===t.type&&a.splice(0,0,r.a.copy(e.removeDimSegment)),a})},e.dimSegmentChanged=function(t,n){e.dimSegments[n]=t,t.value===e.removeDimSegment.value?e.dimSegments.splice(n,3):"plus-button"===t.type&&(e.dimSegments.push(a.newOperator("=")),e.dimSegments.push(a.newFake("select dimension value","value","query-segment-value")),t.type="key",t.cssClass="query-segment-key"),e.syncDimSegmentsWithModel(),e.ensurePlusButton(e.dimSegments),e.onChange()},e.syncDimSegmentsWithModel=function(){for(var t={},a=e.dimSegments.length,n=0;n<a-2;n+=3){var r=e.dimSegments[n],s=e.dimSegments[n+2];s.fake||(t[r.value]=s.value)}e.target.dimensions=t},e.getRegions=function(){return e.datasource.metricFindQuery("regions()").then(function(e){return e.unshift({text:"default"}),e}).then(e.transformToSegments(!0))},e.getNamespaces=function(){return e.datasource.metricFindQuery("namespaces()").then(e.transformToSegments(!0))},e.getMetrics=function(){return e.datasource.metricFindQuery("metrics("+e.target.namespace+","+e.target.region+")").then(e.transformToSegments(!0))},e.regionChanged=function(){e.target.region=e.regionSegment.value,e.onChange()},e.namespaceChanged=function(){e.target.namespace=e.namespaceSegment.value,e.onChange()},e.metricChanged=function(){e.target.metricName=e.metricSegment.value,e.onChange()},e.transformToSegments=function(e){return function(n){var r=o.a.map(n,function(e){return a.newSegment({value:e.text,expandable:e.expandable})});return e&&o.a.each(t.variables,function(e){r.unshift(a.newSegment({type:"template",value:"$"+e.name,expandable:!0}))}),r}},e.init()}return e.$inject=["$scope","templateSrv","uiSegmentSrv","datasourceSrv","$q"],e}();s.c.directive("cloudwatchQueryParameter",function(){return{templateUrl:"public/app/plugins/datasource/cloudwatch/partials/query.parameter.html",controller:c,restrict:"E",scope:{target:"=",datasource:"=",onChange:"&"}}});var l,u=a("Obii"),m=a("mrSG"),g=a("q1tI"),p=a.n(g),d=a("kDLi"),f=a("WnbS"),h=function(e){function t(a){var n=e.call(this,a)||this;n.updateDatasource=function(e){return Object(m.__awaiter)(n,void 0,void 0,function(){var t,a;return Object(m.__generator)(this,function(n){for(t in e.jsonData)0===e.jsonData[t].length&&delete e.jsonData[t];for(a in e.secureJsonData)0===e.secureJsonData[a].length&&delete e.secureJsonData[a];return this.props.onOptionsChange(Object(m.__assign)({},e)),[2]})})},n.onAuthProviderChange=function(e){n.updateDatasource(Object(m.__assign)(Object(m.__assign)({},n.state.config),{jsonData:Object(m.__assign)(Object(m.__assign)({},n.state.config.jsonData),{authType:e.value})}))},n.onRegionChange=function(e){n.updateDatasource(Object(m.__assign)(Object(m.__assign)({},n.state.config),{jsonData:Object(m.__assign)(Object(m.__assign)({},n.state.config.jsonData),{defaultRegion:e.value})}))},n.onResetAccessKey=function(){n.updateDatasource(Object(m.__assign)(Object(m.__assign)({},n.state.config),{secureJsonFields:Object(m.__assign)(Object(m.__assign)({},n.state.config.secureJsonFields),{accessKey:!1})}))},n.onAccessKeyChange=function(e){n.updateDatasource(Object(m.__assign)(Object(m.__assign)({},n.state.config),{secureJsonData:Object(m.__assign)(Object(m.__assign)({},n.state.config.secureJsonData),{accessKey:e})}))},n.onResetSecretKey=function(){n.updateDatasource(Object(m.__assign)(Object(m.__assign)({},n.state.config),{secureJsonFields:Object(m.__assign)(Object(m.__assign)({},n.state.config.secureJsonFields),{secretKey:!1})}))},n.onSecretKeyChange=function(e){n.updateDatasource(Object(m.__assign)(Object(m.__assign)({},n.state.config),{secureJsonData:Object(m.__assign)(Object(m.__assign)({},n.state.config.secureJsonData),{secretKey:e})}))},n.onCredentialProfileNameChange=function(e){n.updateDatasource(Object(m.__assign)(Object(m.__assign)({},n.state.config),{database:e}))},n.onArnAssumeRoleChange=function(e){n.updateDatasource(Object(m.__assign)(Object(m.__assign)({},n.state.config),{jsonData:Object(m.__assign)(Object(m.__assign)({},n.state.config.jsonData),{assumeRoleArn:e})}))},n.onCustomMetricsNamespacesChange=function(e){n.updateDatasource(Object(m.__assign)(Object(m.__assign)({},n.state.config),{jsonData:Object(m.__assign)(Object(m.__assign)({},n.state.config.jsonData),{customMetricsNamespaces:e})}))};var r=n.props.options;return n.state={config:t.defaults(r),authProviderOptions:[{label:"Access & secret key",value:"keys"},{label:"Credentials file",value:"credentials"},{label:"ARN",value:"arn"}],regions:[]},n.updateDatasource(n.state.config),n}return Object(m.__extends)(t,e),t.getDerivedStateFromProps=function(e,a){return Object(m.__assign)(Object(m.__assign)({},a),{config:t.defaults(e.options)})},t.prototype.componentDidMount=function(){return Object(m.__awaiter)(this,void 0,void 0,function(){return Object(m.__generator)(this,function(e){return this.loadRegions(),[2]})})},t.prototype.loadRegions=function(){var e=this;Object(f.a)().loadDatasource(this.state.config.name).then(function(e){return e.getRegions()}).then(function(t){e.setState({regions:t.map(function(e){return{value:e.value,label:e.text}})})},function(t){e.setState({regions:["ap-east-1","ap-northeast-1","ap-northeast-2","ap-northeast-3","ap-south-1","ap-southeast-1","ap-southeast-2","ca-central-1","cn-north-1","cn-northwest-1","eu-central-1","eu-north-1","eu-west-1","eu-west-2","eu-west-3","me-south-1","sa-east-1","us-east-1","us-east-2","us-gov-east-1","us-gov-west-1","us-iso-east-1","us-isob-east-1","us-west-1","us-west-2"].map(function(e){return{value:e,label:e}})})})},t.prototype.render=function(){var e=this,t=this.state,a=t.config,n=t.authProviderOptions,r=t.regions;return p.a.createElement(p.a.Fragment,null,p.a.createElement("h3",{className:"page-heading"},"CloudWatch Details"),p.a.createElement("div",{className:"gf-form-group"},p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form"},p.a.createElement(d.FormLabel,{className:"width-14"},"Auth Provider"),p.a.createElement(d.Select,{className:"width-30",value:n.find(function(e){return e.value===a.jsonData.authType}),options:n,defaultValue:a.jsonData.authType,onChange:this.onAuthProviderChange}))),"credentials"===a.jsonData.authType&&p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form"},p.a.createElement(d.FormLabel,{className:"width-14",tooltip:"Credentials profile name, as specified in ~/.aws/credentials, leave blank for default."},"Credentials Profile Name"),p.a.createElement("div",{className:"width-30"},p.a.createElement(d.Input,{className:"width-30",placeholder:"default",value:a.jsonData.database,onChange:function(t){return e.onCredentialProfileNameChange(t.target.value)}})))),"keys"===a.jsonData.authType&&p.a.createElement("div",null,a.secureJsonFields.accessKey?p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form"},p.a.createElement(d.FormLabel,{className:"width-14"},"Access Key ID"),p.a.createElement(d.Input,{className:"width-25",placeholder:"Configured",disabled:!0})),p.a.createElement("div",{className:"gf-form"},p.a.createElement("div",{className:"max-width-30 gf-form-inline"},p.a.createElement(d.Button,{variant:"secondary",type:"button",onClick:this.onResetAccessKey},"Reset")))):p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form"},p.a.createElement(d.FormLabel,{className:"width-14"},"Access Key ID"),p.a.createElement("div",{className:"width-30"},p.a.createElement(d.Input,{className:"width-30",value:a.secureJsonData.accessKey||"",onChange:function(t){return e.onAccessKeyChange(t.target.value)}})))),a.secureJsonFields.secretKey?p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form"},p.a.createElement(d.FormLabel,{className:"width-14"},"Secret Access Key"),p.a.createElement(d.Input,{className:"width-25",placeholder:"Configured",disabled:!0})),p.a.createElement("div",{className:"gf-form"},p.a.createElement("div",{className:"max-width-30 gf-form-inline"},p.a.createElement(d.Button,{variant:"secondary",type:"button",onClick:this.onResetSecretKey},"Reset")))):p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form"},p.a.createElement(d.FormLabel,{className:"width-14"},"Secret Access Key"),p.a.createElement("div",{className:"width-30"},p.a.createElement(d.Input,{className:"width-30",value:a.secureJsonData.secretKey||"",onChange:function(t){return e.onSecretKeyChange(t.target.value)}}))))),"arn"===a.jsonData.authType&&p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form"},p.a.createElement(d.FormLabel,{className:"width-14",tooltip:"ARN of Assume Role"},"Assume Role ARN"),p.a.createElement("div",{className:"width-30"},p.a.createElement(d.Input,{className:"width-30",placeholder:"arn:aws:iam:*",value:a.jsonData.assumeRoleArn||"",onChange:function(t){return e.onArnAssumeRoleChange(t.target.value)}})))),p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form"},p.a.createElement(d.FormLabel,{className:"width-14",tooltip:"Specify the region, such as for US West (Oregon) use ` us-west-2 ` as the region."},"Default Region"),p.a.createElement(d.Select,{className:"width-30",value:r.find(function(e){return e.value===a.jsonData.defaultRegion}),options:r,defaultValue:a.jsonData.defaultRegion,onChange:this.onRegionChange}))),p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form"},p.a.createElement(d.FormLabel,{className:"width-14",tooltip:"Namespaces of Custom Metrics."},"Custom Metrics"),p.a.createElement(d.Input,{className:"width-30",placeholder:"Namespace1,Namespace2",value:a.jsonData.customMetricsNamespaces||"",onChange:function(t){return e.onCustomMetricsNamespacesChange(t.target.value)}})))))},t.defaults=function(e){return e.jsonData.authType=e.jsonData.authType||"credentials",e.jsonData.timeField=e.jsonData.timeField||"@timestamp",e.hasOwnProperty("secureJsonData")||(e.secureJsonData={}),e.hasOwnProperty("jsonData")||(e.jsonData={}),e.hasOwnProperty("secureJsonFields")||(e.secureJsonFields={}),e},t}(g.PureComponent),v={label:"-- remove stat --",value:"-- remove stat --"},b=function(e){var t=e.stats,a=e.values,n=e.onChange,r=e.variableOptionGroup;return p.a.createElement(p.a.Fragment,null,a&&a.map(function(e,s){return p.a.createElement(d.Segment,{allowCustomValue:!0,key:e+s,value:e,options:Object(m.__spread)([v],t,[r]),onChange:function(e){return n("-- remove stat --"===e?a.filter(function(e,t){return t!==s}):a.map(function(t,a){return a===s?e:t}))}})}),a.length!==t.length&&p.a.createElement(d.Segment,{Component:p.a.createElement("a",{className:"gf-form-label query-part"},p.a.createElement("i",{className:"fa fa-plus"})),allowCustomValue:!0,onChange:function(e){return n(Object(m.__spread)(a,[e]))},options:Object(m.__spread)(t.filter(function(e){var t=e.value;return!a.includes(t)}),[r])}))},_=a("Y+p1"),y=a.n(_),O={label:"-- remove dimension --",value:"-- remove dimension --"},j=function(e){var t=e.dimensions,a=e.loadValues,n=e.loadKeys,r=e.onChange,s=Object(m.__read)(Object(g.useState)(t),2),i=s[0],o=s[1];Object(g.useEffect)(function(){var e=Object.entries(i).reduce(function(e,t){var a,n=Object(m.__read)(t,2),r=n[0],s=n[1];return s?Object(m.__assign)(Object(m.__assign)({},e),((a={})[r]=s,a)):e},{});y()(e,t)||r(e)},[i]);var c=function(e){return e.filter(function(e){var t=e.value;return!Object.keys(i).includes(t)})};return p.a.createElement(p.a.Fragment,null,Object.entries(i).map(function(e,t){var r=Object(m.__read)(e,2),s=r[0],l=r[1];return p.a.createElement(g.Fragment,{key:t},p.a.createElement(d.SegmentAsync,{allowCustomValue:!0,value:s,loadOptions:function(){return n().then(function(e){return Object(m.__spread)([O],c(e))})},onChange:function(e){var t,a=s,n=(i[a],Object(m.__rest)(i,["symbol"==typeof a?a:a+""]));o("-- remove dimension --"===e?Object(m.__assign)({},n):Object(m.__assign)(Object(m.__assign)({},n),((t={})[e]="",t)))}}),p.a.createElement("label",{className:"gf-form-label query-segment-operator"},"="),p.a.createElement(d.SegmentAsync,{allowCustomValue:!0,value:l||"select dimension value",loadOptions:function(){return a(s)},onChange:function(e){var t;return o(Object(m.__assign)(Object(m.__assign)({},i),((t={})[s]=e,t)))}}),Object.values(i).length>1&&t+1!==Object.values(i).length&&p.a.createElement("label",{className:"gf-form-label query-keyword"},"AND"))}),Object.values(i).every(function(e){return e})&&p.a.createElement(d.SegmentAsync,{allowCustomValue:!0,Component:p.a.createElement("a",{className:"gf-form-label query-part"},p.a.createElement("i",{className:"fa fa-plus"})),loadOptions:function(){return n().then(c)},onChange:function(e){var t;return o(Object(m.__assign)(Object(m.__assign)({},i),((t={})[e]="",t)))}}))},S=function(e){var t=e.label,a=e.tooltip,n=e.children;return p.a.createElement(p.a.Fragment,null,p.a.createElement(d.FormLabel,{width:8,className:"query-keyword",tooltip:a},t),n)},E=function(e){var t=Object(m.__rest)(e,[]);return p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement(S,Object(m.__assign)({},t)),p.a.createElement("div",{className:"gf-form gf-form--grow"},p.a.createElement("div",{className:"gf-form-label gf-form-label--grow"})))},N=function(e){var t=e.value,a=void 0===t?"":t,n=e.onChange,r=Object(m.__read)(Object(g.useState)(a),2),s=r[0],o=r[1],c=Object(i.debounce)(n,1500);return n=function(e){o(e.target.value),c(e.target.value)},p.a.createElement(d.Input,{type:"text",className:"gf-form-input width-16",value:s,onChange:n})},w=((l={})[d.EventsWithValidation.onBlur]=[{rule:function(e){return new RegExp(/^$|^[a-z][a-zA-Z0-9_]*$/).test(e)},errorMessage:"Invalid format. Only alphanumeric characters and underscores are allowed"}],l),C=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={regions:[],namespaces:[],metricNames:[],variableOptionGroup:{},showMeta:!1},t.loadMetricNames=function(){return Object(m.__awaiter)(t,void 0,void 0,function(){var e,t,a;return Object(m.__generator)(this,function(n){return e=this.props.query,t=e.namespace,a=e.region,[2,this.props.datasource.metricFindQuery("metrics("+t+","+a+")").then(this.appendTemplateVariables)]})})},t.appendTemplateVariables=function(e){return Object(m.__spread)(e,[{label:"Template Variables",options:t.props.datasource.variables.map(t.toOption)}])},t.toOption=function(e){return{label:e,value:e}},t}return Object(m.__extends)(t,e),t.prototype.componentWillMount=function(){var e=this.props.query;e.namespace||(e.namespace=""),e.metricName||(e.metricName=""),e.expression||(e.expression=""),e.dimensions||(e.dimensions={}),e.region||(e.region="default"),e.id||(e.id=""),e.alias||(e.alias=""),e.statistics&&e.statistics.length||(e.statistics=["Average"]),e.hasOwnProperty("matchExact")||(e.matchExact=!0)},t.prototype.componentDidMount=function(){var e=this,t=this.props.datasource,a={label:"Template Variables",options:this.props.datasource.variables.map(this.toOption)};Promise.all([t.metricFindQuery("regions()"),t.metricFindQuery("namespaces()")]).then(function(t){var n=Object(m.__read)(t,2),r=n[0],s=n[1];e.setState(Object(m.__assign)(Object(m.__assign)({},e.state),{regions:Object(m.__spread)(r,[a]),namespaces:Object(m.__spread)(s,[a]),variableOptionGroup:a}))})},t.prototype.onChange=function(e){var t=this.props,a=t.onChange,n=t.onRunQuery;a(e),n()},t.prototype.render=function(){var e=this,t=this.props,a=t.query,n=t.datasource,r=t.onChange,s=t.onRunQuery,i=t.data,o=this.state,c=o.regions,l=o.namespaces,u=o.variableOptionGroup,g=o.showMeta,f=i&&Object.values(i).length&&"Done"===i.state;return p.a.createElement(p.a.Fragment,null,p.a.createElement(E,{label:"Region"},p.a.createElement(d.Segment,{value:a.region||"Select region",options:c,allowCustomValue:!0,onChange:function(t){return e.onChange(Object(m.__assign)(Object(m.__assign)({},a),{region:t}))}})),0===a.expression.length&&p.a.createElement(p.a.Fragment,null,p.a.createElement(E,{label:"Namespace"},p.a.createElement(d.Segment,{value:a.namespace||"Select namespace",allowCustomValue:!0,options:l,onChange:function(t){return e.onChange(Object(m.__assign)(Object(m.__assign)({},a),{namespace:t}))}})),p.a.createElement(E,{label:"Metric Name"},p.a.createElement(d.SegmentAsync,{value:a.metricName||"Select metric name",allowCustomValue:!0,loadOptions:this.loadMetricNames,onChange:function(t){return e.onChange(Object(m.__assign)(Object(m.__assign)({},a),{metricName:t}))}})),p.a.createElement(E,{label:"Stats"},p.a.createElement(b,{stats:n.standardStatistics.map(this.toOption),values:a.statistics,onChange:function(t){return e.onChange(Object(m.__assign)(Object(m.__assign)({},a),{statistics:t}))},variableOptionGroup:u})),p.a.createElement(E,{label:"Dimensions"},p.a.createElement(j,{dimensions:a.dimensions,onChange:function(t){return e.onChange(Object(m.__assign)(Object(m.__assign)({},a),{dimensions:t}))},loadKeys:function(){return n.getDimensionKeys(a.namespace,a.region).then(e.appendTemplateVariables)},loadValues:function(t){var r=a.dimensions,s=t,i=(r[s],Object(m.__rest)(r,["symbol"==typeof s?s:s+""]));return n.getDimensionValues(a.region,a.namespace,a.metricName,t,i).then(function(e){return e.length?Object(m.__spread)([{value:"*",text:"*",label:"*"}],e):e}).then(e.appendTemplateVariables)}}))),a.statistics.length<=1&&p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form"},p.a.createElement(S,{className:"query-keyword",label:"Id",tooltip:"Id can include numbers, letters, and underscore, and must start with a lowercase letter."},p.a.createElement(d.Input,{className:"gf-form-input width-8",onBlur:s,onChange:function(e){return r(Object(m.__assign)(Object(m.__assign)({},a),{id:e.target.value}))},validationEvents:w,value:a.id||""}))),p.a.createElement("div",{className:"gf-form gf-form--grow"},p.a.createElement(S,{className:"gf-form--grow",label:"Expression",tooltip:"Optionally you can add an expression here. Please note that if a math expression that is referencing other queries is being used, it will not be possible to create an alert rule based on this query"},p.a.createElement(d.Input,{className:"gf-form-input",onBlur:s,value:a.expression||"",onChange:function(e){return r(Object(m.__assign)(Object(m.__assign)({},a),{expression:e.target.value}))}})))),p.a.createElement("div",{className:"gf-form-inline"},p.a.createElement("div",{className:"gf-form"},p.a.createElement(S,{className:"query-keyword",label:"Period",tooltip:"Minimum interval between points in seconds"},p.a.createElement(d.Input,{className:"gf-form-input width-8",value:a.period||"",placeholder:"auto",onBlur:s,onChange:function(e){return r(Object(m.__assign)(Object(m.__assign)({},a),{period:e.target.value}))}}))),p.a.createElement("div",{className:"gf-form"},p.a.createElement(S,{className:"query-keyword",label:"Alias",tooltip:"Alias replacement variables: {{metric}}, {{stat}}, {{namespace}}, {{region}}, {{period}}, {{label}}, {{YOUR_DIMENSION_NAME}}"},p.a.createElement(N,{value:a.alias,onChange:function(t){return e.onChange(Object(m.__assign)(Object(m.__assign)({},a),{alias:t}))}})),p.a.createElement(d.Switch,{label:"Match Exact",labelClass:"query-keyword",tooltip:"Only show metrics that exactly match all defined dimension names.",checked:a.matchExact,onChange:function(){return e.onChange(Object(m.__assign)(Object(m.__assign)({},a),{matchExact:!a.matchExact}))}}),p.a.createElement("label",{className:"gf-form-label"},p.a.createElement("a",{onClick:function(){return f&&e.setState(Object(m.__assign)(Object(m.__assign)({},e.state),{showMeta:!g}))}},p.a.createElement("i",{className:"fa fa-caret-"+(g?"down":"right")})," ",g?"Hide":"Show"," Query Preview"))),p.a.createElement("div",{className:"gf-form gf-form--grow"},p.a.createElement("div",{className:"gf-form-label gf-form-label--grow"})),g&&f&&p.a.createElement("table",{className:"filter-table form-inline"},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"Metric Data Query ID"),p.a.createElement("th",null,"Metric Data Query Expression"),p.a.createElement("th",null))),p.a.createElement("tbody",null,i.series[0].meta.gmdMeta.map(function(e){var t=e.ID,a=e.Expression;return p.a.createElement("tr",{key:t},p.a.createElement("td",null,t),p.a.createElement("td",null,a))})))))},t}(g.PureComponent),D=a("3SGO"),x=a("UvM7"),R=a("GQ3c"),A=a("iODs"),M=a("PbtU"),q=function(e){var t=e.region;return p.a.createElement("p",null,"Please visit the ",p.a.createElement("a",{target:"_blank",className:"text-link",href:"https://"+t+".console.aws.amazon.com/servicequotas/home?region="+t+"#!/services/monitoring/quotas/L-5E141212"},"AWS Service Quotas console")," to request a quota increase or see our ",p.a.createElement("a",{target:"_blank",className:"text-link",href:"https://grafana.com/docs/features/datasources/cloudwatch/#service-quotas"},"documentation")," to learn more.")},F=function(e,t){void 0===t&&(t=7e3);var a=Object(i.memoize)(function(){for(var a=[],n=0;n<arguments.length;n++)a[n]=arguments[n];return Object(i.debounce)(e,t,{leading:!0})},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return JSON.stringify(e)});return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return a.apply(void 0,Object(m.__spread)(e)).apply(void 0,Object(m.__spread)(e))}},k=function(e,t){return A.b.dispatch(Object(D.b)(Object(x.a)("CloudWatch request limit reached in "+t+" for data source "+e,"",p.a.createElement(q,{region:t},null))))},V=function(e,t){return A.b.dispatch(Object(D.b)(Object(x.a)(e,t)))},I=function(e){function t(t,a,n,r,s){var i=e.call(this,t)||this;return i.$q=a,i.backendSrv=n,i.templateSrv=r,i.timeSrv=s,i.type="cloudwatch",i.proxyUrl=t.url,i.defaultRegion=t.jsonData.defaultRegion,i.datasourceName=t.name,i.standardStatistics=["Average","Maximum","Minimum","Sum","SampleCount"],i.debouncedAlert=F(k,R.AppNotificationTimeout.Error),i.debouncedCustomAlert=F(V,R.AppNotificationTimeout.Error),i}return t.$inject=["instanceSettings","$q","backendSrv","templateSrv","timeSrv"],Object(m.__extends)(t,e),t.prototype.query=function(e){var t=this;e=r.a.copy(e);var a=o.a.filter(e.targets,function(e){return(""!==e.id||!0!==e.hide)&&(!!e.region&&!!e.namespace&&!!e.metricName&&!o.a.isEmpty(e.statistics)||e.expression.length>0)}).map(function(a){if(a.region=t.replace(t.getActualRegion(a.region),e.scopedVars,!0,"region"),a.namespace=t.replace(a.namespace,e.scopedVars,!0,"namespace"),a.metricName=t.replace(a.metricName,e.scopedVars,!0,"metric name"),a.dimensions=t.convertDimensionFormat(a.dimensions,e.scopedVars),a.statistics=a.statistics.map(function(a){return t.replace(a,e.scopedVars,!0,"statistics")}),a.period=String(t.getPeriod(a,e)),a.id=t.templateSrv.replace(a.id,e.scopedVars),a.expression=t.templateSrv.replace(a.expression,e.scopedVars),a.statistics.some(function(e){if(0===e.indexOf("p")){var t=/^p\d{2}(?:\.\d{1,2})?$/.exec(e);return!t||t[0]!==e}return!1}))throw{message:"Invalid extended statistics"};return o.a.extend({refId:a.refId,intervalMs:e.intervalMs,maxDataPoints:e.maxDataPoints,datasourceId:t.id,type:"timeSeriesQuery"},a)});if(o.a.isEmpty(a)){var n=this.$q.defer();return n.resolve({data:[]}),n.promise}var s={from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:a};return this.performTimeSeriesQuery(s,e.range)},Object.defineProperty(t.prototype,"variables",{get:function(){return this.templateSrv.variables.map(function(e){return"$"+e.name})},enumerable:!0,configurable:!0}),t.prototype.getPeriod=function(e,t,a){var n,r=this.convertToCloudWatchTime(t.range.from,!1);a=Math.round((a||Date.now())/1e3);return e.period?(n=this.templateSrv.replace(e.period,t.scopedVars),n=/^\d+$/.test(n)?parseInt(n,10):M.a.interval_to_seconds(n)):n=a-r<=1296e3?"AWS/EC2"===e.namespace?300:60:a-r<=5443200?300:3600,n<1&&(n=1),n},t.prototype.buildCloudwatchConsoleUrl=function(e,t,a,n,r){var s=e.region,i=e.namespace,o=e.metricName,c=e.dimensions,l=e.statistics,u=e.period,g=e.expression,p={view:"timeSeries",stacked:!1,title:n,start:t,end:a,region:s=this.getActualRegion(s)},d=r&&r.length&&r.every(function(e){var t=e.Expression;return/SEARCH().*/.test(t)});if(!d&&g)return"";if(d){var f=r&&r.length?r.map(function(e){return{expression:e.Expression}}):[{expression:g}];p=Object(m.__assign)(Object(m.__assign)({},p),{metrics:f})}else p=Object(m.__assign)(Object(m.__assign)({},p),{metrics:Object(m.__spread)(l.map(function(e){return Object(m.__spread)([i,o],Object.entries(c).reduce(function(e,t){var a=Object(m.__read)(t,2),n=a[0],r=a[1];return Object(m.__spread)(e,[n,r[0]])},[]),[{stat:e,period:u}])}))});return"https://"+s+".console.aws.amazon.com/cloudwatch/deeplink.js?region="+s+"#metricsV2:graph="+encodeURIComponent(JSON.stringify(p))},t.prototype.performTimeSeriesQuery=function(e,t){var a=this,n=t.from,r=t.to;return this.awsRequest("/api/tsdb/query",e).then(function(t){return t.results?Object.values(e.queries).reduce(function(e,s){var i=e.data,o=e.error,c=t.results[s.refId];if(!c)return{data:i,error:o};var l=a.buildCloudwatchConsoleUrl(s,n.toISOString(),r.toISOString(),s.refId,c.meta.gmdMeta);return{error:o||c.error?{message:c.error}:null,data:Object(m.__spread)(i,c.series.map(function(e){var t,a,n=e.name,r=e.points,i=Object(u.toDataFrame)({target:n,datapoints:r,refId:s.refId,meta:c.meta});if(l)try{for(var o=Object(m.__values)(i.fields),g=o.next();!g.done;g=o.next()){g.value.config.links=[{url:l,title:"View in CloudWatch console",targetBlank:!0}]}}catch(e){t={error:e}}finally{try{g&&!g.done&&(a=o.return)&&a.call(o)}finally{if(t)throw t.error}}return i}))}},{data:[],error:null}):{data:[]}}).catch(function(t){if(void 0===t&&(t={data:{error:""}}),/^Throttling:.*/.test(t.data.message)){var n=Object.keys(t.data.results);Object.values(e.queries).reduce(function(e,t){var a=t.refId,r=t.region;return!n.includes(a)||e.includes(r)?e:Object(m.__spread)(e,[r])},[]).forEach(function(e){return a.debouncedAlert(a.datasourceName,a.getActualRegion(e))})}throw t.data&&"Metric request error"===t.data.message&&t.data.error&&(t.data.message=t.data.error),t})},t.prototype.transformSuggestDataFromTable=function(e){return o.a.map(e.results.metricFindQuery.tables[0].rows,function(e){return{text:e[0],value:e[1],label:e[1]}})},t.prototype.doMetricQueryRequest=function(e,t){var a=this,n=this.timeSrv.timeRange();return this.awsRequest("/api/tsdb/query",{from:n.from.valueOf().toString(),to:n.to.valueOf().toString(),queries:[o.a.extend({refId:"metricFindQuery",intervalMs:1,maxDataPoints:1,datasourceId:this.id,type:"metricFindQuery",subtype:e},t)]}).then(function(e){return a.transformSuggestDataFromTable(e)})},t.prototype.getRegions=function(){return this.doMetricQueryRequest("regions",null).then(function(e){return Object(m.__spread)([{label:"default",value:"default",text:"default"}],e)})},t.prototype.getNamespaces=function(){return this.doMetricQueryRequest("namespaces",null)},t.prototype.getMetrics=function(e,t){return Object(m.__awaiter)(this,void 0,void 0,function(){return Object(m.__generator)(this,function(a){return e?[2,this.doMetricQueryRequest("metrics",{region:this.templateSrv.replace(this.getActualRegion(t)),namespace:this.templateSrv.replace(e)})]:[2,[]]})})},t.prototype.getDimensionKeys=function(e,t){return Object(m.__awaiter)(this,void 0,void 0,function(){return Object(m.__generator)(this,function(a){return e?[2,this.doMetricQueryRequest("dimension_keys",{region:this.templateSrv.replace(this.getActualRegion(t)),namespace:this.templateSrv.replace(e)})]:[2,[]]})})},t.prototype.getDimensionValues=function(e,t,a,n,r){return Object(m.__awaiter)(this,void 0,void 0,function(){return Object(m.__generator)(this,function(s){switch(s.label){case 0:return t&&a?[4,this.doMetricQueryRequest("dimension_values",{region:this.templateSrv.replace(this.getActualRegion(e)),namespace:this.templateSrv.replace(t),metricName:this.templateSrv.replace(a.trim()),dimensionKey:this.templateSrv.replace(n),dimensions:this.convertDimensionFormat(r,{})})]:[2,[]];case 1:return[2,s.sent()]}})})},t.prototype.getEbsVolumeIds=function(e,t){return this.doMetricQueryRequest("ebs_volume_ids",{region:this.templateSrv.replace(this.getActualRegion(e)),instanceId:this.templateSrv.replace(t)})},t.prototype.getEc2InstanceAttribute=function(e,t,a){return this.doMetricQueryRequest("ec2_instance_attribute",{region:this.templateSrv.replace(this.getActualRegion(e)),attributeName:this.templateSrv.replace(t),filters:a})},t.prototype.getResourceARNs=function(e,t,a){return this.doMetricQueryRequest("resource_arns",{region:this.templateSrv.replace(this.getActualRegion(e)),resourceType:this.templateSrv.replace(t),tags:a})},t.prototype.metricFindQuery=function(e){return Object(m.__awaiter)(this,void 0,void 0,function(){var t,a,n,r,s,i,o,c,l,u,g,p,d,f,h;return Object(m.__generator)(this,function(m){return e.match(/^regions\(\)/)?[2,this.getRegions()]:e.match(/^namespaces\(\)/)?[2,this.getNamespaces()]:(s=e.match(/^metrics\(([^\)]+?)(,\s?([^,]+?))?\)/))?(a=s[1],t=s[3],[2,this.getMetrics(a,t)]):(i=e.match(/^dimension_keys\(([^\)]+?)(,\s?([^,]+?))?\)/))?(a=i[1],t=i[3],[2,this.getDimensionKeys(a,t)]):(o=e.match(/^dimension_values\(([^,]+?),\s?([^,]+?),\s?([^,]+?),\s?([^,]+?)(,\s?(.+))?\)/))?(t=o[1],a=o[2],n=o[3],c=o[4],r={},o[6]&&(r=JSON.parse(this.templateSrv.replace(o[6]))),[2,this.getDimensionValues(t,a,n,c,r)]):(l=e.match(/^ebs_volume_ids\(([^,]+?),\s?([^,]+?)\)/))?(t=l[1],u=l[2],[2,this.getEbsVolumeIds(t,u)]):(g=e.match(/^ec2_instance_attribute\(([^,]+?),\s?([^,]+?),\s?(.+?)\)/))?(t=g[1],p=g[2],r=JSON.parse(this.templateSrv.replace(g[3])),[2,this.getEc2InstanceAttribute(t,p,r)]):(d=e.match(/^resource_arns\(([^,]+?),\s?([^,]+?),\s?(.+?)\)/))?(t=d[1],f=d[2],h=JSON.parse(this.templateSrv.replace(d[3])),[2,this.getResourceARNs(t,f,h)]):e.match(/^statistics\(\)/)?[2,this.standardStatistics.map(function(e){return{value:e,label:e,text:e}})]:[2,this.$q.when([])]})})},t.prototype.annotationQuery=function(e){var t=this,a=e.annotation,n=o.a.map(a.statistics,function(e){return t.templateSrv.replace(e)}),r=a.prefixMatching?"":"300",s=a.period||r;s=parseInt(s,10);var i={prefixMatching:a.prefixMatching,region:this.templateSrv.replace(this.getActualRegion(a.region)),namespace:this.templateSrv.replace(a.namespace),metricName:this.templateSrv.replace(a.metricName),dimensions:this.convertDimensionFormat(a.dimensions,{}),statistics:n,period:s,actionPrefix:a.actionPrefix||"",alarmNamePrefix:a.alarmNamePrefix||""};return this.awsRequest("/api/tsdb/query",{from:e.range.from.valueOf().toString(),to:e.range.to.valueOf().toString(),queries:[o.a.extend({refId:"annotationQuery",intervalMs:1,maxDataPoints:1,datasourceId:this.id,type:"annotationQuery"},i)]}).then(function(e){return o.a.map(e.results.annotationQuery.tables[0].rows,function(e){return{annotation:a,time:Date.parse(e[0]),title:e[1],tags:[e[2]],text:e[3]}})})},t.prototype.targetContainsTemplate=function(e){var t=this;return this.templateSrv.variableExists(e.region)||this.templateSrv.variableExists(e.namespace)||this.templateSrv.variableExists(e.metricName)||o.a.find(e.dimensions,function(e,a){return t.templateSrv.variableExists(a)||t.templateSrv.variableExists(e)})},t.prototype.testDatasource=function(){var e=this.defaultRegion;return this.getDimensionValues(e,"AWS/Billing","EstimatedCharges","ServiceName",{}).then(function(){return{status:"success",message:"Data source is working"}})},t.prototype.awsRequest=function(e,t){var a={method:"POST",url:e,data:t};return this.backendSrv.datasourceRequest(a).then(function(e){return e.data})},t.prototype.getDefaultRegion=function(){return this.defaultRegion},t.prototype.getActualRegion=function(e){return"default"===e||o.a.isEmpty(e)?this.getDefaultRegion():e},t.prototype.convertToCloudWatchTime=function(e,t){return o.a.isString(e)&&(e=u.dateMath.parse(e,t)),Math.round(e.valueOf()/1e3)},t.prototype.convertDimensionFormat=function(e,t){var a=this;return Object.entries(e).reduce(function(e,n){var r,s,i,o,c=Object(m.__read)(n,2),l=c[0],u=c[1];if(l=a.replace(l,t,!0,"dimension keys"),Array.isArray(u))return Object(m.__assign)(Object(m.__assign)({},e),((r={})[l]=u,r));var g=a.templateSrv.variables.find(function(e){return e.name===a.templateSrv.getVariableName(u)});if(g){if(g.multi){var p=a.templateSrv.replace(u,t,"pipe").split("|");return Object(m.__assign)(Object(m.__assign)({},e),((s={})[l]=p,s))}return Object(m.__assign)(Object(m.__assign)({},e),((i={})[l]=[a.templateSrv.replace(u,t)],i))}return Object(m.__assign)(Object(m.__assign)({},e),((o={})[l]=[u],o))},{})},t.prototype.replace=function(e,t,a,n){var r=this;if(a){var s=this.templateSrv.variables.find(function(t){return t.name===r.templateSrv.getVariableName(e)});s&&s.multi&&this.debouncedCustomAlert("CloudWatch templating error","Multi template variables are not supported for "+(n||e))}return this.templateSrv.replace(e,t)},t}(u.DataSourceApi);a.d(t,"plugin",function(){return Q});var P=function(){function e(){}return e.templateUrl="partials/annotations.editor.html",e}(),Q=new u.DataSourcePlugin(I).setConfigEditor(h).setQueryEditor(C).setExploreQueryField(C).setAnnotationQueryCtrl(P)}}]);
//# sourceMappingURL=cloudwatchPlugin.d9f582b9b538bf193c78.js.map