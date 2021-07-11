jQuery.noConflict();

(function ($, PLUGIN_ID) {
  'use strict';

  let $form = $('.js-submit-settings');
  let $cancelButton = $('.js-cancel-button');
  let $postcodeField = $('#config-select-postcode');
  let $addressField = $('#config-select-address');
  let $suburbField = $('#config-select-suburb');
  let $stateField = $('#config-select-state');
  let fieldArr =[];
  //console.log(Kuc)

console.log();

   // 前回の設定情報を反映 (Bring previous configuration to the page)
   $(document).ready(()=>{
    let conf = kintone.plugin.app.getConfig(PLUGIN_ID);
    
    
  })
ßß

  //　フィールドの一覧を取得 (fetch fields list)
  kintone.api(kintone.api.url('/k/v1/app/form/fields.json', true), 'GET', {'app': kintone.app.getId()}, function(resp) {
    // success
    let fieldProperties = resp['properties'];

    jQuery.each(fieldProperties, (key, value) => {
       $postcodeField.append(`<option id="${value.code}">${value.label}</option>`);
       $addressField.append(`<option id="${value.code}">${value.label}</option>`);
       $suburbField.append(`<option id="${value.code}">${value.label}</option>`);
       $stateField.append(`<option id="${value.code}">${value.label}</option>`);
       fieldArr.push({name: value.label, code: value.code});
    })
    console.log(fieldArr);
  }, function(error) {
    // error
    console.log(error);
  });


  
  $form.submit( e => {
    e.preventDefault();

    let config = {}

    fieldArr.forEach((val, ind) => {
      if(val.name === $postcodeField.val()){
        config.postcode = val.code;
      } 
      if(val.name === $addressField.val()){
        config.address = val.code;
      } 
      if(val.name === $suburbField.val()){
        config.suburb = val.code;
      } 
      if(val.name === $stateField.val()){
        config.state = val.code;
      } 
    })

    kintone.plugin.app.setConfig(config, () => {
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });

  });

  $cancelButton.on('click', function () {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  });
})(jQuery, kintone.$PLUGIN_ID);
