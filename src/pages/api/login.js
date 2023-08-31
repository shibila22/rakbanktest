import axios from 'axios';

class LoginApi {
  async login(payload) {
    await wait(500);
    //setting the json to email & password for post

    const response = await axios({
      url: `https://mocki.io/v1/31f90067-7fa2-4659-8194-5949d786ffd8`,
      method: 'POST',
      data: payload,
      validateStatus: function (status) {
        return status >= 200 && status < 599;
      },
    });

    return response;
  }
}

export const loginApi = new LoginApi();
