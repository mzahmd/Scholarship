import axios from "axios";
import { axiosConfig } from "@/services/config";

export default axios.create(axiosConfig);
