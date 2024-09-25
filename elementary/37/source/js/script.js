var userName = prompt('Enter Your UserName: ')
var password = prompt("Enter Your Password: ")

if (userName.length < 3 || password.length < 8) {
	alert('یوزرنیم حداقل باید 3 کاراکتر و پسورد باید 8 کاراکتر داشته باشه')
} else {
	alert('ثبت نام شما با موفقیت انجام شد :)')
}