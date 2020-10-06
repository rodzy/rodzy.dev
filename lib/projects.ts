import { fetcher } from "../utils/fetcher";
import useSWR from "swr";

const url = "https://api.github.com/users/rodzy/repos";

export default function getAllrojects() {
    return useSWR(url, fetcher);
}
