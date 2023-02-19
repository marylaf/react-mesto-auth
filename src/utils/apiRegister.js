class ApiRegiser {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  register(email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject("Ошибка", response);
      })
      .then((res) => {
        return res;
      });
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject("Ошибка", response);
      })
      .then((res) => {
        return res;
      });
  }

  getGeneral(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
      Authorization: `Bearer ${jwt}`,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject("Ошибка", response);
      })
      .then((res) => {
        return res;
      });
  }
}

export const apiRegister = new ApiRegiser({
  baseUrl: "https://auth.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});
