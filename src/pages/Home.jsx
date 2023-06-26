import Container from "../components/general/Container";
import HomeLayout from "../components/home/HomeLayout";
import NavBar from "../components/navigation/NavBar";

function HomePage() {
  return (
    <>
      <NavBar />
      <div className=" h-screen">
        <HomeLayout />
      </div>
    </>
  );
}
export default HomePage;
