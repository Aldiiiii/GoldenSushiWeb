import IngredientsModal from "./IngredientsModal";
import CreateModal from "./CreateModal";
import EditModal from "./EditModal";
import {useDispatch} from "react-redux"
import {actDeleteCategory, actDeleteItem} from "../stores/actions/actionCreators";

export default function Table({ item, columns, i, category, categories }) {
  const dispatch = useDispatch()

  const deleteItem = (itemId) => {
    dispatch(actDeleteItem(itemId))
  };
  const deleteCategory = (categoryId) => {
    dispatch(actDeleteCategory(categoryId))
  };

  return (
    <>
      <tr>
        <td className="align-middle" scope="row">
          {i + 1}
        </td>
        {columns.map((col) =>
          item ? (
            <td className="align-middle" key={col}>
              {col === "imgUrl" ? (
                <img
                  src={item[col]}
                  className="rounded-0"
                  style={{ height: "50px", width: "auto" }}
                  alt=""
                />
              ) : col === "Category" ? (
                item.Category.name
              ) : col === "User" ? (
                item.User.username
              ) : (
                item[col]
              )}
            </td>
          ) : (
            <td className="align-middle" key={col}>
              {category[col]}
            </td>
          )
        )}
        {item && (
          <td className="align-middle">
            <IngredientsModal
              ingredients={item.Ingredients}
              imgUrl={item.imgUrl}
            />
          </td>
        )}
        <td className="align-middle">
          {item && <EditModal item={item} categories={categories} />}
          {item ? (
            <a
              onClick={() => deleteItem(item.id)}
              className="d-none d-sm-inline-block btn btn-sm text-danger shadow-sm"
            >
              Delete
            </a>
          ) : (
            <a
              onClick={() => deleteCategory(category.id)}
              className="d-none d-sm-inline-block btn btn-sm text-danger shadow-sm"
            >
              Delete
            </a>
          )}
        </td>
      </tr>
    </>
  );
}
