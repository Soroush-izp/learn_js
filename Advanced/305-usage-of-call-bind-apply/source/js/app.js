let user = {
    id: 1,
    username: 'Amin',
    age: 22,

    walk: function () {
        console.log(this.username);
    },

    // aboutUser: function () {
    //     console.log('this in aboutUser', this);

    //     setTimeout(function () {

    //         console.log('this in setTimeout', this);
    //         console.log(this.username + ' is ' + this.age + ' years old');

    //     }.bind(user), 3000);
    // }

    aboutUser: function () {
        console.log('this in aboutUser', this);

        setTimeout(() => {

            console.log('this in setTimeout', this);
            console.log(this.username + ' is ' + this.age + ' years old');

        }, 3000);
    }

}

let user2 = {
    id: 2,
    username: 'Ali',
    age: 19,
}

user.aboutUser()

// DRY => Don't ...