import Navbar from "../components/Navbar";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
const Index = () => {
  return (
    <>
      <Navbar />
      <div className="">Hello World</div>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(Index);
