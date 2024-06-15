document.addEventListener('DOMContentLoaded', function() {
    
    const btn=document.getElementById('btn');
    const txtbox=document.getElementById('txt_box');
    const lictn=document.getElementById('li-ctn');
    const clr=document.getElementById('clr');

    function setTask()
    {
        const t=txtbox.value;
        if(t==='')
            {
                alert("Please write something...");
            }
        else
        {
            const li=document.createElement('li');
            li.innerHTML=t;
            lictn.appendChild(li);
            txtbox.value='';
            const span=document.createElement('span');
            span.innerHTML='clear';
            li.appendChild(span);
        }
        setdata();
    }
    btn.addEventListener('click',setTask);
    lictn.addEventListener('click',function(e)
{
    if(e.target.tagName==="LI")
        {
            e.target.classList.toggle("checked");
            setdata();
        }
        else if (e.target.tagName==="SPAN") 
            {
                e.target.parentElement.remove();
                setdata();
            } 
},false);
    function setdata()
    {
        localStorage.setItem("data",lictn.innerHTML);
    }
    function showdata()
    {
        lictn.innerHTML=localStorage.getItem("data");
    }
    showdata();

    clr.addEventListener('click',()=>
    {
        localStorage.clear();
        lictn.innerHTML='';
        alert("All the items are cleared");
    });
});