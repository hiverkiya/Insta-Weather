(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{11:function(e,t,n){e.exports=n(17)},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),r=n.n(c),l=(n(7),n(6)),i=n.n(l),s=n(1),m=n(2),u=n(4),h=n(3),d=n(5),p=n(10),f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).handleChangeOfName=function(t){console.log(e.state.comment),e.setState({comment:t.target.value})},e.addComment=function(t){e.setState({listOfComments:[].concat(Object(p.a)(e.state.listOfComments),[e.state.comment]),comment:""})},e.delete=function(t){var n=e.state.listOfComments.filter((function(e){return e!==t}));e.setState({listOfComments:n})},console.log("Hi, I am constructor"),e.state={comment:"",listOfComments:[]},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("Hi, I am ComponentDidMount")}},{key:"render",value:function(){var e=this;return console.log("Hi, I am render"),o.a.createElement("div",null,this.state.listOfComments.map((function(t){return o.a.createElement("p",{style:{border:"2px solid ".concat(e.props.color),padding:"5px"}},t,o.a.createElement("button",{onClick:function(){return e.delete(t)}}," Delete "))})),o.a.createElement("textarea",{type:"text",onChange:function(t){return e.handleChangeOfName(t)},value:this.state.comment,placeholder:"Enter comment here..."}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("button",{onClick:this.addComment}," Comment "))}}]),t}(a.Component),b="723d42961499c3de4b2beb522291d9cd",v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).setName=function(t){console.log(e.state.cityname),e.setState({cityname:t.target.value})},e.checkWeather=function(t){var n,a;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t.preventDefault(),console.log(e.state.cityname),o.next=4,i.a.awrap(fetch("api.openweathermap.org/data/2.5/weather?q=".concat(e.state.cityname,",&appid=").concat(b,"&units=metric")));case 4:return n=o.sent,console.log(n),o.next=8,i.a.awrap(n.json());case 8:a=o.sent,console.log(a);case 10:case"end":return o.stop()}}))},e.state={cityname:""},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h3",null,"Weather App"),o.a.createElement("input",{placeholder:"Enter City Name...",onChange:function(){return e.setName},value:this.state.cityname}),o.a.createElement("button",{id:"search",onClick:this.checkWeather},"Search"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{id:"comments"},o.a.createElement(f,{color:"red"})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.a4c2a854.chunk.js.map