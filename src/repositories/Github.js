export class GithubRepository{
    API = "https://api.github.com/users/RtorresDefault";

    async getProjects(){
        const response = await fetch(`${this.API}/starred`);
        const data = await response.json();
        return data;
    }
}