import NavBar from "./Nav";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <NavBar />
      <section className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Welcome to our About page. Here you can learn more about our mission, values, and the team behind the scenes.
        </p>
      </section>
      <Footer />
    </>
  );
}
