import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct = ({ updateProductCategory }) => {
    const router = useRouter();

    const selectCategory = (e, category) => {
        e.preventDefault();
        // removeSearchTerm();
        updateProductCategory(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category, //
            },
        });
    };
    return (
        <>
            <ul>
                <li onClick={(e) => selectCategory(e, "")}>
                    <a>
                         <img
                            src="/assets/imgs/theme/icons/all-cat.png"
                            alt=""
                        />
                       All
                    </a>
                </li>
                <li onClick={(e) => selectCategory(e, "")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/crop-p.png"
                            alt=""
                        />
                        Crop Products
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "crop-product")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/spices.png"
                            alt=""
                        />
                        Spices
                    </a>
                    <span className=""></span>
                </li>
                <li onClick={(e) => selectCategory(e, "spices")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/fruits.png"
                            alt=""
                        />
                        Fruits
                    </a>
                    <span className=""></span>
                </li>
                <li onClick={(e) => selectCategory(e, "fruits")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/Vegetables Icons.png"
                            alt=""
                        />
                        Vegetables{" "}
                    </a>
                    <span className=""></span>
                </li>            
                <li onClick={(e) => selectCategory(e, "plant-seedlings")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/plantseed.png"
                            alt=""
                        />
                        Plant Seedlings
                    </a>
                    <span className=""></span>
                </li>
                <li onClick={(e) => selectCategory(e, "fertilizers")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/fertilizer.png"
                            alt=""
                        />
                        Fertilizers
                    </a>
                    <span className=""></span>
                </li>
                <li onClick={(e) => selectCategory(e, "others")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/Others Icon.png"
                            alt=""
                        />
                        Others{" "}
                    </a>
                    <span className=""></span>
                </li>               
            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct);
