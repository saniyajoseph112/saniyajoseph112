const name1=document.getElementById("name1");
const email=document.getElementById('email');
const subject=document.getElementById('subject');

const message=document.getElementById('message');
const form=document.getElementById('contactForm');
const name_error=document.getElementById('name_error');
const email_error=document.getElementById('email_error');
const subject_error=document.getElementById('subject_error');

const message_error=document.getElementById('message_error');

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


form.addEventListener('submit',(e)=>
{
  e.preventDefault();
  if(name1.value===""||name1.value==null)
  {
    name1.focus();
    name_error.innerHTML="Name is required";
    e.preventDefault();
   }
  if(!email.value.match(validRegex ))
{
 email_error.innerHTML="Valid Email is required";
 e.preventDefault();
}
if(subject.value===""||subject.value==null)
{
  name_error.innerHTML="Subject is required";
  e.preventDefault();
 }
 if(message.value===""||message.value==null)
{
  message_error.innerHTML="Message is required";
  e.preventDefault();
 }
 if (
  name1.value !== "" &&
  email.value.match(validRegex) &&
  subject.value !== "" &&
  message.value !== ""
) {
  form.submit();
}
})