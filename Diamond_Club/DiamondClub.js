import { useEffect, useState } from "react";

function useDiamondClubData() {
  const [usersData, setUsersData] = useState(null);
  const [status, setStatus] = useState("fresh");

  useEffect(function () {
    async function fetchUserData() {
      setStatus("loading");
      try {
        const response = await fetch(
          `https://script.google.com/macros/s/AKfycbwIwn8HSFf-UEMGQD238dPVzXiFhotsw6PnvAAA4Mc5KSRbcBKmHSfAFMqUsWYRs0gn/exec?action=getUsers`
        );

        if (!response.ok) {
          throw new Error("no response");
        }

        const data = await response.json();

        if (!data.length || !data) {
          throw new Error("something went wrong");
        }

        setUsersData(data);
        setStatus("ready");
      } catch (error) {
        setStatus("unknown");
        error.message === "no response" && setStatus(error.message);
        error.message === "something went wrong" && setStatus(error.message);
      }
    }

    fetchUserData();
  }, []);
  return { usersData, status };
}

export { useDiamondClubData };
