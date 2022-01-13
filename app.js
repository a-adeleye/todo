(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Poppins:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap);"]),a.push([e.id,"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css);"]),a.push([e.id,'* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-family: var(--defaultFont);\r\n  color: #2d3b4a;\r\n}\r\n\r\n:root {\r\n  --defaultFont: "Montserrat", sans-serif;\r\n  --titleFont: "Poppins", sans-serif;\r\n  --logoFont: "Roboto", sans-serif;\r\n}\r\n\r\nmain {\r\n  width: 90%;\r\n  margin: 0 auto;\r\n  position: relative;\r\n}\r\n\r\n.leftSideBar {\r\n  width: 15%;\r\n  height: 100vh;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  border-right: 1px solid #cccccc;\r\n}\r\n\r\n.logo {\r\n  padding-top: 25px;\r\n  padding-bottom: 40px;\r\n  font-family: var(--logoFont);\r\n  color: #5599f7;\r\n}\r\n\r\n.navigation {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.navigation > a {\r\n  display: block;\r\n  padding-top: 20px;\r\n  font-family: var(--titleFont);\r\n  cursor: pointer;\r\n  color: #2d3b4a;\r\n}\r\n\r\n.navigation > a > img {\r\n  height: 15px;\r\n}\r\n\r\n.app {\r\n  width: 85%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 15%;\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr auto;\r\n}\r\n\r\n.top {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  width: 100%;\r\n  height: 70px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.search-box {\r\n  background-color: white;\r\n  width: 250px;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 20px;\r\n  border: 1px solid #cccccc;\r\n  border-radius: 50px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.search-box > i {\r\n  font-size: 20px;\r\n  color: #777;\r\n}\r\n\r\n.search-box > input {\r\n  flex: 1;\r\n  height: 40px;\r\n  border: none;\r\n  outline: none;\r\n  font-size: 18px;\r\n  padding-left: 10px;\r\n  border-radius: 50px;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  column-gap: 30px;\r\n}\r\n\r\n.button {\r\n  display: flex;\r\n  align-items: center;\r\n  column-gap: 5px;\r\n  font-size: 0.9em;\r\n  cursor: pointer;\r\n}\r\n\r\n.button > img {\r\n  width: 20px;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.category {\r\n  margin-left: 20px;\r\n}\r\n\r\n.heading > select {\r\n  padding-left: 10px;\r\n  height: 30px;\r\n  border: none;\r\n  cursor: pointer;\r\n  background-color: #f3f4f6;\r\n}\r\n\r\n.todoView {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  column-gap: 10px;\r\n  height: 60vh;\r\n  margin-left: 20px;\r\n  overflow-y: auto;\r\n  align-items: flex-start;\r\n}\r\n\r\n.noteView {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  flex-wrap: wrap;\r\n  height: 60vh;\r\n  margin-left: 20px;\r\n  overflow-y: auto;\r\n  background: #f3f1f6;\r\n  padding: 20px;\r\n  gap: 10px;\r\n}\r\n\r\n.todo,\r\n.completed\r\n/* .in-progress, */ {\r\n  background: #f3f1f6;\r\n  border-radius: 8px;\r\n}\r\n\r\n.status {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 90%;\r\n  margin: 20px auto;\r\n}\r\n\r\n.status-name {\r\n  font-family: var(--titleFont);\r\n  font-weight: bold;\r\n}\r\n\r\n.count {\r\n  background: #e1e7e7;\r\n  color: black;\r\n  border-radius: 8px;\r\n  padding: 8px;\r\n}\r\n.todo-item {\r\n  position: relative;\r\n  width: 90%;\r\n  padding: 15px;\r\n  background: white;\r\n  border-radius: 8px;\r\n  margin: 20px auto;\r\n  /* transition: transform 100ms ease; */\r\n}\r\n\r\n/* .todo-item:hover {\r\n  transform: scale(1.05);\r\n} */\r\n\r\n.todo-item > h5 {\r\n  margin-top: 1em;\r\n  font-weight: normal;\r\n  max-width: 40ch;\r\n}\r\n\r\n.todo-item > h4 {\r\n  margin-top: 0.2em;\r\n  max-width: 20ch;\r\n}\r\n\r\n.priority {\r\n  position: absolute;\r\n  inset: 1.2em 0.7em 0 auto;\r\n  width: 1em;\r\n  aspect-ratio: 1;\r\n  border-radius: 50%;\r\n  z-index: 10;\r\n  cursor: pointer;\r\n}\r\n\r\n.high {\r\n  border: 3px solid #fe2f6d;\r\n}\r\n\r\n.medium {\r\n  border: 3px solid #ffd504;\r\n}\r\n\r\n.low {\r\n  border: 3px solid #36a69e;\r\n}\r\n\r\n#completed {\r\n  background: #ffffff70;\r\n}\r\n\r\n.taskActions {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  column-gap: 10px;\r\n  margin-top: 20px;\r\n}\r\n\r\n#updateTodo {\r\n  background: #5599f7;\r\n  color: rgb(29, 27, 27);\r\n  padding: 0.1em 0.5em;\r\n  font-size: 0.8em;\r\n  border-radius: 0.5ch;\r\n  cursor: pointer;\r\n  display: none;\r\n}\r\n\r\n.far {\r\n  font-size: 0.8em;\r\n  display: block;\r\n  color: #333;\r\n  cursor: pointer;\r\n  transition: scale ease 0.9s;\r\n}\r\n\r\n.far:hover {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.newTodoForm {\r\n  position: fixed;\r\n  width: max-content;\r\n  height: 60%;\r\n  padding: 20px;\r\n  overflow: hidden;\r\n  border-radius: 12px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background: #003459;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 10;\r\n  /* opacity: 0; */\r\n  transition: opacity ease-in 0.2s;\r\n}\r\n\r\nlabel {\r\n  font-family: var(--defaultFont);\r\n  font-weight: bold;\r\n  color: white;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.noteForm {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background: #003459;\r\n  width: max-content;\r\n  padding: 20px;\r\n  height: 340px;\r\n  z-index: 10;\r\n  border-radius: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.noteForm > input[type="text"] {\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n  width: 100%;\r\n  border-radius: 4px;\r\n  border: none;\r\n  word-spacing: 5px;\r\n  font-family: var(--defaultFont);\r\n}\r\n\r\ntextarea {\r\n  border-radius: 4px;\r\n  border: none;\r\n  padding: 10px;\r\n  margin-top: 10px;\r\n  word-spacing: 5px;\r\n  font-family: var(--defaultFont);\r\n  font-size: 0.9em;\r\n}\r\n\r\n.submitBtn {\r\n  display: block;\r\n  padding: 10px 20px;\r\n  background: white;\r\n  color: #003459;\r\n  width: 150px;\r\n  text-align: center;\r\n  border-radius: 8px;\r\n  margin-top: 10px;\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n  align-self: center;\r\n}\r\n\r\n.submitBtn:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\n.right > .submitBtn {\r\n background: #f3f1f6;\r\n color: black;\r\n margin-top: 10px\r\n}\r\n\r\n.noteCard {\r\n  position: relative;\r\n  width: 200px;\r\n  background: white;\r\n  border-radius: 8px;\r\n  padding: 10px;\r\n  /* transition: transform 100ms ease; */\r\n}\r\n\r\n.noteCard > h4 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.noteCard > .far {\r\n  position: absolute;\r\n  inset: auto 0.7em 0.5em auto;\r\n}\r\n\r\n.newProjectForm {\r\n  position: fixed;\r\n  width: max-content;\r\n  height: 40%;\r\n  padding: 20px;\r\n  overflow: hidden;\r\n  border-radius: 12px;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background: #003459;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  z-index: 10;\r\n  /* opacity: 0; */\r\n  transition: opacity ease-in 0.2s;\r\n}\r\n\r\n.newTodoForm > img,\r\n.newProjectForm > img {\r\n  width: 30px;\r\n  height: auto;\r\n  margin-bottom: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.newTodoForm > img:hover,\r\n.newProjectForm > img:hover {\r\n  transform: scale(0.9);\r\n}\r\n\r\nform {\r\n  width: 500px;\r\n  height: 400px;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n}\r\n\r\n.newProjectForm > form {\r\n  flex-direction: column;\r\n  width: 200px;\r\n}\r\n\r\n.left,\r\n.right {\r\n  width: 45%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n}\r\n\r\nform input,\r\nform select {\r\n  display: block;\r\n  width: 100%;\r\n  padding-left: 10px;\r\n  margin-bottom: 20px;\r\n  border-radius: 4px;\r\n  height: 30px;\r\n  border: none;\r\n}\r\n\r\n.fas {\r\n  font-size: 2em;\r\n  color: white;\r\n  margin-bottom: 10px;\r\n  cursor: pointer;\r\n  align-self: center;\r\n}\r\n\r\n.fas:hover {\r\n  transform: scale(1.02);\r\n}\r\n\r\nform input[type="submit"] {\r\n  color: #003459;\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\nform input[type="submit"]:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\nfooter {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  row-gap: 10px;\r\n  color: white;\r\n  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);\r\n  font-size: 0.7em;\r\n}\r\n',""]);const d=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],d=0;d<e.length;d++){var c=e[d],l=r.base?c[0]+r.base:c[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,r);r.byIndex=d,t.splice(d,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var d=n(i[a]);t[d].references--}for(var c=r(e,o),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),a=n.n(i),d=n(565),c=n.n(d),l=n(216),s=n.n(l),p=n(589),u=n.n(p),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let h=[],g=["Default"];const x=(()=>{function e(){const e=document.querySelector(".newProjectForm");e.parentNode.removeChild(e)}return document.querySelector("#project"),{displayForm:function(){C.projectForm(),document.querySelector(".newProjectForm")},closeForm:e,addProject:function(){let t=document.getElementById("newProjectName").value;g.push(t),e(),A.populateProjects(),console.table(g)}}})(),b=(()=>{let e="",t="";function n(){let t=document.querySelector("#title").value,n=document.querySelector("#description").value,r=document.querySelector("#project").value,o=document.querySelector("#due-date").value,i=document.querySelector("#priority").value,a=e+1;h[e]={id:a,title:t,description:n,project:r,date:o,priority:i},console.table(h),v.closeForm(),v.renderPage()}function r(){let e=document.getElementById("noteTitle").value,n=document.getElementById("note").value;w[t]={title:e,noteContent:n},console.table(w),E.closeForm(),E.renderPage()}return{editTodo:t=>{v.displayForm();let r=t.target.parentNode.parentNode.id-1,o=h[r];document.querySelector("#title").value=o.title,document.querySelector("#description").value=o.description,document.querySelector("#project").value=o.project,document.querySelector("#due-date").value=o.date,document.querySelector("#priority").value=o.priority;const i=document.querySelector(".submitBtn");i.removeEventListener("click",v.addTodo),i.addEventListener("click",n),e=r,console.table(h)},updateTodo:n,editNote:function(e){E.displayForm();let n=e.target.parentNode.id-1,o=w[n];const i=document.getElementById("noteTitle"),a=document.getElementById("note");i.value=o.title,a.value=o.noteContent;const d=document.querySelector(".submitBtn");d.removeEventListener("click",E.addNote),d.addEventListener("click",r),t=n},updateNote:r}})();function y(){document.getElementById("newTodo").addEventListener("click",v.displayForm),document.getElementById("newProject").addEventListener("click",x.displayForm),document.getElementById("newNote").addEventListener("click",E.displayForm),Array.from(document.querySelectorAll(".fa-edit")).forEach((e=>e.addEventListener("click",b.editTodo))),Array.from(document.querySelectorAll("#updateTodo")).forEach((e=>e.addEventListener("click",b.updateTodo)))}const v=(()=>{function e(){const e=document.querySelector(".newTodoForm");e.parentNode.removeChild(e)}function t(){(function(){const e=document.getElementById("dashboard");A.retrieveTodos(),e.textContent="","todoView"!==e.className&&(e.className="todoView");const t=document.createElement("div");t.className="todo";const n=document.createElement("div");n.className="status";const r=document.createElement("div");r.className="todoList",r.textContent="";for(let e=h.length;e>0;e--)o(h[e-1]);function o(o){const i=o.title,a=o.description,d=o.project,c=o.date,l=o.priority,s=document.createElement("h4");s.textContent=i;const p=document.createElement("h5");p.textContent=a;const u=document.createElement("h5");u.textContent=d;const m=document.createElement("h5");m.textContent=c;const f=document.createElement("h5");f.textContent=l;const g=document.createElement("div");g.className="taskActions";const x=document.createElement("i");x.innerText=" Edit",x.className="far",x.classList.add("fa-edit");const b=document.createElement("i");b.innerText=" Complete",b.className="far",b.classList.add("fa-check-square"),g.appendChild(x),g.appendChild(b);const y=document.createElement("div");y.setAttribute("class",`priority ${l.toLowerCase()}`);const v=document.createElement("div");v.className="todo-item",v.appendChild(s),v.appendChild(u),v.appendChild(p),v.appendChild(m),v.appendChild(f),v.appendChild(g),v.appendChild(y),r.appendChild(v),function(e){let t=h.length;const n=document.createElement("div");n.className="status-name",n.textContent="Todo";const r=document.createElement("div");r.className="count",r.setAttribute("id","todoCount"),r.textContent=t,e.textContent="",e.appendChild(n),e.appendChild(r)}(n),t.appendChild(n),t.appendChild(r),e.appendChild(t)}const i=document.createElement("div");i.className="completed";const a=document.createElement("div");a.className="status",function(){const e=document.getElementById("dashboard"),t=document.createElement("div");t.className="status-name",t.textContent="Completed";const n=document.createElement("div");n.className="count",n.setAttribute("id","todoCount");let r=h.length;n.textContent=r,i.textContent="",a.textContent="",a.appendChild(t),a.appendChild(n),i.appendChild(a),e.appendChild(i)}()})(),function(){const e=Array.from(document.querySelectorAll(".todo-item"));let t="";for(let n=0;n<e.length;n++)t=e.length-n,e[n].setAttribute("id",t)}(),y(),console.log(h)}return{displayForm:function(){C.todoForm(),document.querySelector(".newTodoForm").style.display="flex"},closeForm:e,addTodo:function(){const n=document.querySelector("#title"),r=document.querySelector("#description"),o=document.querySelector("#project"),i=document.querySelector("#due-date"),a=document.querySelector("#priority"),d=function(e,t,n,r,o){return{id:h.length+1,title:e,description:t,project:n,date:r,priority:o}}(n.value,r.value,o.value,i.value,a.value);h.push(d),A.populateTodos(),e(),t()},renderPage:t,todos:h}})(),C=(()=>{const e=document.querySelector("#content");return{todoForm:function(){A.retrieveProjects();const t=document.createElement("div");t.className="newTodoForm";const n=document.createElement("i");n.className="fas",n.classList.add("fa-window-close"),n.setAttribute("id","closeTodoForm"),n.addEventListener("click",v.closeForm),t.appendChild(n);const r=document.createElement("form");r.setAttribute("onSubmit","return false;"),t.appendChild(r);const o=document.createElement("div");o.className="left",r.appendChild(o);const i=document.createElement("label");i.setAttribute("for","title"),i.textContent="Title",o.appendChild(i);const a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","title"),a.setAttribute("id","title"),a.setAttribute("placeholder","Title here"),o.appendChild(a);const d=document.createElement("label");d.setAttribute("for","project"),d.textContent="Project",o.appendChild(d);const c=document.createElement("select");c.setAttribute("name","project"),c.setAttribute("id","project"),c.textContent="",g.forEach((e=>function(e){const t=document.createElement("option");t.setAttribute("value",e),t.textContent=e,c.appendChild(t)}(e))),o.appendChild(c);const l=document.createElement("label");l.setAttribute("for","description"),l.textContent="Description",o.appendChild(l);const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("name","description"),s.setAttribute("id","description"),s.setAttribute("placeholder","Description here"),o.appendChild(s);const p=document.createElement("div");p.className="right",r.appendChild(p);const u=document.createElement("label");u.setAttribute("for","due-date"),u.textContent="Due date",p.appendChild(u);const m=document.createElement("input");m.setAttribute("type","date"),m.setAttribute("name","due-date"),m.setAttribute("id","due-date"),p.appendChild(m);const f=document.createElement("label");f.setAttribute("for","priority"),f.textContent="Priority",p.appendChild(f);const h=document.createElement("select");h.setAttribute("name","priority"),h.setAttribute("id","priority");const x=document.createElement("option");x.setAttribute("value","Low"),x.textContent="Low",h.appendChild(x),h.value="Low";const b=document.createElement("option");b.setAttribute("value","Medium"),b.textContent="Medium",h.appendChild(b);const y=document.createElement("option");y.setAttribute("value","High"),y.textContent="High",h.appendChild(y),p.appendChild(h);const C=document.createElement("a");C.className="submitBtn",C.textContent="Submit",C.addEventListener("click",v.addTodo),p.appendChild(C),e.appendChild(t)},projectForm:function(){const t=document.createElement("div");t.className="newProjectForm";const n=document.createElement("i");n.className="fas",n.classList.add("fa-window-close"),n.setAttribute("id","closeProjectForm"),n.addEventListener("click",x.closeForm),t.appendChild(n);const r=document.createElement("form");r.setAttribute("onSubmit","return false;"),t.appendChild(r);const o=document.createElement("label");o.setAttribute("for","newProject"),o.textContent="New project",r.appendChild(o);const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("name","newProject"),i.setAttribute("id","newProjectName"),i.setAttribute("placeholder","New project here"),r.appendChild(i);const a=document.createElement("a");a.className="submitBtn",a.textContent="Submit",a.addEventListener("click",x.addProject),r.appendChild(a),e.appendChild(t)},noteForm:function(){const t=document.createElement("div");t.className="noteForm";const n=document.createElement("i");n.className="fas",n.classList.add("fa-window-close"),n.addEventListener("click",E.closeForm),t.appendChild(n);const r=document.createElement("label");r.setAttribute("for","title"),r.textContent="Title",t.appendChild(r);const o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","noteTitle"),o.setAttribute("id","noteTitle"),o.setAttribute("placeholder","Note title"),t.appendChild(o);const i=document.createElement("label");i.setAttribute("for","note"),i.textContent="New note",t.appendChild(i);const a=document.createElement("textarea");a.setAttribute("name","note"),a.setAttribute("id","note"),a.setAttribute("placeholder","New note here"),a.setAttribute("rows","5"),a.setAttribute("cols","20"),a.setAttribute("wrap","hard"),t.appendChild(a);const d=document.createElement("a");d.className="submitBtn",d.textContent="Add note",d.addEventListener("click",E.addNote),t.appendChild(d),e.appendChild(t)}}})();let w=[];const E=(()=>{function e(){const e=document.querySelector(".noteForm");e.parentNode.removeChild(e)}function t(){A.retrieveNotes(),function(){const e=document.getElementById("dashboard");e.textContent="","noteView"!==e.className&&(e.className="noteView");for(let t=w.length;t>0;t--){const n=document.createElement("div");n.className="noteCard";const r=document.createElement("h4");r.textContent=w[t-1].title,n.appendChild(r);const o=document.createElement("p");o.textContent=w[t-1].noteContent,n.appendChild(o);const i=document.createElement("i");i.innerText=" Edit",i.className="far",i.classList.add("fa-edit"),i.addEventListener("click",b.editNote),n.appendChild(i),e.appendChild(n)}!function(){const e=Array.from(document.querySelectorAll(".noteCard"));let t="";for(let n=0;n<e.length;n++)t=e.length-n,e[n].setAttribute("id",t)}()}()}return{displayForm:function(){C.noteForm()},closeForm:e,addNote:function(){const n=document.getElementById("noteTitle"),r=document.getElementById("note");let o=(i=n.value,a=r.value,{title:i,noteContent:a});var i,a;w.push(o),A.populateNotes(),console.table(o),t(),e()},renderPage:t}})(),A={populateTodos:function(){localStorage.setItem("todos",JSON.stringify(h))},populateProjects:function(){localStorage.setItem("projects",JSON.stringify(g))},populateNotes:function(){localStorage.setItem("notes",JSON.stringify(w))},retrieveNotes:function(){w=JSON.parse(localStorage.getItem("notes"))},retrieveProjects:function(){g=JSON.parse(localStorage.getItem("projects"))},retrieveTodos:function(){h=JSON.parse(localStorage.getItem("todos"))}};document.addEventListener("DOMContentLoaded",(()=>{y(),localStorage.getItem("projects")?A.retrieveProjects():A.populateProjects(),localStorage.getItem("todos")?A.retrieveTodos():A.populateTodos(),localStorage.getItem("notes")?A.retrieveNotes():A.populateNotes()}))})()})();