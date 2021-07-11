jQuery.noConflict();

(function($, PLUGIN_ID){
  'use strict';

  let config = kintone.plugin.app.getConfig(PLUGIN_ID);
  console.log(config);

  console.log('hello');

  const sub = kintone.app.record.getFieldElement('suburb');
  console.log(sub);
 
  
  const events = [`app.record.create.change.${config.postcode}`,
                  `app.record.edit.change.${config.postcode}`]
  
  kintone.events.on(events, (event) => {

    let postalcode = event.changes.field.value;
    kintone.proxy(`https://v0.postcodeapi.com.au/suburbs/${postalcode}.json`, 'GET', {}, {}, function(body, status, headers) {
      // success
    let resp = JSON.parse(body);
    console.log(resp);
    
    const obj = kintone.app.record.get();
    obj.record[config.state].value = resp[0].state.name;
    kintone.app.record.set(obj);



  　const dropdown = document.createElement('select');
    dropdown.innerText = '';
    resp.forEach((value, index) => {
      const el = document.createElement('option');
      const node = document.createTextNode(value.name);
      el.appendChild(node);
      dropdown.appendChild(el);
    })

    kintone.app.record.getSpaceElement('space').appendChild(dropdown);

    //console.log(event.record[config.state]);
    
    //insertAdjacentElement('beforeend', dropdown);
  
    
    
    





    




      return event;


    }, function(error) {
      // error
      console.log(error); // proxy APIのレスポンスボディ(文字列)を表示
    });
    
    
  });



})(jQuery, kintone.$PLUGIN_ID);

