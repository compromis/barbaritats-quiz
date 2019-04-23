import axios from 'axios'
import quiz from './data/quiz.json'

class Backend {
  constructor () {
    this.quizArchiveUrl = 'https://compromis.net/quiz/'
    this.apiBaseUrl = 'http://quiz.compromis.net/api/quiz/'
    this.quizId = quiz.id
  }

  getArchive () {
    return this._call('GET', 'archive')
  }

  _call (method, endpoint, params) {
    const baseURL = endpoint === 'archive' ? this.quizArchiveUrl : this.apiBaseUrl + this.quizId
    const url = endpoint === 'archive' ? '/quizzes.php' : '/' + endpoint

    return new Promise((resolve, reject) => {
      axios({
        baseURL,
        method,
        url,
        params,
        responseType: 'json'
      }).then((result) => {
        resolve(result)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

const API = new Backend()
export default API
