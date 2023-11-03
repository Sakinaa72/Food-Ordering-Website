import Featured from "./Components/Featured";
import TopNav from "./Components/TopNav";
import Delivery from "./Components/Delivery";
import TopPicks from "./Components/TopPicks";
import Meal from "./Components/Meal";
import Categories from "./Components/Categories";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <Newsletter />
      <Footer />
      {/* <AiOutlineMenu size={25} /> */}
    </div>
  );
}

export default App;
