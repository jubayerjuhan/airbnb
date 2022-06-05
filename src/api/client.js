import axios from 'axios'

export const rapidApiClient = axios.create({
  baseURL: 'https://airbnb19.p.rapidapi.com/api/v1',
  headers: {
    'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com',
    'X-RapidAPI-Key': 'f31dd70fb4mshb2781fdf89d320ap19f0a8jsnf1dc0aba9c9d'
  }
})



