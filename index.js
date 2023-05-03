const form = document.getElementById("myForm");
const scriptURL = 'https://script.google.com/macros/s/AKfycbyybK6Ka_yIQhG8SZy3_DnMehIylf7Osl4SETrqQ_yl81lfZAq2q_SH_t5UX1ne1lOpvg/exec';

form.addEventListener("submit", e => {
  e.preventDefault();
  var enroll = Date.now() ;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  const mode = document.getElementById("mode").value;
  const reciever = document.getElementById("reciever").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;
  const remark = document.getElementById("remark").value;

  const formData = new FormData(form);

  fetch(scriptURL, { method: 'POST', body: formData })
    .then(response => {
      alert("new data successfull added")
    // console.log(response);
    document.getElementById('pdf').style.visibility = "visible";
    document.getElementById('item1').style.visibility = "hidden";

    document.getElementById('sname').innerText = name ;
    document.getElementById('spayer').innerText = name ;
    document.getElementById('sid').innerText = enroll ;
    document.getElementById('snumber').innerText = number ;
    document.getElementById('smode').innerText = mode ;
    document.getElementById('sreciever').innerText = reciever ;
    document.getElementById('staker').innerText = reciever ;
    document.getElementById('samount').innerText = amount ;
    document.getElementById('stotal').innerText = amount ;
    document.getElementById('sdate').innerText = date ;
    document.getElementById('sremark').innerText = remark ;
    // document.getElementById('spayer').innerText = name ;
    // document.getElementById('stotal').innerText = amount ;
    // document.getElementById('staker').innerText = reciever ;


    })
    .catch(error => {
        // alert("something went wrong")
        // console.log(error);
    });

});

    window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("main");
            var opt = {
                margin: 1,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save()
        })
        
}

