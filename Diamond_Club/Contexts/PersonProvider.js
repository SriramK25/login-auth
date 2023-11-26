import { createContext, useState } from "react";
import { useDiamondClubData } from "../DiamondClub";

//CREATING CONTEXT
const PersonContext = createContext();

function PersonProvider({ children }) {
  const [page, setPage] = useState(1);
  const { usersData, status } = useDiamondClubData();
  const reducedUsers = status === "ready" ? computeUsers() : [];
  let totalPage = status === "ready" ? Math.ceil(reducedUsers.length / 10) : 1;
  const NUM_DATA_PER_PAGE = 10;

  let paginatedUsers = reducedUsers.slice(
    (page - 1) * NUM_DATA_PER_PAGE,
    (page - 1) * NUM_DATA_PER_PAGE + NUM_DATA_PER_PAGE
  );

  // console.log(paginatedUsers);

  function computeUsers() {
    const clone = [...usersData];
    // HAS UNIQUE USERS
    const result = [];

    // HAS SAME LENGTH AS THE CLONE ARRAY(INCLUDING DUPLICATES)
    const compute = clone.map((data) => {
      let obj = {
        "Your Name": data["Your Name"],
        "Total Appearance": 0,
        "User Choice": [],
      };

      clone.forEach((record) => {
        if (record["Your Name"] === data["Your Name"]) {
          obj = { ...obj, "Total Appearance": obj["Total Appearance"] + 1 };
          obj["User Choice"].push(record["Referral or Round Out?"]);
        }
      });
      return obj;
    });

    // PUSHING UNIQUE USERS TO RESULT ARRAY
    compute.forEach((record) => {
      if (!result.some((data) => data["Your Name"] === record["Your Name"])) {
        result.push(record);
      }
    });
    return result;
  }

  return (
    <PersonContext.Provider
      value={{ paginatedUsers, status, page, setPage, totalPage }}
    >
      {children}
    </PersonContext.Provider>
  );
}

export { PersonProvider, PersonContext };
