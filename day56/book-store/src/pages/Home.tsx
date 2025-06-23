import Header from "../components/common/Header";
import { formatnumber } from "../utils/format";

const COUNT = 10000;

function Home() {
  return (
    <>
      <Header />
      <div>book store</div>
      <div>count: {formatnumber(COUNT)}</div>
    </>
  )
}

export default Home;