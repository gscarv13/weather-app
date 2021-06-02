(()=>{"use strict";var e=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function c(e){try{u(o.next(e))}catch(e){a(e)}}function i(e){try{u(o.throw(e))}catch(e){a(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}u((o=o.apply(e,t||[])).next())}))},t=function(e,t){var n,o,r,a,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,o=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!((r=(r=c.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){c.label=a[1];break}if(6===a[0]&&c.label<r[1]){c.label=r[1],r=a;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(a);break}r[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};!function(n){e(this,void 0,void 0,(function(){var n,o,r,a,c,i,u,l,m,d,p;return t(this,(function(s){switch(s.label){case 0:return[4,fetch("https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=ebe2305c30c57f985e0cf559531b323d",{mode:"cors"})];case 1:return[4,s.sent().json()];case 2:return n=s.sent(),o=document.querySelector(".date-info"),r=new Date(1e3*n.dt),a={year:"numeric",month:"long",day:"numeric",weekday:"long"},c=r.toLocaleString(navigator.language,a),o.textContent=c,i=document.querySelector(".time"),u={hour:"numeric",minute:"numeric"},l=r.toLocaleTimeString(navigator.language,u),i.textContent=l,document.querySelector(".place").textContent=n.name+", "+n.sys.country,document.querySelector(".temp").textContent=Math.round(n.main.temp)+" ºC",m=n.weather.pop(),d=document.querySelector(".icon"),(p=document.createElement("img")).src="https://openweathermap.org/img/wn/"+m.icon+"@4x.png",d.append(p),document.querySelector(".details").textContent=m.description,document.querySelector(".wind").textContent="Wind: "+n.wind.speed+" m/s",document.querySelector(".humidity").textContent="Humidity: "+n.main.humidity+" %",document.querySelector(".pressure").textContent="Pressure: "+n.main.pressure+" hPa",function(n){e(this,void 0,void 0,(function(){var e,o,r,a,c,i,u,l,m,d,p,s,h;return t(this,(function(t){switch(t.label){case 0:return e="https://api.openweathermap.org/data/2.5/onecall?lat="+n.lat+"&lon="+n.lon+"&units=metric&exclude=hourly,minutely&appid=ebe2305c30c57f985e0cf559531b323d",[4,fetch(e,{mode:"cors"})];case 1:return[4,t.sent().json()];case 2:return o=t.sent(),r=o.daily.slice(1,4),a=document.querySelector(".tomorrow").children,c=document.querySelector(".nextday1").children,i=document.querySelector(".nextday2").children,(u=document.createElement("img")).src="https://openweathermap.org/img/wn/"+r[0].weather[0].icon+".png",a[0].textContent="Tomorrow",a[1].append(u),a[2].textContent=Math.round(r[0].temp.min)+" ~ "+Math.round(r[0].temp.max)+" ºC",l=document.createElement("img"),m=new Date(1e3*r[1].dt),d=m.toLocaleString(navigator.language,{weekday:"long"}),l.src="https://openweathermap.org/img/wn/"+r[1].weather[0].icon+".png",c[0].textContent=d,c[1].append(l),c[2].textContent=Math.round(r[1].temp.min)+" ~ "+Math.round(r[1].temp.max)+" ºC",p=document.createElement("img"),s=new Date(1e3*r[2].dt),h=s.toLocaleString(navigator.language,{weekday:"long"}),p.src="https://openweathermap.org/img/wn/"+r[2].weather[0].icon+".png",i[0].textContent=h,i[1].append(p),i[2].textContent=Math.round(r[2].temp.min)+" ~ "+Math.round(r[2].temp.max)+" ºC",console.log(m.toLocaleString(navigator.language,{weekday:"long"})),[2]}}))}))}(n.coord),[2]}}))}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsibG9jYXRpb24iLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwiZGF0YSIsImRhdGVIZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkYXRlSW5mbyIsIkRhdGUiLCJkdCIsIm9wdGlvbnMiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJ3ZWVrZGF5IiwiZGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwibmF2aWdhdG9yIiwibGFuZ3VhZ2UiLCJ0ZXh0Q29udGVudCIsInRpbWVIZWFkZXIiLCJvcHRpb25zMiIsImhvdXIiLCJtaW51dGUiLCJ0aW1lIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwibmFtZSIsInN5cyIsImNvdW50cnkiLCJNYXRoIiwicm91bmQiLCJtYWluIiwidGVtcCIsIndlYXRoZXJPYmoiLCJ3ZWF0aGVyIiwicG9wIiwiaWNvbiIsImltZyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhcHBlbmQiLCJkZXNjcmlwdGlvbiIsIndpbmQiLCJzcGVlZCIsImh1bWlkaXR5IiwicHJlc3N1cmUiLCJ1cmwiLCJsYXQiLCJsb24iLCJuZXh0M2RheXMiLCJkYWlseSIsInNsaWNlIiwidG9tb3Jyb3ciLCJjaGlsZHJlbiIsIm5leHREYXkxIiwibmV4dERheTIiLCJtaW4iLCJtYXgiLCJpbWcxIiwid2Vla0RheTEiLCJ3ZWVrRGF5NTU1IiwiaW1nMiIsIndlZWtEYXkyIiwid2Vla0RheTU1NyIsImNvbnNvbGUiLCJsb2ciLCJnZXRXZWF0aGVyTmV4dERheXMiLCJjb29yZCIsImdldFdlYXRoZXIiXSwibWFwcGluZ3MiOiJxMkNBRUEsU0FBMEJBLEcsNkdBRVosU0FBTUMsTUFETixpSEFDaUIsQ0FBRUMsS0FBTSxVLE9BQ3hCLFNBREQsU0FDV0MsUSxjQUFqQkMsRUFBTyxTQUVQQyxFQUFhQyxTQUFTQyxjQUFjLGNBQ3BDQyxFQUFXLElBQUlDLEtBQWUsSUFBVkws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S0FBS0MsTUFBTW1CLEVBQVUsR0FBR2pCLEtBQUt3QixLQUFJLE1BQU0zQixLQUFLQyxNQUFNbUIsRUFBVSxHQUFHakIsS0FBS3lCLEtBQUksTUFFckdPLFFBQVFDLElBQUlOLEVBQVMzQyxlQUFlQyxVQUFVQyxTQUFVLENBQUVKLFFBQVMsVSxXQXZDbkVvRCxDQUFtQi9ELEVBQUtnRSxPLFdBRzFCQyxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYXNzZXRzL3N0eWxlc2hlZXRzL21haW4uc2Nzcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb246IHN0cmluZykge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz1tZXRyaWMmYXBwaWQ9ZWJlMjMwNWMzMGM1N2Y5ODVlMGNmNTU5NTMxYjMyM2RgO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBjb25zdCBkYXRlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtaW5mbycpO1xuICBjb25zdCBkYXRlSW5mbyA9IG5ldyBEYXRlKGRhdGEuZHQgKiAxMDAwKTtcblxuICBjb25zdCBvcHRpb25zIDpvYmplY3QgPSB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycsIHdlZWtkYXk6ICdsb25nJyB9O1xuICBjb25zdCBkYXRlID0gZGF0ZUluZm8udG9Mb2NhbGVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCBvcHRpb25zKTtcblxuICBkYXRlSGVhZGVyLnRleHRDb250ZW50ID0gZGF0ZTtcblxuICBjb25zdCB0aW1lSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKTtcbiAgY29uc3Qgb3B0aW9uczIgOm9iamVjdCA9IHsgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJ307XG4gIGNvbnN0IHRpbWUgPSBkYXRlSW5mby50b0xvY2FsZVRpbWVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCBvcHRpb25zMik7XG4gIHRpbWVIZWFkZXIudGV4dENvbnRlbnQgPSB0aW1lO1xuXG4gIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlJyk7XG4gIHBsYWNlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLnN5cy5jb3VudHJ5fWA7XG5cbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJyk7XG4gIHRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKX0gwrpDYDtcblxuICBjb25zdCB3ZWF0aGVyT2JqID0gZGF0YS53ZWF0aGVyLnBvcCgpO1xuXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbicpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nLnNyYyA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyT2JqLmljb259QDR4LnBuZ2A7XG5cbiAgaWNvbi5hcHBlbmQoaW1nKTtcblxuICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbHMnKTtcbiAgZGV0YWlscy50ZXh0Q29udGVudCA9IHdlYXRoZXJPYmouZGVzY3JpcHRpb247XG5cbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG4gIHdpbmQudGV4dENvbnRlbnQgPSBgV2luZDogJHtkYXRhLndpbmQuc3BlZWR9IG0vc2A7XG5cbiAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKTtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7ZGF0YS5tYWluLmh1bWlkaXR5fSAlYDtcblxuICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZScpO1xuICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IGBQcmVzc3VyZTogJHtkYXRhLm1haW4ucHJlc3N1cmV9IGhQYWA7XG5cbiAgZ2V0V2VhdGhlck5leHREYXlzKGRhdGEuY29vcmQpO1xufVxuXG5nZXRXZWF0aGVyKCdOZXcgWW9yaycpO1xuXG50eXBlIGxvY2F0aW9uID0ge2xhdDogbnVtYmVyLCBsb246IG51bWJlcn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlck5leHREYXlzKGxvY2F0aW9uOiBsb2NhdGlvbikge1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bG9jYXRpb24ubGF0fSZsb249JHtsb2NhdGlvbi5sb259JnVuaXRzPW1ldHJpYyZleGNsdWRlPWhvdXJseSxtaW51dGVseSZhcHBpZD1lYmUyMzA1YzMwYzU3Zjk4NWUwY2Y1NTk1MzFiMzIzZGA7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IG5leHQzZGF5cyA9IGRhdGEuZGFpbHkuc2xpY2UoMSwgNCk7XG4gIGNvbnN0IHRvbW9ycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvbW9ycm93JykuY2hpbGRyZW47XG4gIGNvbnN0IG5leHREYXkxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRkYXkxJykuY2hpbGRyZW47XG4gIGNvbnN0IG5leHREYXkyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRkYXkyJykuY2hpbGRyZW47XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7bmV4dDNkYXlzWzBdLndlYXRoZXJbMF0uaWNvbn0ucG5nYDtcbiAgdG9tb3Jyb3dbMF0udGV4dENvbnRlbnQgPSAnVG9tb3Jyb3cnO1xuICB0b21vcnJvd1sxXS5hcHBlbmQoaW1nKTtcbiAgdG9tb3Jyb3dbMl0udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKG5leHQzZGF5c1swXS50ZW1wLm1pbil9IH4gJHtNYXRoLnJvdW5kKG5leHQzZGF5c1swXS50ZW1wLm1heCl9IMK6Q2A7XG5cbiAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCB3ZWVrRGF5MSA9IG5ldyBEYXRlKG5leHQzZGF5c1sxXS5kdCAqIDEwMDApO1xuICBjb25zdCB3ZWVrRGF5NTU1ID0gd2Vla0RheTEudG9Mb2NhbGVTdHJpbmcobmF2aWdhdG9yLmxhbmd1YWdlLCB7IHdlZWtkYXk6ICdsb25nJyB9KTtcbiAgaW1nMS5zcmMgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7bmV4dDNkYXlzWzFdLndlYXRoZXJbMF0uaWNvbn0ucG5nYDtcbiAgbmV4dERheTFbMF0udGV4dENvbnRlbnQgPSB3ZWVrRGF5NTU1O1xuICBuZXh0RGF5MVsxXS5hcHBlbmQoaW1nMSk7XG4gIG5leHREYXkxWzJdLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChuZXh0M2RheXNbMV0udGVtcC5taW4pfSB+ICR7TWF0aC5yb3VuZChuZXh0M2RheXNbMV0udGVtcC5tYXgpfSDCukNgO1xuXG4gIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3Qgd2Vla0RheTIgPSBuZXcgRGF0ZShuZXh0M2RheXNbMl0uZHQgKiAxMDAwKTtcbiAgY29uc3Qgd2Vla0RheTU1NyA9IHdlZWtEYXkyLnRvTG9jYWxlU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwgeyB3ZWVrZGF5OiAnbG9uZycgfSk7XG4gIGltZzIuc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke25leHQzZGF5c1syXS53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG4gIG5leHREYXkyWzBdLnRleHRDb250ZW50ID0gd2Vla0RheTU1NztcbiAgbmV4dERheTJbMV0uYXBwZW5kKGltZzIpO1xuICBuZXh0RGF5MlsyXS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQobmV4dDNkYXlzWzJdLnRlbXAubWluKX0gfiAke01hdGgucm91bmQobmV4dDNkYXlzWzJdLnRlbXAubWF4KX0gwrpDYDtcblxuICBjb25zb2xlLmxvZyh3ZWVrRGF5MS50b0xvY2FsZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHsgd2Vla2RheTogJ2xvbmcnIH0pKTtcbn1cblxuLy8gZ2V0V2VhdGhlck5leHREYXlzKGxvY2FsKTsiXSwic291cmNlUm9vdCI6IiJ9