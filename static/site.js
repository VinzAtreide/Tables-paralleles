(function(){
  var KEY='tp-theme', root=document.documentElement;
  function icone(m){return m==='dark'?'☽':(m==='light'?'☀':'A');}
  function applique(m){
    if(m==='dark'||m==='light'){root.dataset.theme=m;}else{delete root.dataset.theme;}
    var b=document.getElementById('theme');
    if(b){b.textContent=icone(m);b.setAttribute('aria-label','Thème : '+(m||'auto'));}
    var f=document.querySelector('iframe.giscus-frame');
    if(f){var g=(m==='dark')?'dark':(m==='light'?'light':'preferred_color_scheme');
      f.contentWindow.postMessage({giscus:{setConfig:{theme:g}}},'https://giscus.app');}
  }
  var m=null;
  try{m=localStorage.getItem(KEY);}catch(e){}
  applique(m);
  document.addEventListener('DOMContentLoaded',function(){
    var b=document.getElementById('theme');
    if(b){b.addEventListener('click',function(){
      var cur=null;
      try{cur=localStorage.getItem(KEY);}catch(e){}
      var nxt=cur==='dark'?'light':(cur==='light'?null:'dark');
      try{nxt?localStorage.setItem(KEY,nxt):localStorage.removeItem(KEY);}catch(e){}
      applique(nxt);
    }); applique(m);}
    // bandeau flottant : masque en descente, revient a la remontee
    var haut=document.querySelector('.haut');
    if(haut){
      var flot=haut.cloneNode(true);
      flot.classList.add('flottant');
      flot.setAttribute('aria-hidden','true');
      flot.setAttribute('inert','');
      flot.querySelectorAll('#theme').forEach(function(x){x.remove();});
      document.body.appendChild(flot);
      var prev=window.scrollY;
      window.addEventListener('scroll',function(){
        var y=window.scrollY;
        if(y<haut.offsetTop+haut.offsetHeight+40){flot.classList.remove('visible');}
        else if(y<prev-4){flot.classList.add('visible');}
        else if(y>prev+4){flot.classList.remove('visible');}
        prev=y;
      },{passive:true});
    }
    var form=document.querySelector('.nl form');
    if(form){form.addEventListener('submit',function(){
      if(window.goatcounter&&window.goatcounter.count){
        window.goatcounter.count({path:'newsletter-abonnement',title:'Abonnement newsletter',event:true});
      }
    });}
  });
})();
