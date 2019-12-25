import request from './request';

//home -> popular articles
export function getCategory() {
    return request.get('http://localhost:8080/api/article/allarticles')
    .then(res => res.data);
  }

