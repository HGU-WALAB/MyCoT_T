/* eslint-disable */
import axios from "axios";
import qs from "qs";

class MyCotService {

  cache = {};

  constructor() {
    this.axiosInstance = axios.create({ baseURL: process.env.REACT_APP_MYCOT_HOST_API });
    this.token = window.localStorage.getItem("token"); // Initialize the token as null
    this.headers = {
      "Content-Type": "application/json",
    };
    axios.defaults.paramsSerializer = params => {
      return qs.stringify(params);
    }
  }

  handleError = (e) => {
    console.log("error ", e);
  }

  sendRequest = async (method, args) => {
    const [url, data, additionalConfig] = Array.isArray(args) ? args : [args, {}, {}];
    var res = null;

    // Generate a cache key using the URL and serialized parameters
    const paramsString = JSON.stringify(additionalConfig.params || {});
    const cacheKey = `${method.toUpperCase()}:${url}?${paramsString}`;

    // Check if the data is in the cache and hasn't expired
    const now = new Date();
    if (method.toUpperCase() === "PATCH" && this.cache[cacheKey] && (now - this.cache[cacheKey].timestamp) < 600000) { // 10 minutes = 600000 ms
      console.log('Returning cached data for:', cacheKey);
      return this.cache[cacheKey].data;
    }

    const config = {
      ...additionalConfig,
      headers: {
        ...this.headers,
        Authorization: this.token ? `Bearer ${this.token}` : undefined,
      },
    };

    try {
      switch (method) {
        case 'GET':
        case 'DELETE':
          // For GET and DELETE, data is not typically sent
          res = await this.axiosInstance[method.toLowerCase()](url, config);
          break;
        case 'POST':
        case 'PATCH':
        case 'PUT':
          // For POST, PATCH, and PUT, data is the second argument
          res = await this.axiosInstance[method.toLowerCase()](url, JSON.stringify(data), config);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
    } catch (error) {
      this.handleError(error);
      throw error; // Rethrow the error after handling
    }
    if(method.toUpperCase() === "PATCH"){
      this.cache[cacheKey] = {
        timestamp: new Date(),
        data: res.data
      };
    }
    
    return res && res.data;
  };

  async login(idToken) {
    const endpoint = `/users/login`;

    this.token = idToken;
    const res = await this.sendRequest("POST", [endpoint, {}, {}]);
    
    return res;
  }


  async register(idToken) {
    const endpoint = `/users/register`;

    this.token = idToken;
    const res = await this.sendRequest("POST", [endpoint, {}, {}]);
    return res;
  }

  // PROBLEM API
  // POST
  async postProblem(problemData, tagNames = null) {
    const endpoint = `/problems`;  
    problemData['tagNames'] = tagNames;
    const res = await this.sendRequest("POST", [endpoint, problemData, {}]);
    return res;
  }

  // GET
  async getProblems({
    title = null,
    tagIds = null,
    getDeleted = false,
    problemSetId = null,
    platformName = null,
    rating = null,
    difficulty = null,
  }) {
    const endpoint = `/problems`;
    const params = {
      tagIds: tagIds,
      getDeleted: getDeleted,
      problemSetId: problemSetId,
      platformName: platformName,
      rating: rating,
      difficulty: difficulty,
      title: title,
    };
    const res = await this.sendRequest("GET", [endpoint, {}, {
      params: params,
    }]);
    return res;
  }

  // GET {id}
  async getProblem(id) {
    const endpoint = `/problems/${id}`;

    const res = await this.sendRequest("GET", [endpoint, {}, {}]);
    return res;
  }

  // DELETE
  async deleteProblem(id, soft = true) {
    const endpoint = `/problems/${id}`;
    const params = {
      soft: soft,
    };
    const res = await this.sendRequest("DELETE", [endpoint, {}, {
      params: params,
    }]);
    return res;
  }

  // PROBLEM SET API
  // POST
  async postProblemSet(problemSetData) {
    const endpoint = `/problem-sets`;  
    const res = await this.sendRequest("POST", [endpoint, problemSetData, {}]);
    return res;
  }

  // GET
  async getProblemSets({ tagIds = null, getDeleted = false }) {
    const endpoint = `/problem-sets`;
    const params = {
      tagIds: tagIds,
      getDeleted: getDeleted,
    };
    const res = await this.sendRequest("GET", [endpoint, {}, {
      params: params,
    }]);
    return res;
  }

  // GET {id}
  async getProblemSet(id) {
    const endpoint = `/problem-sets/${id}`;
    const res = await this.sendRequest("GET", [endpoint, {}, {}]);
    console.log("res", res);
    return res;
  }

  // DELETE
  async deleteProblemSet(id, soft = true) {
    const endpoint = `/problem-sets/${id}`;
    const params = {
      soft: soft,
    };
    const res = await this.sendRequest("DELETE", [endpoint, {}, {
      params: params,
    }]);
    return res;
  }

  // REGISTERED PROBLEM SET API
  // POST - Create a Registered Problem Set
  async createRegisteredProblemSet(problemSetId) {
    const endpoint = `/registered-problem-sets`;
    const res = await this.sendRequest("POST", [endpoint, {problemSetId: problemSetId}, {}]);
    return res;
  }

  // GET - Retrieve Registered Problem Sets
  async getRegisteredProblemSets() {
    const endpoint = `/registered-problem-sets`;
    const res = await this.sendRequest("GET", [endpoint, {}, {}]);
    return res;
  }

  // GET {id} - Retrieve a Single Registered Problem Set by ID
  async getRegisteredProblemSetById(id) {
    const endpoint = `/registered-problem-sets/${id}`;
    const res = await this.sendRequest("GET", [endpoint, {}, {}]);
    return res;
  }

  // PATCH {id} - Update a Registered Problem Set
  async updateRegisteredProblemSet(id, updateData) {
    const endpoint = `/registered-problem-sets/${id}`;
    const res = await this.sendRequest("PATCH", [endpoint, updateData, {}]);
    return res;
  }

  // DELETE {id} - Delete a Registered Problem Set
  async deleteRegisteredProblemSet(id, soft = true) {
    const endpoint = `/registered-problem-sets/${id}`;
    const params = {
      soft: soft,
    };
    const res = await this.sendRequest("DELETE", [endpoint, {}, {
      params: params,
    }]);
    return res;
  }
}

const myCotService = new MyCotService();

export default myCotService;
