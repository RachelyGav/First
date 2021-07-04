var toolbarOptions = [
    ['bold', 'italic', 'underline',], // toggled buttons
    'strike' ['blockquote'],
    [{ 'header': 1 }, { 'header': 2 }], // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    // [{ 'script': 'sub' }]
    
    // [{ 'script': 'super' }],
    // [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
    // [{ 'direction': 'rtl' }], // text direction
    // [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
    // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    // ['link', 'image','video', 'formula'],
    // [{ 'color': [] }, { 'background': [] }],
    // // dropdown with defaults from theme
    // [{ 'font': [] }],
    // [{ 'align': [] }],
    ]
    let quill = new Quill('#qw', {
    modules: {
    toolbar: toolbarOptions
    },
    theme: 'snow'
    });  
    let s;
    function save(){
        s = quill.root.innerHTML;
    };
    function d(){
       quill.root.innerHTML="";
    };
    function back(){
        quill.root.innerHTML = s;
    };