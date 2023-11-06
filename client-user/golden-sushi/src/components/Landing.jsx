import CardMenus from "./CardMenus";
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchItemsStart } from "../stores/actions/actionCreators"

export default function Landing() {
    const items = useSelector((state) => state.items.data)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(fetchItemsStart())
    },[])
  return (
    <>
      <main>
        {/* <!-- Products --> */}
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
        <h1 id="ourMenu" className="text-center mb-5">Our Menus</h1>
            {/* <!-- cards --> */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{display:"flex", justifyContent: "center", gap:"25px"}}>
              {items.map(item => (
                <CardMenus key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="text-body-secondary py-5">
        <div className="container">
          <p className="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p className="mb-1">
            <strong>Golden Sushi</strong>
          </p>
          <p className="mb-0">
            This website using HTML, CSS, Javascript, Express and React <br />
            My Github profile is
            <a href="https://github.com/Aldiiiii" target="_blank">
              here
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}
