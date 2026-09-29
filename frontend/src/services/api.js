const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

export const DEMO_MODE =
  import.meta.env.VITE_DEMO_MODE !== "false";

async function request(endpoint, options = {}) {
  const isFormData = options.body instanceof FormData;

  const headers = {
    ...(options.headers || {}),
  };

  // Only set JSON Content-Type for normal JSON requests.
  // For FormData, the browser sets multipart/form-data automatically.
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let message = "Something went wrong.";

    try {
      const error = await response.json();

      message =
        error?.detail ||
        error?.message ||
        message;
    } catch {
      // Ignore JSON parsing errors
    }

    throw new Error(message);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export const api = {
  get(endpoint) {
    return request(endpoint);
  },

  post(endpoint, data) {
    return request(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  put(endpoint, data) {
    return request(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },

  delete(endpoint) {
    return request(endpoint, {
      method: "DELETE",
    });
  },

  upload(endpoint, formData) {
    return request(endpoint, {
      method: "POST",
      body: formData,
    });
  },
};

export { API_URL };