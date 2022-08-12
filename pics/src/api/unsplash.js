import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID kduC508uOJCSOAUr83uMzXpb5MK2-VURk268on246FU',
  },
});