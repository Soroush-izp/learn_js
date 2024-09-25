const button = document.querySelector('.wrapper')

button.addEventListener('click', () => {

    if (navigator.getBattery) {
        window.navigator.getBattery()
            .then(batteryInfo => {
                console.log(batteryInfo); // Object


                batteryInfo.addEventListener('levelchange', () => {
                    console.log('شارژ کاربر تغییر پیدا کرد');
                })
               
                batteryInfo.addEventListener('chargingchange', () => {
                    console.log('دیوایس به شارژ وصل شد | از شارژ درش آورد');
                })
            })
    }

})