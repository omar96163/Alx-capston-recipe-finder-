import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Get() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["meals"],
    queryFn: () =>
      axios
        .get("https://www.themealdb.com/api/json/v1/1/search.php?s")
        .then((res) => res.data),
  });

  return [isLoading, isError, data, error];
}

export default Get;
