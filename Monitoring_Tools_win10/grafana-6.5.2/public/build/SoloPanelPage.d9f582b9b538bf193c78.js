(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{gBvE:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"SoloPanelPage",function(){return d});var a=n("mrSG"),o=n("q1tI"),r=n.n(o),i=n("0cfB"),l=n("/MKj"),u=n("Yuww"),s=n("8M//"),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={panel:null,notFound:!1},e}return Object(a.__extends)(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.$injector,n=t.$scope,a=t.urlUid,o=t.urlType,r=t.urlSlug,i=t.routeInfo;this.props.initDashboard({$injector:e,$scope:n,urlSlug:r,urlUid:a,urlType:o,routeInfo:i,fixUrl:!1})},e.prototype.componentDidUpdate=function(t){var e=this.props,n=e.urlPanelId,a=e.dashboard;if(a&&!t.dashboard){var o=parseInt(n,10);a.expandParentRowFor(o);var r=a.getPanelById(o);if(!r)return void this.setState({notFound:!0});this.setState({panel:r})}},e.prototype.render=function(){var t=this.props,e=t.urlPanelId,n=t.dashboard,a=this.state,o=a.notFound,i=a.panel;return o?r.a.createElement("div",{className:"alert alert-error"},"Panel with id ",e," not found"):i?r.a.createElement("div",{className:"panel-solo"},r.a.createElement(u.a,{dashboard:n,panel:i,isEditing:!1,isFullscreen:!1,isInView:!0})):r.a.createElement("div",null,"Loading & initializing dashboard")},e}(o.Component),p={initDashboard:s.a};e.default=Object(i.hot)(t)(Object(l.connect)(function(t){return{urlUid:t.location.routeParams.uid,urlSlug:t.location.routeParams.slug,urlType:t.location.routeParams.type,urlPanelId:t.location.query.panelId,dashboard:t.dashboard.model}},p)(d))}.call(this,n("3UD+")(t))}}]);
//# sourceMappingURL=SoloPanelPage.d9f582b9b538bf193c78.js.map