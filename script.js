const formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];

const formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];



function fDef1(arr, form) {
    if (arr) {
        arr.forEach(fDefInput)
    }

    function fDefInput(elem) {
        var fLabel = document.createElement('label');
        fLabel.innerHTML = elem.label;
        form.appendChild(fLabel);

        if (elem.kind == 'longtext' || elem.kind == 'shorttext') {
            var tag = document.createElement('input');
            tag.type = 'text';
            tag.style.width = '70%';
            form.appendChild(tag);
            var carry = document.createElement('br');
            form.appendChild(carry);
        };
        if (elem.kind == 'number') {
            var tag = document.createElement('input');
            tag.type = 'number';
            form.appendChild(tag);
            var carry = document.createElement('br');
            form.appendChild(carry);
        };
        if (elem.kind == 'check') {
            var tag = document.createElement('input');
            tag.type = 'checkbox';
            form.appendChild(tag);
            var carry = document.createElement('br');
            form.appendChild(carry);
        };
        if (elem.kind == 'memo') {
            var tag = document.createElement('input');
            tag.type = 'textarea';
            tag.style.width = '100%';
            tag.style.height = '100px';
            form.appendChild(tag);
            var carry = document.createElement('br');
            form.appendChild(carry);
        };

        if (elem.kind == 'submit') {
            var tag = document.createElement('input');
            tag.type = 'submit';
            tag.value = elem.caption;;
            form.appendChild(tag);
            var carry = document.createElement('br');
            form.appendChild(carry);
            var carry = document.createElement('br');
            form.appendChild(carry);
            form.removeChild(fLabel);
        };

        if (elem.kind == 'combo') {
            var tag = document.createElement('select');
            form.appendChild(tag);
            elem.variants.forEach(elem2 => {
                var option = document.createElement('option');
                option.setAttribute("value", elem2.value);
                option.textContent = elem2.text;
                tag.appendChild(option);
                var carry = document.createElement('br');
                form.appendChild(carry);
            });
        }
        if (elem.kind == 'radio') {
            elem.variants.forEach(elem2 => {
                var tag = document.createElement('input');
                tag.type = 'radio';
                tag.name = "payment";
                tag.setAttribute('value', elem2.value);
                var newSpanRadio = document.createElement('span');
                newSpanRadio.textContent = elem2.text;
                form.appendChild(tag);
                form.appendChild(newSpanRadio);
                var carry = document.createElement('br');
                form.appendChild(carry);
            });
        }
    }
};


fDef1(formDef1, document.forms.dynForm);
fDef1(formDef2, document.forms.dynForm1);
