import IngredientsModal from "./IngredientsModal";

export default function Table({ item, columns, i, category }) {
  return (
    <>
      <tr>
        <td className="align-middle" scope="row">{i + 1}</td>
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
              ) : (
                item[col]
              )}
            </td>
          ) : (
            <td className="align-middle" key={col}>{category[col]}</td>
          )
        )}
        {item && (
          <td className="align-middle">
            <IngredientsModal />
          </td>
        )}
        <td className="align-middle">
          {item && (
            <a className="d-none d-sm-inline-block btn btn-sm text-primary shadow-sm">
              Edit
            </a>
          )}
          <a className="d-none d-sm-inline-block btn btn-sm text-danger shadow-sm">
            Delete
          </a>
        </td>
      </tr>
    </>
  );
}
