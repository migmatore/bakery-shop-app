import apiClient from "../api";
import { GetProducts } from "../types/Products";
import { AxiosResponse } from "axios";

interface I {
    data: GetProducts[]
}

class ProductsDataService {
    getAll(): Promise<AxiosResponse<GetProducts[]>> {
        return apiClient.get<GetProducts[]>("/products");
    }
}

export default new ProductsDataService();