const userLogin = (username, password, callback) => {
    setTimeout(() => {
        callback({
            username: username,
            password: password,
            email: 'amin@gmail.com'
        })
    }, 4000)
}

const userCourses = (username, callback) => {
    setTimeout(() => {
        callback([
            { id: 21, title: 'Js Expert', price: 'Free' },
            { id: 34, title: 'Redux Expert', price: 'Free' },
        ])
    }, 3000)
}

const mainCourseInfo = (courseTitle, callback) => {
    setTimeout(() => {
        callback({
            id: 34,
            title: 'Redux Expert',
            price: 'Free',
            teacher: 'Saeedi rad',
            student: 2291
        })
    }, 2000)
}

console.log('سایت برای کاربر لود شد')

const loginInfos = userLogin('amin_seaadi', '0101', (userObject) => {
    console.log('کاربر لاگین شد:', userObject);

    userCourses(userObject.username, (userAllCourses) => {
        console.log('User Courses: ', userAllCourses);

        mainCourseInfo(userAllCourses[1].title, (mainInfos) => {
            console.log('Main Course Infos:', mainInfos);
        })
    })
})


console.log('کاربر با موفقیت لاگین شد');