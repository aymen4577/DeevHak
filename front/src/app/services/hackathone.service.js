import http from "../http-common";

class HackathoneDataService {
  getAll() {
    return http.get("/hackathones");
  }

  get(id) {
    return http.get(`/hackathones/${id}`);
  }

  create(data) {
    return http.post("/hackathones/", data);
  }

  update(id, data) {
    return http.put(`/hackathones/${id}`, data);
  }

  delete(id) {
    return http.delete(`/hackathones/${id}`);
  }

  deleteAll() {
    return http.delete(`/hackathones`);
  }

  findByTitle(title) {
    return http.get(`/hackathones?title=${title}`);
  }
}
const hackathoneDataService = new HackathoneDataService();
export default hackathoneDataService;