import Header from "../components/Header";
import Feed from "../components/Feed";
import Footer from "../components/Footer";

export default function Home() {
  return (
        <div className="m-0 p-0 box-border flex flex-col h-screen">
        <Header/>
        <Feed />
        <Footer />
        </div>
  );
}
