/* eslint-disable */
import axios from "axios";
import qs from "qs";

class MyCotService {
  constructor() {
    this.baseURL = process.env.REACT_APP_MYCOT_HOST_API;
    this.token = null; // Initialize the token as null
    this.headers = {
      "Content-Type": "application/json",
    };
    axios.defaults.paramsSerializer = params => {
      return qs.stringify(params);
    }
  }
  

  // PROBLEM API
  // POST
  async postProblem(problemData, tagNames = null) {
    const endpoint = `${this.baseURL}problems`;
    problemData['tagNames'] = tagNames;
    const response = await axios.post(
      endpoint,
      JSON.stringify(problemData),
      {
        headers: this.headers,
      }
    );
    return handleResponse(response);
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
      tagIds: tagIds,
      getDeleted: getDeleted,
      problemSetId: problemSetId,
      platformName: platformName,
      rating: rating,
      difficulty: difficulty,
      title: title,
    };
    const response = await axios.get(url, {
      headers: this.headers,
      params: params,
    });
    console.log("response", response);
    return handleResponse(response);
  }

  // GET {id}
  async getProblem(id) {
    const endpoint = `${this.baseURL}problems/${id}`;
    const response = await axios.get(endpoint, {
      headers: this.headers,
    });
    return handleResponse(response);
  }

  // DELETE
  async deleteProblem(id, soft = true) {
    const endpoint = `${this.baseURL}problems/${id}`;
    const params = {
      soft: soft,
    };
    const response = await axios.delete(endpoint, {
      headers: this.headers,
      params: params,
    });
    return handleResponse(response);
  }

  // PROBLEM SET API
  // POST
  async postProblemSet(problemSetData) {
    const endpoint = `${this.baseURL}problem-sets`;
    const response = await axios.post(endpoint, JSON.stringify(problemSetData), {
      headers: this.headers,
    });
    return handleResponse(response);
  }

  // GET
  async getProblemSets({ tagIds = null, getDeleted = false }) {
    const endpoint = `${this.baseURL}problem-sets`;
    console.log("this.baseURL", this.baseURL);
    const params = {
      tagIds: tagIds,
      getDeleted: getDeleted,
    };
    const response = await axios.get(endpoint, {
      headers: this.headers,
      params: params,
    });
    return handleResponse(response);
  }

  // GET {id}
  async getProblemSet(id) {
    const endpoint = `${this.baseURL}problem-sets/${id}`;
    const response = await axios.get(endpoint, {
      headers: this.headers,
    });
    return handleResponse(response);
  }

  // DELETE
  async deleteProblemSet(id, soft = true) {
    const endpoint = `${this.baseURL}problem-sets/${id}`;
    const params = {
      soft: soft,
    };
    const response = await axios.delete(endpoint, {
      headers: this.headers,
      params: params,
    });
    return handleResponse(response);
  }
}

function handleResponse (response) {
  var data = null;
    if (response.status === 204) {
      console.log("Successfully hard deleted");
    } else if (response.status < 400) {
      console.log("Successful");
      console.log("Response:", JSON.stringify(response.data, null, 4));
      data = response.data;
    } else {
      console.log(`Failed. Status code: ${response.status}`);
      console.log("Response:", response.statusText);
    }
    return data;
  }


export default MyCotService;
