import httpCommon from "./http-common";
class LoginService {
    login(data){
        return httpCommon.post("/auth/login", data);
    }
}
 export default new LoginService();