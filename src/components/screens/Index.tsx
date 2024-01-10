import { useEffect, useState } from 'react';
import { Head } from '~/components/shared/Head';
import { getDatabase, ref, child, get } from 'firebase/database';
import Situation from '../interface/Situation';
import Dropdown from '../interface/Dropdown';

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
        <Dropdown label="Situation" />
        <Dropdown label="Order by" />
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
          <thead className="bg-gray-400 text-white">
            <tr>
              <th className="border p-3 w-0 text-center">
                <input type="checkbox" name="selectAll" id="selectAll" />
              </th>
              <th className="border p-3 text-center w-[50%]">Name</th>
              <th className="border p-3 text-center">Price</th>
              <th className="border p-3 text-center w-[15%]">Situation</th>
            </tr>
          </thead>

          <tbody className="[&>*:nth-child(odd)]:bg-gray-200">
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td className="border p-2 w-0 text-center">
                    <input type="checkbox" name={product.name} id={product.name} />
                  </td>
                  <td className="border p-2 text-center w-[50%]">{product.name}</td>
                  <td className="border p-2 text-center">$ {product.price}</td>
                  <td className="border p-2 text-center w-[15%]">
                    <Situation content={product.situation} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Index;
