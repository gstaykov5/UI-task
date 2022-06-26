const fetchNews = async () => {
  const req = await fetch('data.json');
    const res = await req.json();
    
    return res;
}

const newsService = {
  fetchNews
}

export default newsService;