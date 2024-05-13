class Data{
    static getUsers(){
        console.log("fuck")
        fetch("../source/json/users.json")
            .then(response => response.json())
            .then(users => {
                localStorage.setItem("users", JSON.stringify(users));
            })
            .catch(error => {
                console.error('Ошибка при получении пользователей', error);
            });
    }
}