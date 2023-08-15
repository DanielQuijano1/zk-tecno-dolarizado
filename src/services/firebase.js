
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYyjDa7X4GgI-moZRP6KriSIgdnf6VHBI",
    authDomain: "zk-tecno.firebaseapp.com",
    projectId: "zk-tecno",
    storageBucket: "zk-tecno.appspot.com",
    messagingSenderId: "707234185639",
    appId: "1:707234185639:web:0d3cb92d07df575a6d3682"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function obtenerProductos() {
    const productosRefrencia = collection(db, "productos");
    const snapshot = await getDocs(productosRefrencia)
    const productos = snapshot.docs.map((elem) => {
        let producto = elem.data()
        producto.id = elem.id;
        return producto;
    })
    return(productos)
}

export async function obtenerProducto(id){
    const productosRefrencia = collection(db, "productos");
    const docReferencia = doc(productosRefrencia, id)
    const snapshot = await getDoc(docReferencia);
    return snapshot.data()
}

export default db