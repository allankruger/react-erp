import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { Head } from '~/components/shared/Head';
import { useFirestore } from '~/lib/firebase';

type Product = {
  id: string;
  description: string;
  measure: string;
  name: string;
  price: number;
  situation: string;
};

function Index() {
  const { state } = useAuthState();
  const [product, setProduct] = useState<Array<Product>>([]);
  const firestore = useFirestore();

  useEffect(() => {
    async function fetchData() {
      const productCollection = collection(firestore, 'product');
      const productQuery = query(productCollection);
      const querySnapshot = await getDocs(productQuery);
      const fetchedData: Array<Product> = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push({ id: doc.id, ...doc.data() } as Product);
      });
      setProduct(fetchedData);
    }

    fetchData();
  }, []);

  return (
    <>
      <Head title="TOP PAGE" />
      <div className="hero min-h-screen"></div>
    </>
  );
}

export default Index;
