
const Header = () => {
  return (
    <div className="h-14 w-full bg-white shadow p-4 flex justify-between">
      <h4 className="text-xl text-red-500 font-bold">Foodlify</h4>

      <nav>
        <ul className="flex gap-2 font-normal">
          <li>Home</li>
          <li>Restaurants</li>
          <li>Cuisines</li>
          <li>Top Rated</li>
          <li>Coupons</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
