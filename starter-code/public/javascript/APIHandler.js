class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister () {
    axios.post(`${this.BASE_URL}/characters`)
      .then(result => result.data)
      .catch(err => console.log(err));
  }

  updateOneRegister (id, charValues) {
    //axios.put(`${this.BASE_URL}/characters/${id}`, charValues);
    console.log(id, charValues);
    axios.patch(`${this.BASE_URL}/characters/${id}`)
      .then(() => {
        console.log('Criado com sucesso');        
        document.getElementById('edit-character-form').reset();        
      })
      .catch((err) => {
        console.log(err);        
      })
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
