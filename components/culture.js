import * as cheerio from 'cheerio'
import axios from "axios";

const culture = async (req, res) => {
  const items = [];
  const link = `https://www.bbc.com/culture`;

  const response = await axios(link);
  const html = response.data;
  const $ = cheerio.load(html);
  $(".gILusN", html).each((index, value) => {
    const url = $(value).attr("href");
    const text = $(value).find('p').text();
    const date = $(value).find('.efYorw').text();
    const location = $(value).find('.bHkTZK').text();
    const headline = $(value).find('h2').text();
    const img = $(value).find(".efFcac").attr("srcset");
    items.push({
      url: `${url}`,
      text,
      location,
      headline,
      date,
      img: `${img}`,
      title: "Home",
      heading: "Guardian News",
    });
  });
  items.forEach((v) => {
    if (v.url.slice(0, 1) === "/") return (v.url = link + v.url);
  });
  res.render("culture", { items: items.filter((v)=> v.img !== "undefined") });
};


export default culture;

