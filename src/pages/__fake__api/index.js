import axios from 'axios';

class LoginApi {
  async SignIn(values) {
    try {
      const response = await axios({
        url: `https://rakbanktest.free.beeceptor.com`,
        method: 'POST',
        data: JSON.stringify(values), // Send the form values in the request
        validateStatus: function (status) {
          return status >= 200 && status < 599;
        },
      });

      return response;
    } catch (err) {
      return err.response;
    }
  }
}

export const loginApi = new LoginApi();
