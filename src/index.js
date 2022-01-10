import './style.css';
import {form} from './form';



document.addEventListener('DOMContentLoaded', function () {
   const close = document.querySelector('#close');
  close.addEventListener('click', form.close);

 const newTask =  document.querySelector('#newTask');
 newTask.addEventListener('click', form.display);
})