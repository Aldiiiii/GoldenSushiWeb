export default function Table({item, i}) {
  return (
    <>
      <tr>
        <th scope="row">{i + 1}</th>
        <td>{item.name}</td>
        <td>{item.categoryId}</td>
        <td>{item.price}</td>
        <td>{item.authorId}</td>
        <td>{item.imgUrl}</td>
        <td></td>
        <td></td>
      </tr>
    </>
  );
}
