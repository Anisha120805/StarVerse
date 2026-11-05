const API_BASE_URL = "http://localhost:5000/api";

// ================================
// GET ACTOR
// ================================

export async function getActor() {
  const response = await fetch(`${API_BASE_URL}/actor`);

  if (!response.ok) {
    throw new Error("Failed to fetch actor data");
  }

  return await response.json();
}

// ================================
// GET MOVIES
// ================================

export async function getMovies() {
  const response = await fetch(`${API_BASE_URL}/movies`);

  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  return await response.json();
}

// ================================
// GET CAREER
// ================================

export async function getCareer() {
  const response = await fetch(`${API_BASE_URL}/career`);

  if (!response.ok) {
    throw new Error("Failed to fetch career data");
  }

  return await response.json();
}

// ================================
// GET AWARDS
// ================================

export async function getAwards() {
  const response = await fetch(`${API_BASE_URL}/awards`);

  if (!response.ok) {
    throw new Error("Failed to fetch awards");
  }

  return await response.json();
}

// ================================
// GET GALLERY
// ================================

export async function getGallery() {
  const response = await fetch(`${API_BASE_URL}/gallery`);

  if (!response.ok) {
    throw new Error("Failed to fetch gallery");
  }

  return await response.json();
}