import { EventoControllerApi } from "../../api";
import { useQuery } from "@tanstack/react-query";

function DashboardPage() {
  const { data } = useQuery({
    queryKey: ["events"],
    queryFn: () =>
      new EventoControllerApi().findAll4({}, { page: 0, size: 10 }),
  });

  // useEffect(() => {
  //   new EventoControllerApi()
  //     .findAll4({}, { page: 0, size: 10 })
  //     .then((response) => console.log(response.data));
  // }, []);

  return <div>{JSON.stringify(data?.data)}</div>;
}

export default DashboardPage;
