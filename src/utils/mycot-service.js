/* eslint-disable */
import axios from "axios";

class MyCotService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.token = null; // Initialize the token as null
    this.headers = {
      "Content-Type": "application/json",
    };
  }

  // PROBLEM API
  // POST
  async postProblem(problemData, tagNames = null) {
    const endpoint = `${this.baseURL}problems`;
    const params = {};
    if (tagNames) {
      params['tagNames'] = tagNames;
    }
    const response = await axios.post(
      endpoint,
      JSON.stringify(problemData),
      {
        headers: this.headers,
        params: params,
      }
    );
    return this.handleResponse(response);
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
    const url = `${this.baseURL}problems`;
    const params = {
      tagIds: tagIds ? tagIds.join(",") : null,
      getDeleted,
      problemSetId,
      platformName,
      rating,
      difficulty,
      title,
    };
    const response = await axios.get(url, {
      headers: this.headers,
      params: params,
    });
    return this.handleResponse(response);
  }

  // GET {id}
  async getProblem(id) {
    const endpoint = `${this.baseURL}problems/${id}`;
    const response = await axios.get(endpoint, {
      headers: this.headers,
    });
    return this.handleResponse(response);
  }

  // DELETE
  async deleteProblem(id, soft = true) {
    const endpoint = `${this.baseURL}problems/${id}`;
    const params = {
      soft,
    };
    const response = await axios.delete(endpoint, {
      headers: this.headers,
      params: params,
    });
    return this.handleResponse(response);
  }

  // PROBLEM SET API
  // POST
  async postProblemSet(problemSetData) {
    const endpoint = `${this.baseURL}problem-sets`;
    const response = await axios.post(endpoint, JSON.stringify(problemSetData), {
      headers: this.headers,
    });
    return this.handleResponse(response);
  }

  // GET
  async getProblemSets({ tagIds = null, getDeleted = false }) {
    const endpoint = `${this.baseURL}problem-sets`;
    const params = {
      tagIds: tagIds ? tagIds.join(",") : null,
      getDeleted,
    };
    const response = await axios.get(endpoint, {
      headers: this.headers,
      params: params,
    });
    return this.handleResponse(response);
  }

  // GET {id}
  async getProblemSet(id) {
    const endpoint = `${this.baseURL}problem-sets/${id}`;
    const response = await axios.get(endpoint, {
      headers: this.headers,
    });
    return this.handleResponse(response);
  }

  // DELETE
  async deleteProblemSet(id, soft = true) {
    const endpoint = `${this.baseURL}problem-sets/${id}`;
    const params = {
      soft,
    };
    const response = await axios.delete(endpoint, {
      headers: this.headers,
      params: params,
    });
    return this.handleResponse(response);
  }


}

function handleResponse (response) {
    if (response.status === 204) {
      console.log("Successfully hard deleted");
    } else if (response.status < 400) {
      console.log("Successful");
      console.log("Response:", JSON.stringify(response.data, null, 4));
    } else {
      console.log(`Failed. Status code: ${response.status}`);
      console.log("Response:", response.statusText);
    }
  }

export default MyCotService;
