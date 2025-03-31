import Button from '../components/Button.jsx';

function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        Craving pizza?
        <br />
        <span className="text-yellow-500">Freshly baked, delivered fast.</span>
      </h1>

      <Button to="/menu" type="primary">
        Order Now
      </Button>
    </div>
  );
}

export default Home;
