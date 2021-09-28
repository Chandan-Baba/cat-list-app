import axios from "axios";
import { deepCamelCaseKeys, deepSnakeCaseKeys } from "../utils/utils";

async function CatService(pageNumber: Number, pageSize: Number): Promise<any> {
  let url = "http://localhost:10000/v1/cats?sort_by=id";
  url = url + "&page_number=" + pageNumber;
  url = url + "&page_size=" + pageSize;

  const { data } = await axios.get(url);

  const result = deepCamelCaseKeys(data);
  return result;
}
export default {
  CatService,
};
