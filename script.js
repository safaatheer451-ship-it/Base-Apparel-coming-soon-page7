 const emailInput = document.getElementById("email");  //يجيب العنصر 
 
 //حتى نتحكم باخفاء او اظهار الرساله 
 const errorbox = document.getElementById("error-box");
 //حتى نغير نص الخطا
const errorText = document.getElementById("error-text");
//نعرف متى المستخدم ضغط submit لازم نربطه بحدث 
const form = document.getElementById("myform");
//حتى كل مره المستخدم يضغط زر الارسال الكود يشتغل نضيف eventListener
form.addEventListener("submit", function(event){
    
//اذا الايميل فارغ نخلي الرساله تظهر 
if(emailInput.value === ""){
    //نوقف الارسال مؤقتا
    event.preventDefault();
errorbox.style.opacity="1";
errorText.textContent="Email cannot be empity";
}
else if (!emailInput.value.includes("@") || !emailInput.value.includes(".")){
     event.preventDefault();
   errorbox.style.opacity="1";
    errorText.textContent="please enter avalid email address";  
   
} 
else{
    errorbox.style.opacity="0";
}
});












// let emailValue = emailInput.value;//يجيب قيمة العنصر 
// console.log(emailValue);
// //لما المستخدم يستخدم زر الارسال نفذ هذا الحدث
// document.getElementById("myform").addEventListener('submit',function(event){
// event.preventDefault();   //يمنع الارسال التلقائي  حتى نكتب منطقنا الخاص 
// console.log("subment now");
// });

// const form = document.querySelector("form");// يجيب اول فورم بالصفحه
// //نريد نوصل لحقل الايميل حتى نقرا المستخدم شنو كتب 
// const emailInput = document.querySelector("#email");
// //اذا المستخدم ضغط ارسال نفذلي هذا الحدث 
// form.addEventListener("submit",function(event){ // كود يشتغل وقت الحدث
//   const email = emailInput.value.trim(); //يجيبلي القيمه الي داخل input ويحذفلي اذا اكو فراغ 
//  if(email===""){
//   //نوقف ارسال الفورم
//   event.preventDefault();
 

























