function Banner() {
  return (
    <div className="bg-black text-white py-2 px-4 text-center text-sm relative">
      <p>
        Sign up and get 20% off to your first order.{"{"}" "{"}"}
        <a href="#" className="underline font-medium">
          Sign Up Now
        </a>
      </p>
      <button className="absolute right-4 top-2 text-white">×</button>
    </div>
  );
}
export default Banner;
