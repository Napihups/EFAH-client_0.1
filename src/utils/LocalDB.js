
// import PouchDB from 'pouchdb';

// var Database = PouchDB('userStorage');
// var remoteCouch = false;

export const  loadState = () => {
    console.log("load state invoked ")

    // return loadDataFromDB();
  
        console.log(serializedState);
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return undefined;
        } else {
            return JSON.parse(serializedState);
        }

}


export const saveState = (state) => {
    console.log("save state invoked ")
    try{
        // saveDataToDB(state);
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }catch(err) {
        console.log(err);
    }
}




// const saveDataToDB = (data) => {
//     var stateObject = {
//         _id : "userStore",
//         userStore : data
//     }
//     Database.put(stateObject, (err, result) =>{
//         if(!err){
//             console.log(result);
//         } else {
//             console.log(err);
//         }
//     })
// }

// const loadDataFromDB = (callback) => {
//     // Database.get('userStore').then((doc) => {
//     //     // console.log(doc.userStore);
//     //     callback({success: true, payload : doc.userStore});
//     // }).catch(err => {
//     //     callback({success: false, payload : err});
//     // })
//     return Database.get('userStore');
// }

