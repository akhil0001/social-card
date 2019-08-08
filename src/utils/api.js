export function fetchUserProfileFromGithubAPI(username){
    const url = window.encodeURI(`https://api.github.com/users/${username}`);
    
    return fetch(url)
    .then((res) => res.json())
    .then((data) => {
        if(!data) {
            throw new Error(`No data found regarding the user ${username}`);
        }

        return data;
    })
}