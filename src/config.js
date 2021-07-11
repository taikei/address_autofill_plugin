import {Dropdown} from '@kintone/kintone-ui-component/esm/js';

jQuery.noConflict();

(function ($, PLUGIN_ID) {
  'use strict';

  let $form = $('.js-submit-settings');
  let $cancelButton = $('.js-cancel-button');
  const $configFields = $('.kintoneplugin-row');

  let dropdown = new Dropdown({
    items:[],
    value: ``
  });
  let dropdownCopy;
  
  // let dropdown = new Dropdown({
  //   items: [
  //     {
  //         label: 'Orange',
  //         value: 'Orange',
  //     },
  //     {
  //         label: 'Banana',
  //         value: 'Banana',
  //     }
  //   ],
  //   value: 'Banana'
  // });

  

  // 前回の設定情報を反映 (Bring previous configuration to the page)
  $(document).ready(()=>{
    let conf = kintone.plugin.app.getConfig(PLUGIN_ID);
    console.log(conf);

    // $test.append(dropdown.render());
  })


  
  //　フィールドの一覧を取得 (fetch fields list)
  kintone.api(kintone.api.url('/k/v1/app/form/fields.json', true), 'GET', {'app': kintone.app.getId()}, function(resp) {
    // success　取得に成功した場合

    let fieldProperties = resp['properties'];

    for (let i = 0; i < $configFields.length; i ++){
      
      jQuery.each(fieldProperties, (key, value) => {

        dropdown.addItem({
          label: value.label,
          value: value.code
        })
      })

      dropdownCopy = JSON.parse(JSON.stringify(dropdown.itemComps));
      $configFields[i].append(dropdown.render());

      dropdown = new Dropdown({
        items:[],
        value: ``
      });

    }
    
  }, function(error) {
    // error
    console.log(error);
  });


  // 'Saveボタン押下で setConfig()'
  $form.submit( e => {
    e.preventDefault();

    let $valueFields = $('.kuc-dropdown-selected-label');
    let config = {}
    
    for (let i = 0; i < $valueFields.length; i++){
      let selectedValue = $valueFields[i].innerText;
      for (let j = 0; j < dropdownCopy.length; j++){
        if(dropdownCopy[j]._props.item.label == selectedValue){
          config[`${selectedValue}`] = dropdownCopy[j]._props.item.value;
        }
      } 
    }
    console.log(config);

    kintone.plugin.app.setConfig(config, () => {
      window.location.href = '../../flow?app=' + kintone.app.getId();
    });

  });

  
  $cancelButton.on('click', function () {
    window.location.href = '../../' + kintone.app.getId() + '/plugin/';
  });


})(jQuery, kintone.$PLUGIN_ID);
