(window["webpackJsonppingpong-app"]=window["webpackJsonppingpong-app"]||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/logo.cb9686b2.png"},20:function(e,t,n){e.exports=n(32)},25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),o=(n(25),n(8)),u=n(5),i=n(7),s=function(e){var t,n,a;for(t=e.length-1;t>0;t--)n=Math.floor(Math.random()*(t+1)),a=e[t],e[t]=e[n],e[n]=a;return e},m=function(e){for(var t=[],n=Math.floor(e.length/(e.length/2));e.length;)t.push(e.splice(0,n));return t};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e,t){switch(t.type){case"newPlayer":return function(e,t){var n=t.name;return b({},e,{players:[].concat(Object(u.a)(e.players),[{name:n}])})}(e,t);case"deletePlayer":return function(e,t){var n=t.index,a=Object(u.a)(e.players);return a.splice(n,1),b({},e,{players:a})}(e,t);case"newMatch":return function(e){var t=Object(u.a)(e.players);return b({},e,{matches:Object(u.a)(m(s(t))),players:e.players})}(e);default:return e}},f={players:[],matches:[]},d=Object(o.b)(p,f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),y=n(1),E=n(19),O=n.n(E),g={color:"#EFF0F0"},j={color:"#3d3b3b",fontWeight:"700",paddingLeft:"10px"},v={display:"block",color:"#20615b"},N={display:"block",color:"#EFF0F0"},w={zIndex:"10",position:"relative",textAlign:"left",paddingLeft:"18px",top:"30px"},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"heading-container",style:w},r.a.createElement("h1",{style:g},"PING",r.a.createElement("span",{style:v},"PONG")),r.a.createElement("h2",{style:j},"pairs",r.a.createElement("span",{style:N},"generator"))),r.a.createElement("div",{className:"user_card"},r.a.createElement("div",{className:"brand_logo_container"},r.a.createElement("img",{src:O.a,className:"brand_logo",alt:"Logo"}))))},P=(n(31),n(9)),D=n(10),M=n(12),k=n(11),_=n(2),F=n(13),x=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(M.a)(this,Object(k.a)(t).call(this,e))).state={newName:""},n.handleChange=n.handleChange.bind(Object(_.a)(n)),n.handleDelete=n.handleDelete.bind(Object(_.a)(n)),n}return Object(F.a)(t,e),Object(D.a)(t,[{key:"handleChange",value:function(e){this.setState({newName:e.currentTarget.value})}},{key:"handleDelete",value:function(e){this.props.delete(e)}},{key:"render",value:function(){var e=this,t=this.state.enteredName,n=this.props,a=n.players,l=n.index;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"list-group-item list-group-item-action list-group-item-secondary"},r.a.createElement("span",{className:"float-left"},a[l].name),r.a.createElement("span",{onClick:function(){return e.handleDelete(l)},className:"btn btn-outline-danger btn-sm float-right"},"Delete")),r.a.createElement("form",{onSubmit:t,className:"form-group"}))}}]),t}(a.Component);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=Object(y.b)((function(e){return{players:e.players}}),(function(e){return{delete:function(t,n){return e(function(e,t){return T({type:"deletePlayer"},e,{index:t})}(t,n))}}}))(x),I=function(e){function t(e){var n;return Object(P.a)(this,t),(n=Object(M.a)(this,Object(k.a)(t).call(this,e))).state={name:"",errorMatch:!1},n.handleChangeName=n.handleChangeName.bind(Object(_.a)(n)),n.handleSubmitName=n.handleSubmitName.bind(Object(_.a)(n)),n.handleErrorMatch=n.handleErrorMatch.bind(Object(_.a)(n)),n.handleSubmitMatch=n.handleSubmitMatch.bind(Object(_.a)(n)),n}return Object(F.a)(t,e),Object(D.a)(t,[{key:"handleChangeName",value:function(e){this.setState({name:e.currentTarget.value})}},{key:"handleSubmitName",value:function(e){e.preventDefault(),this.setState({name:""}),this.props.handleName(this.state)}},{key:"handleErrorMatch",value:function(e){e.preventDefault(),this.setState({errorMatch:!0})}},{key:"handleSubmitMatch",value:function(e){e.preventDefault(),this.props.handleMatch(this.state),this.setState({errorMatch:!1})}},{key:"render",value:function(){var e,t=this.state,n=t.name,a=t.errorMatch,l=this.props.players;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmitName},r.a.createElement("label",{htmlFor:"names",className:"help-block"},"ENTER PLAYERS",r.a.createElement("small",{className:"pl-2"},"add names and create your pairings")),r.a.createElement("input",{onChange:this.handleChangeName,id:"names",className:"form-control",value:n}),r.a.createElement("button",{type:"submit",className:"btn btn-outline-light mt-3 mb-3"},"Add")),r.a.createElement("ul",{className:"list-group"},l.map((function(e,t){return r.a.createElement(L,{key:t,index:t,name:e.name})}))),r.a.createElement("form",{onSubmit:(e=l.length,e%2===0?this.handleSubmitMatch:this.handleErrorMatch),className:"form"},r.a.createElement("button",{type:"submit",className:"btn btn-outline-light mt-3 mb-3"},"Create Tournament"),a?r.a.createElement("div",{class:"alert alert-danger",role:"alert"},"Enter an even number of players!"):null))}}]),t}(a.Component),R=Object(y.b)((function(e){return{players:e.players}}),(function(e){return{handleName:function(t){return e(function(e){return T({type:"newPlayer"},e)}(t))},handleMatch:function(t){return e(function(e){return T({type:"newMatch"},e)}(t))}}}))(I),X=function(e){var t=e.players;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-hover table-bordered table-dark"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"d-flex"},r.a.createElement("th",{className:"col-5"}," ",t[0].name),r.a.createElement("th",{className:"col-2"},"vs."),r.a.createElement("th",{className:"col-5"},t[1].name)))))},A=Object(y.b)((function(){return{}}))(X),G=function(e){var t=e.matches;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(A,{key:t,match:"Match ".concat(t+1),players:e})})))},J=Object(y.b)((function(e){return{matches:e.matches}}),(function(e){return{}}))(G),U=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,null))},V=Object(y.b)((function(e){return{}}),(function(e){return{}}))(U),z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null))},B=Object(y.b)((function(e){return{}}),(function(e){return{}}))(z),W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(R,null),r.a.createElement(B,null))},Y=Object(y.b)((function(e){return{}}))(W);c.a.render(r.a.createElement(y.a,{store:d},r.a.createElement(Y,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.44698a42.chunk.js.map