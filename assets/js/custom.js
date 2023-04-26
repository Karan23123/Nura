var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        320: {
            slidesPerView: 1,
        },
        475: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
        1440: {
            slidesPerView: 3,
        },
        1680: {
            slidesPerView: 4,
        }
    }
});


$(document).ready(function () {
    $("#mobilenumber").keypress(function (e) {
        var length = jQuery(this).val().length;
        if (length > 9) {
            return false;
        } else if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        } else if ((length == 0) && (e.which == 48)) {
            return false;
        }
    });
});

let CheckedBox = document.getElementById("flexCheckDefault").addEventListener("click", event => {
    if (event.target.checked) {
        document.getElementById("submitbtn").style.background = "#4e5af4";
        document.getElementById("submitbtn").style.color = "white";
        document.getElementById("submitbtn").disabled = ""
    } else {
        document.getElementById("submitbtn").style.background = "";
        document.getElementById("submitbtn").style.color = "";
        document.getElementById("submitbtn").disabled = "disabled"
    }
});

const randomNum = Math.floor(Math.random() * 10);
const randomNum1 = Math.floor(Math.random() * 10) + 2;
const randomNum2 = Math.floor(Math.random() * 10) + 3;
const randomAlpha =
    String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
    String.fromCharCode(65 + Math.floor(Math.random() * 26)).toLowerCase() +
    String.fromCharCode(65 + Math.floor(Math.random() * 26));
const randomCode = randomNum1 + randomAlpha + randomNum2;
document.getElementById("demo").innerHTML = randomCode;

async function onSubmitCLick() {
    let inputDaat = "";
    inputDaat = document.getElementById("checkInput").value;
    if (inputDaat == "") {
        alert("Enter Captcha to submit form");
    } else {
        let url = new URL(window.location.href);


        let newSource = (url.searchParams.get("utm_source"));
        if (newSource != undefined && newSource != null) {
            newSource = (url.searchParams.get("utm_source"));
        } else {
            newSource = "Nura 3";
        }

        let newContentsource = (url.searchParams.get("utm_content"));
        if (newContentsource != undefined && newContentsource != null) {
            newContentsource = (url.searchParams.get("utm_content"));
        } else {
            newContentsource = "Content";
        }

        let newCampaignName = (url.searchParams.get("utm_campaign"));
        if (newCampaignName != undefined && newCampaignName != null) {
            newCampaignName = (url.searchParams.get("utm_campaign"));
        } else {
            newCampaignName = "Campaign Name";
        }

        let newCampaignTerm = (url.searchParams.get("utm_term"));
        if (newCampaignTerm != undefined && newCampaignTerm != null) {
            newCampaignTerm = (url.searchParams.get("utm_term"));
        } else {
            newCampaignTerm = "Campaign Term";
        }



        let selectedGender = ""
        const genderInputs = document.getElementsByName('gender');
        for (let i = 0; i < genderInputs.length; i++) {
            if (genderInputs[i].checked) {
                selectedGender = await genderInputs[i].value;
            }
        }

        let name = document.SubmitForm.name.value.length;
        let email = document.SubmitForm.Email.value.length;
        let phoneNumberCheck = document.SubmitForm.phoneNumber.value;
        var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
        if (name == 0 || email == 0 || phoneNumberCheck == 0) {
            alert("Enter Correct Information");
        } else {
            if (filter.test(phoneNumberCheck) == true) {
                const param = [{
                    Attribute: "FirstName",
                    Value: document.getElementById("name").value
                },
                {
                    Attribute: "EmailAddress",
                    Value: document.getElementById("email").value
                },
                {
                    Attribute: "Phone",
                    Value: "+91" + document.getElementById("mobilenumber").value
                },
                {
                    Attribute: "Source",
                    Value: newSource
                },
                {
                    Attribute: "SourceMedium",
                    Value: window.location.origin + location.pathname
                },
                {
                    Attribute: "SourceCampaign",
                    Value: "Gurgaon Center"
                },
                {
                    Attribute: "mx_Age",
                    Value: document.getElementById("age").value
                },
                {
                    Attribute: "mx_Gender",
                    Value: selectedGender
                },
                {
                    Attribute: "SourceContent",
                    Value: newContentsource
                },
                {
                    Attribute: "mx_Campaign_Name",
                    Value: newCampaignName
                },
                {
                    Attribute: "mx_Campaign_Term",
                    Value: newCampaignTerm
                },
                ]

                const http = new XMLHttpRequest()
                http.open('POST', 'https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Create?accessKey=u$re31ac7b43593e6b3c1559fef5f5a4c17&secretKey=745ae9b511ef7f2352720cc9241a219238681051')
                http.setRequestHeader('Content-type', 'application/json')
                http.send(JSON.stringify(param))
                http.onload = function () {
                    var response = JSON.parse(http.responseText);
                    if (response.Status == "Error") {
                    }
                    else {
                        location.href = "./thankyou.html";
                    }
                }
            } else {
                alert("Phone Number InCorrect")
            }
        }
    }
}


var swiper = new Swiper('.swipers', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 400,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 2,
        }
    }
});


var swiper = new Swiper('.bannerSwiper', {
    speed: 400,
    loop: true,
    autoplay: {
        delay: 5000,
    },
});



let faqs = [{
    title: "Can I just walk in for a screening",
    decription: "Yes. Walk into our centre and answer our pre-screening questionnaire to check if you are eligible for an appointment immediately. There are a few cases where certain screening tests would not be possible. For instance, women who are pregnant cannot be screened with the CT, DEXA or a Mammography machine. Similarly, those with pacemakers or implants cannot be screened with the DEXA or Mammography machines."
},
{
    title: "Can I customise my screening package?",
    decription: "We do not offer customisable packages. At NURA we screen for the most common cancers and lifestyle diseases in men and women. This comprehensive approach is found to be the most beneficial to healthy, asymptomatic individuals such as yourself."
},
{
    title: "How are you different from other diagnostic labs offering health packages?",
    decription: "NURA provides radiology-based screening services. Our goal is to help you, a healthy, asymptomatic person, identify health risks at an early stage and give you the best possible chance of treating them. We use Ai-enabled imaging technology from Fujifilm that allows our screening process to be safer and more accurate. Unlike a diagnostic lab, we do not primarily test for disease in a sick person, on the recommendation of a doctor. You can walk in and avail screening at NURA without a doctor’s prescription and understand the status of your health. In addition, our centers are designed to make you feel at home, in a comfortable, luxurious environment."
},
{
    title: "I am worried about radiation.",
    decription: "We know that radiation from screening can be a cause for concern. Our imaging devices use ultra-low dose radiation which is nearly 1/20th to 1/50th of the radiation from a routine CT scan, making the process safer and accurate. <br/> Ai Enhanced Ultra Low-Dose Scan: <br/> A regular scan at ultra-low dose radiation is noisy and unclear, making it possible to overlook a problem. Our Ai technology is able to sharpen the quality of the ultra-low dose scan to assist the doctor in early detection. And the dual Ai technology is a first of its kind technology, where we are able to pick up even the smallest of lesions that may not be visible to the naked eye."
},
{
    title: "How do I postpone or cancel a booking?",
    decription: "It’s simple. Log into your account and select ‘modify booking’ to change the booking date. However, once payment has been made, it is non refundable."
},
{
    title: "How long do I have to wait for my results?",
    decription: "You will receive the results of all tests in our center in 120 minutes."
},
{
    title: "How often do I need to screen myself at NURA? Why Screen?",
    decription: "We recommend having yourself screened at least once a year. Screening helps you identify previously unrecognised health risks. Finding them at an early stage allows you to modify your lifestyle and prevent lifestyle diseases. In the case of cancers, finding them early gives you the best chance of receiving effective treatment."
},
{
    title: "What are the charges of NURA Ai Health Screening? ",
    decription: "NURA charges Rs. 20000/- for both Nura Men and Nura Women Packages.  Package prices get modified periodically. "
},
{
    title: "Where is NURA Ai Health Screening centre in Gurugram? ",
    decription: "NURA Ai Health Screening centre is currently located at Plot No. 4P, Golf Course Rd, Sector 43, Gurugram, Haryana 122002"
},
{
    title: "Please share details about what is covered in Ai health check-up? ",
    decription: "The following are covered in our Nura Ai-enabled health screening packages: <br/> <b>In Nura Men</b> - Digital Automatic Blood Pressure Check, Digital Automatic Body Measurement, Ai-based Ultra Low Dose CT for Coronary Heart Disease, Lung Cancer, Liver cancer screening, Kidney cancer screening, Pancreatic cancer screening, COPD and Visceral Fat Analysis, Dual Energy X-ray Absorptiometry (DEXA) for Osteoporosis/ Bone Mineral Density, Sarcopenia and Full Body Composition, Japanese-style Fecal Immunochemical Test (FIT) for Colon Cancer, Ai-based Dual Fluorescence Oral Imaging System for Oral Cancer, High Sensitivity Non Fasting Blood Test for the following - Prostate Cancer - Prostate Specific Antigen, Diabetes - HbA1c, Metabolic Syndrome, Hyperlipidemia - Lipid Profile (TCHO/TGL/HDL/LDL/Non-HDL), Liver Health - TP, ALB, AST (SGOT), ALT (SGPT), GGT, Kidney Health - BUN, Creatinine, eGFR, Gout - UA (Uric Acid), Anemia & General Well-being - Complete Blood Count (RBC/WBC/PLT), RBC - Hb, HCT%, MCV, MCH, MCHC, RDW-CV%, RDW-SD, WBC - NE%, LY%, MO%, EO%, BA%, PLT - PCT%, PDW%. <br/><br/> <b>In Nura Women</b> - Digital Automatic Blood Pressure Check, Digital Automatic Body Measurement, Ai-based Ultra Low Dose CT for Coronary Heart Disease, Lung Cancer, Liver cancer screening, Kidney cancer screening, Pancreatic cancer screening, COPD and Visceral Fat Analysis, Liver  Dual Energy X-ray Absorptiometry (DEXA) for Osteoporosis/ Bone Mineral Density, Sarcopenia and Full Body Composition, Ai-based 3D Digital Mammography (with Soft Fit Paddle) for Breast Cancer, Ai-based Colposcopy for Cervical Cancer, Japanese-style Fecal Immunochemical Test (FIT) for Colon Cancer, Ai-based Dual Fluorescence Oral Imaging System for Oral Cancer, High Sensitivity Non Fasting Blood Test for the following - Diabetes - HbA1c, Metabolic Syndrome, Hyperlipidemia - Lipid Profile (TCHO/TGL/HDL/LDL/Non-HDL), Liver Health - TP, ALB, AST (SGOT), ALT (SGPT), GGT, Kidney Health - BUN, Creatinine, eGFR, Gout - UA (Uric Acid), Anemia & General Well-being - Complete Blood Count (RBC/WBC/PLT), RBC - Hb, HCT%, MCV, MCH, MCHC, RDW-CV%, RDW-SD, WBC - NE%, LY%, MO%, EO%, BA%, PLT - PCT%, PDW%."
},
{
    title: "Are you available in any other part of the country?",
    decription: "Nura Ai-enabled health screening is currently available at Bangalore, Gurugram and Mumbai. Also have plan to expand to other cities across India soon."
},
{
    title: "What all do you screen?",
    decription: "<b>For Men</b>, we screen for - Blood pressure, BMI, Coronary Heart Disease, COPD, Visceral Fat Analysis, Osteoporosis/ Bone Mineral Density, Sarcopenia, Full Body Composition, Diabetes, Metabolic Syndrome, Hyperlipidemia, Liver Health, Kidney Health, Gout, Anemia, eye/retina, hearing test & Oral Cancer, Lung Cancer, Liver Cancer, Kidney Cancer, Pancreatic Cancer, Colon Cancer, and Prostate Cancer General Well-being. <br/><br/> <b>For Women</b>, we screen for - Blood pressure, BMI, Coronary Heart Disease, COPD, Visceral Fat Analysis, Osteoporosis/ Bone Mineral Density, Sarcopenia, Full Body Composition, Breast Cancer, Cervical Cancer, Colon Cancer, Oral Cancer, Diabetes, Metabolic Syndrome, Hyperlipidemia, Liver Health, Kidney Health, Gout, Anemia, eye/retina, hearing test & Oral Cancer, Lung Cancer, Liver Cancer, Kidney Cancer, Pancreatic Cancer, Colon Cancer, Breast Cancer, Cervical cancer, Ovarian cancer and General Well-being"
},
{
    title: "Does screening cover every part of the body?",
    decription: "Currently we are focusing on screening for most common cancers and lifestyle illnesses as mentioned above. But our goal going forward is to include more parts of the body like the brain, joints, peripheral vascular diseases and intra-abdominal organs. As the Ai-enabled technology develops, we hope to be able to screen every part of the body in future. "
}
];

const newAcc = faqs.map((item, index) => {
    data = `    <div class="accordion-item" >
                    <h2 class="accordion-header" id="h${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#cl${index}" aria-expanded="true" aria-controls="cl${index}">
                            ${item.title}
                        </button>
                    </h2>
                    <div id="cl${index}" class="accordion-collapse collapse" aria-labelledby="h${index}"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            ${item.decription}
                        </div>
                    </div>
                </div >
            `
    document.getElementById("accordionExample").innerHTML += data;
});


let faqs1 = [{
    title: "Gurugram",
    decription: `4P, Golf Course Rd, Sector 43,<br/> Gurugram, Haryana 122002 <br/> <a href="tel:07353494949">07353494949</a>`
},
{
    title: "Mumbai",
    decription: `254D, Dr Annie Besant Rd, Hanuman Nagar, Worli,<br/> Mumbai, Maharashtra 400030 <br/> <a href="tel:07506494949">07506494949</a>`
},
{
    title: "Bangalore",
    decription: `L376, 100 Feet Rd, HAL 2nd Stage, Indiranagar,<br/> Bengaluru, Karnataka 560038 <br/> <a href="tel:07310494949">07310494949</a>`
},
];


const newAcc1 = faqs1.map((item, index) => {
    data = `    <div class="accordion-item" >
                    <h2 class="accordion-header" id="h${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#cl${index}" aria-expanded="true" aria-controls="cl${index}">
                            ${item.title}
                        </button>
                    </h2>
                    <div id="cl${index}" class="accordion-collapse collapse" aria-labelledby="h${index}"
                        data-bs-parent="#accordionExample1">
                        <div class="accordion-body">
                            ${item.decription}
                        </div>
                    </div>
                </div >
            `
    document.getElementById("accordionExample1").innerHTML += data;
});

function onBookNOw() {
    const myTimeout = setTimeout(myGreeting, 500);
    function myGreeting() {
        window.scrollTo(0, 0);
    }
}


$('.cancelVideo').click(function () {
    $('.newVi').get(0).pause();
    $('.newVi').get(1).pause();
    $('.newVi').get(2).pause();
    $('.newVi').get(3).pause();
});