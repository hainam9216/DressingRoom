class Api {
    constructor(){
    }
    //method
    fetchData() {
        return fetch('../data/Data.json')
            .then(result => {
                return result.json();
            })
            .catch(err => {
                console.error(err);
                throw err; // Rethrow the error to handle it outside this method
            });
    }
}

export default Api 

