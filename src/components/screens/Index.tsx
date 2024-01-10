import { useEffect, useState } from 'react';
import { Head } from '~/components/shared/Head';
import { useFirestore } from '~/lib/firebase';
import { getDatabase, ref, child, get } from 'firebase/database';

type Product = {
  id: string;
  description: string;
  measure: string;
  name: string;
  price: number;
  situation: string;
};

function Index() {
  const [products, setProducts] = useState<Array<Product>>([]);
  const firestore = useFirestore();

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `products/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProducts(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Head title="TOP PAGE" />
      {/* Header */}
      <div className="flex gap-4 px-80 mt-8">
        <input className="border px-4 py-2" type="text" placeholder="Product name" />
        <label htmlFor="situation">Situation</label>
        <select className="border px-4 py-2" name="situation" id="situation">
          <option value="all">All</option>
        </select>
        <label htmlFor="orderBy">Order By</label>
        <select className="border px-4 py-2" name="orderBy" id="orderBy">
          <option value="name">Name</option>
          <option value="createdAt">Creation Date</option>
          <option value="price">Price</option>
        </select>
        <button className="bg-slate-500 px-4 py-2 text-white hover:bg-slate-700 rounded-lg transition">Filter</button>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4 px-80 mt-8">
        <button className="bg-green-800 px-4 py-2 text-white hover:bg-green-950 rounded-lg transition">
          New Product
        </button>
        <button className="bg-red-700 px-4 py-2 text-white hover:bg-red-900 rounded-lg transition">Delete</button>
      </div>

      {/* Table */}

      <div className="flex justify-between gap-4 px-80 mt-8">
        <table className="border w-[100%]">
          <thead>
            <tr>
              <th className="border p-3 w-0 text-center">
                <input type="checkbox" name="selectAll" id="selectAll" />
              </th>
              <th className="border p-3 text-center w-[50%]">Name</th>
              <th className="border p-3 text-center">Price</th>
              <th className="border p-3 text-center w-[15%]">Situation</th>
            </tr>
          </thead>

          {products.map((product) => {
            return (
              <tbody key={product.id}>
                <tr>
                  <td className="border p-2 w-0 text-center">
                    <input type="checkbox" name="shirt" id="shirt" />
                  </td>
                  <td className="border p-2 text-center w-[50%]">{product.name}</td>
                  <td className="border p-2 text-center">{product.price}</td>
                  <td className="border p-2 text-center w-[15%]">{product.situation}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Index;
