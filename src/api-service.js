export class APIN {
    static loginUser(body) {
        return fetch(`https://quiz.logicedx.com/api/auth/`, {
            method : "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(body)
            
        }).then (resp => resp.json())
    }

    static registerUser(body) {
        return fetch(`https://quiz.logicedx.com/api/users/`, {
            method : "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(body)
            
        }).then (resp => resp.json())
    }
    
}