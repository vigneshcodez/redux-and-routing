import { useSelector,useDispatch } from "react-redux";
import { add,decrease } from "../slices/productslice";

const HomePage = () => {
  let mydata = useSelector((store) => store.product);
  let dispatch = useDispatch()
  return (
    <>
      <div>HomePage</div>
      <br />
      <p>
        {mydata.map((x) => (
          <div key={x.id}>
            <p>{x.name}</p>
            <p>{x.qty}</p>
            <button onClick={()=>dispatch(add(x.id))}>add</button>
            <button onClick={()=>dispatch(decrease(x.id))}>minus</button>
          </div>
         
        ))}
      </p>
    </>
  );
};

export default HomePage;
