class Data{
    static getUsers(){
        fetch("../source/json/users.json")
            .then(response => response.json())
            .then(users => {
                localStorage.setItem("users", JSON.stringify(users));
            })
            .catch(error => {
                console.error('Ошибка при получении пользователей', error);
            });
    }
    
    static getBaseLang(){
        fetch("../source/json/base_lang.json")
            .then(response => response.json())
            .then(lang => {
                localStorage.setItem("base_lang", JSON.stringify(lang));
            })
            .catch(error => {
                console.error('Ошибка при получении языков', error);
            });
    }
}