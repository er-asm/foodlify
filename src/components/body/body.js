import { useEffect, useState } from "react";
import Shimmer from "../shimmer/shimmer";

const Body = () => {
  // const dataList = {
  //   categories: [
  //     {
  //       idCategory: "1",
  //       strCategory: "Beef",
  //       strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
  //       strCategoryDescription:
  //         "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
  //     },
  //     {
  //       idCategory: "2",
  //       strCategory: "Chicken",
  //       strCategoryThumb:
  //         "https://www.themealdb.com/images/category/chicken.png",
  //       strCategoryDescription:
  //         "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.",
  //     },
  //     {
  //       idCategory: "3",
  //       strCategory: "Dessert",
  //       strCategoryThumb:
  //         "https://www.themealdb.com/images/category/dessert.png",
  //       strCategoryDescription:
  //         "Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.",
  //     },
  //     {
  //       idCategory: "4",
  //       strCategory: "Lamb",
  //       strCategoryThumb: "https://www.themealdb.com/images/category/lamb.png",
  //       strCategoryDescription:
  //         "Lamb, hogget, and mutton are the meat of domestic sheep (species Ovis aries) at different ages.\r\n\r\nA sheep in its first year is called a lamb, and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside the USA this is also a term for the living animal. The meat of an adult sheep is mutton, a term only used for the meat, not the living animals. The term mutton is almost always used to refer to goat meat in the Indian subcontinent.\r\n\r\n",
  //     },
  //   ],
  // };

  //hook - api calls, timer, subscription based
  //first render(default data) -> work/apicall -> data -> render(data)
  //1. if no dependency array -> calls after each render
  //2. if empty dep[] -> called only once
  //3. if anything in arr[count]-> whenever count changes useEffect renders ui
  // let [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("rendered effect" + count);
  //   setCount(count);
  // }, [count]);

  let [dataList, setDataList] = useState([]);
  let [categoryList, setCategoryList] = useState([]);

  // let [cartList, setCartList] = useState(0);

  const topRated = () => {
    //arr = [];
    const data = categoryList?.filter((category) => category.idCategory > 5); //7
    console.log(data);
    setCategoryList(data); //7
  };
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();
      console.log(data);
      setCategoryList(data?.categories); //14
      setDataList(data?.categories); //14
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [categoryList]);

  if (categoryList?.length === 0) {
    return <Shimmer />;
  }
  //console.log(data);
  // };
  // let arr = dataList.categories;
  // console.log(arr);
  return (
    <div className="mt-6 mb-3">
      <div className="w-3/4 rounded-lg shadow p-3 bg-red-100 m-auto ">
        <button
          className="p-1 bg-red-500 text-white rounded-md"
          onClick={topRated}
        >
          Top rated category
        </button>
        <button
          className="p-1 bg-slate-500 text-white rounded-md"
          onClick={() => {
            setCategoryList(dataList);
          }}
        >
          Reset
        </button>
        {/* <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add to cart
        </button>
        <h1>{count}</h1> */}
      </div>
      <div className="flex bg-gray-50 flex-wrap justify-around gap-1  p-4 ">
        {categoryList?.map((category) => {
          return (
            <div
              className="h-full w-52 bg-white hover:bg-orange-100 p-4 cursor-pointer mt-5"
              key={category.idCategory}
            >
              <img
                className="bg-gray-200 h-full w-full rounded-lg"
                id={category.idCategory}
                src={category.strCategoryThumb}
                alt="cat-img"
              />
              <h4 className="font-bold">{category.strCategory}</h4>
              <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                {category.strCategoryDescription}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
