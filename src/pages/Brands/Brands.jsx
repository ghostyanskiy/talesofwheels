import { useSelector } from "react-redux";
import "./Brands.scss";
import { getBrands } from "../../features/brandSlice/brandSlice";

export default function Brands() {
  const brands = useSelector(getBrands);

  return (
    <div className="Brands">
      <div className="Brands__cards">
        {brands.map((brand) => (
          <div
            style={{
              animation: "fadeUp .8s",
              background: `url(${brand.image})`,
              backgroundSize: "cover",
            }}
            key={brand.id}
          >
            <h2>{brand.brand}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
