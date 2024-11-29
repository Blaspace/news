import { Router } from "express";
import home from "../components/home.js";
import business from "../components/business.js";
import arts from "../components/arts.js";
import culture from "../components/culture.js";
import earth from "../components/earth.js";
import inovations from "../components/inovation.js";
import travel from "../components/travels.js";

const route = Router();

route.get("/home", home);

route.get("/business", business);

route.get("/arts", arts);

route.get("/culture", culture);

route.get("/earth", earth);

route.get("/innovation", inovations);

route.get("/travel", travel);

export default route;
