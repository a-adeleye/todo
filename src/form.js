
export const form = (() => {
    const form = document.querySelector('.form-container');

    function display(){
        form.style.top = '0';
        console.log('displayed')
    }

    function close () {
        form.style.top = '-100%';
        console.log('closed')
    }

    return {display, close}

})();



/*export function display(){
    const form = document.querySelector('.form-container');
    form.style.top = '0';
    console.log('displayed');
}*/