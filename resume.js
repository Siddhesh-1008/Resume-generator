//THIS FUNCTION IS CALLED WHEN WE CLICK ON ADD BUTTON OF WORK EXPERIENCE
function addNewWEField(){
    //THIS WILL CREATE NEW ELEMENT textarea THEN ADD CLASS LIST TO IT 
    //SUCH AS FORMCONTROL ROWS..
    let newNode=document.createElement("textarea");
    newNode.classList.add('form-control')
    newNode.classList.add('weField');
    newNode.classList.add('mt-2');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','ENTER HERE..')

    // CREATE NEW ELEMENT FOR DATE
    let newnoden=document.createElement("input")
    newnoden.classList.add("form-control")
    newnoden.classList.add("weField")
    newnoden.classList.add('mt-2');
    newnoden.type = "date";

    //HERE WE TAKE REFERENCE OF BUTTON WITH THE HELP OF ITS ID 
    //HERE WE TAKE REFERNCE OF CLASS OF WORKEXPEREINCE DIV THAT IS:-<div class="form-group mt-2" id="we">
    //.INSERTBEFORE(NEWELEMENT,BUTTON) ADD NEW NODE ELEMNT BEFORE ADD BUTTON
    let weAddButtonOb=document.getElementById("weAddButton")
    let weOb=document.getElementById("we")
    weOb.insertBefore(newNode,weAddButtonOb)
    weOb.insertBefore(newnoden,weAddButtonOb)
}

// FOR ADDING NEW ACADEMIC QUALIFICATION TEXT AREA
function addNewAQField(){
    let newNode2=document.createElement("textarea");
    newNode2.classList.add('form-control')
    newNode2.classList.add('eqField');
    newNode2.classList.add('mt-2');
    newNode2.setAttribute('rows',3);
    newNode2.setAttribute('placeholder','ENTER HERE..')

    let aqAddButton=document.getElementById("aqAddButton")
    let aqOb=document.getElementById("aq")
    //TAKING REFERENCE OF DIV <div class="form-group mt-2" id="aq"> ADD NEWELEMENT BEFORE BUTTON
    aqOb.insertBefore(newNode2,aqAddButton)
}


//GENERATE CV TAKE TEXT FROM CVFORM AND PLACED IT IN CVTEMPLATE
function generateCV(){
    // CVFORM
    let nameField=document.getElementById("nameField").value;
    
    // CVTEMPLATE
    let nameT1=document.getElementById('nameT1')
    nameT1.innerHTML=nameField
    // FOR NAME ABOVE OBJECT
    document.getElementById("nameT2").innerHTML=nameField

    //CONTACT
    let contactField=document.getElementById("contactField").value
    document.getElementById("contactT").innerHTML=contactField

    //ADdRESS
    let addressField=document.getElementById("addressField").value
    document.getElementById("addressT").innerHTML=addressField

    // IMPORTANT LINKS 
    //GET VALUE FROM CV FORM AND SET THE COLOR TO CVTEMPLATE ICONS
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedinField").value

    //OBJECTIVES
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value

    //WORKEXPERIENCE
    let wes= document.getElementsByClassName("weField");
    let str=""
    for (let i = 0; i < wes.length; i += 2) {
        var e = wes[i];         // The textarea element
        var e2 = wes[i + 1];    // The input element

        if (e && e2) {  // Check if both elements exist
            str += `<li>${e.value}<span class="date">${e2.value}</span></li>`;
        }
    }
    document.getElementById("weT").innerHTML=str

    //ACADEMIC QUALIFICATION
    let aqs=document.getElementsByClassName("eqField")
    console.log(aqs.value)
    let str2=""
    for(e1 of aqs){
        str2=str2+`<li>${e1.value}</li>`
     }
    document.getElementById("aqT").innerHTML=str2

    //CODE FOR IMAGE
    //IT WILL GET FIRST FILE
    let file=document.getElementById("imgField").files[0];
    //IT WILL READ DATA FROM FILE
    let reader=new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.results)

    //SET THE IMAGE TO TEMPLATE
    //onloadend IS AN EVENT LISTENER IT WILL SET IMAGE FILE IN SRC AS THE FILE GETS LOADED AND IT WILL RUN THE FUNCITON
    reader.onloadend=function(){
        document.getElementById("imgTemplate").src=reader.result;
    }
    
    // FOR PRINTING
    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'

    
}


//PRINTING PURPOSE
function printCV(){
    window.print()
}

