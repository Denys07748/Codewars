function o(o){let n=o.split("");if(n.includes("#")){const o=n.indexOf("#");n=n.slice(0,o)}return n.join("")}console.log(function(o){const n=[];for(let l=1;l<o;l+=1)l%2!=0&&n.push(l);return n.length}(7)),console.log(o("www.codewars.com#about")),console.log(o("www.codewars.com/katas/?page=1#about")),console.log(o("www.codewars.com/katas/")),console.log(function(o){const n=o.split(" "),l=[];let e=n.length-1;return console.log(n),n.map((()=>{l.push(n[e]),e-=1})),console.log(l),o=l.join(" "),console.log(o),o}("hello world!")),console.log(function(o,n){if(!o[n])return-1;let l=o[n];for(let e=1;e<n;e++)l*=o[n];return l}([1,3,10,100],3)),console.log(function(o){const n=o.split(" ");let l=n[0];return n.map((o=>{l.length>o.length&&(l=o)})),l.length}("bitcoin take over the world maybe who knows perhaps"));var n,l;function e(o){let n=[],l=[];return o.sort(((o,n)=>o-n)).forEach(((o,e)=>(e%2?l:n).push(o))),console.log(n,l),n.reverse().concat(l)}function t(o){const n=o[0][o[0].length-1];let l=!0;return o.map((o=>{let e=o[o.length-1];n===e||(l=!1)})),l}console.log((n=7)>0&&n<4?1:n>3&&n<7?2:n>6&&n<10?3:n>9?4:void 0),console.log(function(o,n){const l=o.split(""),e=n.split("");let t=0;return l.map(((o,n,l)=>{o!==e[n]&&(t+=1)})),t}("1010","0101")),console.log(function(o){const n=o.split(" "),l=[];return n.map((o=>l.push(o.split("").reverse().join("")))),l.join(" ")}("The quick brown fox jumps over the lazy dog.")),console.log(function(o){const n=[],l=o+"";return console.log(l),l.split("").map((o=>n.push(o**2))),console.log(n),Number(n.join(""))}(3212)),console.log(function(o,n){const l=[];for(let e=o;e<=n;e++){(e+"").split("").includes("5")||l.push(e)}return l.length}(4,17)),console.log((l=145)===String(l).split("").reduce(((o,n)=>{let l=1;for(let o=1;o<=n;o++)l*=o;return o+l}),0)?"STRONG!!!!":"Not Strong !!"),console.log(function(o){let n=1;for(let l=1;l<o;l++)n*=l;return(n+1)%o**2==0}(5)),console.log(Number(((180*14.05/(90*Math.PI))**2).toFixed(2))),console.log(function(o,n,l){for(var e=0,t=100;t>=l;)t-=t*n/100,e++;return e}(0,10,5)),console.log(e([8,7,10,3])),console.log(e([27,27,19,21,22,28,24])),console.log(t(["AS","3S","9S","KS","4S"])),console.log(t(["AD","4S","7H","KC","5S"]));
//# sourceMappingURL=index.09ab7aea.js.map
