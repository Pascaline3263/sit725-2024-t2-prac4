document.addEventListener('DOMContentLoaded', () => {
    // Return to Main Menu
    const btnBackToMain = document.getElementById('btnBackToMain');
    if (btnBackToMain) {    
        btnBackToMain.addEventListener('click', () => {
            window.location ='http://localhost:3000/';
        });
    };
    
    // Display Add Child Form
    const btnAddChildForm = document.getElementById('btnAddChildForm');
    if (btnAddChildForm) {    
        btnAddChildForm.addEventListener('click', () => {
            window.location ='http://localhost:3000/child';
        });
    };

    // Display Add Offline Activity Form
    const btnAddOfflineActivityForm = document.getElementById('btnAddOfflineActivityForm');
    if (btnAddOfflineActivityForm) {    
        btnAddOfflineActivityForm.addEventListener('click', () => {
            window.location.href='http://localhost:3000/offlineActivity';
        });
    };

    // Display Add Timer Form
    const btnTimerForm = document.getElementById('btnTimerForm');
    if (btnTimerForm) {    
        btnTimerForm.addEventListener('click', () => {
            window.location.href='http://localhost:3000/timer';
        });
    };

    


    // Add Child information to database
    let childForm = document.getElementById("activityForm")

    childForm.addEventListener('submit', async(e) => {
        e.preventDefault()
    
        let childName = document.getElementById("childName").value
        let dailyAllowance = document.getElementById("dailyAllowancePoints").value
        let dailyUsage = document.getElementById("dailyLimitPoints").value
        let valueOfScreenTime = document.getElementById("pointsValue").value
        console.log(childName)
        console.log(dailyAllowance)
        console.log(dailyUsage)
        console.log(valueOfScreenTime)
    
        try {
            const postChildData = await fetch('http://localhost:3000/childapi/child', {
                method: 'POST',
                body: JSON.stringify({
                    childName:childName,
                    dailyAllowance:dailyAllowance,
                    dailyUsage:dailyUsage,
                    valueOfScreenTime:valueOfScreenTime,
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
    
            const data = await postChildData.json()
            console.log(data)

            const childDataExists = document.createElement("h3") 

            if(data){
                childDataExists.textContent = "Child Added"
                childDataExists.classList = "green-text"
                childForm.insertBefore(childDataExists, childForm.lastElementChild)
            }
            
        } catch (error) {
            
        }    
    })
   

    // Add Offline Activity information to database
    let offlineActivityForm = document.getElementById("activityForm")

    offlineActivityForm.addEventListener('submit', async(e) => {
        e.preventDefault()
    
        let offlineActivityName = document.getElementById("offlineActivityName").value
        let pointsPerHour = document.getElementById("pointsPerHour").value
        console.log(offlineActivityName)
        console.log(pointsPerHour)
    
        try {
            const postOfflineActivity = await fetch('http://localhost:3000/offlineactivityapi/offlineactivity', {
                method: 'POST',
                body: JSON.stringify({
                    offlineActivityName:offlineActivityName,
                    pointsPerHour:pointsPerHour,
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
    
            const data = await postOfflineActivity.json()
            console.log(data)

            const childDataExists = document.createElement("h3") 

            if(data){
                childDataExists.textContent = "Offline Activity Added"
                childDataExists.classList = "green-text"
                offlineActivityForm.insertBefore(childDataExists, offlineActivityForm.lastElementChild)
            }
            
        } catch (error) {
            
        }    
    })


    //Timer Logic

    let timerForm = document.getElementById("activityForm")

    timerForm.addEventListener('submit', (e) => {
        e.preventDefault()


        var timerVar = setInterval(countTimer, 1000);

        var totalSeconds = 0;
        function countTimer() {
            ++totalSeconds;
            
            var hour = Math.floor(totalSeconds / 3600);
            var minute = Math.floor((totalSeconds - hour * 3600) / 60);
            var seconds = totalSeconds - (hour * 3600 + minute * 60);
            if (hour < 10)
                hour = "0" + hour;
            if (minute < 10)
                minute = "0" + minute;
            if (seconds < 10)
                seconds = "0" + seconds;

            const timerExists = document.getElementById("timer") 
            timerExists.innerHTML = hour + ":" + minute + ":" + seconds;
        }   
    })

   

});