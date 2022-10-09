import API from "/axios"


export async function getAlbums() {
  // body...

  try {
    let response = await API.get("album")
    let data = response.data
    return data
  } catch (error) {
    if (error.response) throw error.response.status
    throw error
  }
}

export async function getAlbum(id) {
  // body...

  try {
    let response = await API.get("album/" + id +"/")
    let data = response.data
    return data
  } catch (error) {
    if (error.response) throw error.response.status
    throw error
  }
}

export async function getCovers(id) {

  try {
    let response = await API.get(`album/${id}/covers/`)
    return response.data
  } catch (error) {
    if (error.response) throw error.response.status
    throw error
  }
}

export async function newAlbum(title, description) {

  let form = {
    title,
    description
  }

  try {
    let response = await API.post("album/", form)
    return response.data
  } catch (error) {
    if (error.response) throw error.response.status
    throw error
  }
}

export default {
  getAlbums,
  getAlbum,
  getCovers
}
